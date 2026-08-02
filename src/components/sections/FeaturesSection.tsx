import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { getLucideIcon } from "@/lib/icons";
import { Link } from "@/lib/router";
import { useData } from "@/context/DataContext";

export const FeaturesSection = () => {
  const { content } = useData();
  
  const sectionTitle = content.pageTexts?.home?.sectionTitle || "One global technology partner across cloud, security, applications, data, and operations.";
  const featuresList = content.homeFeatures || [];

  return (
    <section 
      className="relative py-20 md:py-28 bg-[#071a2b] text-white font-sans antialiased overflow-hidden"
      style={{
        backgroundImage: `
          radial-gradient(circle at 12% 20%, rgba(0, 118, 214, 0.34), transparent 34%),
          radial-gradient(circle at 88% 78%, rgba(43, 170, 255, 0.18), transparent 30%),
          linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px),
          linear-gradient(135deg, #06131f 0%, #092b49 52%, #071a2b 100%)
        `,
        backgroundSize: 'auto, auto, 48px 48px, 48px 48px, auto'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none" />
      <div className="relative z-10 container mx-auto px-4 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-left border-b border-white/10 pb-6">
          <span className="text-[11px] font-semibold text-[#1e6fd9] uppercase tracking-widest block mb-2">
            Signature Capabilities
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold tracking-tight text-[#f7f0e3] leading-tight max-w-4xl">
            {sectionTitle}
          </h2>
        </div>

        {/* Features Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuresList.map((feature, index) => {
            const IconComponent = getLucideIcon(feature.iconName);
            return (
              <motion.div
                key={feature.id || feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="group relative flex flex-col justify-between bg-[#f7f3ea] text-[#101820] rounded-[18px] p-7 pt-14 min-h-[280px] border border-[#66b2ff]/25 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(0,0,0,0.28)] transition-all duration-300 overflow-hidden"
              >
                {/* Dell-inspired Top-Left Tag Label */}
                <div className="absolute top-0 left-0 bg-[#168f7e] text-[#0b151e] text-[9px] font-bold uppercase tracking-[0.18em] px-5 py-2 rounded-br-[12px] z-10">
                  {feature.title.split(" ")[0]}
                </div>

                <div className="space-y-4">
                  {/* Icon */}
                  <div className="w-10 h-10 bg-white/60 border border-[#d2d2d2] flex items-center justify-center rounded-none mb-2">
                    <IconComponent className="w-5 h-5 text-[#1e6fd9]" strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-[#1d1d1d]">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs md:text-sm text-[#555555] leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Explore link */}
                <div className="pt-4 border-t border-gray-300 mt-4">
                  <Link
                    to={feature.link}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1e6fd9] hover:text-[#195fc0] hover:underline uppercase tracking-wider"
                  >
                    <span>{feature.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
