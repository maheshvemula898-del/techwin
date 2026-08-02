import React, { createContext, useContext, useState, useEffect } from "react";
import { 
  WebsiteContent, 
  getWebsiteContent, 
  saveWebsiteContent,
  initialServices,
  initialIndustries,
  initialResources,
  initialBenefits,
  initialPartnerBenefits,
  initialLeadership,
  initialPageTexts
} from "@/data/pageContentData";
import { seoData as initialSeoData } from "@/data/seoData";
import { db, isFirebaseConfigured } from "@/lib/firebase";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { getAdminApiHeaders } from "@/lib/adminApi";

// Define default initial fallback state
export const defaultFallbackContent: WebsiteContent = {
  services: initialServices,
  industries: initialIndustries,
  resources: initialResources,
  benefits: initialBenefits,
  partnerBenefits: initialPartnerBenefits,
  leadership: initialLeadership,
  products: [
    {
      id: "prod-1",
      iconName: "Briefcase",
      title: "Contract Staffing Solutions",
      subtitle: "FLEXIBLE IT TALENT",
      description: "Scale your technical capacity with on-demand contract developers, QA specialists, and system administrators on flexible project terms.",
      features: [
        "Access to niche developers",
        "Compliant payroll management",
        "Flexible scale-up & scale-down",
        "Fully managed HR compliance"
      ],
      color: "bg-accent",
      image: "/contract-staffing.webp",
      link: "/products/contract-staffing"
    },
    {
      id: "prod-2",
      iconName: "Users",
      title: "Direct Hire Placement",
      subtitle: "PERMANENT TALENT ACQUISITION",
      description: "Secure the top 5% of technical professionals for full-time employee positions through our extensive sourcing and rigorous screening pipeline.",
      features: [
        "In-depth technical vetting",
        "Dedicated sourcing pipelines",
        "Cultural fit alignment checks",
        "Risk-free hiring guarantee"
      ],
      color: "bg-sprinklr-purple",
      image: "/direct-hire.webp",
      link: "/products/direct-hire"
    },
    {
      id: "prod-3",
      iconName: "Layers",
      title: "Dedicated Tech Squads",
      subtitle: "COHESIVE ENGINEERING TEAMS",
      description: "Deploy fully functional, cross-functional engineering teams consisting of developers, product managers, and testers to execute your roadmap.",
      features: [
        "Agile team synchronization",
        "Senior tech lead oversight",
        "Fast integration with workflows",
        "Established development practices"
      ],
      color: "bg-sprinklr-green",
      image: "/development-squads.webp",
      link: "/products/executive-search"
    }
  ],
  homeFeatures: [
    {
      id: "hf-1",
      iconName: "CloudCog",
      title: "DevOps & Platform Engineering",
      description: "Accelerate secure software delivery with cloud-native platforms, CI/CD automation, infrastructure as code, and SRE.",
      link: "/services/devops-platform-engineering",
      linkText: "Explore DevOps",
      underlineColor: "bg-sprinklr-blue"
    },
    {
      id: "hf-2",
      iconName: "ShieldCheck",
      title: "Cybersecurity Services",
      description: "Protect identities, applications, infrastructure, and data with zero-trust security and always-on threat defense.",
      link: "/services/cybersecurity",
      linkText: "Explore Cybersecurity",
      underlineColor: "bg-sprinklr-green"
    },
    {
      id: "hf-3",
      iconName: "Cloud",
      title: "Cloud Transformation",
      description: "Modernize applications and infrastructure across AWS, Azure, and Google Cloud with security and FinOps built in.",
      link: "/services/cloud-transformation",
      linkText: "Explore Cloud",
      underlineColor: "bg-sprinklr-purple"
    },
    {
      id: "hf-4",
      iconName: "Code2",
      title: "Software Engineering",
      description: "Build and modernize resilient web, mobile, API, and enterprise applications using cloud-native engineering practices.",
      link: "/services/software-engineering",
      linkText: "Explore Engineering",
      underlineColor: "bg-accent"
    },
    {
      id: "hf-5",
      iconName: "BrainCircuit",
      title: "Data, AI & Analytics",
      description: "Create trusted data platforms and apply analytics, automation, machine learning, and generative AI responsibly.",
      link: "/services/data-ai-analytics",
      linkText: "Explore Data & AI",
      underlineColor: "bg-[#1e6fd9]"
    }
  ],
  homeReasons: [
    {
      id: "hr-1",
      iconName: "Trophy",
      title: "Global Delivery",
      description: "Integrated teams and standardized delivery practices support complex enterprise programs across regions."
    },
    {
      id: "hr-2",
      iconName: "Building2",
      title: "Engineering Depth",
      description: "Specialists across cloud, security, software, data, infrastructure, and enterprise platforms solve complex challenges."
    },
    {
      id: "hr-3",
      iconName: "Users",
      title: "Security by Design",
      description: "Cyber resilience, privacy, governance, and compliance are embedded throughout our delivery lifecycle."
    },
    {
      id: "hr-4",
      iconName: "Zap",
      title: "Outcome-Led Transformation",
      description: "Clear roadmaps, automation, and measurable service objectives translate technology investment into business value."
    }
  ],
  servicesWhyChoose: [
    {
      id: "wc-1",
      iconName: "CheckCircle",
      title: "Proven Matching Algorithm",
      description: "We map candidate portfolios directly to team requirements, assuring accurate fit ratios and retention."
    },
    {
      id: "wc-2",
      iconName: "Clock",
      title: "Fast Placement Cycle",
      description: "Receive qualified candidate profiles within 48 hours, keeping your engineering plans on schedule."
    },
    {
      id: "wc-3",
      iconName: "ShieldCheck",
      title: "Risk-Free Hiring Guarantee",
      description: "Every placement includes a replacement guarantee period, ensuring minimal hire risk for your team."
    }
  ],
  contactMethods: [
    {
      id: "cm-2",
      iconName: "Mail",
      title: "Email support",
      description: "Send us your queries any time.",
      contact: "info@techwensys.com",
      action: "Email us",
      link: "mailto:info@techwensys.com",
      color: "bg-[#1e6fd9]/10 text-[#1e6fd9]"
    },
    {
      id: "cm-3",
      iconName: "Phone",
      title: "Primary phone",
      description: "Call our business team during working hours.",
      contact: "+91 98669 78808",
      action: "Call now",
      link: "tel:+919866978808",
      color: "bg-[#1e6fd9]/10 text-[#1e6fd9]"
    },
    {
      id: "cm-4",
      iconName: "Phone",
      title: "Alternate phone",
      description: "An additional line for business enquiries.",
      contact: "+91 94944 32286",
      action: "Call now",
      link: "tel:+919494432286",
      color: "bg-[#1e6fd9]/10 text-[#1e6fd9]"
    },
    {
      id: "cm-5",
      iconName: "MessageCircle",
      title: "WhatsApp",
      description: "Message our team for a quick response.",
      contact: "+91 94944 32286",
      action: "Chat now",
      link: "https://wa.me/919494432286",
      color: "bg-[#1e6fd9]/10 text-[#1e6fd9]"
    },
    {
      id: "cm-6",
      iconName: "MapPin",
      title: "Visit office",
      description: "Our doors are open Monday to Friday.",
      contact: "New Delhi, India",
      action: "Directions",
      link: "https://www.google.com/maps/search/?api=1&query=130%2C+4th+Floor%2C+Sant+Nagar%2C+East+of+Kailash%2C+New+Delhi+110065",
      color: "bg-[#1e6fd9]/10 text-[#1e6fd9]"
    }
  ],
  pageTexts: initialPageTexts,
  customPages: [],
  seoData: initialSeoData,
  branding: {
    companyName: "Techwin Systems Pvt Limited",
    brandName: "Techwin Systems",
    domain: "techwensys.com",
    twitterHandle: "Techwin Systems",
    logoUrl: "",
    faviconUrl: "/favicon.png",
    previewImageUrl: "/hero-preview.png"
  }
};

const mergeWithCurrentBrand = (source?: Partial<WebsiteContent>): WebsiteContent => ({
  ...defaultFallbackContent,
  ...(source || {}),
  services: defaultFallbackContent.services,
  industries: defaultFallbackContent.industries,
  homeFeatures: defaultFallbackContent.homeFeatures,
  homeReasons: defaultFallbackContent.homeReasons,
  contactMethods: defaultFallbackContent.contactMethods,
  pageTexts: {
    ...(source?.pageTexts || {}),
    ...defaultFallbackContent.pageTexts,
  },
  seoData: defaultFallbackContent.seoData,
  branding: defaultFallbackContent.branding,
});

interface DataContextType {
  content: WebsiteContent;
  loading: boolean;
  error: string | null;
  isFirebase: boolean;
  updateContent: (newContent: WebsiteContent) => Promise<boolean>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<WebsiteContent>(defaultFallbackContent);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Initialize and fetch content
  useEffect(() => {
    const fetchContent = async () => {
      try {
        // Try calling the Express Backend API first
        try {
          const apiRes = await fetch("/api/content");
          if (apiRes.ok) {
            const apiData = await apiRes.json();
            const merged = mergeWithCurrentBrand(apiData);
            setContent(merged);
            setLoading(false);
            console.log("Website content loaded successfully from Express Backend API.");
            return;
          }
        } catch (apiErr) {
          console.warn("Express Backend API not available, trying Firebase/LocalStorage fallback...", apiErr);
        }

        if (isFirebaseConfigured) {
          const docRef = doc(db, "content", "website_data");
          const docSnap = await getDoc(docRef);
          
          if (docSnap.exists()) {
            const data = docSnap.data() as WebsiteContent;
            const merged = mergeWithCurrentBrand(data);
            setContent(merged);
          } else {
            await setDoc(docRef, defaultFallbackContent);
            setContent(defaultFallbackContent);
          }
        } else {
          // Fall back to LocalStorage
          const localData = getWebsiteContent();
          const merged = mergeWithCurrentBrand(localData);
          setContent(merged);
        }
      } catch (err: any) {
        console.error("Error fetching content:", err);
        setError(err.message || "Failed to fetch website content.");
        setContent(defaultFallbackContent);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  const updateContent = async (newContent: WebsiteContent): Promise<boolean> => {
    try {
      let backendSuccess = false;
      // Try updating via Express Backend API
      try {
        const apiRes = await fetch("/api/content", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...getAdminApiHeaders(),
          },
          body: JSON.stringify(newContent),
        });
        if (apiRes.ok) {
          backendSuccess = true;
        }
      } catch (apiErr) {
        console.warn("Failed to update via Express Backend API:", apiErr);
      }

      // Also persist to Firebase/LocalStorage as secondary
      if (isFirebaseConfigured) {
        try {
          const docRef = doc(db, "content", "website_data");
          await setDoc(docRef, newContent);
        } catch (firebaseErr: any) {
          console.warn("Failed to persist to Firestore:", firebaseErr);
          // If the Express backend succeeded (local server development), allow it to pass
          if (!backendSuccess) {
            throw firebaseErr;
          }
        }
      } else {
        saveWebsiteContent(newContent);
      }

      setContent(mergeWithCurrentBrand(newContent));
      return true;
    } catch (err: any) {
      console.error("Error updating content:", err);
      return false;
    }
  };

  return (
    <DataContext.Provider value={{ content, loading, error, isFirebase: isFirebaseConfigured, updateContent }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
