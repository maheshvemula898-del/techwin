import { useLocation } from "@/lib/router";
import { useData } from "@/context/DataContext";
import { seoData as staticSeoData } from "@/data/seoData";

export const useSEO = () => {
  const location = useLocation();
  const { content } = useData();
  const pathname = location.pathname;
  
  const customSeoData = content?.seoData || {};
  const exactSeo = customSeoData[pathname] || staticSeoData[pathname];

  if (exactSeo) return exactSeo;

  const pageName = pathname
    .split("/")
    .filter(Boolean)
    .at(-1)
    ?.replace(/-/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase()) || "Technology Services";

  return {
    title: `${pageName} | Techwin Systems`,
    description: `Explore ${pageName.toLowerCase()} capabilities, insights, and enterprise technology guidance from Techwin Systems.`,
    keywords: `${pageName.toLowerCase()}, enterprise technology, Techwin Systems`,
    canonical: `https://techwensys.com${pathname === "/" ? "/" : pathname.replace(/\/$/, "")}`,
  };
};
