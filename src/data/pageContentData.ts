// Page Content Persistence Layer for IT Staffing & Recruiting
// This module defines the schemas and initial datasets for managing page content dynamically.

export interface ServiceItem {
  id: string;
  iconName: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  href: string;
}

export interface IndustryItem {
  id: string;
  iconName: string;
  title: string;
  description: string;
  color: string;
  slug: string;
  image: string;
  features?: string[];
}

export interface ResourceItem {
  id: string;
  iconName: string;
  title: string;
  description: string;
  link: string;
  color: string;
}

export interface BenefitItem {
  id: string;
  iconName: string;
  title: string;
  description: string;
}

export interface PartnerBenefitItem {
  id: string;
  iconName: string;
  title: string;
  description: string;
  color: string;
  link: string;
}

export interface LeadershipItem {
  id: string;
  name: string;
  role: string;
  description: string;
}

export interface PageTextConfig {
  heroTitle: string;
  heroDescription: string;
  heroLabel?: string;
  sectionTag?: string;
  sectionTitle?: string;
  sectionDescription?: string;
  ctaTitle?: string;
  ctaDescription?: string;
  ctaButtonText?: string;
  storyTitle?: string;
  storyParagraphs?: string[];
  cultureTitle?: string;
  cultureDescription?: string;
  principlesTitle?: string;
  principlesDescription?: string;
  stats?: { value: string; label: string }[];
}

export interface WebsiteContent {
  services: ServiceItem[];
  industries: IndustryItem[];
  resources: ResourceItem[];
  benefits: BenefitItem[];
  partnerBenefits: PartnerBenefitItem[];
  leadership: LeadershipItem[];
  seoData?: Record<string, { title: string; description: string; keywords: string; canonical?: string; structuredData?: object }>;
  products?: {
    id: string;
    iconName: string;
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    color: string;
    image: string;
    link: string;
  }[];
  homeFeatures?: {
    id: string;
    iconName: string;
    title: string;
    description: string;
    link: string;
    linkText: string;
    underlineColor: string;
  }[];
  homeReasons?: {
    id: string;
    iconName: string;
    title: string;
    description: string;
  }[];
  servicesWhyChoose?: {
    id: string;
    iconName: string;
    title: string;
    description: string;
  }[];
  contactMethods?: {
    id: string;
    iconName: string;
    title: string;
    description: string;
    contact: string;
    action: string;
    link: string;
    color: string;
  }[];
  customPages?: {
    id?: string;
    slug: string;
    title: string;
    description: string;
    sections: {
      id?: string;
      type: string;
      title?: string;
      subtitle?: string;
      content?: string;
      items?: { title: string; description: string; iconName?: string; link?: string }[];
    }[];
  }[];
  pageTexts: {
    services: PageTextConfig;
    industries: PageTextConfig;
    resources: PageTextConfig;
    careers: PageTextConfig;
    partners: PageTextConfig;
    whoWeAre: PageTextConfig;
    home?: {
      heroLabel?: string;
      heroTitle?: string;
      heroDescription?: string;
      sectionTitle?: string;
      whyChooseTitle?: string;
      whyChooseDescription?: string;
      ctaTitle?: string;
      ctaDescription?: string;
      ctaButtonText?: string;
    };
    productsPage?: {
      heroLabel?: string;
      heroTitle?: string;
      heroDescription?: string;
      ctaTitle?: string;
      ctaDescription?: string;
      ctaButtonText?: string;
    };
    contact?: {
      heroLabel?: string;
      heroTitle?: string;
      heroDescription?: string;
      sectionTitle?: string;
      sectionDescription?: string;
      ctaTitle?: string;
      ctaDescription?: string;
    };
  };
  branding?: {
    companyName: string;
    brandName: string;
    domain: string;
    twitterHandle?: string;
    logoUrl?: string;
    faviconUrl?: string;
    previewImageUrl?: string;
    email?: string;
  };
}

export const initialServices: ServiceItem[] = [
  {
    id: "ser-1",
    iconName: "CloudCog",
    title: "DevOps & Platform Engineering",
    description: "Modernize software delivery with cloud-native platforms, automated CI/CD, infrastructure as code, and site reliability engineering.",
    features: [
      "CI/CD Automation", "Kubernetes & Containers", "Infrastructure as Code", "SRE & Observability", "DevSecOps", "Platform Engineering"
    ],
    image: "/devops-recruiting.webp",
    href: "/services/devops-platform-engineering"
  },
  {
    id: "ser-2",
    iconName: "ShieldCheck",
    title: "Cybersecurity Services",
    description: "Protect critical systems, applications, identities, and data with enterprise security engineering and 24/7 threat defense.",
    features: [
      "Security Operations", "Cloud Security", "Zero Trust", "Vulnerability Management", "Penetration Testing", "Compliance & GRC"
    ],
    image: "/tech-vetting.webp",
    href: "/services/cybersecurity"
  },
  {
    id: "ser-3",
    iconName: "Cloud",
    title: "Cloud Transformation",
    description: "Design, migrate, and optimize secure cloud environments across AWS, Microsoft Azure, and Google Cloud.",
    features: [
      "Cloud Strategy", "Migration & Modernization", "Multi-Cloud Architecture", "FinOps", "Cloud Operations"
    ],
    image: "/global-eor.webp",
    href: "/services/cloud-transformation"
  },
  {
    id: "ser-4",
    iconName: "Code2",
    title: "Software Engineering",
    description: "Build resilient web, mobile, API, and enterprise applications using modern product engineering practices.",
    features: [
      "Custom Applications", "Web & Mobile", "API & Microservices", "Legacy Modernization", "Quality Engineering"
    ],
    image: "/software-recruitment.webp",
    href: "/services/software-engineering"
  },
  {
    id: "ser-5",
    iconName: "BrainCircuit",
    title: "Data, AI & Analytics",
    description: "Turn enterprise data into trusted intelligence with scalable data platforms, analytics, automation, and responsible AI.",
    features: [
      "Data Platforms", "Business Intelligence", "Machine Learning", "Generative AI", "Data Governance"
    ],
    image: "/talent-analytics.webp",
    href: "/services/data-ai-analytics"
  },
  {
    id: "ser-6",
    iconName: "ServerCog",
    title: "Managed IT Services",
    description: "Operate business-critical infrastructure and applications with proactive monitoring, automation, and enterprise support.",
    features: [
      "24/7 Monitoring", "Service Desk", "Infrastructure Operations", "Application Management", "ITSM Automation"
    ],
    image: "/offshore-staffing.webp",
    href: "/services/managed-it-services"
  },
  {
    id: "ser-7",
    iconName: "Workflow",
    title: "Enterprise Applications",
    description: "Transform core business operations through SAP, ERP, CRM, integration, and intelligent workflow solutions.",
    features: [
      "SAP Services", "ERP Modernization", "CRM Platforms", "System Integration", "Process Automation"
    ],
    image: "/development-squads.webp",
    href: "/services/enterprise-applications"
  },
  {
    id: "ser-8",
    iconName: "Network",
    title: "Digital Workplace & Infrastructure",
    description: "Create secure, connected, and productive workplaces with modern infrastructure, networking, collaboration, and endpoint services.",
    features: [
      "Network Modernization", "Endpoint Management", "Identity Services", "Collaboration Platforms", "Infrastructure Consulting"
    ],
    image: "/contract-staffing.webp",
    href: "/services/digital-workplace-infrastructure"
  }
];

export const initialIndustries: IndustryItem[] = [
  {
    id: "ind-1",
    title: "Technology & SaaS",
    description: "Modern cloud platforms, secure product engineering, intelligent operations, and scalable digital experiences for software-led businesses.",
    iconName: "Code",
    color: "bg-accent",
    slug: "software-saas",
    image: "/development-squads.webp",
    features: [
      "Cloud-Native Product Engineering",
      "SaaS Architecture & Modernization",
      "Scalable Platform Operations",
      "Digital Experience Engineering"
    ]
  },
  {
    id: "ind-2",
    title: "Banking & Financial Services",
    description: "Secure digital banking, payments modernization, regulatory technology, data platforms, and resilient financial infrastructure.",
    iconName: "DollarSign",
    color: "bg-sprinklr-purple",
    slug: "fintech-blockchain",
    image: "/talent-analytics.webp",
    features: [
      "Digital Banking Modernization",
      "Payments & Blockchain Platforms",
      "PCI-DSS Security & Compliance",
      "Real-Time Risk & Analytics"
    ]
  },
  {
    id: "ind-3",
    title: "Healthcare & Life Sciences",
    description: "Compliant cloud, interoperable health platforms, analytics, cybersecurity, and digital solutions designed around better outcomes.",
    iconName: "Heart",
    color: "bg-sprinklr-green",
    slug: "healthcare-biotech",
    image: "/tech-vetting.webp",
    features: [
      "HIPAA & GDPR-Aligned Platforms",
      "Bioinformatics & Applied AI",
      "EHR & Clinical Interoperability",
      "Secure Digital Health Architecture"
    ]
  },
  {
    id: "ind-4",
    title: "Manufacturing & Automotive",
    description: "Connected operations, intelligent factories, supply-chain visibility, predictive maintenance, and enterprise application modernization.",
    iconName: "Factory",
    color: "bg-accent",
    slug: "manufacturing-automotive",
    image: "/contract-staffing.webp",
    features: ["Smart Manufacturing", "Industrial IoT", "Supply Chain Platforms", "Operational Cybersecurity"]
  },
  {
    id: "ind-5",
    title: "Retail & Consumer",
    description: "Unified commerce, customer data, digital storefronts, intelligent fulfillment, and secure experiences across every channel.",
    iconName: "ShoppingBag",
    color: "bg-accent",
    slug: "retail-consumer",
    image: "/software-recruitment.webp",
    features: ["Unified Commerce", "Customer Analytics", "Digital Experience", "Supply Chain Optimization"]
  },
  {
    id: "ind-6",
    title: "Energy & Utilities",
    description: "Resilient critical infrastructure, field-service modernization, asset intelligence, cloud operations, and cyber risk management.",
    iconName: "Zap",
    color: "bg-accent",
    slug: "energy-utilities",
    image: "/global-eor.webp",
    features: ["Critical Infrastructure", "Asset Intelligence", "Field Operations", "Cyber Resilience"]
  },
  {
    id: "ind-7",
    title: "Telecommunications & Media",
    description: "Cloud-native networks, automated operations, digital platforms, data monetization, and compelling subscriber experiences.",
    iconName: "RadioTower",
    color: "bg-accent",
    slug: "telecom-media",
    image: "/devops-recruiting.webp",
    features: ["Network Cloud", "Operations Automation", "Digital Platforms", "Data Monetization"]
  },
  {
    id: "ind-8",
    title: "Public Sector & Education",
    description: "Accessible digital services, secure collaboration, modern data foundations, and efficient citizen and learner experiences.",
    iconName: "Landmark",
    color: "bg-accent",
    slug: "public-sector-education",
    image: "/offshore-staffing.webp",
    features: ["Digital Public Services", "Secure Cloud", "Data Modernization", "Workforce Enablement"]
  }
];

export const initialResources: ResourceItem[] = [
  {
    id: "res-1",
    iconName: "Book",
    title: "Documentation",
    description: "Comprehensive guides and documentation for our services and solutions.",
    link: "/resources/documentation",
    color: "bg-accent",
  },
  {
    id: "res-2",
    iconName: "Video",
    title: "Video Tutorials",
    description: "Step-by-step video tutorials to help you get started with our services.",
    link: "/resources/video-tutorials",
    color: "bg-sprinklr-green",
  },
  {
    id: "res-3",
    iconName: "FileText",
    title: "Whitepapers",
    description: "In-depth whitepapers on IT best practices and SAP implementation strategies.",
    link: "/resources/whitepapers",
    color: "bg-sprinklr-purple",
  },
  {
    id: "res-4",
    iconName: "Download",
    title: "Downloads",
    description: "Download resources, templates, and tools to support your projects.",
    link: "/resources/downloads",
    color: "bg-accent",
  },
  {
    id: "res-5",
    iconName: "HelpCircle",
    title: "FAQ",
    description: "Frequently asked questions about our services and how we can help you.",
    link: "/resources/faq",
    color: "bg-sprinklr-green",
  },
  {
    id: "res-6",
    iconName: "Code",
    title: "Developer Resources",
    description: "Resources for developers including APIs, SDKs, and integration guides.",
    link: "/resources/developer-resources",
    color: "bg-sprinklr-purple",
  },
  {
    id: "res-7",
    iconName: "GraduationCap",
    title: "Workshop Materials",
    description: "Workshop materials and resources for SAP modules and IT services.",
    link: "/resources/training-materials",
    color: "bg-accent",
  },
  {
    id: "res-8",
    iconName: "Users",
    title: "Workshop Classes",
    description: "Join our comprehensive SAP workshop classes led by industry experts.",
    link: "/resources/training-classes",
    color: "bg-sprinklr-green",
  },
];

export const initialBenefits: BenefitItem[] = [
  {
    id: "ben-1",
    iconName: "Calendar",
    title: "Flexible Work Culture",
    description: "Hybrid and remote working options that allow you to balance productivity with your personal life.",
  },
  {
    id: "ben-2",
    iconName: "Globe",
    title: "High-Impact Clients",
    description: "Work with fast-growing SaaS startups, established unicorn enterprises, and Fortune 500 tech leaders.",
  },
  {
    id: "ben-3",
    iconName: "TrendingUp",
    title: "Career Growth",
    description: "Structured career paths, commission structures, and ongoing training to fast-track your path to leadership.",
  },
];

export const initialPartnerBenefits: PartnerBenefitItem[] = [
  {
    id: "pb-1",
    iconName: "Handshake",
    title: "Technology Alliance",
    description: "Build joint cloud, cybersecurity, software, and enterprise transformation solutions with Techwin Systems.",
    color: "bg-blue-500",
    link: "/contact"
  },
  {
    id: "pb-2",
    iconName: "GraduationCap",
    title: "Co-Innovation Programs",
    description: "Combine industry expertise, platforms, and engineering capabilities to accelerate client innovation.",
    color: "bg-orange-500",
    link: "/services"
  },
  {
    id: "pb-3",
    iconName: "Zap",
    title: "Global Delivery Collaboration",
    description: "Extend enterprise delivery capacity through shared standards, specialized centers of excellence, and managed services.",
    color: "bg-green-500",
    link: "/services"
  }
];

export const initialLeadership: LeadershipItem[] = [
  {
    id: "lead-2",
    name: "Mike",
    role: "Director",
    description: "Experienced technology leader guiding global delivery, enterprise transformation, and strategic client partnerships."
  }
];

export const initialPageTexts: {
  services: PageTextConfig;
  industries: PageTextConfig;
  resources: PageTextConfig;
  careers: PageTextConfig;
  partners: PageTextConfig;
  whoWeAre: PageTextConfig;
  home?: {
    heroLabel?: string;
    heroTitle?: string;
    heroDescription?: string;
    sectionTitle?: string;
    whyChooseTitle?: string;
    whyChooseDescription?: string;
    ctaTitle?: string;
    ctaDescription?: string;
    ctaButtonText?: string;
  };
  productsPage?: {
    heroLabel?: string;
    heroTitle?: string;
    heroDescription?: string;
    ctaTitle?: string;
    ctaDescription?: string;
    ctaButtonText?: string;
  };
  contact?: {
    heroLabel?: string;
    heroTitle?: string;
    heroDescription?: string;
    sectionTitle?: string;
    sectionDescription?: string;
    ctaTitle?: string;
    ctaDescription?: string;
  };
} = {
  services: {
    heroTitle: "Enterprise IT Services Built for Global Scale",
    heroDescription: "We secure, modernize, and operate mission-critical technology across cloud, applications, data, and infrastructure.",
    heroLabel: "GLOBAL IT SERVICES",
    sectionTitle: "End-to-End Technology Capabilities",
    sectionDescription: "From DevOps and cybersecurity to cloud, AI, software engineering, and managed operations, we deliver measurable business outcomes.",
    stats: [
      { value: "24/7", label: "Global Operations" },
      { value: "10+", label: "Years of Experience" },
      { value: "8", label: "Core Service Lines" },
      { value: "99.9%", label: "Target Availability" }
    ]
  },
  industries: {
    heroTitle: "Technology Solutions Shaped by Industry Context",
    heroDescription: "We combine sector knowledge with cloud, cybersecurity, data, software, and managed operations to solve industry-specific challenges.",
    sectionTag: "Industries We Serve",
    sectionTitle: "Eight Industries. Integrated Technology Expertise."
  },
  resources: {
    heroTitle: "Resources",
    heroDescription: "Access helpful resources, documentation, and materials to support your business journey.",
    heroLabel: "RESOURCE CENTER",
    ctaButtonText: "Explore Resources",
    sectionTitle: "Everything You Need. One Resource Hub.",
    ctaTitle: "Need More Help?",
    ctaDescription: "Can't find what you're looking for? Contact our team for personalized assistance."
  },
  careers: {
    heroTitle: "Join Techwin Systems",
    heroDescription: "Join a global team engineering secure cloud platforms, digital products, intelligent data solutions, and resilient enterprise operations.",
    heroLabel: "CAREERS",
    sectionTag: "Why Techwin Systems?",
    sectionTitle: "Why Work at Techwin Systems?",
    sectionDescription: "Flexible Work Culture | High-Impact Clients | Career Growth",
    cultureTitle: "Open Opportunities",
    cultureDescription: "We welcome cloud engineers, cybersecurity specialists, software developers, data professionals, consultants, and technology leaders.",
    principlesTitle: "Learning & Culture",
    principlesDescription: "At Techwin Systems, we foster a learning-driven culture where you can work on complex international accounts, grow your career path organically, and enjoy excellent work-life balance."
  },
  partners: {
    heroTitle: "Partners",
    heroDescription: "Join our partner network and grow your business with Techwin Systems.",
    heroLabel: "PARTNER PROGRAM",
    ctaButtonText: "Become a Partner",
    sectionTag: "Partnership Opportunities",
    sectionTitle: "Grow Your Business With Us",
    sectionDescription: "Join our partner network and unlock new opportunities for growth and success."
  },
  whoWeAre: {
    heroTitle: "Who We Are",
    heroDescription: "Techwin Systems is a global IT services company helping enterprises modernize, secure, and operate their digital business.",
    heroLabel: "ABOUT US",
    sectionTag: "About Techwin Systems",
    storyTitle: "Our Mission & Vision",
    storyParagraphs: [
      "Techwin Systems delivers enterprise technology services across DevOps, cybersecurity, cloud, software engineering, data and AI, enterprise applications, and managed operations.",
      "Our Mission: Help organizations innovate faster, operate securely, and create lasting value through technology.",
      "Our Vision: Become a trusted global technology partner for the world's most ambitious enterprises."
    ],
    stats: [
      { value: "10+", label: "Years of Excellence" }
    ]
  },
  home: {
    heroLabel: "GLOBAL TECHNOLOGY SERVICES",
    heroTitle: "Engineering Secure Digital Enterprises",
    heroDescription: "Techwin Systems Pvt Limited delivers DevOps, cybersecurity, cloud, software engineering, data and AI, and managed technology solutions for global enterprises.",
    sectionTitle: "One global technology partner across cloud, security, applications, data, and operations.",
    whyChooseTitle: "Your Trusted Global Technology Partner",
    whyChooseDescription: "We combine engineering depth, security by design, automation, and global delivery to turn complex technology challenges into measurable outcomes.",
    ctaTitle: "Ready to transform your enterprise?",
    ctaDescription: "Partner with Techwin Systems to modernize platforms, strengthen cyber resilience, and accelerate innovation.",
    ctaButtonText: "Start Your Transformation"
  },
  productsPage: {
    heroLabel: "ENTERPRISE SOLUTIONS",
    heroTitle: "Technology Solutions for Modern Business",
    heroDescription: "Secure, scalable solutions designed around your business priorities, technology landscape, and transformation roadmap.",
    ctaTitle: "Ready to Get Started?",
    ctaDescription: "Talk with our technology consultants about your priorities and get a tailored transformation roadmap.",
    ctaButtonText: "Talk to Our Experts"
  },
  contact: {
    heroLabel: "GET IN TOUCH",
    heroTitle: "Let's Build What Comes Next",
    heroDescription: "Whether you are modernizing cloud platforms, strengthening cybersecurity, or building digital products, Techwin Systems is ready to deliver.",
    sectionTitle: "Get Started Today",
    sectionDescription: "",
    ctaTitle: "Company Information",
    ctaDescription: "130, 4th Floor, Sant Nagar, East of Kailash, New Delhi - 110065"
  }
};

const CONTENT_STORAGE_KEY = "Techwin Systems_enterprise_it_content_v2";

export const getWebsiteContent = (): WebsiteContent => {
  try {
    const raw = localStorage.getItem(CONTENT_STORAGE_KEY);
    if (!raw) {
      const defaultContent: WebsiteContent = {
        services: initialServices,
        industries: initialIndustries,
        resources: initialResources,
        benefits: initialBenefits,
        partnerBenefits: initialPartnerBenefits,
        leadership: initialLeadership,
        pageTexts: initialPageTexts
      };
      localStorage.setItem(CONTENT_STORAGE_KEY, JSON.stringify(defaultContent));
      return defaultContent;
    }
    const parsed = JSON.parse(raw);
    let dirty = false;

    // Migrate legacy consultation text to the current version.
    if (parsed.pageTexts?.contact?.sectionDescription === "Schedule a free consultation with our recruitment experts and discover how Techwin Systems can accelerate your hiring pipeline.") {
      parsed.pageTexts.contact.sectionDescription = "";
      dirty = true;
    }

    // Migrate old .svg or .jpg images to new .png images
    if (parsed.services) {
      parsed.services = parsed.services.map((s: any) => {
        if (s.image && (s.image.endsWith('.svg') || s.image.endsWith('.jpg'))) {
          s.image = s.image.replace(/\.(svg|jpg)$/, '.png');
          dirty = true;
        }
        return s;
      });
    }
    if (parsed.products) {
      parsed.products = parsed.products.map((p: any) => {
        if (p.image && (p.image.endsWith('.svg') || p.image.endsWith('.jpg'))) {
          p.image = p.image.replace(/\.(svg|jpg)$/, '.png');
          dirty = true;
        }
        return p;
      });
    }

    // Backward compatibility merge for pageTexts
    if (!parsed.pageTexts) {
      parsed.pageTexts = initialPageTexts;
      dirty = true;
    }
    if (dirty) {
      localStorage.setItem(CONTENT_STORAGE_KEY, JSON.stringify(parsed));
    }
    return parsed;
  } catch (e) {
    console.error("Failed to parse website content from localStorage", e);
    return {
      services: initialServices,
      industries: initialIndustries,
      resources: initialResources,
      benefits: initialBenefits,
      partnerBenefits: initialPartnerBenefits,
      leadership: initialLeadership,
      pageTexts: initialPageTexts
    };
  }
};

export const saveWebsiteContent = (content: WebsiteContent): void => {
  try {
    localStorage.setItem(CONTENT_STORAGE_KEY, JSON.stringify(content));
  } catch (e) {
    console.error("Failed to save website content to localStorage", e);
  }
};
