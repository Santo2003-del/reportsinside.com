import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { INDUSTRIES_DATA } from "../data/industries";
import { ArrowRight } from "lucide-react";

export function Industries() {
  return (
    <section id="industries" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold tracking-widest uppercase mb-5"
          >
            Sectors We Cover
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight"
          >
            Global Industry <span className="text-blue-600">Expertise</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base text-slate-600 leading-relaxed"
          >
            Deep domain knowledge across high-growth and established sectors, providing you with the nuanced insights needed to win.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES_DATA.map((industry, index) => (
            <motion.div
              key={industry.id}
              id={industry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.4 }}
              className="scroll-mt-32"
            >
              <Link
                to="/contact"
                className="block bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-100/40 hover:border-blue-200 group transition-all duration-300 h-full flex flex-col"
              >
                <div className="relative h-48 overflow-hidden flex-shrink-0">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                  <h3 className="absolute bottom-4 left-5 right-5 text-white font-bold text-xl drop-shadow-sm">
                    {industry.title}
                  </h3>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">
                    {industry.summary}
                  </p>
                  <span className="text-blue-600 text-sm font-semibold flex items-center group-hover:text-blue-700 w-fit">
                    Contact Expert
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
