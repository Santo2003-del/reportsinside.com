import { ShieldCheck, Lock, Eye, Database, Share2, Globe, Bell, FileText, Mail, Phone } from "lucide-react";
import { useEffect } from "react";
import { motion } from "motion/react";

export function PrivacyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      id: "data-collection",
      title: "1. Data Collection",
      icon: Database,
      content: "We collect personal and professional information necessary to provide our expert network services. This includes name, contact details, professional background, and interaction history."
    },
    {
      id: "usage",
      title: "2. How We Use Data",
      icon: Activity,
      content: "Your data is used to match clients with relevant experts, facilitate consultations, improve our service quality, and ensure compliance with legal and ethical standards."
    },
    {
      id: "security",
      title: "3. Data Security",
      icon: Lock,
      content: "We implement robust security measures to protect your information from unauthorized access, loss, or misuse. This includes encryption, secure servers, and strict access controls."
    },
    {
      id: "sharing",
      title: "4. Information Sharing",
      icon: Share2,
      content: "We only share necessary information between clients and experts to facilitate engagements. We do not sell your personal data to third parties for marketing purposes."
    },
    {
      id: "cookies",
      title: "5. Cookies & Tracking",
      icon: Globe,
      content: "Our website uses cookies to enhance user experience, analyze site traffic, and personalize content. You can manage your cookie preferences through your browser settings."
    },
    {
      id: "rights",
      title: "6. Your Rights",
      icon: UserCheck,
      content: "You have the right to access, update, or request deletion of your personal information. Please contact our data protection team for any such requests."
    },
    {
      id: "compliance",
      title: "7. Regulatory Compliance",
      icon: ShieldCheck,
      content: "We adhere to global data protection regulations, including GDPR and local privacy laws, to ensure the highest standards of data governance."
    },
    {
      id: "updates",
      title: "8. Policy Updates",
      icon: Bell,
      content: "Reports Insider may update this Privacy Policy periodically. We will notify users of significant changes through our website or direct communication."
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
              Privacy & Trust
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] mb-6 leading-tight">Privacy Policy</h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              At <span className="text-blue-600 font-bold">Reports Insider</span>, we are committed to protecting your personal and professional data with the highest level of security and transparency.
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
                className="group p-8 rounded-2xl border border-slate-100 bg-white hover:border-blue-100 hover:shadow-[0_10px_30px_rgba(37,99,235,0.03)] transition-all duration-300"
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

          {/* Data Protection Contact */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 p-8 md:p-12 rounded-3xl bg-[#0f172a] text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] -mr-32 -mt-32" />
            
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-6">Data Support</h2>
              <p className="text-slate-400 mb-8 max-w-xl">
                If you have any questions about how your data is handled, please contact our data protection officer.
              </p>
              
              <div className="flex flex-wrap gap-8">
                <a href="mailto:privacy@reportsinsider.com" className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <Mail className="w-5 h-5 text-blue-400 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-0.5">Email</p>
                    <p className="font-semibold text-slate-200">privacy@reportsinsider.com</p>
                  </div>
                </a>
                
                <a href="tel:+918806790102" className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <Phone className="w-5 h-5 text-blue-400 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-0.5">Contact Support</p>
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

const UserCheck = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const Activity = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);
