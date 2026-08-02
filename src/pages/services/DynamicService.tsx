import React from "react";
import { useParams, Link } from "@/lib/router";
import { useData } from "@/context/DataContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { getLucideIcon } from "@/lib/icons";
import NotFound from "../NotFound";
import { cleanMarkdown } from "@/lib/utils";
import { serviceDetailData } from "@/data/serviceDetailData";

const DynamicService = () => {
  const { slug } = useParams<{ slug: string }>();
  const { content, loading } = useData();

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center text-[#1d1d1d]">
        <div className="animate-spin rounded-none h-10 w-10 border-t-2 border-b-2 border-[#1e6fd9]"></div>
      </div>
    );
  }

  // Find service by slug or by last part of href
  const service = content.services?.find(
    (s) => s.id === slug || s.href?.endsWith(`/${slug}`) || s.href?.endsWith(`/${slug}/`)
  );

  if (!service) {
    return <NotFound />;
  }

  const IconComponent = getLucideIcon(service.iconName);
  const detail = serviceDetailData[slug || ""] || {
    overviewTitle: `${cleanMarkdown(service.title)} designed around measurable enterprise outcomes.`,
    visualImage: "/techwin-network-hero.webp",
    overview: [cleanMarkdown(service.description), "Our specialists connect strategy, architecture, engineering, security, adoption, and operations through one accountable delivery model."],
    capabilities: (service.features || []).slice(0, 4).map((feature) => ({ title: cleanMarkdown(feature), description: `Enterprise-grade ${cleanMarkdown(feature).toLowerCase()} aligned to your architecture, controls, and operating model.` })),
    approach: [
      { title: "Discover", description: "Assess current capabilities, risks, dependencies, priorities, and measurable outcomes." },
      { title: "Design", description: "Define target architecture, delivery roadmap, governance, and operating model." },
      { title: "Deliver", description: "Implement in controlled increments with security, quality, and adoption embedded." },
      { title: "Improve", description: "Measure performance and continuously optimize reliability, experience, risk, and cost." },
    ],
    outcomes: ["Reduced technology risk", "Faster and more reliable delivery", "Improved operational visibility", "Sustainable business value"],
  };

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-[#1d1d1d] flex flex-col">
      <SEO 
        title={`${cleanMarkdown(service.title)} | Enterprise IT Services | Techwin Systems`}
        description={cleanMarkdown(service.description)}
      />
      <Navbar />

      <main className="flex-grow">
        {/* Dell-inspired Page Hero */}
        <PageHero 
          title={cleanMarkdown(service.title)}
          description={cleanMarkdown(service.description)}
          label="ENTERPRISE IT SERVICES"
          breadcrumbs={[
            { label: "Services", href: "/services" },
            { label: cleanMarkdown(service.title) }
          ]}
          backgroundImage={service.image || "/techwin-architecture.webp"}
          fullBackground={false}
          blueBackground={true}
        />

        {/* Overview & Deliverables Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 text-left">
              
              {/* Left Column: Details & Checklist */}
              <div className="lg:col-span-7 space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 text-[#1e6fd9] bg-neutral-100 p-2 rounded-none">
                    <IconComponent className="w-5 h-5" strokeWidth={1.5} />
                    <span className="text-xs font-bold uppercase tracking-wider">Service Overview</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-medium tracking-[-.04em] text-neutral-900 leading-tight">
                    {detail.overviewTitle}
                  </h2>
                  <div className="grid gap-5 text-[15px] text-neutral-600 leading-8">
                    {detail.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                </div>

                {/* Features list */}
                {service.features && service.features.length > 0 && (
                  <div className="pt-4">
                    <p className="mb-5 text-[11px] font-bold uppercase tracking-[.18em] text-[#315f98]">Core service components</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((feature, idx) => (
                      <div 
                        key={idx}
                        className="bg-[#f5f5f5] border border-neutral-200 p-4 flex items-start gap-3 rounded-none hover:bg-white hover:shadow-md transition-all duration-150"
                      >
                        <CheckCircle2 className="w-5 h-5 text-[#1e6fd9] shrink-0 mt-0.5" strokeWidth={2} />
                        <span className="text-sm font-semibold text-neutral-800 leading-5">
                          {cleanMarkdown(feature)}
                        </span>
                      </div>
                    ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Framed Image & CTA Box */}
              <div className="lg:col-span-5 space-y-6">
                {/* Visual Representation */}
                <div className="relative border border-neutral-300 bg-neutral-100 overflow-hidden rounded-none aspect-[16/10] shadow-sm">
                  <img
                    src={detail.visualImage}
                    alt={`${cleanMarkdown(service.title)} capabilities`}
                    className="w-full h-full object-cover rounded-none"
                  />
                </div>

                {/* Direct Action Box */}
                <div className="bg-[#f5f5f5] border border-neutral-200 p-6 md:p-8 space-y-4 rounded-none">
                  <h3 className="text-lg font-semibold text-neutral-900">
                    Discuss your {cleanMarkdown(service.title).toLowerCase()} priorities
                  </h3>
                  <p className="text-sm text-neutral-600 leading-7">
                    Connect with our specialists to review your current environment, immediate challenges, target outcomes, and a practical path forward.
                  </p>
                  <div>
                    <Link to="/contact">
                      <button className="w-full bg-gradient-to-r from-[#f7d84a] via-[#fff7c2] to-white hover:from-[#ffe15a] hover:via-white hover:to-[#f8e992] text-black text-xs font-bold uppercase tracking-wider py-3.5 px-6 rounded-none border border-[#e2c53c] shadow-[0_10px_28px_rgba(226,197,60,0.22)] hover:shadow-[0_12px_34px_rgba(226,197,60,0.34)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f0cf38] focus-visible:ring-offset-2 transition-all duration-300">
                        Schedule a Consultation
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="border-y border-neutral-200 bg-[#f4f6f8] py-16 md:py-24">
          <div className="container mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-8 border-b border-neutral-300 pb-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[.2em] text-[#315f98]">What we deliver</p>
                <h2 className="mt-5 text-3xl font-medium leading-tight tracking-[-.045em] text-neutral-950 md:text-5xl">Integrated capabilities for lasting change.</h2>
              </div>
              <p className="max-w-2xl text-[15px] leading-8 text-neutral-600 lg:justify-self-end">We bring together the technology, operating-model, governance, and adoption capabilities required to move from isolated initiatives to sustainable enterprise performance.</p>
            </div>
            <div className="grid md:grid-cols-2">
              {detail.capabilities.map((capability, index) => (
                <article key={capability.title} className={`p-7 md:p-10 ${index % 2 === 0 ? "md:border-r md:border-neutral-300" : ""} ${index < 2 ? "border-b border-neutral-300" : ""}`}>
                  <span className="text-xl font-semibold text-[#315f98]">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="mt-6 text-xl font-semibold tracking-[-.025em] text-neutral-950">{capability.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-neutral-600">{capability.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#061a3a] px-4 py-12 text-white sm:px-6 md:py-20 lg:px-8">
          <div className="mx-auto max-w-[1440px] overflow-hidden rounded-[28px] border border-white/20 bg-[#071f44] shadow-[0_24px_70px_rgba(0,0,0,0.24)]">
            <div className="grid lg:grid-cols-[.72fr_1.28fr]">
              <div className="p-8 sm:p-10 lg:p-14">
                <p className="text-[11px] font-bold uppercase tracking-[.2em] text-[#8dbbff]">Delivery approach</p>
                <h2 className="mt-5 text-3xl font-medium leading-tight tracking-[-.045em] md:text-5xl">From current-state evidence to measurable improvement.</h2>
                <p className="mt-6 max-w-xl text-[15px] leading-8 text-white/65">Our approach creates clarity before investment, manages risk throughout delivery, and gives client teams the architecture, knowledge, and operating discipline needed to sustain results.</p>
              </div>
              <div className="grid border-t border-white/20 sm:grid-cols-2 lg:border-l lg:border-t-0">
                {detail.approach.map((stage, index) => (
                  <article key={stage.title} className="min-h-[230px] border-b border-r border-white/20 p-7">
                    <span className="text-lg font-semibold text-[#8dbbff]">{String(index + 1).padStart(2, "0")}</span>
                    <h3 className="mt-8 text-xl font-medium">{stage.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-white/65">{stage.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-neutral-200 bg-white py-16 md:py-24">
          <div className="container mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[.85fr_1.15fr] lg:px-8">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[.2em] text-[#315f98]">Business outcomes</p>
              <h2 className="mt-5 text-3xl font-medium leading-tight tracking-[-.04em] text-neutral-950 md:text-4xl">Value measured beyond project completion.</h2>
              <p className="mt-6 text-[15px] leading-8 text-neutral-600">Success measures are agreed at the beginning of the engagement and reviewed throughout delivery. Technical progress is connected to service performance, risk, experience, economics, and business capability.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {detail.outcomes.map((outcome) => (
                <div key={outcome} className="flex min-h-[130px] items-start gap-4 border border-neutral-200 bg-[#f7f8fa] p-6">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#315f98]" />
                  <p className="text-sm font-semibold leading-6 text-neutral-850">{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-14 md:py-20">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 border border-neutral-200 bg-[#f3f5f7] p-8 md:flex-row md:items-center md:justify-between md:p-12">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[.2em] text-[#315f98]">Next step</p>
              <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-.04em] text-neutral-950 md:text-4xl">Turn your {cleanMarkdown(service.title).toLowerCase()} priorities into a practical delivery roadmap.</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-600">Share your objectives, current constraints, and desired timeline. Our specialists will help define a focused starting point.</p>
            </div>
            <Link to="/contact" className="inline-flex shrink-0 items-center justify-center gap-3 border border-[#e3bd2d] bg-gradient-to-r from-[#f4c430] via-[#ffe88a] to-white px-7 py-4 text-sm font-semibold text-neutral-950 shadow-[0_10px_28px_rgba(185,142,0,.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(185,142,0,.28)]">Talk with our specialists <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DynamicService;
