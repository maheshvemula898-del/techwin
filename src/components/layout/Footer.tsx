import { Link } from "@/lib/router";
import { ArrowUpRight, Linkedin } from "lucide-react";

const groups = [
  {
    title: "Capabilities",
    links: [
      ["DevOps & Automation", "/services/devops-platform-engineering"],
      ["Cybersecurity", "/services/cybersecurity"],
      ["Cloud Services", "/services/cloud-transformation"],
      ["Data & AI", "/services/data-ai-analytics"],
    ],
  },
  {
    title: "Company",
    links: [
      ["Who We Are", "/who-we-are"],
      ["Partners", "/partners"],
      ["Careers", "/careers"],
      ["Contact", "/contact"],
    ],
  },
  {
    title: "Insights",
    links: [
      ["All Articles", "/resources"],
      ["Cybersecurity", "/resources"],
      ["Cloud & DevOps", "/resources"],
      ["Data & AI", "/resources"],
    ],
  },
];

export const Footer = () => (
  <footer className="site-footer bg-white text-neutral-950">
    <div className="mx-auto max-w-[1512px] px-5 py-8 lg:px-10 lg:py-20">
      <div className="grid gap-6 border-b border-neutral-200 pb-8 lg:grid-cols-[1.5fr_2fr] lg:gap-12 lg:pb-16">
        <div>
          <Link to="/" aria-label="Techwen Systems home" className="brand-logo-shell inline-flex">
            <img src="/assets/techwen-systems-logo.jpeg" alt="Techwen Systems Private Limited" loading="lazy" decoding="async" className="brand-logo brand-logo-footer" />
          </Link>
          <p className="mt-3 max-w-sm text-sm leading-5 text-neutral-600 lg:mt-5 lg:leading-6">
            Engineering secure, resilient digital enterprises through technology expertise and accountable delivery.
          </p>
          <a href="mailto:info@techwensys.com" className="footer-email mt-4 inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold lg:mt-8 lg:px-5 lg:py-3">
            info@techwensys.com <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-950">{group.title}</h3>
              <ul className="mt-3 space-y-2 lg:mt-5 lg:space-y-3">
                {group.links.map(([label, href]) => (
                  <li key={`${label}-${href}`}>
                    <Link to={href} className="text-xs text-neutral-600 transition-colors hover:text-red-700 sm:text-sm">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-start gap-2 pt-4 text-[9px] text-neutral-500 sm:text-[11px] lg:gap-4 lg:pt-7">
        <p>© 2026 Techwen Systems Pvt Limited. All rights reserved.</p>
        <div className="flex items-center gap-3 whitespace-nowrap sm:gap-5">
          <Link to="/privacy">Privacy</Link>
          <Link to="/legal">Legal</Link>
          <Link to="/cookies">Cookies</Link>
          <Link to="/terms">Terms</Link>
          <Linkedin className="h-4 w-4 text-neutral-700" />
        </div>
      </div>
    </div>
  </footer>
);
