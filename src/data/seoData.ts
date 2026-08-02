export type SEOData = {
  title: string;
  description: string;
  keywords: string;
  canonical?: string;
  structuredData?: object;
};

const site = "https://techwensys.com";

export const seoData: Record<string, SEOData> = {
  "/": {
    title: "Enterprise IT Services, DevOps & Cybersecurity | Techwin Systems",
    description: "Techwin Systems provides enterprise DevOps, cybersecurity, cloud, software engineering, data and AI, and managed IT services for global organizations.",
    keywords: "enterprise IT services, DevOps, cybersecurity, cloud transformation, software engineering, data and AI, managed IT services",
    canonical: `${site}/`,
  },
  "/services": {
    title: "Enterprise Technology Services | Techwin Systems",
    description: "Explore DevOps, cybersecurity, cloud transformation, software engineering, data and AI, enterprise applications, infrastructure, and managed IT services.",
    keywords: "DevOps services, cybersecurity services, cloud consulting, software engineering, data analytics, managed IT services",
    canonical: `${site}/services`,
  },
  "/solutions": {
    title: "Enterprise Technology Services | Techwin Systems",
    description: "Explore integrated technology services that modernize platforms, strengthen security, accelerate software delivery, and improve operational resilience.",
    keywords: "enterprise technology solutions, digital transformation, cloud, cybersecurity, DevOps",
    canonical: `${site}/services`,
  },
  "/industries": {
    title: "Technology Solutions by Industry | Techwin Systems",
    description: "Industry-focused technology solutions for software, fintech, healthcare, manufacturing, retail, energy, telecom, media, education, and the public sector.",
    keywords: "industry technology consulting, fintech IT, healthcare technology, manufacturing IT, retail technology, public sector IT",
    canonical: `${site}/industries`,
  },
  "/resources": {
    title: "Enterprise Technology Insights & Blogs | Techwin Systems",
    description: "Read practical insights on cloud, cybersecurity, DevOps, software engineering, data, AI, enterprise applications, and digital operations.",
    keywords: "technology blog, DevOps insights, cybersecurity articles, cloud transformation, enterprise AI",
    canonical: `${site}/resources`,
  },
  "/products": {
    title: "Enterprise Technology Solutions | Techwin Systems",
    description: "Discover scalable technology solutions for secure cloud adoption, engineering modernization, intelligent operations, and enterprise transformation.",
    keywords: "enterprise technology solutions, cloud platforms, software modernization, intelligent operations",
    canonical: `${site}/products`,
  },
  "/partners": {
    title: "Technology Partnerships | Techwin Systems",
    description: "Build stronger transformation outcomes through the Techwin Systems ecosystem of cloud, platform, security, and enterprise technology partners.",
    keywords: "technology partners, cloud partnerships, security ecosystem, enterprise platforms",
    canonical: `${site}/partners`,
  },
  "/about": {
    title: "About Techwin Systems Pvt Limited",
    description: "Learn how Techwin Systems Pvt Limited helps organizations modernize technology, strengthen resilience, and deliver measurable digital outcomes.",
    keywords: "about Techwin Systems, enterprise IT company, technology consulting company",
    canonical: `${site}/about`,
  },
  "/who-we-are": {
    title: "Who We Are | Techwin Systems Pvt Limited",
    description: "Meet the enterprise technology company combining engineering, cloud, security, data, and operational expertise to solve complex business challenges.",
    keywords: "Techwin Systems Pvt Limited, global IT services, enterprise technology experts",
    canonical: `${site}/who-we-are`,
  },
  "/contact": {
    title: "Contact Techwin Systems",
    description: "Talk with Techwin Systems about DevOps, cybersecurity, cloud, software engineering, data and AI, or managed IT services.",
    keywords: "contact Techwin Systems, enterprise IT consultation, technology services inquiry",
    canonical: `${site}/contact`,
  },
  "/careers": {
    title: "Careers at Techwin Systems",
    description: "Explore opportunities to build secure, resilient, and intelligent technology solutions with Techwin Systems.",
    keywords: "Techwin Systems careers, technology jobs, cloud jobs, cybersecurity careers, DevOps careers",
    canonical: `${site}/careers`,
  },
  "/privacy": {
    title: "Privacy Policy | Techwin Systems",
    description: "Read the Techwin Systems privacy policy and learn how personal information is collected, used, and protected.",
    keywords: "Techwin Systems privacy policy, data protection",
    canonical: `${site}/privacy`,
  },
  "/terms": {
    title: "Terms of Service | Techwin Systems",
    description: "Review the terms that govern use of the Techwin Systems website and services.",
    keywords: "Techwin Systems terms of service, website terms",
    canonical: `${site}/terms`,
  },
  "/legal": {
    title: "Legal Information | Techwin Systems",
    description: "Review legal information and policies for the Techwin Systems website and services.",
    keywords: "Techwin Systems legal information, legal policies",
    canonical: `${site}/legal`,
  },
  "/cookies": {
    title: "Cookie Policy | Techwin Systems",
    description: "Learn how Techwin Systems uses cookies and how you can manage your preferences.",
    keywords: "Techwin Systems cookie policy, cookie preferences",
    canonical: `${site}/cookies`,
  },
};
