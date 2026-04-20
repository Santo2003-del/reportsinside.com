import { motion } from "motion/react";
import { Industries } from "../sections/Industries";
import { WhyChooseUs } from "../sections/WhyChooseUs";

export function IndustriesPage() {
  return (
    <div className="pt-28">
      {/* Page Hero */}
      <section className="py-16 md:py-20 bg-[#0f172a] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.12),transparent_60%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-widest uppercase mb-5">
              Industries
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">
              Sector-Specific{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Market Intelligence</span>
            </h1>
            <p className="text-base text-slate-400 leading-relaxed max-w-2xl">
              Deep domain knowledge across high-growth and established sectors, providing you with the nuanced insights needed to win in your market.
            </p>
          </motion.div>
        </div>
      </section>

      <Industries />
      <WhyChooseUs />
    </div>
  );
}
