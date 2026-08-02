import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "@/lib/router";
import { HelmetProvider } from "react-helmet-async";
import { lazy, Suspense } from "react";
import { ScrollToTop } from "./components/ScrollToTop";
import { CookieConsent } from "./components/CookieConsent";
import { DataProvider } from "./context/DataContext";
import { AuthProvider } from "./context/AuthContext";

const Index = lazy(() => import("./pages/Index"));
const Products = lazy(() => import("./pages/Products"));
const DynamicPage = lazy(() => import("./pages/DynamicPage"));
const SapEcc = lazy(() => import("./pages/products/SapEcc"));
const SapFiori = lazy(() => import("./pages/products/SapFiori"));
const SapBtp = lazy(() => import("./pages/products/SapBtp"));
const Services = lazy(() => import("./pages/Services"));
const Industries = lazy(() => import("./pages/Industries"));
const Resources = lazy(() => import("./pages/Resources"));
const BlogDetail = lazy(() => import("./pages/BlogDetail"));
const Documentation = lazy(() => import("./pages/resources/Documentation"));
const VideoTutorials = lazy(() => import("./pages/resources/VideoTutorials"));
const Whitepapers = lazy(() => import("./pages/resources/Whitepapers"));
const Downloads = lazy(() => import("./pages/resources/Downloads"));
const FAQ = lazy(() => import("./pages/resources/FAQ"));
const DeveloperResources = lazy(() => import("./pages/resources/DeveloperResources"));
const TrainingMaterials = lazy(() => import("./pages/resources/TrainingMaterials"));
const TrainingClasses = lazy(() => import("./pages/resources/TrainingClasses"));
const Employees = lazy(() => import("./pages/resources/Employees"));
const Skills = lazy(() => import("./pages/resources/Skills"));
const Leadership = lazy(() => import("./pages/resources/Leadership"));
const Facilities = lazy(() => import("./pages/resources/Facilities"));
const Equipment = lazy(() => import("./pages/resources/Equipment"));
const Capital = lazy(() => import("./pages/resources/Capital"));
const Revenue = lazy(() => import("./pages/resources/Revenue"));
const Software = lazy(() => import("./pages/resources/Software"));
const Patents = lazy(() => import("./pages/resources/Patents"));
const Research = lazy(() => import("./pages/resources/Research"));
const Brand = lazy(() => import("./pages/resources/Brand"));
const Trademarks = lazy(() => import("./pages/resources/Trademarks"));
const Processes = lazy(() => import("./pages/resources/Processes"));
const SupplyChain = lazy(() => import("./pages/resources/SupplyChain"));
const Distribution = lazy(() => import("./pages/resources/Distribution"));
const QualityControl = lazy(() => import("./pages/resources/QualityControl"));
const Placements = lazy(() => import("./pages/resources/Placements"));
const Partners = lazy(() => import("./pages/Partners"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Careers = lazy(() => import("./pages/Careers"));
const WhoWeAre = lazy(() => import("./pages/WhoWeAre"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Admin = lazy(() => import("./pages/Admin"));
const Privacy = lazy(() => import("./pages/legal/Privacy"));
const Legal = lazy(() => import("./pages/legal/Legal"));
const Cookies = lazy(() => import("./pages/legal/Cookies"));
const Terms = lazy(() => import("./pages/legal/Terms"));
const DynamicService = lazy(() => import("./pages/services/DynamicService"));
const DynamicIndustry = lazy(() => import("./pages/industries/DynamicIndustry"));

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <DataProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
          <div className="enterprise-theme">
          <ScrollToTop />
          <Suspense fallback={<div className="min-h-screen bg-white" aria-label="Loading page" />}>
          <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/contract-staffing" element={<SapEcc />} />
          <Route path="/products/direct-hire" element={<SapFiori />} />
          <Route path="/products/executive-search" element={<SapBtp />} />
          {/* Fallback legacy routes */}
          <Route path="/products/sap-ecc" element={<SapEcc />} />
          <Route path="/products/sap-fiori" element={<SapFiori />} />
          <Route path="/products/sap-btp" element={<SapBtp />} />
          <Route path="/services" element={<Services />} />
          <Route path="/solutions" element={<Services />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/blog/:slug" element={<BlogDetail />} />
          <Route path="/resources/documentation" element={<Documentation />} />
          <Route path="/resources/video-tutorials" element={<VideoTutorials />} />
          <Route path="/resources/whitepapers" element={<Whitepapers />} />
          <Route path="/resources/downloads" element={<Downloads />} />
          <Route path="/resources/faq" element={<FAQ />} />
          <Route path="/resources/developer-resources" element={<DeveloperResources />} />
          <Route path="/resources/training-materials" element={<TrainingMaterials />} />
          <Route path="/resources/training-classes" element={<TrainingClasses />} />
          {/* Human Resources */}
          <Route path="/resources/employees" element={<Employees />} />
          <Route path="/resources/skills" element={<Skills />} />
          <Route path="/resources/leadership" element={<Leadership />} />
          {/* Physical Resources */}
          <Route path="/resources/facilities" element={<Facilities />} />
          <Route path="/resources/equipment" element={<Equipment />} />
          {/* Financial Resources */}
          <Route path="/resources/capital" element={<Capital />} />
          <Route path="/resources/revenue" element={<Revenue />} />
          {/* Technological Resources */}
          <Route path="/resources/software" element={<Software />} />
          <Route path="/resources/patents" element={<Patents />} />
          <Route path="/resources/research" element={<Research />} />
          {/* Intellectual Resources */}
          <Route path="/resources/brand" element={<Brand />} />
          <Route path="/resources/trademarks" element={<Trademarks />} />
          <Route path="/resources/processes" element={<Processes />} />
          {/* Operational Resources */}
          <Route path="/resources/supply-chain" element={<SupplyChain />} />
          <Route path="/resources/distribution" element={<Distribution />} />
          <Route path="/resources/quality-control" element={<QualityControl />} />
          {/* Training & Placements */}
          <Route path="/resources/placements" element={<Placements />} />
          
          <Route path="/services/:slug" element={<DynamicService />} />
          <Route path="/industries/:slug" element={<DynamicIndustry />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/contact" element={<Contact />} />
          {/* Legal Pages */}
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/terms" element={<Terms />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="/p/:slug" element={<DynamicPage />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
      <CookieConsent />
      </div>
      </BrowserRouter>
    </TooltipProvider>
   </DataProvider>
  </AuthProvider>
 </QueryClientProvider>
 </HelmetProvider>
);

export default App;
