import { motion } from "framer-motion";
import { getLucideIcon } from "@/lib/icons";
import { useData } from "@/context/DataContext";

export const WhyChooseUsSection = () => {
  const { content } = useData();
  
  const homeText = content.pageTexts?.home || {};
  const whyChooseTitle = homeText.whyChooseTitle || "Your Trusted Global Technology Partner";
  const whyChooseDescription = homeText.whyChooseDescription || "We combine deep technical vetting, a global network of pre-screened developers, and a client-first mindset to help organizations scale their tech teams with speed and precision.";
  const reasonsList = content.homeReasons || [];

  return (
    <section className="relative py-20 md:py-28 bg-[#faf8f3] border-t border-[#2583ff]/20 font-sans antialiased text-[#101820] overflow-hidden">
      <div className="absolute right-[-8rem] top-10 w-80 h-80 rounded-full bg-[#2583ff]/10 blur-3xl" />
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-left"
          >
            <span className="text-[10px] font-bold text-[#1e6fd9] uppercase tracking-[0.22em] block">
              Why Choose Techwin Systems
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#101820] leading-[1.02]">
              {whyChooseTitle}
            </h2>
            <p className="text-sm text-[#5e6870] leading-7 max-w-xl">
              {whyChooseDescription}
            </p>
          </motion.div>

          {/* Right Content - Reasons Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasonsList.map((reason, index) => {
              const IconComponent = getLucideIcon(reason.iconName);
              return (
                <motion.div
                  key={reason.id || reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  className="bg-white/80 backdrop-blur-sm p-7 rounded-[18px] border border-[#2583ff]/25 hover:bg-white hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(9,19,28,0.1)] transition-all duration-300"
                >
                  <div className="w-11 h-11 bg-[#101820] flex items-center justify-center rounded-full mb-5 text-[#66b2ff]">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="font-sans text-sm font-semibold text-[#101820] mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-xs text-[#555555] leading-relaxed">
                    {reason.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
