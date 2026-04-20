import { Link } from "react-router-dom";
import { CONTACT_INFO, FOOTER_LINKS } from "../constants";
import { Mail, Phone, ArrowRight, Linkedin, Twitter, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0f172a] text-slate-400 pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 shadow-[0_4px_20px_rgba(37,99,235,0.4)] transition-transform group-hover:scale-110 duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-white/20 translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-700 ease-in-out" />
                <span className="text-white font-black text-[22px] tracking-tighter leading-none relative z-10">RI</span>
                <div className="absolute inset-0 border border-white/20 rounded-xl z-20"></div>
              </div>
              <span className="text-2xl font-black tracking-tight text-white/95">
                Reports<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Insider</span>
              </span>
            </Link>
            <p className="text-[15px] leading-relaxed text-slate-400 max-w-sm">
              Connecting global businesses with high-level industry expertise to drive strategic growth and informed decision-making.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Linkedin, name: "LinkedIn", url: "https://www.linkedin.com/company/report-insider/" },
                { icon: Twitter, name: "Twitter", url: "#" },
                { icon: Facebook, name: "Facebook", url: "#" },
              ].map((social) => (
                <a 
                  key={social.name} 
                  href={social.url} 
                  target={social.url !== "#" ? "_blank" : undefined}
                  rel={social.url !== "#" ? "noopener noreferrer" : undefined}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 text-slate-400 hover:text-white"  
                  aria-label={social.name}
                >
                  <social.icon className="w-4.5 h-4.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-10">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-8">Navigation</h4>
            <ul className="grid grid-cols-2 gap-y-4 gap-x-8">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.href} 
                    className="text-[14px] hover:text-blue-400 transition-colors flex items-center group font-medium"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:pl-10">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-8">Contact Our Experts</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-lg bg-blue-600/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                   <Phone className="w-4 h-4 text-blue-500" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider mb-0.5">India Office</div>
                  <span className="text-[14px] font-semibold text-slate-300">{CONTACT_INFO.phone_ind}</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-lg bg-blue-600/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                   <Phone className="w-4 h-4 text-blue-500" />
                </div>
                <div>
                   <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider mb-0.5">USA Office</div>
                   <span className="text-[14px] font-semibold text-slate-300">{CONTACT_INFO.phone_usa}</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-lg bg-blue-600/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                   <Mail className="w-4 h-4 text-blue-500" />
                </div>
                <div>
                   <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider mb-0.5">Email Support</div>
                   <span className="text-[14px] font-semibold text-slate-300">{CONTACT_INFO.email}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs font-medium text-slate-500">
            &copy; {new Date().getFullYear()} Reports Insider. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs font-semibold text-slate-500">
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
            <Link to="/faqs" className="hover:text-white transition-colors">Support & FAQs</Link>
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
