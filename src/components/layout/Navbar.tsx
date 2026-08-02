import { useState } from "react";
import { Link, useLocation } from "@/lib/router";
import { Menu, X, Globe2, ChevronDown } from "lucide-react";

const links = [
  ["Industries", "/industries"],
  ["Insights", "/resources"],
  ["Careers", "/careers"],
  ["Partners", "/partners"],
  ["Who We Are", "/who-we-are"],
  ["Solutions", "/products"],
];

const serviceLinks = [
  ["DevOps & Platform Engineering", "/services/devops-platform-engineering", "Automate delivery and build reliable cloud platforms."],
  ["Cybersecurity Services", "/services/cybersecurity", "Protect identities, applications, infrastructure, and data."],
  ["Cloud Transformation", "/services/cloud-transformation", "Modernize across AWS, Azure, and Google Cloud."],
  ["Software Engineering", "/services/software-engineering", "Build secure digital products and enterprise applications."],
  ["Data, AI & Analytics", "/services/data-ai-analytics", "Turn trusted data into intelligence and automation."],
  ["Managed IT Services", "/services/managed-it-services", "Operate critical technology with 24/7 support."],
  ["Enterprise Applications", "/services/enterprise-applications", "Transform core operations with ERP, CRM, and integration."],
  ["Digital Workplace", "/services/digital-workplace-infrastructure", "Create secure, connected employee experiences."],
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="site-navbar fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-[#061a3a]/95 text-white backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-[1512px] items-center px-5 lg:px-10">
        <Link to="/" aria-label="Techwin Systems home" className="brand-logo-shell mr-auto">
          <img src="/assets/techwen-systems-logo.jpeg" alt="Techwin Systems Private Limited" fetchPriority="high" decoding="async" className="brand-logo brand-logo-header" />
        </Link>
        <nav className="hidden items-center gap-7 xl:flex">
          <div className="group relative h-[72px] flex items-center">
            <Link to="/services" className={`inline-flex items-center gap-1 text-[13px] transition-colors ${location.pathname.startsWith("/services") ? "text-[#315f98]" : "text-neutral-800"}`}>
              Services <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
            </Link>
            <div className="invisible absolute left-0 top-full w-[760px] translate-y-2 border border-neutral-200 bg-white p-7 opacity-0 shadow-[0_18px_50px_rgba(0,0,0,.12)] transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              <div className="mb-5 flex items-end justify-between border-b border-neutral-200 pb-4">
                <div><p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#315f98]">Technology capabilities</p><p className="mt-1 text-lg font-medium text-neutral-950">Services built for enterprise transformation</p></div>
                <Link to="/services" className="text-xs font-semibold text-[#315f98]">View all services →</Link>
              </div>
              <div className="grid grid-cols-2 gap-x-8 gap-y-1">
                {serviceLinks.map(([label, href, description]) => <Link key={href} to={href} className="group/item border-b border-neutral-100 py-3"><span className="block text-sm font-semibold text-neutral-900 group-hover/item:text-[#315f98]">{label}</span><span className="mt-1 block text-[11px] leading-4 text-neutral-500">{description}</span></Link>)}
              </div>
            </div>
          </div>
          {links.map(([label, href]) => (
            <Link key={href} to={href} className={`text-[13px] transition-colors hover:text-[#66b2ff] ${location.pathname === href ? "text-[#66b2ff]" : "text-white/85"}`}>
              {label}
            </Link>
          ))}
        </nav>
        <div className="ml-8 hidden items-center gap-5 border-l border-white/15 pl-7 lg:flex">
          <a href="mailto:info@techwensys.com" className="text-[12px] text-white/80 hover:text-[#66b2ff]">info@techwensys.com</a>
          <button className="flex items-center gap-1.5 text-[12px] text-white/80 hover:text-[#66b2ff]"><Globe2 className="h-4 w-4" />US/EN<ChevronDown className="h-3 w-3" /></button>
        </div>
        <Link to="/contact" className="mobile-header-contact ml-3 inline-flex items-center justify-center rounded-full border border-black bg-white px-4 py-2 text-[12px] font-semibold text-black shadow-[0_6px_18px_rgba(21,35,52,.08)] transition-transform active:scale-95 lg:hidden">
          Contact
        </Link>
        <button aria-label="Toggle navigation" aria-expanded={open} onClick={() => { setOpen(!open); if (open) setServicesOpen(false); }} className="ml-5 p-2 transition-transform active:scale-90 xl:hidden">
          <span className="block transition-transform duration-200">{open ? <X /> : <Menu />}</span>
        </button>
      </div>
      {open && (
        <nav className="animate-in slide-in-from-top-2 overflow-hidden border-t border-white/10 bg-[#0b2f68] shadow-[0_24px_45px_rgba(0,0,0,.24)] duration-300 xl:hidden">
          <div className="grid px-5 py-4">
            <button type="button" aria-expanded={servicesOpen} onClick={() => setServicesOpen(!servicesOpen)} className="flex items-center justify-between border-b border-white/10 py-3 text-left text-sm transition-transform active:scale-[.985]"><span>Services</span><span className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}><ChevronDown className="h-4 w-4" /></span></button>
            {servicesOpen && <div className="animate-in fade-in slide-in-from-top-1 grid overflow-hidden border-b border-white/10 bg-white/5 px-4 duration-200"><div className="grid py-2">{serviceLinks.map(([label, href]) => <div key={href}><Link to={href} onClick={() => { setOpen(false); setServicesOpen(false); }} className="block py-2.5 text-xs text-white/75 transition-colors hover:text-white">{label}</Link></div>)}</div></div>}
            {links.map(([label, href]) => <div key={href}><Link to={href} onClick={() => { setOpen(false); setServicesOpen(false); }} className="block border-b border-white/10 py-3 text-sm text-white/85">{label}</Link></div>)}
            <a href="mailto:info@techwensys.com" className="pt-4 text-sm text-[#66b2ff]">info@techwensys.com</a>
          </div>
        </nav>
      )}
    </header>
  );
};
