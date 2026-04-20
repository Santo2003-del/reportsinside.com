import { motion } from "motion/react";
import { ArrowRight, FileText, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { REPORTS } from "../constants";

export function Reports() {
  return (
    <section id="reports" className="py-32 bg-[#F8FAFC] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-blue-100/50 border border-blue-200/50 text-blue-700 text-sm font-semibold tracking-widest uppercase mb-6"
            >
              Featured Intelligence
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight"
            >
              Latest Market Reports
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              to="/reports"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300 group"
            >
              View All Reports
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REPORTS.slice(0, 3).map((report, index) => (
            <motion.div
              key={report.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 group flex flex-col h-full transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                  src={report.image}
                  alt={report.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute top-6 left-6 z-20">
                  <span className="px-4 py-1.5 bg-white/95 backdrop-blur-md text-blue-700 text-xs font-bold uppercase tracking-wider rounded-full border border-slate-100">
                    {report.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {report.title}
                </h3>
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-8 font-medium">
                  <span className="flex items-center"><FileText className="w-4 h-4 mr-1.5 text-blue-500" /> {report.pages} Pages</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                  <span className="text-slate-900 font-bold bg-slate-100 px-3 py-1 rounded-full">{report.price}</span>
                </div>
                
                <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    to={`/reports`}
                    className="text-blue-600 font-semibold hover:text-blue-700 flex items-center group/link text-lg"
                  >
                    Read Summary
                    <ArrowRight className="ml-1.5 w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                  <button className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-colors duration-300">
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
