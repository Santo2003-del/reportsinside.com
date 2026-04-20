import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown, Phone, Mail, ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { NAV_LINKS } from "../constants";
import { cn } from "../lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Contact Bar */}
      <div className="bg-[#0f172a] text-white/90 text-[11px] py-2 hidden md:block border-b border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center gap-10 font-bold tracking-wider">
          <a href="tel:+918806790102" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
            <Phone className="w-3 h-3 text-blue-500" /> <span>IND</span> +91 8806790102
          </a>
          <a href="tel:+13155576479" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
            <Phone className="w-3 h-3 text-blue-500" /> <span>USA</span> +1 315 557 6479
          </a>
          <a href="mailto:sales@reportsinsider.com" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
            <Mail className="w-3 h-3 text-blue-500" /> sales@reportsinsider.com
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={cn(
          "w-full transition-all duration-500",
          isScrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-slate-100 py-1.5 shadow-sm"
            : "bg-white/80 backdrop-blur-md border-b border-white/20 py-2.5"
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 flex-shrink-0 group py-1">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 shadow-[0_4px_20px_rgba(37,99,235,0.3)] transition-transform group-hover:scale-110 duration-300 overflow-hidden">
                {/* Subtle sheen layer */}
                <div className="absolute inset-0 bg-white/20 translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-700 ease-in-out" />
                <span className="text-white font-black text-[22px] tracking-tighter leading-none relative z-10">RI</span>
                <div className="absolute inset-0 border border-white/20 rounded-xl z-20"></div>
              </div>
              <span className="text-2xl md:text-[26px] font-black tracking-tight text-[#0f172a]">
                Reports<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Insider</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              {NAV_LINKS.map((link) => {
                const isActive = location.pathname === link.href || (link.subLinks && location.pathname.startsWith(link.href) && link.href !== "/");
                const hasSubLinks = !!link.subLinks;

                return (
                  <div
                    key={link.label}
                    className="relative group/nav"
                    onMouseEnter={() => hasSubLinks && setActiveDropdown(link.label)}
                    onMouseLeave={() => hasSubLinks && setActiveDropdown(null)}
                  >
                    <Link
                      to={link.href}
                      className={cn(
                        "px-4 py-2 text-[14px] font-bold transition-all duration-300 flex items-center gap-1.5 relative rounded-xl",
                        isActive
                          ? "text-blue-600 bg-blue-50/50"
                          : "text-slate-600 hover:text-blue-600 hover:bg-slate-50"
                      )}
                    >
                      {link.label}
                      {hasSubLinks && (
                        <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-300", activeDropdown === link.label ? "rotate-180" : "")} />
                      )}
                    </Link>

                    {/* Dropdown */}
                    {hasSubLinks && (
                      <AnimatePresence>
                        {activeDropdown === link.label && (
                          <motion.div
                            initial={{ opacity: 0, y: 15, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 15, scale: 0.95 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[480px] bg-white rounded-2xl border border-slate-100 shadow-[0_20px_40px_rgba(15,23,42,0.1)] p-4 overflow-hidden"
                          >
                            <div className="grid grid-cols-2 gap-x-6 gap-y-1.5">
                              {link.subLinks!.map((subLink) => (
                                <Link
                                  key={subLink.label}
                                  to={subLink.href}
                                  className="flex items-center justify-between px-4 py-2.5 text-[13px] text-slate-600 hover:text-blue-600 hover:bg-blue-50/60 rounded-xl transition-all duration-200 font-bold group"
                                >
                                  {subLink.label}
                                  <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                );
              })}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-4">
              <Link
                to="/contact"
                className="hidden lg:inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white text-[14px] font-bold rounded-xl hover:bg-blue-700 hover:shadow-[0_10px_20px_rgba(37,99,235,0.3)] transition-all duration-300 active:scale-95"
              >
                Get a Quote
              </Link>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl text-slate-900 bg-slate-100/50 hover:bg-slate-100 transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden border-t border-slate-100 bg-white"
            >
              <div className="px-4 pt-4 pb-8 space-y-2">
                {NAV_LINKS.map((link) => (
                  <div key={link.label} className="space-y-1">
                    <Link
                      to={link.href}
                      className={cn(
                        "flex items-center justify-between px-4 py-3.5 text-[15px] font-bold rounded-xl transition-all duration-200",
                        location.pathname === link.href
                          ? "bg-blue-50 text-blue-600"
                          : "text-[#0f172a] hover:bg-slate-50"
                      )}
                    >
                      {link.label}
                      {link.subLinks && <ChevronDown className={cn("w-4 h-4 text-slate-400", activeDropdown === link.label ? "rotate-180" : "")} />}
                    </Link>
                    {link.subLinks && (
                      <div className="pl-6 pr-2 space-y-1 py-1">
                        {link.subLinks.map((subLink) => (
                          <Link
                            key={subLink.label}
                            to={subLink.href}
                            className="block px-4 py-2.5 text-[13px] text-slate-500 hover:text-blue-600 hover:bg-blue-50/40 rounded-lg transition-all duration-200 font-semibold"
                          >
                            {subLink.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 px-2">
                  <Link
                    to="/contact"
                    className="flex items-center justify-center w-full py-4 bg-blue-600 text-white text-[15px] font-bold rounded-xl shadow-lg"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
