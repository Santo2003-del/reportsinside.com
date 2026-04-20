import { motion } from "motion/react";
import {
  CheckCircle2, Target, Layers, Zap, Lock, ShieldCheck,
  Languages, LineChart, TrendingUp, Shield, Headphones, Globe
} from "lucide-react";

const REASONS = [
  { title: "Strong Industry Focus", icon: Target, desc: "Deep specialization in key industries" },
  { title: "Extensive Product Offerings", icon: Layers, desc: "Comprehensive suite of research solutions" },
  { title: "Speed with Structure", icon: Zap, desc: "Fast turnarounds with rigorous methodology" },
  { title: "Integrity and Confidentiality", icon: Lock, desc: "100% data privacy and NDA compliance" },
  { title: "Actionable Accuracy", icon: CheckCircle2, desc: "Insights you can act on immediately" },
  { title: "Quality Assurance", icon: ShieldCheck, desc: "Multi-level quality review process" },
  { title: "Translation & Interpretation", icon: Languages, desc: "Global reach with localized insights" },
  { title: "Expert Reports & Analysis", icon: LineChart, desc: "Built by seasoned domain experts" },
  { title: "Growth Dynamics", icon: TrendingUp, desc: "Future-focused market projections" },
  { title: "Compliance You Can Rely On", icon: Shield, desc: "Industry-standard regulatory compliance" },
  { title: "Post-sales Support", icon: Headphones, desc: "Dedicated analyst support after delivery" },
  { title: "Potential Market Opportunities", icon: Globe, desc: "Identify untapped growth vectors" },
];

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 md:py-28 bg-[#0f172a] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-600/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[11px] font-bold tracking-widest uppercase mb-6"
          >
            Our Strengths
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight"
          >
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Reports Insider</span>?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base text-slate-400 leading-relaxed"
          >
            Big Enough to Deliver, Small Enough to Care. Connect with us today and unlock the answers you need.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {REASONS.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04, duration: 0.35 }}
              className="bg-slate-800/40 backdrop-blur-md rounded-2xl p-7 flex flex-col items-center justify-center text-center group hover:bg-slate-800/60 hover:-translate-y-1.5 border border-white/5 hover:border-blue-500/40 hover:shadow-[0_10px_30px_rgba(37,99,235,0.15)] shiny-card transition-all duration-400"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:border-blue-500 shadow-inner transition-all duration-300">
                <reason.icon className="w-6 h-6 text-blue-400 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-[15px] font-extrabold text-white mb-2 leading-snug tracking-wide">
                {reason.title}
              </h3>
              <p className="text-[13px] text-slate-400 leading-relaxed min-h-[40px] flex items-center justify-center">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
