import { Shield, Lock, Scale, UserCheck, FileText, Globe, DollarSign, AlertTriangle, XCircle, Info, RefreshCw, Mail, Phone } from "lucide-react";
import { useEffect } from "react";
import { motion } from "motion/react";

export function TermsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      id: "about",
      title: "1. About Us",
      icon: Info,
      content: "Reports Insider is an expert network service company that connects clients with industry professionals (“Experts”) for insights, consultations, and market intelligence."
    },
    {
      id: "services",
      title: "2. Services",
      icon: Globe,
      content: "We provide expert consultations (calls, meetings, surveys), market insights, research support, and access to a global network of industry specialists. Reports Insider acts as an intermediary and does not guarantee specific outcomes from expert interactions."
    },
    {
      id: "responsibilities",
      title: "3. User Responsibilities",
      icon: UserCheck,
      content: "By using our services, you agree to provide accurate and complete information, not to misuse confidential or proprietary information, to comply with all applicable laws and regulations, and not to engage in unethical, illegal, or insider trading activities."
    },
    {
      id: "compliance",
      title: "4. Compliance & Confidentiality",
      icon: Shield,
      content: "Clients and Experts must not share confidential or non-public information. Experts are responsible for ensuring they are allowed to participate in consultations. Reports Insider maintains strict compliance policies aligned with global standards."
    },
    {
      id: "payments",
      title: "5. Payments & Fees",
      icon: DollarSign,
      content: "Clients agree to pay fees as per agreed terms before or after consultations. Experts are compensated based on engagement terms. Late payments may result in service suspension."
    },
    {
      id: "ip",
      title: "6. Intellectual Property",
      icon: FileText,
      content: "All content, materials, and reports provided by Reports Insider are protected. Users may not copy, distribute, or resell content without written permission."
    },
    {
      id: "liability",
      title: "7. Limitation of Liability",
      icon: AlertTriangle,
      content: "Reports Insider is not liable for decisions made based on expert insights, accuracy or completeness of expert opinions, or any indirect or consequential damages."
    },
    {
      id: "cancellation",
      title: "8. Cancellation & Refund Policy",
      icon: RefreshCw,
      content: "Scheduled consultations can be canceled with prior notice. Refunds (if applicable) will be processed as per company policy."
    },
    {
      id: "termination",
      title: "9. Termination",
      icon: XCircle,
      content: "We reserve the right to suspend or terminate access for violations of terms and refuse service at our discretion."
    },
    {
      id: "privacy",
      title: "10. Privacy Policy",
      icon: Lock,
      content: "User data is handled in accordance with our Privacy Policy. We ensure secure handling of personal and professional information."
    },
    {
      id: "amendments",
      title: "11. Amendments",
      icon: RefreshCw,
      content: "Reports Insider may update these Terms & Conditions at any time. Continued use of services constitutes acceptance of updated terms."
    },
    {
      id: "law",
      title: "12. Governing Law",
      icon: Scale,
      content: "These Terms shall be governed by and interpreted in accordance with the laws of India."
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-24">
      {/* Header */}
      <section className="bg-slate-50 border-b border-slate-100 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
             <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[11px] font-bold tracking-[0.2em] uppercase mb-6">
              Legal
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] mb-6 leading-tight">Terms & Conditions</h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Welcome to <span className="text-blue-600 font-bold">Reports Insider</span>. By accessing or using our expert network services, you agree to comply with and be bound by the following Terms & Conditions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="grid gap-12">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group p-8 rounded-2xl border border-slate-100 bg-white hover:border-blue-100 hover:shadow-[0_10px_30px_rgba(15,23,42,0.03)] transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <section.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-[#0f172a] mb-3">{section.title}</h2>
                    <p className="text-slate-600 leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 p-8 md:p-12 rounded-3xl bg-[#0f172a] text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] -mr-32 -mt-32" />
            
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-6">13. Contact Us</h2>
              <p className="text-slate-400 mb-8 max-w-xl">
                For any questions or concerns regarding these Terms & Conditions, please reach out to our legal team.
              </p>
              
              <div className="flex flex-wrap gap-8">
                <a href="mailto:sales@reportsinsider.com" className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <Mail className="w-5 h-5 text-blue-400 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-0.5">Email</p>
                    <p className="font-semibold text-slate-200">sales@reportsinsider.com</p>
                  </div>
                </a>
                
                <a href="tel:+918806790102" className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <Phone className="w-5 h-5 text-blue-400 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-0.5">Phone</p>
                    <p className="font-semibold text-slate-200">+91 8806790102</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          <p className="mt-12 text-center text-slate-400 text-sm font-medium">
            Last updated: April 14, 2026
          </p>
        </div>
      </section>
    </div>
  );
}
