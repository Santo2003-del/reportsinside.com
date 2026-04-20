import { motion } from "motion/react";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0f172a]">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/95 via-[#0f172a]/85 to-[#0f172a]/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-[#0f172a]/50 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/asset/HeroVideo.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-blue-300 text-xs font-medium tracking-wider uppercase">Trusted Market Intelligence</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.5rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight drop-shadow-sm">
              Connecting Experts{" "}
              <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 drop-shadow-[0_0_15px_rgba(56,189,248,0.3)] relative">
                with Opportunity
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 mb-10 max-w-xl leading-relaxed font-medium">
              Reports Insider is a leading expert network and research support firm dedicated to connecting businesses with industry-leading professionals across the globe.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                <Link
                  to="/services"
                  className="w-full inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-[15px] hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-300 group min-w-[200px]"
                >
                  Request Experts
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 rounded-xl font-bold text-[15px] backdrop-blur-md transition-all duration-300 min-w-[200px]"
                >
                  Become an Expert
                </Link>
              </motion.div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-14 flex flex-wrap items-center gap-6 sm:gap-10">
              <div>
                <div className="text-3xl font-extrabold text-white mb-1">15,000+</div>
                <div className="text-xs text-blue-300 font-semibold uppercase tracking-[0.1em]">Expert Interviews</div>
              </div>
              <div className="w-px h-12 bg-white/10 hidden sm:block" />
              <div>
                <div className="text-3xl font-extrabold text-white mb-1">150+</div>
                <div className="text-xs text-blue-300 font-semibold uppercase tracking-[0.1em]">Countries Covered</div>
              </div>
              <div className="w-px h-12 bg-white/10 hidden sm:block" />
              <div className="hidden sm:block">
                <div className="text-3xl font-extrabold text-white mb-1">250+</div>
                <div className="text-xs text-blue-300 font-semibold uppercase tracking-[0.1em]">Expert Analysts</div>
              </div>
            </div>
          </motion.div>

          {/* Right - Floating Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="animate-float">
                <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                      <Play className="w-5 h-5 text-blue-400 fill-current" />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">Market Intelligence</div>
                      <div className="text-slate-400 text-xs">Real-time analytics</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {["Expert Meetings", "Expert Calls", "B2B & B2C Surveys", "Field Visits"].map((item, i) => (
                      <div key={item} className="flex items-center gap-3">
                        <div className={cn_simple(i)}>
                          <div className="w-2 h-2 rounded-full bg-current" />
                        </div>
                        <span className="text-slate-300 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Decorative blur */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-600/20 rounded-full blur-[60px] pointer-events-none" />
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-cyan-500/15 rounded-full blur-[50px] pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>


    </section>
  );
}

function cn_simple(i: number) {
  const colors = ["text-blue-400", "text-emerald-400", "text-amber-400", "text-purple-400"];
  return `w-6 h-6 rounded-full bg-white/5 flex items-center justify-center ${colors[i]}`;
}
