import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { SEO } from "@/components/SEO";
import { useSEO } from "@/hooks/useSEO";
import { useLocation } from "@/lib/router";
import { getLucideIcon } from "@/lib/icons";
import { Users, Star, Headphones, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "@/lib/router";
import { useData } from "@/context/DataContext";

const transformationOutcomes = [
  {
    number: "01",
    title: "Modernize the technology core",
    description: "Replace fragile legacy patterns with modular applications, cloud-ready platforms, automated infrastructure, and integration architectures that support continuous change.",
  },
  {
    number: "02",
    title: "Build resilience into every layer",
    description: "Connect identity, application, cloud, data, and operational security so risks are managed throughout design, engineering, deployment, and day-to-day operations.",
  },
  {
    number: "03",
    title: "Accelerate engineering performance",
    description: "Give delivery teams reusable platforms, automated quality controls, observability, and secure developer workflows that reduce friction from idea to production.",
  },
  {
    number: "04",
    title: "Operate with intelligence",
    description: "Combine service management, telemetry, automation, analytics, and AI-assisted operations to improve availability, experience, cost, and decision speed.",
  },
];

const deliveryStages = [
  { number: "01", title: "Assess", description: "Establish a fact-based view of architecture, risk, cost, delivery performance, dependencies, and business priorities." },
  { number: "02", title: "Architect", description: "Define the target state, guardrails, operating model, investment roadmap, and measurable outcomes." },
  { number: "03", title: "Engineer", description: "Deliver in controlled increments with security, quality, adoption, and knowledge transfer embedded in every workstream." },
  { number: "04", title: "Operate", description: "Monitor service health, automate routine work, optimize performance and economics, and continuously improve." },
];

const engagementModels = [
  "Advisory and transformation roadmaps",
  "Platform and product engineering programs",
  "Modernization and migration delivery",
  "Cybersecurity improvement programs",
  "Managed technology and security operations",
  "Specialist capability augmentation",
];

const Services = () => {
  const seo = useSEO();
  const location = useLocation();
  const { content } = useData();
  const serviceOfferings = content.services || [];
  const pageTexts = content.pageTexts;
  const textContent = pageTexts?.services || {
    heroTitle: "Enterprise IT Services Built for Global Scale",
    heroDescription: "We secure, modernize, and operate mission-critical technology across cloud, applications, data, and infrastructure.",
    heroLabel: "GLOBAL IT SERVICES",
    sectionTitle: "End-to-End Technology Capabilities",
    sectionDescription: "From DevOps and cybersecurity to cloud, AI, software engineering, and managed operations.",
    stats: [
      { value: "24/7", label: "Global Operations" },
      { value: "10+", label: "Years of Experience" },
      { value: "8", label: "Core Service Lines" },
      { value: "99.9%", label: "Target Availability" }
    ]
  };

  // Fix canonical for /solutions route - should point to /services
  const seoWithCanonical = location.pathname === '/solutions'
    ? { ...seo, canonical: 'https://techwensys.com/services' }
    : seo;

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-[#1d1d1d] selection:bg-[#2583ff] selection:text-white">
      <SEO {...seoWithCanonical} />
      <Navbar />

      {/* Dell-inspired Page Hero Section */}
      <PageHero 
        title={textContent.heroTitle}
        description={textContent.heroDescription}
        label={textContent.heroLabel}
        breadcrumbs={[
          { label: "Services" }
        ]}
        backgroundImage="/techwin-architecture.webp"
        fullBackground={false}
        blueBackground={true}
      />

      {/* Corporate Stats Banner */}
      {textContent.stats && textContent.stats.length > 0 && (
        <section className="py-8 bg-neutral-50 border-b border-neutral-200">
          <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-neutral-200">
              {textContent.stats.map((stat, index) => (
                <div key={stat.label} className={index === 0 ? "" : "pl-4"}>
                  <div className="text-2xl md:text-3xl font-light text-neutral-900">{stat.value}</div>
                  <div className="text-xs text-neutral-650 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="border-b border-neutral-200 bg-white py-14 md:py-20">
        <div className="container mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[.75fr_1.25fr] lg:px-8">
          <p className="text-[11px] font-bold uppercase tracking-[.2em] text-[#315f98]">One accountable partner</p>
          <div>
            <h2 className="text-3xl font-medium leading-tight tracking-[-.04em] text-neutral-950 md:text-4xl">Strategy, engineering, security, and operations—connected end to end.</h2>
            <div className="mt-6 grid gap-5 text-[15px] leading-8 text-neutral-600">
              <p>Techwen Systems helps technology leaders simplify complex estates, strengthen resilience, and accelerate delivery. Our specialists work across the full lifecycle: assessment and roadmap, architecture and implementation, migration and modernization, then continuous improvement through managed services.</p>
              <p>Instead of treating cloud, cybersecurity, software, data, enterprise applications, and operations as separate initiatives, we connect them through shared architecture, governance, automation, and outcome measurement. This creates transformation programs that are easier to manage and more valuable to the business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Service Offerings Grid */}
      <section className="py-16 bg-white border-b border-neutral-200">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="mb-12 border-b border-neutral-200 pb-4 text-left">
            <h2 className="text-xl md:text-2xl font-light text-neutral-950">
              {textContent.sectionTitle}
            </h2>
            {textContent.sectionDescription && (
              <p className="text-xs text-neutral-650 mt-2">
                {textContent.sectionDescription}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto text-left">
            {serviceOfferings.map((offering) => {
              const Icon = getLucideIcon(offering.iconName);
              return (
                <div 
                  key={offering.title}
                  className="group border border-neutral-200 bg-white flex flex-col justify-between rounded-none hover:border-neutral-350 hover:shadow-md transition-all"
                >
                  <Link to={offering.href} className="flex flex-col h-full">
                    {/* Optional Image */}
                    {offering.image && (
                      <div className="relative aspect-[16/10] overflow-hidden border-b border-neutral-200 bg-neutral-100 rounded-none">
                        <img
                          src={offering.image}
                          alt={offering.title}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02] rounded-none"
                        />
                      </div>
                    )}
                    
                    {/* Content */}
                    <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                      <div className="space-y-3">
                        <div className="text-[#1e6fd9] w-9 h-9 flex items-center justify-center bg-neutral-100 shrink-0 rounded-none">
                          <Icon className="w-5 h-5" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-lg font-semibold text-neutral-900 leading-tight">
                          {offering.title}
                        </h3>
                        <p className="text-sm text-neutral-650 leading-6">
                          {offering.description}
                        </p>
                        {offering.features?.length > 0 && <ul className="grid gap-2 border-t border-neutral-100 pt-4">{offering.features.slice(0, 5).map((feature) => <li key={feature} className="flex items-center gap-2 text-xs leading-5 text-neutral-600"><span className="h-1.5 w-1.5 shrink-0 bg-[#315f98]" />{feature}</li>)}</ul>}
                      </div>
                      
                      <div className="pt-2 flex items-center gap-1 text-xs font-bold text-[#1e6fd9] group-hover:underline uppercase tracking-wider">
                        <span>Learn more</span>
                        <span>→</span>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-[#f4f6f8] py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 border-b border-neutral-300 pb-10 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[.2em] text-[#315f98]">Transformation outcomes</p>
              <h2 className="mt-5 max-w-xl text-3xl font-medium leading-tight tracking-[-.045em] text-neutral-950 md:text-5xl">Technology change that improves how the enterprise performs.</h2>
            </div>
            <p className="max-w-2xl text-[15px] leading-8 text-neutral-600 lg:justify-self-end">Every engagement is shaped around business priorities, not isolated technical activity. We connect investment decisions to operational resilience, delivery speed, customer experience, employee productivity, regulatory confidence, and sustainable economics.</p>
          </div>

          <div className="grid md:grid-cols-2">
            {transformationOutcomes.map((outcome, index) => (
              <article key={outcome.number} className={`grid gap-5 border-neutral-300 py-9 md:grid-cols-[70px_1fr] md:p-10 ${index % 2 === 0 ? "md:border-r" : ""} ${index < 2 ? "border-b" : ""}`}>
                <span className="text-2xl font-medium text-[#315f98]">{outcome.number}</span>
                <div>
                  <h3 className="text-xl font-semibold tracking-[-.025em] text-neutral-950">{outcome.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-neutral-600">{outcome.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#061a3a] py-16 text-white md:py-24">
        <div className="container mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[.2em] text-[#8dbbff]">How we engage</p>
              <h2 className="mt-5 max-w-xl text-3xl font-medium leading-tight tracking-[-.045em] md:text-5xl">A disciplined path from ambition to dependable operations.</h2>
            </div>
            <p className="max-w-2xl text-[15px] leading-8 text-white/70 lg:justify-self-end">Our delivery model creates clarity before investment, reduces risk during implementation, and builds the operational capability required to sustain results after launch.</p>
          </div>

          <div className="mt-12 grid border-l border-t border-white/20 md:grid-cols-2 lg:grid-cols-4">
            {deliveryStages.map((stage) => (
              <article key={stage.number} className="min-h-[270px] border-b border-r border-white/20 p-7 lg:p-8">
                <span className="text-xl font-semibold text-[#8dbbff]">{stage.number}</span>
                <h3 className="mt-10 text-2xl font-medium">{stage.title}</h3>
                <p className="mt-5 text-sm leading-7 text-white/65">{stage.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-white py-16 md:py-24">
        <div className="container mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[.2em] text-[#315f98]">Flexible engagement models</p>
            <h2 className="mt-5 max-w-2xl text-3xl font-medium leading-tight tracking-[-.04em] text-neutral-950 md:text-4xl">Expertise configured around your priorities, maturity, and pace of change.</h2>
            <p className="mt-6 max-w-2xl text-[15px] leading-8 text-neutral-600">Some clients need a focused assessment or architecture decision. Others need a multidisciplinary team to execute a complex modernization program or operate critical services around the clock. We shape governance, team structure, location strategy, commercial model, and service levels around the outcome.</p>
            <p className="mt-5 max-w-2xl text-[15px] leading-8 text-neutral-600">Throughout the engagement, client teams retain visibility through clear decision forums, delivery metrics, risk reporting, technical documentation, and structured knowledge transfer.</p>
          </div>
          <div className="border border-neutral-200 bg-[#f7f8fa] p-7 md:p-10">
            <h3 className="text-lg font-semibold text-neutral-950">Ways we can work together</h3>
            <ul className="mt-7 divide-y divide-neutral-200 border-y border-neutral-200">
              {engagementModels.map((model) => (
                <li key={model} className="flex items-center gap-4 py-4 text-sm font-medium text-neutral-800"><CheckCircle2 className="h-5 w-5 shrink-0 text-[#315f98]" />{model}</li>
              ))}
            </ul>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-3 bg-[#061a3a] px-6 py-4 text-sm font-semibold text-white">Discuss your priorities <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Corporate Style */}
      <section className="py-16 md:py-20 bg-[#f5f5f5]">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center text-left">
            
            {/* Left Column: Text & Features Grid */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-bold tracking-wider text-[#1e6fd9] uppercase">
                  Why Choose Us
                </span>
                <h2 className="text-2xl md:text-3xl font-light text-neutral-950 tracking-tight leading-tight">
                  Your Trusted Global Technology Partner
                </h2>
                <p className="text-xs md:text-sm text-neutral-600 leading-relaxed max-w-2xl">
                  We combine engineering depth, security by design, automation, and global delivery to create measurable business outcomes.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Users, title: "Global Delivery", desc: "Enterprise-scale execution" },
                  { icon: Star, title: "Engineering Excellence", desc: "Cloud-native expertise" },
                  { icon: Headphones, title: "Always-On Support", desc: "24/7 managed operations" },
                  { icon: CheckCircle2, title: "Security by Design", desc: "Resilience built into delivery" },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-white border border-neutral-200 p-5 flex gap-4 items-start shadow-sm rounded-none"
                  >
                    <div className="w-10 h-10 bg-neutral-100 flex items-center justify-center text-[#1e6fd9] shrink-0 rounded-none">
                      <item.icon className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-semibold text-neutral-950 text-xs">{item.title}</h4>
                      <p className="text-[11px] text-neutral-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Image Framed */}
            <div className="lg:col-span-5">
              <div className="relative border border-neutral-300 bg-white overflow-hidden rounded-none aspect-[4/3]">
                <img src="/techwin-network-hero.webp" alt="Connected global technology operations" loading="lazy" decoding="async" className="h-full w-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-6 pb-6 pt-20 text-white"><p className="text-[10px] font-bold uppercase tracking-[.18em] text-white/70">Enterprise delivery</p><p className="mt-2 max-w-sm text-lg font-medium">Global expertise. Local accountability. Measurable outcomes.</p></div>
                <div className="absolute right-0 top-0 bg-[#315f98] p-4 text-white rounded-none">
                  <div className="text-2xl font-bold">10+</div>
                  <div className="text-xs text-neutral-100 font-medium">Years of Excellence</div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 md:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 border border-neutral-200 bg-[#f3f5f7] p-8 md:flex-row md:items-center md:justify-between md:p-12">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[.2em] text-[#315f98]">Start the conversation</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-.04em] text-neutral-950 md:text-4xl">Build a secure, modern technology foundation for what comes next.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-600">Tell us where transformation is stalled, where risk is growing, or where technology needs to create more value. We will help define a practical next step.</p>
          </div>
          <Link to="/contact" className="inline-flex shrink-0 items-center justify-center gap-3 bg-[#061a3a] px-7 py-4 text-sm font-semibold text-white">Contact Techwen Systems <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
