import { motion } from "framer-motion";
import { Link } from "@/lib/router";
import { ArrowRight, ChevronRight, Home } from "lucide-react";

interface PageHeroProps {
  title: string;
  description?: string;
  label?: string;
  breadcrumbs?: { label: string; href?: string }[];
  ctaText?: string;
  ctaHref?: string;
  backgroundImage?: string;
  compact?: boolean;
  fullBackground?: boolean;
  textBgWhite?: boolean;
  extraPadding?: boolean;
  blueBackground?: boolean;
  industryBackground?: boolean;
  backgroundPosition?: string;
  mobileBackgroundImage?: string;
  mobileBackgroundPosition?: string;
  mobileBackgroundSize?: string;
  mobileBackgroundBehindText?: boolean;
  backgroundSize?: string;
}

export const PageHero = ({
  title,
  description,
  label,
  breadcrumbs = [],
  ctaText,
  ctaHref = "/contact",
  backgroundImage,
  compact = false,
  fullBackground,
  textBgWhite = false,
  backgroundPosition = "center",
  mobileBackgroundImage,
  mobileBackgroundPosition = "center",
  mobileBackgroundSize = "cover",
  mobileBackgroundBehindText = true,
  backgroundSize = "cover",
}: PageHeroProps) => {
  const isLight = textBgWhite;
  const useFullBackground = Boolean(backgroundImage && fullBackground !== false);

  return (
    <section className={`site-page-hero ${isLight ? "site-page-hero--light" : ""} relative overflow-hidden border-b pt-[72px] ${isLight ? "border-slate-200 bg-[#f8fafc] text-[#071126]" : "border-white/15 bg-[#071e45] text-white"}`}>
      {backgroundImage && useFullBackground && (
        <img
          src={backgroundImage}
          onError={(event) => { event.currentTarget.src = "/techwin-network-hero.webp"; }}
          alt=""
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 top-[72px] hidden h-auto w-full object-cover lg:block"
          style={{ objectPosition: backgroundPosition, objectFit: backgroundSize === "contain" ? "contain" : "cover" }}
        />
      )}

      {backgroundImage && useFullBackground && !isLight && (
        <div className="absolute inset-x-0 bottom-0 top-[72px] hidden bg-gradient-to-r from-[#071e45]/95 via-[#071e45]/75 to-[#071e45]/20 lg:block" />
      )}

      {backgroundImage && mobileBackgroundBehindText && (
        <>
          <img
            src={mobileBackgroundImage || backgroundImage}
            onError={(event) => { event.currentTarget.src = "/techwin-network-hero.webp"; }}
            alt=""
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 top-[72px] h-[calc(100%_-_72px)] w-full object-cover lg:hidden"
            style={{ objectPosition: mobileBackgroundPosition, objectFit: mobileBackgroundSize === "contain" ? "contain" : "cover" }}
          />
          <div className={`absolute inset-x-0 bottom-0 top-[72px] lg:hidden ${isLight ? "bg-gradient-to-r from-white via-white/90 to-white/20" : "bg-gradient-to-r from-[#071e45]/95 via-[#071e45]/80 to-[#071e45]/20"}`} />
        </>
      )}

      <div className={`relative mx-auto grid max-w-[1512px] ${backgroundImage && !useFullBackground ? "lg:grid-cols-[1.08fr_.72fr]" : "grid-cols-1"}`}>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .5 }}
          className={`${compact ? "py-12 lg:py-16" : "py-20 lg:py-28"} relative z-10 flex flex-col justify-center px-6 lg:px-16 ${useFullBackground ? "lg:min-h-[350px] lg:max-w-[930px]" : ""} ${backgroundImage && mobileBackgroundBehindText ? "min-h-[330px]" : ""}`}
        >
          {breadcrumbs.length > 0 && (
            <nav className={`mb-7 flex flex-wrap items-center gap-2 text-[11px] ${isLight ? "text-slate-500" : "text-white/45"}`}>
              <Link to="/" aria-label="Home" className={isLight ? "hover:text-[#2583ff]" : "hover:text-[#66b2ff]"}><Home className="h-3.5 w-3.5" /></Link>
              {breadcrumbs.map((crumb, index) => (
                <span key={`${crumb.label}-${index}`} className="flex items-center gap-2">
                  <ChevronRight className="h-3 w-3" />
                  {crumb.href ? <Link to={crumb.href} className={isLight ? "hover:text-slate-950" : "hover:text-white"}>{crumb.label}</Link> : <span className={isLight ? "text-slate-700" : "text-white/75"}>{crumb.label}</span>}
                </span>
              ))}
            </nav>
          )}
          {label && <p className={`mb-5 text-[10px] font-bold uppercase tracking-[0.22em] ${isLight ? "text-[#071126]" : "text-[#66b2ff]"}`}>{label}</p>}
          <h1 className={`${compact ? "text-[38px] lg:text-[52px]" : "text-[46px] lg:text-[68px]"} max-w-4xl font-medium leading-[1.02] tracking-[-.05em]`}>{title}</h1>
          {description && <p className={`mt-5 max-w-2xl text-[14px] leading-7 ${isLight ? "text-slate-600" : "text-white/60"}`}>{description}</p>}
          {ctaText && <Link to={ctaHref} className="mt-8 inline-flex w-fit items-center gap-8 bg-[#2583ff] px-6 py-4 text-sm font-semibold text-[#041126] hover:bg-[#6db6ff]">{ctaText}<ArrowRight className="h-4 w-4" /></Link>}
        </motion.div>

        {backgroundImage && !useFullBackground && (
          <div className={`relative min-h-[300px] border-t lg:min-h-full lg:border-l lg:border-t-0 ${mobileBackgroundBehindText ? "hidden lg:block" : ""} ${isLight ? "border-slate-200" : "border-white/15"}`}>
            <img src={backgroundImage} onError={(event) => { event.currentTarget.src = "/techwin-network-hero.webp"; }} alt="" aria-hidden="true" className={`absolute inset-0 h-full w-full object-cover ${isLight ? "" : "site-blue-image opacity-70"}`} style={{ objectPosition: backgroundPosition }} />
            {!isLight && <div className="absolute inset-0 bg-[#071e45]/15" />}
          </div>
        )}

        {backgroundImage && useFullBackground && !mobileBackgroundBehindText && (
          <div className={`relative min-h-[220px] border-t lg:hidden ${isLight ? "border-slate-200" : "border-white/15"}`}>
            <img
              src={mobileBackgroundImage || backgroundImage}
              onError={(event) => { event.currentTarget.src = "/techwin-network-hero.webp"; }}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover"
              style={{ objectPosition: mobileBackgroundPosition, objectFit: mobileBackgroundSize === "contain" ? "contain" : "cover" }}
            />
          </div>
        )}
      </div>
    </section>
  );
};
