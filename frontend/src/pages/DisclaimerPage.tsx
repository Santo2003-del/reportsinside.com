import { AlertCircle, ShieldAlert, FileWarning, Scale, UserCheck, Activity, Globe, Info, Mail, Phone } from "lucide-react";
import { useEffect } from "react";
import { motion } from "motion/react";

export function DisclaimerPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      id: "no-advice",
      title: "1. No Professional Advice",
      icon: Scale,
      content: "Reports Insider connects clients with industry experts for insights and opinions. The information shared during consultations does not constitute legal, financial, investment, or professional advice. Clients should independently verify information before making business decisions."
    },
    {
      id: "opinions",
      title: "2. Expert Opinions",
      icon: Info,
      content: "Views expressed by Experts are their own and do not reflect the opinions of Reports Insider. We do not guarantee the accuracy, completeness, or reliability of any information shared."
    },
    {
      id: "liability",
      title: "3. No Liability",
      icon: AlertCircle,
      content: "Reports Insider shall not be held responsible for any decisions made based on expert consultations, business losses, financial damages, or indirect consequences, nor for errors, omissions, or outdated information provided by Experts."
    },
    {
      id: "compliance",
      title: "4. Compliance Responsibility",
      icon: ShieldAlert,
      content: "Clients and Experts are solely responsible for ensuring compliance with applicable laws and regulations. Experts must not disclose confidential, proprietary, or non-public information. Reports Insider strictly prohibits insider trading and unethical practices."
    },
    {
      id: "third-party",
      title: "5. Third-Party Interactions",
      icon: UserCheck,
      content: "Reports Insider acts only as an intermediary platform. We are not responsible for the conduct, statements, or actions of Experts or Clients."
    },
    {
      id: "guarantees",
      title: "6. No Guarantees",
      icon: Globe,
      content: "We do not guarantee specific results, outcomes, or business success from using our services. Availability of Experts may vary based on industry and requirements."
    },
    {
      id: "risk",
      title: "7. Use at Your Own Risk",
      icon: Activity,
      content: "All services and information are used at the user’s own discretion and risk."
    },
    {
      id: "changes",
      title: "8. Changes to Disclaimer",
      icon: FileWarning,
      content: "Reports Insider reserves the right to modify this Disclaimer at any time without prior notice."
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
            <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-amber-50 border border-amber-100 text-amber-600 text-[11px] font-bold tracking-[0.2em] uppercase mb-6">
              Legal Disclaimer
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] mb-6 leading-tight">Disclaimer</h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              The information and services provided by <span className="text-blue-600 font-bold">Reports Insider</span> are intended for general informational and business purposes only.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="grid gap-10">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group p-8 rounded-2xl border border-slate-100 bg-white hover:border-amber-100 hover:shadow-[0_10px_30px_rgba(245,158,11,0.03)] transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 flex-shrink-0 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
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
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-600/10 rounded-full blur-[80px] -mr-32 -mt-32" />
            
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-6">9. Contact Us</h2>
              <p className="text-slate-400 mb-8 max-w-xl">
                For any questions regarding this Disclaimer, please reach out to our team.
              </p>
              
              <div className="flex flex-wrap gap-8">
                <a href="mailto:sales@reportsinsider.com" className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-amber-500 transition-colors">
                    <Mail className="w-5 h-5 text-amber-400 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-0.5">Email</p>
                    <p className="font-semibold text-slate-200">sales@reportsinsider.com</p>
                  </div>
                </a>
                
                <a href="tel:+918806790102" className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-amber-500 transition-colors">
                    <Phone className="w-5 h-5 text-amber-400 group-hover:text-white" />
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
