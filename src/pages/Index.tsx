import { useState } from "react";
import { Link } from "@/lib/router";
import { ArrowRight, ChevronDown, Cloud, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";
import { useSEO } from "@/hooks/useSEO";

const services = [
  { n: "01", title: "DevOps & Automation", body: "Accelerate delivery with platform engineering, CI/CD automation, infrastructure as code, and SRE practices.", href: "/services/devops-platform-engineering" },
  { n: "02", title: "Cybersecurity", body: "Strengthen resilience with zero trust, threat detection, and security engineering that protects what matters.", href: "/services/cybersecurity" },
  { n: "03", title: "Cloud Services", body: "Modernize and optimize with secure, scalable cloud platforms tailored to your business.", href: "/services/cloud-transformation" },
  { n: "04", title: "Data & AI", body: "Turn data into decisions with modern data platforms, analytics, and responsible AI.", href: "/services/data-ai-analytics" },
  { n: "05", title: "Software Engineering", body: "Build reliable, scalable software with modern architectures and industry-leading engineering practices.", href: "/services/software-engineering" },
  { n: "06", title: "Managed Services", body: "Run, optimize, and continuously improve operations with 24/7 support and proactive service management.", href: "/services/managed-it-services" },
];

const priorities = [
  { icon: ShieldCheck, title: "Cybersecurity", text: "Protect critical assets and strengthen resilience.", href: "/services/cybersecurity" },
  { icon: Sparkles, title: "AI Transformation", text: "Turn data and AI into measurable value.", href: "/services/data-ai-analytics" },
  { icon: Cloud, title: "Cloud Operations", text: "Modernize and run workloads at scale.", href: "/services/cloud-transformation" },
];

const proofStats = [
  { value: "24/7", mobileLabel: "Coverage", description: "Operations and security coverage across critical platforms." },
  { value: "6", mobileLabel: "Capabilities", description: "Integrated technology capabilities under one accountable partner." },
  { value: "1", mobileLabel: "Delivery model", description: "Global delivery model aligned to measurable client outcomes." },
];

const industries = [
  { title: "Banking & Financial Services", text: "Secure digital banking, payments modernization, regulatory technology, and resilient financial infrastructure.", image: "/talent-analytics.webp", href: "/industries/fintech-blockchain" },
  { title: "Healthcare & Life Sciences", text: "Compliant cloud platforms, interoperable health data, analytics, and protected digital care experiences.", image: "/tech-vetting.webp", href: "/industries/healthcare-biotech" },
  { title: "Manufacturing & Automotive", text: "Connected operations, intelligent factories, supply-chain visibility, and industrial cyber resilience.", image: "/contract-staffing.webp", href: "/industries/manufacturing-automotive" },
];

const deliverySteps = [
  { n: "01", t: "Discover", d: "Assess the estate, risks, economics, and desired outcomes." },
  { n: "02", t: "Design", d: "Create pragmatic architecture, security, and delivery roadmaps." },
  { n: "03", t: "Deliver", d: "Modernize platforms and products through integrated engineering." },
  { n: "04", t: "Operate", d: "Monitor, secure, optimize, and continuously improve services." },
];

const Index = () => {
  const seo = useSEO();
  const [active, setActive] = useState<number | null>(0);
  const [deliveryActive, setDeliveryActive] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#f7faff] text-[#10213d]">
      <SEO {...seo} />
      <Navbar />
      <main className="pt-[72px]">
        <section className="home-enterprise-hero bg-[#071e45] text-white">
          <div className="mx-auto grid max-w-[1512px] lg:grid-cols-[1.06fr_.9fr_.6fr]">
            <div className="desktop-hero-copy flex min-h-[630px] flex-col justify-center border-white/15 px-6 py-16 lg:min-h-[567px] lg:border-r lg:px-16 lg:py-5">
              <p className="desktop-hero-eyebrow mb-10 text-[10px] font-bold uppercase tracking-[0.24em] text-[#66b2ff]">Global technology services</p>
              <h1 className="desktop-hero-title max-w-[560px] text-[48px] font-medium leading-[.98] tracking-[-.055em] sm:text-[64px] xl:text-[72px]">Engineering<br />Secure Digital<br />Enterprises</h1>
              <p className="desktop-hero-description mt-7 max-w-[520px] text-[15px] leading-7 text-white/65">Techwin Systems Pvt Limited delivers DevOps, cybersecurity, cloud, software engineering, data and AI, and managed technology solutions for global enterprises.</p>
              <div className="mt-8 flex flex-wrap items-center gap-8">
                <Link id="desktop-hero-primary" to="/services" className="desktop-hero-primary inline-flex items-center gap-8 bg-[#2583ff] px-7 py-4 text-sm font-semibold text-[#041126] transition-colors hover:bg-[#5daaff]">Explore solutions <ArrowRight className="h-4 w-4" /></Link>
                <Link to="/contact" className="desktop-hero-secondary inline-flex items-center gap-8 border-b border-[#66b2ff] py-3 text-sm">Book consultation <ArrowRight className="h-4 w-4 text-[#66b2ff]" /></Link>
              </div>
              <div className="desktop-hero-insight mt-12 border-t border-white/15 pt-5 text-xs text-white/55"><span className="mr-5 font-bold uppercase tracking-[0.16em] text-[#66b2ff]">Latest insight</span><span>Building cyber resilience for the AI era</span></div>
            </div>

            <div className="hidden min-h-[450px] overflow-hidden border-white/15 bg-[#071e45] lg:block lg:min-h-[567px] lg:border-r"><img src="/techwin-ai-hero.webp" alt="Artificial intelligence and connected technology" className="site-blue-image h-full w-full object-cover object-center" /></div>

            <aside className="hidden px-7 py-12 lg:block lg:px-9">
              <div>{priorities.map(({icon: Icon,title,text,href}) => <Link key={title} to={href} className="group block border-b border-white/15 py-7"><Icon className="mb-4 h-8 w-8 text-[#66b2ff]" strokeWidth={1.5}/><div className="flex items-center justify-between"><h2 className="text-[16px] font-semibold">{title}</h2><ArrowRight className="h-4 w-4 text-[#66b2ff] transition-transform group-hover:translate-x-1" /></div><p className="mt-2 max-w-[230px] text-[13px] leading-5 text-white/55">{text}</p></Link>)}</div>
              <Link to="/services" className="mt-7 flex items-center justify-between text-[13px] text-[#66b2ff]">View all services <ArrowRight className="h-4 w-4" /></Link>
            </aside>
          </div>
        </section>

        <section className="services-mosaic w-full max-w-none bg-cover bg-center" style={{ backgroundImage: "url('/technology-services-background.webp')" }}>
          <div className="grid border-b border-white/20 bg-black/45 px-6 py-11 text-white lg:grid-cols-[1fr_.8fr_.42fr] lg:items-center lg:px-16">
            <div><p className="text-[10px] font-bold uppercase tracking-[.2em] text-white/70">Technology services</p><h2 className="mt-4 max-w-lg text-[36px] font-medium leading-[1.07] tracking-[-.045em] text-white">Capabilities built for enterprise-scale change.</h2></div>
            <p className="mt-6 max-w-md text-sm leading-7 text-white/75 lg:mt-0">From strategy to operations, our technology services help organizations modernize core systems, strengthen security, and deliver outcomes that scale.</p>
            <Link to="/services" className="mt-6 inline-flex items-center justify-between text-sm font-semibold text-white lg:mt-0 lg:border-l lg:border-white/30 lg:pl-10">View all services <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="grid border-b border-neutral-200 lg:grid-cols-2">
            <div className="flex min-h-[470px] bg-black/50 p-8 text-white md:p-12 lg:p-16">
              <div className="flex max-w-xl flex-col justify-center"><span className="text-3xl font-medium text-[#9dc5ff]">01</span><h3 className="mt-6 text-4xl font-medium leading-tight tracking-[-.04em] md:text-5xl">DevOps &<br />Automation</h3><div className="mt-7 border-t border-white/25 pt-5"><p className="text-sm leading-7 text-white/80">{services[0].body}</p><Link to={services[0].href} className="mt-7 inline-flex items-center gap-3 text-sm font-semibold text-white">Explore DevOps & Automation <ArrowRight className="h-4 w-4" /></Link></div></div>
            </div>
            <div className="grid bg-black/40 text-white sm:grid-cols-2">{services.slice(1,5).map((service) => <Link key={service.n} to={service.href} className="group flex min-h-[235px] flex-col border-b border-white/20 p-7 sm:border-l sm:border-white/20 lg:p-10"><span className="text-xl font-semibold text-[#a9cbff]">{service.n}</span><h3 className="mt-5 text-xl font-semibold tracking-[-.025em] text-white">{service.title}</h3><p className="mt-4 text-sm leading-6 text-white/75">{service.body}</p><span className="mt-auto inline-flex items-center gap-3 pt-6 text-xs font-semibold text-white">Explore {service.title} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span></Link>)}</div>
          </div>
          <Link to={services[5].href} className="group grid border-b border-white/20 bg-black/50 px-6 py-8 text-white md:grid-cols-[.25fr_.75fr_.35fr] md:items-center lg:px-16"><div><span className="text-xl font-semibold text-[#a9cbff]">06</span><h3 className="mt-2 text-xl font-semibold text-white">Managed Services</h3></div><p className="mt-4 max-w-xl text-sm leading-6 text-white/75 md:mt-0">{services[5].body}</p><span className="mt-5 inline-flex items-center justify-end gap-3 text-xs font-semibold text-white md:mt-0">Explore Managed Services <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span></Link>
          <div className="grid items-center gap-6 bg-black/55 px-6 py-8 text-white md:grid-cols-[220px_1fr_1fr_.38fr] lg:px-16"><img src="/techwin-architecture.webp" alt="Global manufacturer transformation" className="h-28 w-full object-cover opacity-80" /><div><p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#a9cbff]">Client outcome</p><h3 className="mt-3 text-xl font-semibold leading-7 tracking-[-.03em] text-white">Global manufacturer modernizes IT and accelerates securely.</h3></div><p className="text-sm leading-6 text-white/75">We unified cloud operations, strengthened security, and streamlined delivery—improving reliability and measurable results.</p><Link to="/contact" className="inline-flex items-center justify-end gap-3 text-xs font-semibold text-white">View the outcome <ArrowRight className="h-4 w-4" /></Link></div>
        </section>

        <section className="hidden home-services-gradient mx-auto max-w-[1512px] bg-[#f7faff] lg:grid-cols-[.95fr_1.45fr]">
          <div className="border-[#c8d8ef] px-6 py-14 lg:border-r lg:px-16 lg:py-20">
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1e6fd9]">Technology services</p>
            <h2 className="max-w-md text-[36px] font-medium leading-[1.05] tracking-[-.045em]">Capabilities built for enterprise-scale change.</h2>
            <div className="mt-9 border-t border-[#c8d8ef]">{services.map((service,index) => <div key={service.n} className="border-b border-[#c8d8ef]"><button onClick={() => setActive(active === index ? null : index)} className="flex w-full items-center py-4 text-left"><span className="w-14 text-[19px] font-semibold text-[#2678df]">{service.n}</span><span className="flex-1 text-[15px] font-medium">{service.title}</span><span className="text-xl text-[#555]">{active === index ? "−" : "+"}</span></button>{active === index && <p className="pb-5 pl-14 pr-8 text-sm leading-6 text-[#5b6e87]">{service.body}</p>}</div>)}</div>
          </div>
          <div className="grid border-t border-[#c8d8ef] lg:grid-cols-[1.2fr_.72fr] lg:border-t-0">
            <div className="flex flex-col justify-center px-6 py-14 lg:px-11"><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1e6fd9]">Client outcome</p><h2 className="mt-6 text-[34px] font-medium leading-[1.08] tracking-[-.04em]">Global manufacturer modernizes IT and accelerates securely</h2><p className="mt-6 text-[14px] leading-6 text-[#52647d]">We partnered with a global manufacturer to unify cloud operations, strengthen security, and streamline delivery—improving reliability and time to market.</p><Link to="/contact" className="mt-8 inline-flex w-fit items-center gap-5 border-b border-[#2583ff] pb-2 text-sm">Discuss your transformation <ArrowRight className="h-4 w-4" /></Link></div>
            <img src="/techwin-architecture.webp" alt="Modern enterprise architecture" className="h-full min-h-[430px] w-full object-cover" />
          </div>
        </section>

        <section className="border-y border-neutral-200 bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-[1512px] px-6 lg:px-16">
            <div className="grid gap-8 border-b border-neutral-200 pb-10 lg:grid-cols-[.75fr_1.25fr]"><p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#315f98]">Industries</p><div><h2 className="max-w-4xl text-[38px] font-medium leading-[1.06] tracking-[-.045em] text-neutral-950">Deep technology expertise, grounded in how your industry actually operates.</h2><p className="mt-5 max-w-3xl text-sm leading-7 text-neutral-600">Our teams connect modern engineering with sector-specific regulation, customer expectations, operating models, and commercial priorities.</p></div></div>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">{industries.map((industry) => <Link key={industry.title} to={industry.href} className="group border border-neutral-200 bg-white"><div className="aspect-[16/10] overflow-hidden"><img src={industry.image} alt={industry.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" /></div><div className="p-6"><h3 className="text-lg font-semibold text-neutral-950">{industry.title}</h3><p className="mt-3 text-sm leading-6 text-neutral-600">{industry.text}</p><span className="mt-6 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[.12em] text-[#315f98]">Explore industry <ArrowRight className="h-4 w-4" /></span></div></Link>)}</div>
            <Link to="/industries" className="mt-8 inline-flex items-center gap-3 border-b border-neutral-900 pb-2 text-sm font-semibold text-neutral-900">View all eight industries <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </section>

        <section className="home-delivery-section relative overflow-hidden bg-cover bg-center py-20 lg:py-24" style={{ backgroundImage: "url('/how-we-deliver-background.webp')" }}>
          <div className="absolute inset-0 bg-black/45" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-[1512px] gap-12 px-6 lg:grid-cols-[.9fr_1.1fr] lg:px-16">
            <div><p className="text-[10px] font-bold uppercase tracking-[.2em] text-white/80">How we deliver</p><h2 className="mt-5 text-[38px] font-medium leading-[1.06] tracking-[-.045em] text-white">A practical path from ambition to dependable operations.</h2><p className="mt-6 text-sm leading-7 text-white/80">We combine advisory thinking with hands-on engineering and accountable operations. Every engagement begins with business outcomes, moves through secure implementation, and continues with measurement and optimization.</p><Link to="/who-we-are" className="mt-8 inline-flex items-center gap-3 bg-white px-6 py-4 text-sm font-semibold text-neutral-950 transition-colors hover:bg-neutral-100">Why Techwin Systems <ArrowRight className="h-4 w-4" /></Link></div>
            <div>
              <div className="hidden gap-px border border-neutral-200 bg-neutral-200 sm:grid sm:grid-cols-2">{deliverySteps.map((step) => <div key={step.n} className="bg-white p-7"><span className="text-xs font-bold text-[#315f98]">{step.n}</span><h3 className="mt-7 text-xl font-semibold text-neutral-950">{step.t}</h3><p className="mt-3 text-sm leading-6 text-neutral-600">{step.d}</p></div>)}</div>
              <div className="divide-y divide-neutral-200 border-y border-neutral-200 sm:hidden">
                {deliverySteps.map((step, index) => {
                  const isOpen = deliveryActive === index;
                  return <div key={step.n} className="bg-white"><button type="button" aria-expanded={isOpen} aria-controls={`delivery-step-${index}`} onClick={() => setDeliveryActive(isOpen ? null : index)} className="flex min-h-16 w-full items-center gap-4 px-4 py-4 text-left"><span className="text-[11px] font-bold text-[#315f98]">{step.n}</span><span className="flex-1 text-base font-semibold text-neutral-950">{step.t}</span><ChevronDown className={`h-4 w-4 text-neutral-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} /></button><div id={`delivery-step-${index}`} className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}><div className="overflow-hidden"><p className="px-4 pb-5 pl-14 text-sm leading-6 text-neutral-600">{step.d}</p></div></div></div>;
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-neutral-200 bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-[1512px] px-6 lg:px-16"><div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr]"><div><p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#315f98]">Enterprise priorities</p><h2 className="mt-5 text-[36px] font-medium leading-[1.08] tracking-[-.04em] text-neutral-950">Built for the challenges technology leaders face now.</h2></div><div className="grid gap-6 sm:grid-cols-2">{["Reduce operational risk while modernizing legacy estates", "Accelerate software delivery without compromising security", "Create trusted data foundations for responsible AI", "Improve cloud economics, resilience, and governance", "Unify fragmented platforms, applications, and workflows", "Build always-on operations with measurable service levels"].map((item) => <div key={item} className="flex gap-3 border-t border-neutral-200 pt-5 text-sm leading-6 text-neutral-700"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#315f98]" />{item}</div>)}</div></div></div>
        </section>

        <section className="transformation-agenda relative overflow-hidden bg-[#0d0f12] bg-cover bg-center py-20 text-white lg:py-16" style={{ backgroundImage: "url('/transformation-agenda-background.webp')" }}>
          <div className="absolute inset-0 bg-[#020713]/55" aria-hidden="true" />
          <div className="relative mx-auto max-w-[1512px] px-6 lg:px-16">
            <div className="grid gap-8 border-b border-white/15 pb-12 lg:grid-cols-[.55fr_1.45fr] lg:items-end lg:pb-8"><div><p className="text-[10px] font-bold uppercase tracking-[.22em] text-white/50">Transformation agenda</p><p className="mt-3 text-xs text-white/40">Secure · Modernize · Intelligence</p></div><div><h2 className="max-w-4xl text-[42px] font-medium leading-[1.02] tracking-[-.05em] md:text-[56px] lg:text-[48px]">Three priorities.<br />One resilient enterprise.</h2><p className="mt-6 max-w-2xl text-sm leading-7 text-white/60 lg:mt-4">Techwin Systems connects cyber resilience, modern platforms, and trusted intelligence into one measurable transformation journey.</p></div></div>
            <div className="agenda-list">
              <Link to="/services/cybersecurity" className="agenda-row"><span className="agenda-number">01</span><div><p className="agenda-label">Secure</p><h3>Build cyber resilience into every layer.</h3><p>Protect identities, applications, data, cloud platforms, and critical operations through zero-trust architecture and always-on defense.</p></div><ArrowRight className="agenda-arrow" /></Link>
              <Link to="/services/devops-platform-engineering" className="agenda-row"><span className="agenda-number">02</span><div><p className="agenda-label">Modernize</p><h3>Create platforms that accelerate delivery.</h3><p>Unify cloud foundations, DevOps automation, infrastructure as code, observability, and platform engineering.</p></div><ArrowRight className="agenda-arrow" /></Link>
              <Link to="/services/data-ai-analytics" className="agenda-row"><span className="agenda-number">03</span><div><p className="agenda-label">Intelligence</p><h3>Turn trusted data into better decisions.</h3><p>Build governed data foundations and apply analytics, automation, machine learning, and responsible generative AI.</p></div><ArrowRight className="agenda-arrow" /></Link>
            </div>
          </div>
        </section>

        <section className="home-proof-gradient bg-[#0b3d87] text-white">
          <div className="mx-auto max-w-[1512px] px-4 py-10 sm:px-6 sm:py-14 lg:px-16 lg:py-20">
            <div className="grid gap-7 lg:grid-cols-[.8fr_1.2fr] lg:gap-12">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#66b2ff] sm:text-[10px]">Why Techwin</p>
                <h2 className="mt-3 max-w-xl text-[27px] font-medium leading-[1.08] tracking-[-.04em] sm:mt-5 sm:text-[34px] lg:mt-6 lg:text-[42px] lg:leading-[1.05]">Technology outcomes, not technology theatre.</h2>
              </div>
              <div className="grid grid-cols-3 gap-px overflow-hidden rounded-xl bg-white/15">
                {proofStats.map((stat) => (
                  <div key={stat.value} className="min-w-0 bg-[#0b3d87] px-2.5 py-4 text-center sm:p-5 sm:text-left lg:p-7">
                    <div className="whitespace-nowrap text-[24px] font-medium leading-none text-[#66b2ff] sm:text-3xl lg:text-4xl">{stat.value}</div>
                    <p className="mt-2 text-[9px] font-semibold leading-4 text-white/70 sm:hidden">{stat.mobileLabel}</p>
                    <p className="mt-4 hidden text-sm leading-6 text-white/60 sm:block">{stat.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="home-cta"><div className="mx-auto flex max-w-[1512px] flex-col justify-between gap-8 px-6 py-14 lg:flex-row lg:items-center lg:px-16"><h2 className="max-w-3xl text-[38px] font-medium leading-[1.05] tracking-[-.045em]">Ready to build a more secure, resilient digital enterprise?</h2><Link to="/contact" className="inline-flex items-center justify-between gap-12 px-7 py-4 text-sm font-semibold">Start a conversation <ArrowRight className="h-4 w-4" /></Link></div></section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
