import { useState } from "react";
import { Link, useLocation } from "@/lib/router";
import { ArrowRight, ChevronDown, ChevronRight, Globe2, Menu, X } from "lucide-react";

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
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const location = useLocation();

  const closeMobileNavigation = () => {
    setOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="site-navbar fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-[#061a3a]/95 text-white backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-[1512px] items-center px-5 lg:px-10">
        <Link to="/" aria-label="Techwin Systems home" className="brand-logo-shell mr-auto">
          <img src="/assets/techwen-systems-logo.jpeg" alt="Techwin Systems Private Limited" fetchPriority="high" decoding="async" className="brand-logo brand-logo-header" />
        </Link>

        <nav className="hidden items-center gap-7 xl:flex">
          <div className="flex h-[72px] items-center">
            <button type="button" aria-expanded={desktopServicesOpen} onClick={() => setDesktopServicesOpen((current) => !current)} className={`inline-flex items-center gap-1 text-[13px] transition-colors ${location.pathname.startsWith("/services") ? "text-[#315f98]" : "text-neutral-800"}`}>
              Services <ChevronDown className={`h-3.5 w-3.5 transition-transform ${desktopServicesOpen ? "rotate-180" : ""}`} />
            </button>

            <div className={`services-mega-menu fixed left-1/2 top-[72px] w-[min(1080px,calc(100vw-48px))] -translate-x-1/2 overflow-hidden border border-[#d5dce5] bg-white shadow-[0_28px_70px_rgba(15,23,42,.22)] transition-all duration-200 ${desktopServicesOpen ? "visible translate-y-0 opacity-100" : "invisible translate-y-2 opacity-0"}`}>
              <div className="h-1 bg-gradient-to-r from-[#ffb000] via-[#f5c518] to-[#315f98]" />
              <div className="grid grid-cols-[280px_1fr]">
                <aside className="bg-[#182536] p-8">
                  <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#f5c518]">Technology services</p>
                  <h2 className="mt-5 text-2xl font-semibold leading-tight tracking-[-.025em] text-white">Build, secure and operate your digital enterprise.</h2>
                  <p className="mt-4 text-sm leading-6 text-slate-300">Practical engineering expertise across cloud, security, data, applications and managed operations.</p>
                  <Link to="/services" onClick={() => setDesktopServicesOpen(false)} className="services-mega-cta mt-8 inline-flex items-center gap-2 border-b border-[#f5c518] pb-1 text-sm font-semibold text-white">
                    Explore all services <ArrowRight className="h-4 w-4" />
                  </Link>
                </aside>

                <div className="bg-white p-8">
                  <div className="flex items-end justify-between border-b border-slate-200 pb-5">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#315f98]">Browse by capability</p>
                      <p className="mt-2 text-lg font-semibold text-slate-950">Technology capabilities</p>
                    </div>
                    <p className="max-w-[260px] text-right text-xs leading-5 text-slate-500">Select a capability to explore services, outcomes and delivery expertise.</p>
                  </div>

                  <div className="mt-3 grid grid-cols-2 gap-x-3">
                    {serviceLinks.map(([label, href, description]) => (
                      <Link key={href} to={href} onClick={() => setDesktopServicesOpen(false)} className="services-mega-link group/item flex min-h-[92px] items-start justify-between gap-4 border-b border-slate-200 px-3 py-4 transition-colors hover:bg-[#f2f6fb]">
                        <span>
                          <span className="block text-sm font-semibold text-slate-950 group-hover/item:text-[#315f98]">{label}</span>
                          <span className="mt-1.5 block text-xs leading-5 text-slate-500">{description}</span>
                        </span>
                        <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-[#315f98] transition-transform group-hover/item:translate-x-1" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {links.map(([label, href]) => (
            <Link key={href} to={href} onClick={() => setDesktopServicesOpen(false)} className={`text-[13px] transition-colors hover:text-[#66b2ff] ${location.pathname === href ? "text-[#66b2ff]" : "text-white/85"}`}>
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
        <nav className="mobile-navigation-panel max-h-[calc(100vh-72px)] animate-in overflow-y-auto border-t border-slate-200 bg-white shadow-[0_24px_45px_rgba(15,23,42,.16)] duration-300 slide-in-from-top-2 xl:hidden">
          <div className="grid px-5 py-4">
            <button type="button" aria-expanded={servicesOpen} onClick={() => setServicesOpen(!servicesOpen)} className="flex items-center justify-between border-b border-slate-200 py-3.5 text-left text-sm font-semibold text-slate-950 transition-transform active:scale-[.985]">
              <span>Services</span>
              <span className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}><ChevronDown className="h-4 w-4" /></span>
            </button>

            {servicesOpen && (
              <div className="animate-in overflow-hidden border-b border-slate-200 bg-[#f2f6fb] duration-200 fade-in slide-in-from-top-1">
                <div className="border-l-4 border-[#f5c518] px-4 py-3">
                  <p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#315f98]">Technology capabilities</p>
                </div>
                <div className="grid px-4 pb-3 sm:grid-cols-2 sm:gap-x-5">
                  {serviceLinks.map(([label, href, description]) => (
                    <Link key={href} to={href} onClick={closeMobileNavigation} className="mobile-service-link flex items-center justify-between gap-3 border-t border-slate-200 py-3.5">
                      <span>
                        <span className="block text-xs font-semibold text-slate-950">{label}</span>
                        <span className="mt-1 block text-[11px] leading-4 text-slate-500">{description}</span>
                      </span>
                      <ChevronRight className="h-4 w-4 shrink-0 text-[#315f98]" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {links.map(([label, href]) => (
              <div key={href}>
                <Link to={href} onClick={closeMobileNavigation} className="mobile-primary-link block border-b border-slate-200 py-3.5 text-sm font-medium text-slate-800">{label}</Link>
              </div>
            ))}

            <div className="flex items-center justify-between gap-4 pt-4">
              <a href="mailto:info@techwensys.com" className="mobile-contact-link text-sm font-medium text-[#315f98]">info@techwensys.com</a>
              <Link to="/services" onClick={closeMobileNavigation} className="mobile-view-services inline-flex items-center gap-1 text-xs font-semibold text-[#315f98]">All services <ArrowRight className="h-3.5 w-3.5" /></Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};
