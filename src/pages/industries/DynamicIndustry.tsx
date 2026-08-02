import { useParams, Link } from "@/lib/router";
import { useData } from "@/context/DataContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { SEO } from "@/components/SEO";
import { ArrowRight, CheckCircle2, ShieldCheck, CloudCog, BrainCircuit, Settings2 } from "lucide-react";
import { getLucideIcon } from "@/lib/icons";
import NotFound from "../NotFound";
import { cleanMarkdown } from "@/lib/utils";

const DynamicIndustry = () => {
  const { slug } = useParams<{ slug: string }>();
  const { content, loading } = useData();

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center text-[#1d1d1d]">
        <div className="animate-spin rounded-none h-10 w-10 border-t-2 border-b-2 border-[#1e6fd9]"></div>
      </div>
    );
  }

  // Find industry by slug
  const industry = content.industries?.find(
    (ind) => ind.slug === slug || ind.id === slug
  );

  if (!industry) {
    return <NotFound />;
  }

  const IconComponent = getLucideIcon(industry.iconName);

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-[#1d1d1d] flex flex-col">
      <SEO 
        title={`${cleanMarkdown(industry.title)} Technology Solutions | Techwin Systems`}
        description={`${cleanMarkdown(industry.description)} Explore industry-focused cloud, security, data, application, and managed technology capabilities.`}
      />
      <Navbar />

      <main className="flex-grow">
        {/* Dell-inspired Page Hero */}
        <PageHero 
          title={cleanMarkdown(industry.title)}
          description={cleanMarkdown(industry.description)}
          label="INDUSTRY TECHNOLOGY SOLUTIONS"
          breadcrumbs={[
            { label: "Industries", href: "/industries" },
            { label: cleanMarkdown(industry.title) }
          ]}
          backgroundImage={industry.image || "/techwin-network-hero.webp"}
          industryBackground={true}
        />

        {/* Deliverables Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 text-left">
              
              {/* Left Column: Details & Capabilities */}
              <div className="lg:col-span-7 space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 text-[#1e6fd9] bg-neutral-100 p-2 rounded-none">
                    <IconComponent className="w-5 h-5" strokeWidth={1.5} />
                    <span className="text-xs font-bold uppercase tracking-wider">Industry Capabilities</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-light text-neutral-900 leading-tight">
                    Technology capabilities for {cleanMarkdown(industry.title)}
                  </h2>
                  <p className="text-xs md:text-sm text-neutral-600 leading-relaxed">
                    We combine sector knowledge with cloud, cybersecurity, data, software engineering, enterprise applications, and managed operations to address the priorities of the {cleanMarkdown(industry.title).toLowerCase()} sector.
                  </p>
                </div>

                {/* Features / Modules checklist */}
                {industry.features && industry.features.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    {industry.features.map((feature, idx) => (
                      <div 
                        key={idx}
                        className="bg-[#f5f5f5] border border-neutral-200 p-4 flex items-start gap-3 rounded-none hover:bg-white hover:shadow-md transition-all duration-150"
                      >
                        <CheckCircle2 className="w-5 h-5 text-[#1e6fd9] shrink-0 mt-0.5" strokeWidth={2} />
                        <span className="text-xs font-semibold text-neutral-800 leading-tight">
                          {cleanMarkdown(feature)}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Column: Framed Image & Consultation CTA */}
              <div className="lg:col-span-5 space-y-6">
                {/* Visual Representation */}
                <div className="relative border border-neutral-300 bg-neutral-100 overflow-hidden rounded-none aspect-[16/10] shadow-sm">
                  <img
                    src={industry.image || "/techwin-network-hero.webp"}
                    alt={cleanMarkdown(industry.title)}
                    className="w-full h-full object-cover rounded-none"
                  />
                </div>

                {/* CTA Box */}
                <div className="bg-[#f5f5f5] border border-neutral-200 p-6 md:p-8 space-y-4 rounded-none">
                  <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider">
                    Speak to an Industry Expert
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Explore a practical transformation roadmap shaped around your operating model, risk landscape, customer expectations, and growth priorities.
                  </p>
                  <div>
                    <Link to="/contact">
                      <button className="w-full bg-[#1d1d1d] hover:bg-[#333333] text-white text-xs font-bold uppercase tracking-wider py-3.5 px-6 rounded-none transition-colors">
                        Schedule Consultation
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="border-y border-neutral-200 bg-[#f3f4f6] py-16 md:py-24"><div className="container mx-auto max-w-7xl px-4 lg:px-8"><div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr]"><div><p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#315f98]">Sector priorities</p><h2 className="mt-4 text-3xl font-medium leading-tight tracking-[-.04em] text-neutral-950">Navigate change with an industry-grounded technology strategy.</h2><p className="mt-5 text-sm leading-7 text-neutral-600">Organizations in {cleanMarkdown(industry.title)} must modernize customer experiences and core operations while protecting continuity, data, and regulatory trust. We help leadership teams connect these demands into one executable roadmap.</p></div><div className="grid gap-px border border-neutral-200 bg-neutral-200 sm:grid-cols-2">{[{icon:ShieldCheck,title:"Security & resilience",text:"Protect critical services, identities, applications, and sensitive data."},{icon:CloudCog,title:"Cloud modernization",text:"Create scalable foundations with governance, automation, and cost control."},{icon:BrainCircuit,title:"Data & intelligence",text:"Turn trusted sector data into insight, automation, and differentiated value."},{icon:Settings2,title:"Operational transformation",text:"Modernize workflows, platforms, and service operations end to end."}].map(({icon:ItemIcon,title,text}) => <div key={title} className="bg-white p-6"><ItemIcon className="h-6 w-6 text-[#315f98]" /><h3 className="mt-5 text-base font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-neutral-600">{text}</p></div>)}</div></div></div></section>

        <section className="bg-white py-16 md:py-24"><div className="container mx-auto max-w-7xl px-4 lg:px-8"><div className="mb-10 max-w-3xl"><p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#315f98]">From strategy to operations</p><h2 className="mt-4 text-3xl font-medium tracking-[-.04em] text-neutral-950">A complete transformation lifecycle.</h2></div><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">{[{n:"01",title:"Assess",text:"Baseline business priorities, technology dependencies, risks, and economics."},{n:"02",title:"Architect",text:"Define secure target platforms, operating models, and a sequenced roadmap."},{n:"03",title:"Modernize",text:"Deliver applications, cloud, data, integration, and automation incrementally."},{n:"04",title:"Operate",text:"Monitor, protect, optimize, and continuously improve critical capabilities."}].map((step) => <div key={step.n} className="border-t-2 border-neutral-950 pt-5"><span className="text-xs font-bold text-[#315f98]">{step.n}</span><h3 className="mt-6 text-xl font-semibold">{step.title}</h3><p className="mt-3 text-sm leading-6 text-neutral-600">{step.text}</p></div>)}</div></div></section>

        <section className="bg-[#111318] py-16 text-white md:py-20"><div className="container mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[1fr_1fr] lg:px-8"><div><p className="text-[10px] font-bold uppercase tracking-[.2em] text-white/55">Business outcomes</p><h2 className="mt-4 text-3xl font-medium tracking-[-.04em]">Technology change measured by what it enables.</h2></div><div className="grid gap-4 sm:grid-cols-2">{["Faster time to market", "Stronger cyber resilience", "Lower operating complexity", "Trusted data and decisions", "Improved customer experience", "Scalable digital operations"].map((outcome) => <div key={outcome} className="flex gap-3 border border-white/15 p-4 text-sm text-white/80"><CheckCircle2 className="h-5 w-5 shrink-0 text-[#8eb3df]" />{outcome}</div>)}</div></div></section>
      </main>

      <Footer />
    </div>
  );
};

export default DynamicIndustry;
