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
    <div className="mx-auto max-w-[1512px] px-5 py-16 lg:px-10 lg:py-20">
      <div className="grid gap-12 border-b border-neutral-200 pb-16 lg:grid-cols-[1.5fr_2fr]">
        <div>
          <Link to="/" aria-label="Techwin Systems home" className="brand-logo-shell inline-flex">
            <img src="/assets/techwen-systems-logo.jpeg" alt="Techwin Systems Private Limited" className="brand-logo brand-logo-footer" />
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-6 text-neutral-600">
            Engineering secure, resilient digital enterprises through technology expertise and accountable delivery.
          </p>
          <a href="mailto:info@techwensys.com" className="footer-email mt-8 inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold">
            info@techwensys.com <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-950">{group.title}</h3>
              <ul className="mt-5 space-y-3">
                {group.links.map(([label, href]) => (
                  <li key={`${label}-${href}`}>
                    <Link to={href} className="text-sm text-neutral-600 transition-colors hover:text-red-700">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-row items-center justify-between gap-4 overflow-x-auto whitespace-nowrap pt-7 text-[9px] text-neutral-500 sm:text-[11px]">
        <p className="shrink-0">© 2026 Techwin Systems Pvt Limited. All rights reserved.</p>
        <div className="flex shrink-0 items-center gap-3 sm:gap-5">
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
