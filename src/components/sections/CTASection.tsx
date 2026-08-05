import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, HelpCircle } from "lucide-react";
import { Link } from "@/lib/router";
import { useData } from "@/context/DataContext";

export const CTASection = () => {
  const { content } = useData();
  const homeText = content.pageTexts?.home || {};
  
  const ctaTitle = homeText.ctaTitle || "Ready to scale your tech team?";
  const ctaDescription = homeText.ctaDescription || "Connect with Techwen Systems to modernize platforms, strengthen cyber resilience, and accelerate enterprise innovation.";
  const ctaButtonText = homeText.ctaButtonText || "Contact Us Now";

  return (
    <section 
      className="relative py-20 md:py-28 bg-[#09131c] text-white font-sans antialiased overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(120deg, rgba(7, 14, 14, 0.96), rgba(10, 26, 24, 0.9)), url("/techwin-architecture.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '25px 25px',
      }} />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-left"
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#faf3e6] leading-[1.02]">
              {ctaTitle}
            </h2>

            <p className="text-xs md:text-sm text-white/80 leading-relaxed max-w-xl">
              {ctaDescription}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link to="/contact">
                <Button
                  className="bg-[#2583ff] text-[#09131c] hover:bg-[#6db6ff] px-7 py-6 h-auto text-[10px] font-bold uppercase tracking-[0.16em] rounded-full transition-all shadow-xl"
                >
                  <span>{ctaButtonText}</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/services">
                <Button
                  className="bg-transparent border border-[#66b2ff]/65 text-[#f7f0e3] hover:bg-[#66b2ff]/10 px-7 py-6 h-auto text-[10px] font-bold uppercase tracking-[0.16em] rounded-full transition-all"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right Content - Dell Styled Flat Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="relative bg-[#f8f4eb] text-[#101820] rounded-[22px] p-7 md:p-10 border border-[#66b2ff]/30 shadow-[0_30px_70px_rgba(0,0,0,0.3)] text-left">
              <div className="relative space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 bg-[#101820] flex items-center justify-center rounded-full text-[#66b2ff]">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl font-semibold tracking-tight text-[#101820]">
                    Get a Technology Strategy Session
                  </h3>
                </div>

                <p className="text-xs md:text-sm text-[#555555] leading-relaxed">
                  Expert guidance for cloud, security, software, data, and operations. Let's discuss your priorities and design a practical transformation roadmap.
                </p>

                {/* Trust Indicators */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#e5e5e5] text-center">
                  <div>
                    <div className="text-lg md:text-xl font-bold text-[#1e6fd9] mb-1">24/7</div>
                    <div className="text-[10px] text-[#777777] uppercase font-bold tracking-wider">Support</div>
                  </div>
                  <div>
                    <div className="text-lg md:text-xl font-bold text-[#1e6fd9] mb-1">100%</div>
                    <div className="text-[10px] text-[#777777] uppercase font-bold tracking-wider">Client Focus</div>
                  </div>
                  <div>
                    <div className="text-lg md:text-xl font-bold text-[#1e6fd9] mb-1">Free</div>
                    <div className="text-[10px] text-[#777777] uppercase font-bold tracking-wider">Consultation</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
