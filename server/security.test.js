import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';

const dataDirectory = await mkdtemp(path.join(tmpdir(), 'techwin-security-'));
process.env.DATA_DIR = dataDirectory;
process.env.ADMIN_API_TOKEN = 'test-admin-token-with-at-least-32-characters';

const { app } = await import('./index.js');
const server = app.listen(0);
const address = server.address();
const baseUrl = `http://127.0.0.1:${address.port}`;
const adminHeaders = { Authorization: `Bearer ${process.env.ADMIN_API_TOKEN}` };

test.after(async () => {
  await new Promise((resolve) => server.close(resolve));
  await rm(dataDirectory, { recursive: true, force: true });
});

test('administrative endpoints reject unauthenticated requests', async () => {
  const leadsResponse = await fetch(`${baseUrl}/api/leads`);
  assert.equal(leadsResponse.status, 401);

  const contentResponse = await fetch(`${baseUrl}/api/content`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: 'unauthorized change' })
  });
  assert.equal(contentResponse.status, 401);
});

test('administrative endpoints accept the configured bearer token', async () => {
  const contentResponse = await fetch(`${baseUrl}/api/content`, {
    method: 'POST',
    headers: { ...adminHeaders, 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: 'authorized change' })
  });
  assert.equal(contentResponse.status, 200);

  const leadsResponse = await fetch(`${baseUrl}/api/leads`, { headers: adminHeaders });
  assert.equal(leadsResponse.status, 200);
});

test('public lead submission validates input and remains available', async () => {
  const invalidResponse = await fetch(`${baseUrl}/api/leads`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'Test', email: 'not-an-email' })
  });
  assert.equal(invalidResponse.status, 400);

  const validResponse = await fetch(`${baseUrl}/api/leads`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'Test User', email: 'test@example.com', message: 'Hello' })
  });
  assert.equal(validResponse.status, 201);
});
