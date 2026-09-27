import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const Home = lazy(() => import("./pages/HomeEditorial"));
const About = lazy(() => import("./pages/AboutEditorial"));
const Services = lazy(() => import("./pages/ServicesEditorial"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const Projects = lazy(() => import("./pages/ProjectsEditorial"));
const Insights = lazy(() => import("./pages/InsightsEditorial"));
const InsightDetail = lazy(() => import("./pages/InsightDetail"));
const Contact = lazy(() => import("./pages/ContactEditorial"));
const Legal = lazy(() => import("./pages/LegalRedesign"));
const NotFound = lazy(() => import("./pages/NotFoundRedesign"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            <Suspense fallback={<div className="flex min-h-[50vh] items-center justify-center" role="status"><span className="font-display text-sm font-semibold text-muted-foreground">Quality1st lädt...</span></div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:slug" element={<ServiceDetail />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/insights" element={<Insights />} />
                <Route path="/insights/:slug" element={<InsightDetail />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/impressum" element={<Legal />} />
                <Route path="/datenschutz" element={<Legal />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
