import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { SEO } from "@/components/SEO";
import { useSEO } from "@/hooks/useSEO";
import { getLucideIcon } from "@/lib/icons";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "@/lib/router";
import { useData } from "@/context/DataContext";
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";

const Industries = () => {
  const seo = useSEO();
  const { content } = useData();
  const industries = content.industries || [];
  const pageTexts = content.pageTexts;
  const textContent = pageTexts?.industries || {
    heroTitle: "Industry-Focused SAP Solutions That Deliver Business Value",
    heroDescription: "We design and deliver SAP solutions tailored to the unique processes and challenges of different industries.",
    sectionTag: "Industries We Serve",
    sectionTitle: "Seven Industry Verticals. One Unified SAP Platform."
  };
  
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-[#1d1d1d] selection:bg-[#2583ff] selection:text-white">
      <SEO {...seo} />
      <Navbar />

      {/* Dell-inspired Page Hero Section */}
      <PageHero 
        title={textContent.heroTitle}
        description={textContent.heroDescription}
        label={textContent.sectionTag}
        breadcrumbs={[
          { label: "Industries" }
        ]}
        backgroundImage="/techwin-network-hero.webp"
        industryBackground={true}
      />

      <section className="overflow-hidden border-b border-neutral-200 bg-[#fbfbfc] py-14 md:py-20 lg:py-24">
        <div className="container mx-auto max-w-[1440px] px-4 lg:px-8">
          <div className="grid items-end gap-7 border-b border-neutral-200 pb-10 md:grid-cols-[1.15fr_.85fr] md:pb-12">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[.22em] text-[#1e6fd9]">Industry expertise</p>
              <h2 className="mt-5 max-w-3xl text-4xl font-medium leading-[1.04] tracking-[-.055em] text-neutral-950 md:text-5xl lg:text-[58px]">Technology creates more value when it understands the business behind it.</h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-neutral-600 md:pb-1">Our industry teams combine sector knowledge with cloud, security, data, application, and operating-model expertise. That means transformation programs grounded in regulation, customer expectations, operational realities, and measurable commercial outcomes.</p>
          </div>

          <div className="mt-8 hidden grid-cols-12 gap-1 md:grid">
            {industries.slice(0, 4).map((industry, index) => (
              <Link key={industry.title} to={`/industries/${industry.slug}`} className={`group relative isolate overflow-hidden bg-neutral-900 ${index === 0 ? "col-span-7 row-span-2 min-h-[604px]" : "col-span-5 min-h-[300px]"}`}>
                <img src={industry.image} alt={industry.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]" />
                <div className="absolute inset-0 bg-black/35 transition-colors group-hover:bg-black/45" />
                <div className="absolute inset-x-0 bottom-0 bg-black/55 p-6 text-white lg:p-8">
                  <p className="text-[10px] font-bold uppercase tracking-[.2em] text-white/70">{String(index + 1).padStart(2, "0")}</p>
                  <h3 className={`${index === 0 ? "mt-3 text-3xl lg:text-4xl" : "mt-2 text-xl lg:text-2xl"} font-medium tracking-[-.035em]`}>{industry.title}</h3>
                  <p className={`mt-3 max-w-xl text-sm leading-6 text-white/75 ${index === 0 ? "block" : "hidden lg:block"}`}>{industry.description}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.12em] text-white">Explore industry <ArrowRight className="h-4 w-4 text-[#4c9aff] transition-transform group-hover:translate-x-1" /></span>
                </div>
              </Link>
            ))}
          </div>

          <div className="hidden border-b border-neutral-200 md:grid md:grid-cols-2 lg:grid-cols-4">
            {industries.slice(4).map((industry, index) => (
              <Link key={industry.title} to={`/industries/${industry.slug}`} className="group flex min-h-28 items-end justify-between gap-4 border-l border-neutral-200 px-5 py-6 first:border-l-0 lg:px-7">
                <div><span className="text-[10px] font-bold tracking-[.15em] text-[#1e6fd9]">{String(index + 5).padStart(2, "0")}</span><h3 className="mt-2 text-sm font-medium leading-5 text-neutral-950 lg:text-base">{industry.title}</h3></div>
                <ArrowRight className="mb-0.5 h-4 w-4 shrink-0 text-[#1e6fd9] transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>

          <div className="mt-6 space-y-3 md:hidden">
            {industries.map((industry, index) => (
              <Link key={industry.title} to={`/industries/${industry.slug}`} className="group relative block min-h-[270px] overflow-hidden bg-neutral-900">
                <img src={industry.image} alt={industry.title} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-black/35" />
                <div className="absolute inset-x-0 bottom-0 bg-black/60 p-5 text-white"><p className="text-[10px] font-bold tracking-[.18em] text-white/65">{String(index + 1).padStart(2, "0")}</p><h3 className="mt-2 text-2xl font-medium tracking-[-.03em]">{industry.title}</h3><p className="mt-2 line-clamp-2 text-[13px] leading-5 text-white/75">{industry.description}</p><span className="mt-4 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.12em]">Explore industry <ArrowRight className="h-3.5 w-3.5 text-[#4c9aff]" /></span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="hidden border-b border-neutral-200 bg-white py-14 md:py-20">
        <div className="container mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
          <p className="text-[11px] font-bold uppercase tracking-[.2em] text-[#315f98]">Industry expertise</p>
          <div><h2 className="text-3xl font-medium leading-tight tracking-[-.04em] text-neutral-950 md:text-4xl">Technology creates more value when it understands the business behind it.</h2><p className="mt-5 max-w-3xl text-sm leading-7 text-neutral-600">Our industry teams combine sector knowledge with cloud, security, data, application, and operating-model expertise. That means transformation programs grounded in regulation, customer expectations, operational realities, and measurable commercial outcomes.</p></div>
        </div>
      </section>

      {/* Industries Grid Section */}
      <section className="hidden py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          {/* Grid Title */}
          <div className="mb-12 border-b border-neutral-200 pb-4 text-left">
            <h2 className="text-xl md:text-2xl font-light text-neutral-950">
              {textContent.sectionTitle}
            </h2>
          </div>

          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-12 gap-6 text-left">
            {industries.map((industry, index) => {
              const Icon = getLucideIcon(industry.iconName);
              return (
                <div 
                  key={industry.title}
                  className={`group border border-neutral-200 bg-white flex flex-col justify-between rounded-none hover:border-neutral-400 transition-all ${index < 2 ? "lg:col-span-6" : "lg:col-span-4"}`}
                >
                  <Link to={`/industries/${industry.slug}`} className="flex flex-col h-full">
                    {/* Image */}
                    <div className={`relative overflow-hidden border-b border-neutral-200 bg-neutral-100 rounded-none ${index < 2 ? "aspect-[16/8]" : "aspect-[16/10]"}`}>
                      <img 
                        src={industry.image} 
                        alt={industry.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.045] rounded-none"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 md:p-7 flex-grow flex flex-col justify-between space-y-5">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="text-[#1e6fd9] bg-neutral-100 p-1.5 flex items-center justify-center shrink-0 rounded-none">
                            <Icon className="w-4 h-4" strokeWidth={1.5} />
                          </div>
                          <h3 className="text-sm font-semibold text-neutral-900 leading-tight">
                            {industry.title}
                          </h3>
                        </div>
                        <p className="text-sm text-neutral-600 leading-6">
                          {industry.description}
                        </p>
                      </div>
                      
                      <div className="pt-2 flex items-center gap-1 text-xs font-bold text-[#1e6fd9] group-hover:underline uppercase tracking-wider">
                        <span>Explore {industry.title.toLowerCase()}</span>
                        <span>→</span>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>

          <ScrollStack useWindowScroll itemDistance={48} itemStackDistance={12} stackPosition="12%" baseScale={0.92} itemScale={0.01} className="industries-mobile-stack md:hidden">
            {industries.map((industry) => {
              const Icon = getLucideIcon(industry.iconName);
              return <ScrollStackItem key={industry.title} itemClassName="industry-stack-card overflow-hidden bg-white text-neutral-950"><Link to={`/industries/${industry.slug}`} className="flex h-full flex-col"><div className="industry-stack-image overflow-hidden"><img src={industry.image} alt={industry.title} className="h-full w-full object-cover" /></div><div className="flex flex-1 flex-col p-5"><div className="flex items-center gap-3"><span className="flex h-8 w-8 items-center justify-center bg-[#edf2f7] text-[#315f98]"><Icon className="h-4 w-4" /></span><h3 className="text-base font-semibold">{industry.title}</h3></div><p className="mt-3 text-[13px] leading-5 text-neutral-600">{industry.description}</p><span className="mt-auto inline-flex items-center gap-2 pt-4 text-[10px] font-bold uppercase tracking-[.1em] text-[#315f98]">Explore industry <ArrowRight className="h-3.5 w-3.5" /></span></div></Link></ScrollStackItem>;
            })}
          </ScrollStack>
        </div>
      </section>

      <section className="relative mx-5 my-10 overflow-hidden rounded-[30px] border border-white/15 bg-cover bg-center py-12 shadow-[0_20px_55px_rgba(15,23,42,.14)] before:absolute before:inset-0 before:bg-black/55 md:mx-8 md:my-12 md:rounded-[40px] md:py-14 lg:mx-auto lg:max-w-[1180px]" style={{ backgroundImage: "url('/technology-services-background.webp')" }}>
        <div className="container relative mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-[.92fr_1.08fr] lg:px-10">
          <div><p className="text-[11px] font-bold uppercase tracking-[.2em] text-white/70">How we work</p><h2 className="mt-4 text-3xl font-medium tracking-[-.04em] text-white">From industry challenge to sustained technology outcome.</h2><p className="mt-5 text-sm leading-7 text-white/75">We bring strategy, engineering, security, and managed operations together in one accountable delivery model—helping leadership teams move from isolated projects to repeatable enterprise capabilities.</p><Link to="/contact" className="mt-8 inline-flex items-center gap-3 bg-white px-6 py-3.5 text-sm font-semibold text-neutral-950 transition-colors hover:bg-neutral-100">Discuss your industry priorities <ArrowRight className="h-4 w-4" /></Link></div>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/20 bg-white/20 sm:grid-cols-2">{["Sector-led discovery and roadmap", "Security and compliance by design", "Modern platforms and intelligent automation", "Continuous optimization and managed support"].map((item) => <div key={item} className="flex gap-3 bg-black/35 p-5 text-sm font-medium text-white"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#a9cbff]" />{item}</div>)}</div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Industries;
