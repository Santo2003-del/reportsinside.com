import { motion } from "motion/react";
import { SERVICES } from "../constants";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Contact } from "../sections/Contact";

const WORKFLOW = [
  { step: "01", title: "Discovery Call", desc: "We understand your unique business challenges and research requirements." },
  { step: "02", title: "Research Design", desc: "Our experts design a custom methodology tailored to your objectives." },
  { step: "03", title: "Data Collection", desc: "Rigorous primary and secondary research across global markets." },
  { step: "04", title: "Analysis & Delivery", desc: "Comprehensive findings delivered with actionable recommendations." },
];

export function ServicesPage() {
  return (
    <div className="pt-28">
      {/* Page Hero */}
      <section className="py-16 md:py-20 bg-[#0f172a] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(37,99,235,0.15),transparent_60%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-widest uppercase mb-5">
              Our Services
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">
              Research Solutions That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Drive Results</span>
            </h1>
            <p className="text-base text-slate-400 leading-relaxed max-w-2xl">
              We analyse what is best for a client by mapping their research needs and provide the knowledge of the known and unknown areas of business impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="bg-[#f8fafc] rounded-xl p-8 border border-slate-100 hover:border-blue-200 hover:bg-white transition-all duration-300 group shiny-card"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                    <service.icon className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-5">{service.description}</p>
                <Link to="/contact" className="text-blue-600 text-sm font-semibold flex items-center hover:text-blue-700 group/link">
                  Get Started
                  <ArrowRight className="ml-1 w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-5">Why Our Research Stands Apart</h2>
              <div className="space-y-4">
                {[
                  "Proprietary data collection spanning 150+ countries",
                  "Multi-layered quality assurance and peer review",
                  "Dedicated analyst support through and after delivery",
                  "Flexible engagement models for any budget",
                  "Industry-standard regulatory compliance",
                  "Real-time data updates and market monitoring",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="flex items-start gap-3 group"
                  >
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700 font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden border border-slate-100"
            >
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                alt="Analytics dashboard showing market data"
                className="w-full h-[350px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
}
