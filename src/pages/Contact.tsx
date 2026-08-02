import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { SEO } from "@/components/SEO";
import { useSEO } from "@/hooks/useSEO";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { getLucideIcon } from "@/lib/icons";
import { useData } from "@/context/DataContext";
import { Link } from "@/lib/router";
import { Clock, Mail } from "lucide-react";
import { submitToFormspree } from "@/lib/formspree";

const Contact = () => {
  const seo = useSEO();
  const { toast } = useToast();
  const { content } = useData();

  const contactText = content.pageTexts?.contact || {};
  const methods = content.contactMethods || [];

  const heroLabel = contactText.heroLabel || "GET IN TOUCH";
  const heroTitle = contactText.heroTitle || "Contact Us";
  const heroDescription = contactText.heroDescription || "Get in touch with our team to discuss how we can help transform your business.";
  
  const sectionTitle = contactText.sectionTitle || "Contact Us";
  const sectionDescription = contactText.sectionDescription !== undefined ? contactText.sectionDescription : "Fill out the form below and we'll get back to you within 24 hours.";
  
  const addressTitle = contactText.ctaTitle || "Where to find us";
  const addressDescription = contactText.ctaDescription || "130, 4th Floor, Sant Nagar, East of Kailash, New Delhi - 110065";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    jobTitle: "",
    country: "",
    interest: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
 
    try {
      await submitToFormspree({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        jobTitle: formData.jobTitle,
        country: formData.country,
        interest: formData.interest,
        message: formData.message,
        source: "Techwin Systems contact form",
        _subject: `New website enquiry from ${formData.name}`,
      });
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", company: "", jobTitle: "", country: "", interest: "", message: "" });
    } catch (error) {
      console.error("Formspree submission failed:", error);
      toast({
        title: "Form temporarily unavailable",
        description: "Please contact us directly at info@techwensys.com.",
        variant: "destructive",
      });
    }
  };

  const getIconComponent = (iconName: string) => {
    return getLucideIcon(iconName);
  };

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-neutral-900 selection:bg-[#2583ff] selection:text-white">
      <SEO {...seo} />
      <Navbar />

      <PageHero 
        title={heroTitle}
        description={heroDescription}
        label={heroLabel}
        breadcrumbs={[
          { label: "Contact" }
        ]}
        blueBackground={true}
        fullBackground={true}
        textBgWhite={true}
        backgroundImage="/contact-hero-support-wide.jpg"
        backgroundPosition="right top"
        backgroundSize="cover"
        mobileBackgroundImage="/contact-hero-support.jpg"
        mobileBackgroundPosition="76% center"
        extraPadding={false}
        compact={true}
      />

      {/* Form & Address Split Section */}
      <section className="py-12 md:py-16 bg-[#f5f5f5]">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 text-left">
            
            {/* Left Column: Form Card (First) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h2 className="text-2xl font-light text-neutral-900 tracking-tight">{sectionTitle}</h2>
                {sectionDescription && <p className="text-xs text-neutral-650 mt-2">{sectionDescription}</p>}
              </div>
              
              <form
                onSubmit={handleSubmit}
                className="bg-white border border-neutral-200 p-4 sm:p-6 md:p-8 space-y-4 md:space-y-6 shadow-sm rounded-none"
              >
                <div className="space-y-1.5">
                  <Label htmlFor="name" className="text-xs font-semibold text-neutral-800">
                    Full name <span className="text-red-600">*</span>
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="rounded-none border-neutral-300 h-9 sm:h-10 text-xs sm:text-sm text-neutral-900 focus-visible:ring-[#1e6fd9] focus-visible:border-[#1e6fd9] focus-visible:ring-1"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="email" className="text-xs font-semibold text-neutral-800">
                    Business email <span className="text-red-600">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="rounded-none border-neutral-300 h-9 sm:h-10 text-xs sm:text-sm text-neutral-900 focus-visible:ring-[#1e6fd9] focus-visible:border-[#1e6fd9] focus-visible:ring-1"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-1.5">
                    <Label htmlFor="company" className="text-xs font-semibold text-neutral-800">
                      Company <span className="text-red-600">*</span>
                    </Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      required
                      className="rounded-none border-neutral-300 h-9 sm:h-10 text-xs sm:text-sm text-neutral-900 focus-visible:ring-[#1e6fd9] focus-visible:border-[#1e6fd9] focus-visible:ring-1"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="jobTitle" className="text-xs font-semibold text-neutral-800">
                      Job title
                    </Label>
                    <Input
                      id="jobTitle"
                      value={formData.jobTitle}
                      onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                      className="rounded-none border-neutral-300 h-9 sm:h-10 text-xs sm:text-sm text-neutral-900 focus-visible:ring-[#1e6fd9] focus-visible:border-[#1e6fd9] focus-visible:ring-1"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-1.5">
                    <Label htmlFor="country" className="text-xs font-semibold text-neutral-800">
                      Country/Region <span className="text-red-600">*</span>
                    </Label>
                    <Select
                      value={formData.country}
                      onValueChange={(value) => setFormData({ ...formData, country: value })}
                    >
                      <SelectTrigger className="rounded-none border-neutral-300 h-9 sm:h-10 text-xs sm:text-sm text-neutral-900 focus:ring-[#1e6fd9]">
                        <SelectValue placeholder="Select country/region" />
                      </SelectTrigger>
                      <SelectContent className="rounded-none">
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="de">Germany</SelectItem>
                        <SelectItem value="in">India</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="interest" className="text-xs font-semibold text-neutral-800">
                      Service Area
                    </Label>
                    <Select
                      value={formData.interest}
                      onValueChange={(value) => setFormData({ ...formData, interest: value })}
                    >
                      <SelectTrigger className="rounded-none border-neutral-300 h-9 sm:h-10 text-xs sm:text-sm text-neutral-900 focus:ring-[#1e6fd9]">
                        <SelectValue placeholder="Select service area" />
                      </SelectTrigger>
                      <SelectContent className="rounded-none">
                        <SelectItem value="devops">DevOps & Platform Engineering</SelectItem>
                        <SelectItem value="cybersecurity">Cybersecurity Services</SelectItem>
                        <SelectItem value="cloud">Cloud Transformation</SelectItem>
                        <SelectItem value="software">Software Engineering</SelectItem>
                        <SelectItem value="data-ai">Data, AI & Analytics</SelectItem>
                        <SelectItem value="managed-it">Managed IT Services</SelectItem>
                        <SelectItem value="career">Career / Job Opportunities</SelectItem>
                        <SelectItem value="other">Other Inquiry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="message" className="text-xs font-semibold text-neutral-800">
                    Describe your technology requirements or inquiry <span className="text-red-600">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={3}
                    placeholder="Tell us about your business goals, technology landscape, security priorities, or transformation timeline..."
                    className="rounded-none border-neutral-300 text-xs sm:text-sm text-neutral-900 focus-visible:ring-[#1e6fd9] focus-visible:border-[#1e6fd9] focus-visible:ring-1 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="rounded-none w-full h-10 sm:h-11 bg-[#1d1d1d] hover:bg-[#333333] text-white font-bold uppercase tracking-wider text-xs transition-colors duration-150"
                >
                  Submit request
                </Button>
              </form>
            </div>

            {/* Right Column: Contact Details, Addresses, & Support (Right Side) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Contact Information & Channels */}
              <div className="bg-white border border-neutral-200 p-6 md:p-8 space-y-6 shadow-sm rounded-none">
                <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider pb-3 border-b border-neutral-100">
                  Contact Channels
                </h3>
                <div className="space-y-6">
                  {/* Render dynamic contact methods (Email, Phone, etc.) */}
                  {methods.map((method, index) => {
                    const IconComponent = getIconComponent(method.iconName);
                    return (
                      <div key={method.title || index} className="flex gap-4 items-start">
                        <div className="text-[#1e6fd9] w-8 h-8 flex items-center justify-center bg-neutral-100 flex-shrink-0">
                          <IconComponent className="w-4 h-4" strokeWidth={1.5} />
                        </div>
                        <div className="space-y-1 text-left flex-1">
                          <h4 className="text-xs font-semibold text-neutral-900">{method.title}</h4>
                          <p className="text-[11px] text-neutral-600 leading-relaxed">{method.description}</p>
                          <div className="flex flex-wrap items-center gap-x-2 pt-1">
                            <span className="text-xs font-bold text-neutral-950">{method.contact}</span>
                            <a 
                              href={method.link || "#"}
                              className="text-xs font-bold text-[#1e6fd9] hover:text-[#195fc0] hover:underline"
                            >
                              {method.action || "Contact"} →
                            </a>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  {/* Fallback standard contact details if methods is empty */}
                  {methods.length === 0 && (
                    <>
                      <div className="flex gap-4 items-start">
                        <div className="text-[#1e6fd9] w-8 h-8 flex items-center justify-center bg-neutral-100 flex-shrink-0">
                          <Mail className="w-4 h-4" strokeWidth={1.5} />
                        </div>
                        <div className="space-y-1 text-left flex-1">
                          <h4 className="text-xs font-semibold text-neutral-900">Email Inquiry</h4>
                          <p className="text-[11px] text-neutral-600 leading-relaxed">Reach out directly for general business queries.</p>
                          <div className="flex items-center gap-x-2 pt-1">
                            <a 
                              href="mailto:info@techwensys.com"
                              className="text-xs font-bold text-[#1e6fd9] hover:text-[#195fc0] hover:underline"
                            >
                              info@techwensys.com →
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-4 items-start">
                        <div className="text-[#1e6fd9] w-8 h-8 flex items-center justify-center bg-neutral-100 flex-shrink-0">
                          <Clock className="w-4 h-4" strokeWidth={1.5} />
                        </div>
                        <div className="space-y-1 text-left flex-1">
                          <h4 className="text-xs font-semibold text-neutral-900">Business Hours</h4>
                          <p className="text-[11px] text-neutral-600 leading-relaxed">Monday - Friday</p>
                          <span className="text-xs font-bold text-neutral-950">9:00 AM - 6:00 PM EST</span>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Registered office and company information */}
              <div className="bg-white border border-neutral-200 p-6 md:p-8 space-y-4 shadow-sm rounded-none">
                <h3 className="text-sm font-semibold text-neutral-900">{addressTitle}</h3>
                <div className="border-t border-neutral-100 pt-4 space-y-2">
                  <h4 className="text-xs font-semibold text-neutral-800">Registered Office</h4>
                  <p className="text-xs text-neutral-900 font-bold">Techwin Systems Pvt Limited</p>
                  <address className="not-italic text-xs text-neutral-600 leading-relaxed space-y-1">
                    <span className="block">{addressDescription}</span>
                  </address>
                </div>
                <div className="grid grid-cols-2 gap-4 border-t border-neutral-100 pt-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">Established</p>
                    <p className="mt-1 text-xs font-semibold text-neutral-900">26 September 2011</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">Location</p>
                    <p className="mt-1 text-xs font-semibold text-neutral-900">New Delhi, India</p>
                  </div>
                </div>
                <div className="pt-2">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressDescription)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#1e6fd9] hover:text-[#195fc0] hover:underline uppercase tracking-wider"
                  >
                    <span>Get directions</span>
                    <span>→</span>
                  </a>
                </div>
              </div>

            </div>
            
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
