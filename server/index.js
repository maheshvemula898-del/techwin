import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { timingSafeEqual } from 'crypto';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3009;
app.disable('x-powered-by');

// Request logging middleware
app.use((req, res, next) => {
  console.log(`[SERVER] Received request: ${req.method} ${req.url}`);
  next();
});

// Cybersecurity middleware: Set security headers
app.use(helmet({
  crossOriginResourcePolicy: { policy: "cross-origin" }
}));

// Restrict CORS origins (accept localhost:8080/8081 or custom FRONTEND_URL environment variable)
const allowedOrigins = [
  'http://localhost:8080',
  'http://127.0.0.1:8080',
  'http://localhost:8081',
  'http://127.0.0.1:8081',
  'https://techwensys.com',
  'https://www.techwensys.com'
];
if (process.env.FRONTEND_URL) {
  allowedOrigins.push(process.env.FRONTEND_URL);
}

app.use(cors({
  origin: (origin, callback) => {
    // allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true
}));

app.use(bodyParser.json({ limit: '100kb', strict: true }));

// Cybersecurity rate-limiting: Limit lead submissions to avoid database DoS attacks
const leadSubmissionLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 50, // Limit each IP to 50 requests per window
  message: { error: 'Too many requests from this IP, please try again after 15 minutes.' }
});

app.post('/api/leads', leadSubmissionLimiter);

const adminLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 120,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many administrative requests. Please try again later.' }
});

const safeEqual = (provided, expected) => {
  const providedBuffer = Buffer.from(provided || '');
  const expectedBuffer = Buffer.from(expected || '');
  return providedBuffer.length === expectedBuffer.length && timingSafeEqual(providedBuffer, expectedBuffer);
};

const requireAdmin = (req, res, next) => {
  const expectedToken = process.env.ADMIN_API_TOKEN;
  if (!expectedToken || expectedToken.length < 32) {
    return res.status(503).json({ error: 'Administrative API is not configured.' });
  }

  const authorization = req.get('authorization') || '';
  const providedToken = authorization.startsWith('Bearer ') ? authorization.slice(7).trim() : '';
  if (!safeEqual(providedToken, expectedToken)) {
    return res.status(401).json({ error: 'Unauthorized.' });
  }

  next();
};

const cleanText = (value, maxLength) => typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

// Helper function to read database files
const readJSONFile = (filePath) => {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    return null;
  }
};

// Helper function to write to database files
const writeJSONFile = (filePath, content) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(content, null, 2), 'utf8');
    return true;
  } catch (error) {
    console.error(`Error writing to file ${filePath}:`, error);
    return false;
  }
};

// Database file paths
const dataDirectory = process.env.DATA_DIR ? path.resolve(process.env.DATA_DIR) : path.join(__dirname, 'data');
const contentFilePath = path.join(dataDirectory, 'website_data.json');
const leadsFilePath = path.join(dataDirectory, 'leads.json');

// Ensure database files exist
if (!fs.existsSync(contentFilePath)) {
  fs.mkdirSync(dataDirectory, { recursive: true });
  fs.writeFileSync(contentFilePath, '{}');
}
if (!fs.existsSync(leadsFilePath)) {
  fs.mkdirSync(dataDirectory, { recursive: true });
  fs.writeFileSync(leadsFilePath, '[]');
}

// ---------------- API Routes ----------------

// Get website content
app.get('/api/content', (req, res) => {
  const content = readJSONFile(contentFilePath);
  if (!content) {
    return res.status(500).json({ error: 'Failed to read website content' });
  }
  res.json(content);
});

// Update website content
app.post('/api/content', adminLimiter, requireAdmin, (req, res) => {
  const updatedContent = req.body;
  if (!updatedContent || Object.keys(updatedContent).length === 0) {
    return res.status(400).json({ error: 'Content body cannot be empty' });
  }
  const success = writeJSONFile(contentFilePath, updatedContent);
  if (!success) {
    return res.status(500).json({ error: 'Failed to save website content' });
  }
  res.json({ message: 'Content saved successfully', content: updatedContent });
});

// Get leads
app.get('/api/leads', adminLimiter, requireAdmin, (req, res) => {
  const leads = readJSONFile(leadsFilePath);
  if (!leads) {
    return res.status(500).json({ error: 'Failed to fetch leads database' });
  }
  res.json(leads);
});

// Submit a new lead (contact/careers forms/training popup)
app.post('/api/leads', (req, res) => {
  const name = cleanText(req.body?.name, 120);
  const email = cleanText(req.body?.email, 254).toLowerCase();
  const company = cleanText(req.body?.company, 160);
  const source = cleanText(req.body?.source, 80);
  const message = cleanText(req.body?.message, 5000);
  
  if (!name || !isEmail(email)) {
    return res.status(400).json({ error: 'A valid name and email are required.' });
  }

  const leads = readJSONFile(leadsFilePath) || [];
  
  const newLead = {
    id: `lead-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    name,
    email,
    company: company || 'N/A',
    source: source || 'Contact Form',
    message: message || '',
    status: 'New',
    date: new Date().toISOString().replace('T', ' ').substring(0, 16)
  };

  leads.unshift(newLead);
  
  const success = writeJSONFile(leadsFilePath, leads);
  if (!success) {
    return res.status(500).json({ error: 'Failed to save lead entry' });
  }

  res.status(201).json({ message: 'Lead recorded successfully', lead: newLead });
});

// Update lead status
app.put('/api/leads/:id', adminLimiter, requireAdmin, (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  if (!['New', 'Reviewed', 'Archived'].includes(status)) {
    return res.status(400).json({ error: 'A valid status is required.' });
  }

  const leads = readJSONFile(leadsFilePath) || [];
  const leadIndex = leads.findIndex(l => l.id === id);

  if (leadIndex === -1) {
    return res.status(404).json({ error: 'Lead not found' });
  }

  leads[leadIndex].status = status;
  
  const success = writeJSONFile(leadsFilePath, leads);
  if (!success) {
    return res.status(500).json({ error: 'Failed to update lead status' });
  }

  res.json({ message: 'Lead status updated successfully', lead: leads[leadIndex] });
});

// Delete lead
app.delete('/api/leads/:id', adminLimiter, requireAdmin, (req, res) => {
  const { id } = req.params;
  const leads = readJSONFile(leadsFilePath) || [];
  
  const filteredLeads = leads.filter(l => l.id !== id);

  if (leads.length === filteredLeads.length) {
    return res.status(404).json({ error: 'Lead not found' });
  }

  const success = writeJSONFile(leadsFilePath, filteredLeads);
  if (!success) {
    return res.status(500).json({ error: 'Failed to delete lead' });
  }

  res.json({ message: 'Lead entry deleted successfully' });
});

// Start the server
if (process.argv[1] && path.resolve(process.argv[1]) === __filename) {
  app.listen(PORT, () => {
    console.log(`Server is running in localhost on http://localhost:${PORT}`);
  });
}

export { app };
