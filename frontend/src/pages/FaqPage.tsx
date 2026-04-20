import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { ChevronDown, HelpCircle, Phone, Mail, MessageSquare } from "lucide-react";

const FAQS = [
  {
    question: "1. What is Reports Insider?",
    answer: "Reports Insider is an expert network service company that connects businesses with industry professionals to gain valuable insights, market intelligence, and strategic guidance."
  },
  {
    question: "2. How does Reports Insider work?",
    answer: "We understand your requirements and connect you with relevant experts for 1:1 consultation calls, surveys and interviews, and market insights and advisory."
  },
  {
    question: "3. Who are the Experts on your platform?",
    answer: "Our experts include industry professionals, senior executives (CXOs, Directors), consultants, and subject matter specialists. All experts are screened to ensure quality and compliance."
  },
  {
    question: "4. How do I request an expert consultation?",
    answer: "You can submit a request through our website or share your requirements via email. Our team will match you with suitable experts quickly."
  },
  {
    question: "5. How quickly can I get an expert?",
    answer: "In most cases, we can connect you with relevant experts within 24–48 hours, depending on your requirements."
  },
  {
    question: "6. Are the consultations confidential?",
    answer: "Yes. We maintain strict confidentiality. Both clients and experts are expected to follow compliance guidelines and avoid sharing sensitive or non-public information."
  },
  {
    question: "7. How much do your services cost?",
    answer: "Pricing depends on expert seniority, industry, and the duration of consultation. We offer competitive and flexible pricing based on your needs."
  },
  {
    question: "8. Do you guarantee the accuracy of expert insights?",
    answer: "No. Experts provide opinions based on their experience. We do not guarantee accuracy or specific outcomes, and clients should independently evaluate the information."
  },
  {
    question: "9. Can I choose my preferred expert?",
    answer: "Yes. You can select from a list of matched experts or request additional profiles before confirming a consultation."
  },
  {
    question: "10. What industries do you cover?",
    answer: "We cover a wide range of industries including Healthcare & Pharma, Technology & IT, Automotive, Energy & Utilities, Consumer Goods, and Financial Services."
  },
  {
    question: "11. Can I become an expert with Reports Insider?",
    answer: "Yes. Professionals can join our network by registering on our platform, completing profile verification, and participating in relevant consultations."
  },
  {
    question: "12. How are experts paid?",
    answer: "Experts are compensated based on hourly consultation rates and project-based engagements. Payments are processed securely after completion of the consultation."
  },
  {
    question: "13. What is your cancellation policy?",
    answer: "Consultations can be canceled or rescheduled with prior notice. Specific terms may vary depending on the engagement."
  },
  {
    question: "14. Do you support global clients?",
    answer: "Yes. Reports Insider serves clients across US, Europe, Asia, and other global markets."
  },
  {
    question: "15. How do you ensure compliance?",
    answer: "We follow strict compliance policies: no confidential or insider information sharing, mandatory screening of experts, and adherence to global legal and ethical standards."
  }
];

function FaqItem({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border border-slate-100 rounded-2xl overflow-hidden bg-white hover:border-blue-200 hover:shadow-sm transition-all duration-300">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
      >
        <span className="text-lg font-bold text-[#0f172a] pr-8">{question}</span>
        <div className={`p-2 rounded-lg bg-slate-50 text-slate-400 transition-all duration-300 ${isOpen ? "rotate-180 bg-blue-600 text-white" : ""}`}>
          <ChevronDown className="w-5 h-5" />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-50 pt-4 font-medium">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-24">
      {/* Header */}
      <section className="bg-slate-50 border-b border-slate-100 py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[11px] font-bold tracking-[0.2em] uppercase mb-6">
              Assistance
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] mb-6 leading-tight">Frequently Asked Questions</h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
              Everything you need to know about <span className="text-blue-600">Reports Insider</span> expert network services and compliance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="grid gap-4">
            {FAQS.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
              >
                <FaqItem
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                />
              </motion.div>
            ))}
          </div>

          {/* Contact Support CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 p-8 md:p-12 rounded-3xl bg-[#0f172a] text-white relative overflow-hidden text-center"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] -ml-32 -mb-32" />
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-blue-600/20 flex items-center justify-center text-blue-400 mb-6 border border-blue-500/20">
                <MessageSquare className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-extrabold mb-4">Still have questions?</h2>
              <p className="text-slate-400 mb-10 max-w-xl text-lg font-medium">
                Our support team is available 24/7 to help you with any queries or custom requirements.
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-8">
                <a href="mailto:sales@reportsinsider.com" className="flex items-center gap-3 group text-[#e2e8f0] hover:text-blue-400 transition-colors">
                  <Mail className="w-5 h-5 text-blue-500" />
                  <span className="font-bold">sales@reportsinsider.com</span>
                </a>
                
                <div className="w-1.5 h-1.5 rounded-full bg-slate-700 hidden md:block" />
                
                <a href="tel:+918806790102" className="flex items-center gap-3 group text-[#e2e8f0] hover:text-blue-400 transition-colors">
                  <Phone className="w-5 h-5 text-blue-500" />
                  <span className="font-bold">+91 8806790102</span>
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
