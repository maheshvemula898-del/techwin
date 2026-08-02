import { Link } from "@/lib/router";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useData } from "@/context/DataContext";
import { initialPageTexts } from "@/data/pageContentData";

export const HeroSection = () => {
  const { content } = useData();
  const homeTexts = content?.pageTexts?.home || initialPageTexts.home || {};

  const heroLabel = homeTexts.heroLabel || "Global Technology Services";
  const heroTitle = homeTexts.heroTitle || "Engineering Secure Digital Enterprises";
  const heroDescription = homeTexts.heroDescription || "Techwin Systems delivers DevOps, cybersecurity, cloud, software engineering, data and AI, and managed technology solutions for global enterprises.";

  return (
    <section className="relative bg-[#faf8f3] pt-[82px] md:pt-[136px] pb-8 md:pb-12 font-sans antialiased text-[#101820] overflow-hidden">
      <div className="absolute top-24 left-[-12rem] w-96 h-96 rounded-full bg-[#2583ff]/10 blur-3xl pointer-events-none" />
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        {/* Promo Banner Split Grid */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 border border-[#2583ff]/25 rounded-[24px] overflow-hidden min-h-[500px] shadow-[0_30px_80px_rgba(9,19,28,0.13)] bg-white">
          {/* Left Side: Light Gray Promo Information */}
          <div className="lg:col-span-5 bg-[linear-gradient(145deg,#fffdf8_0%,#f4efe5_100%)] p-8 md:p-14 flex flex-col justify-center text-left space-y-7">
            {heroLabel && (
              <span className="text-[10px] font-bold tracking-[0.24em] text-[#1e6fd9] uppercase flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                {heroLabel}
              </span>
            )}
            
            <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-semibold tracking-[-0.035em] text-[#101820] leading-[0.98]">
              {heroTitle}
            </h2>
            
            <p className="text-sm text-[#55616b] leading-7 max-w-md">
              {heroDescription}
            </p>
            
            <div className="flex flex-wrap gap-3 pt-4">
              <Link to="/products">
                <button className="bg-[#101820] hover:bg-[#1c2b38] text-[#f8f1e4] text-[11px] font-semibold uppercase tracking-[0.14em] py-4 px-7 rounded-full transition-all shadow-[0_10px_30px_rgba(9,19,28,0.2)]">
                  Explore Solutions
                </button>
              </Link>
              <Link to="/contact">
                <button className="bg-transparent hover:bg-[#2583ff]/10 text-[#101820] border border-[#168f7e] text-[11px] font-semibold uppercase tracking-[0.14em] py-4 px-7 rounded-full transition-all">
                  Book Consultation
                </button>
              </Link>
            </div>
          </div>

          {/* Right Side: Dell Blue & Tech Presentation */}
          <div className="lg:col-span-7 bg-[#0a1824] relative flex items-center justify-center min-h-[340px] lg:min-h-auto overflow-hidden">
            {/* Visual background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#122b3d]/30 via-[#09131c]/35 to-black/80 pointer-events-none z-0" />
            
            {/* Tech Plexus Background video inside the promo banner right column */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-45 saturate-75 z-0"
            >
              <source src="/hero-video-bg.mp4" type="video/mp4" />
            </video>
            
            {/* White overlay border and text tag */}
            <div className="relative z-10 p-8 text-center text-white space-y-3">
              <div className="border border-[#66b2ff]/45 backdrop-blur-md bg-[#07131d]/45 p-8 md:p-12 max-w-lg mx-auto space-y-5 rounded-[20px] shadow-2xl">
                <div className="w-10 h-px bg-[#66b2ff] mx-auto" />
                <h3 className="font-serif text-2xl md:text-4xl font-semibold tracking-tight text-[#fbf5e9]">
                  Enterprise Technology. Delivered.
                </h3>
                <p className="text-sm text-white/70 leading-6">
                  Modernize platforms, strengthen cyber resilience, and accelerate innovation with one global technology partner.
                </p>
                <Link to="/services" className="inline-flex items-center gap-2 text-[10px] font-bold text-[#66b2ff] hover:text-[#f1d9a8] uppercase tracking-[0.18em]">
                  <span>View Services Catalog</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
