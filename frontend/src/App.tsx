/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Loader2 } from "lucide-react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./sections/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Lazy-loaded pages
const Home = lazy(() => import("./pages/Home").then(module => ({ default: module.Home })));
const AboutPage = lazy(() => import("./pages/AboutPage").then(module => ({ default: module.AboutPage })));
const ServicesPage = lazy(() => import("./pages/ServicesPage").then(module => ({ default: module.ServicesPage })));
const ReportsPage = lazy(() => import("./pages/ReportsPage").then(module => ({ default: module.ReportsPage })));
const IndustriesPage = lazy(() => import("./pages/IndustriesPage").then(module => ({ default: module.IndustriesPage })));
const ContactPage = lazy(() => import("./pages/ContactPage").then(module => ({ default: module.ContactPage })));
const TermsPage = lazy(() => import("./pages/TermsPage").then(module => ({ default: module.TermsPage })));
const FaqPage = lazy(() => import("./pages/FaqPage").then(module => ({ default: module.FaqPage })));
const DisclaimerPage = lazy(() => import("./pages/DisclaimerPage").then(module => ({ default: module.DisclaimerPage })));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage").then(module => ({ default: module.PrivacyPage })));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
  </div>
);

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Toaster position="top-center" reverseOrder={false} />
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-200 selection:text-blue-900">
        <Navbar />
        <main>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/reports" element={<ReportsPage />} />
              <Route path="/industries" element={<IndustriesPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/faqs" element={<FaqPage />} />
              <Route path="/disclaimer" element={<DisclaimerPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
