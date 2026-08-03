import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { SEO } from "@/components/SEO";
import { useSEO } from "@/hooks/useSEO";
import { useData } from "@/context/DataContext";

const WhoWeAre = () => {
  const seo = useSEO();
  const { content } = useData();
  const pageTexts = content.pageTexts;
  const textContent = pageTexts?.whoWeAre || {
    heroTitle: "Who We Are",
    heroDescription: "Techwen Systems is a global IT services company helping enterprises modernize, secure, and operate their digital business.",
    heroLabel: "ABOUT US",
    sectionTag: "About Techwen Systems",
    storyTitle: "Our Mission & Vision",
    storyParagraphs: [
      "Techwen Systems delivers enterprise technology services across DevOps, cybersecurity, cloud, software engineering, data and AI, enterprise applications, and managed operations.",
      "Our Mission: Help organizations innovate faster, operate securely, and create lasting value through technology.",
      "Our Vision: Become a trusted global technology partner for the world's most ambitious enterprises."
    ],
    stats: [
      { value: "10+", label: "Years of Excellence" }
    ]
  };
  
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-neutral-900 selection:bg-[#2583ff] selection:text-white">
      <SEO {...seo} />
      <Navbar />
      
      {/* Dell-inspired Page Hero Section */}
      <PageHero 
        title={textContent.heroTitle}
        description={textContent.heroDescription}
        label={textContent.heroLabel}
        breadcrumbs={[
          { label: "Who We Are" }
        ]}
        backgroundImage="/techwin-network-hero.webp"
        blueBackground={true}
      />

      {/* Our Story Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-left">
              {textContent.sectionTag && (
                <span className="text-xs font-bold tracking-wider text-[#1e6fd9] uppercase block">
                  {textContent.sectionTag}
                </span>
              )}
              <h2 className="text-2xl md:text-3xl font-light text-neutral-900 tracking-tight leading-tight">
                {textContent.storyTitle}
              </h2>
              <div className="space-y-4 text-neutral-600 text-xs md:text-sm leading-relaxed">
                {textContent.storyParagraphs && textContent.storyParagraphs.map((para, i) => (
                  <p key={i}>
                    {para}
                  </p>
                ))}
              </div>
            </div>
            
            <div className="relative max-w-md mx-auto lg:ml-auto w-full">
              <div className="border border-neutral-300 bg-neutral-250 p-2 overflow-hidden shadow-sm rounded-none">
                <img 
                  src="/techwin-architecture.webp" 
                  alt="Techwen Systems global technology services"
                  className="w-full h-auto object-cover rounded-none"
                />
              </div>
              {textContent.stats && textContent.stats.length > 0 && (
                <div className="absolute -bottom-4 -left-4 bg-[#1e6fd9] text-white p-4 rounded-none">
                  <div className="text-2xl font-bold">{textContent.stats[0].value}</div>
                  <div className="text-xs font-medium text-neutral-100">{textContent.stats[0].label}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhoWeAre;
