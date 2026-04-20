import { motion } from "motion/react";
import { CheckCircle2, Globe, Target, Users, BarChart3, Award } from "lucide-react";
import { STATS } from "../constants";
import { Trust } from "../sections/Trust";

export function AboutPage() {
  return (
    <div className="pt-28">
      {/* Page Hero */}
      <section className="py-16 md:py-20 bg-[#0f172a] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(37,99,235,0.15),transparent_60%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-widest uppercase mb-5">
              About Us
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">
              We Help Businesses Make{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Smarter Decisions</span>
            </h1>
            <p className="text-base text-slate-400 leading-relaxed max-w-2xl">
              Reports Insider is a leading expert network and research support firm dedicated to connecting businesses with industry-leading professionals across the globe
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                  alt="Our research team"
                  className="w-full h-[380px] object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Our Story</h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Founded with a mission to democratize access to premium market intelligence, Reports Insider has grown into one of the most trusted names in business research. Our team of over 250 expert analysts deliver research spanning 150+ countries across every major industry vertical.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                We analyse what is best for a client by mapping their research needs and provide the knowledge of the known and unknown areas of business impact. Whether you need expert insights, in-depth research, or custom solutions, Reports Insider is here to help.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 border border-slate-100 shadow-sm"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-5">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Our Mission</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To empower global enterprises with high-fidelity data, rigorous analysis, and actionable insights that drive strategic growth and competitive advantage in rapidly evolving markets.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl p-8 border border-slate-100 shadow-sm"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-5">
                <Globe className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Our Vision</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To be the world's most trusted market intelligence partner, setting the gold standard for accuracy, depth, and actionable business research across every industry vertical.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <Trust />

      {/* Expertise */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Our Expertise</h2>
            <p className="text-sm text-slate-600">What makes our research stand apart from the competition</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: BarChart3, title: "Data-Driven Analytics", desc: "Proprietary methodologies combining quantitative and qualitative research for unmatched accuracy." },
              { icon: Users, title: "Global Expert Network", desc: "Access to 250+ industry analysts and domain experts across 150+ countries worldwide." },
              { icon: Award, title: "Quality Assurance", desc: "Multi-tier quality review process ensuring every report meets the highest standards of excellence." },
              { icon: Globe, title: "Global Coverage", desc: "Comprehensive research spanning every major geography and emerging market." },
              { icon: Target, title: "Custom Solutions", desc: "Tailored research engagements designed around your unique strategic objectives." },
              { icon: CheckCircle2, title: "Actionable Insights", desc: "Clear recommendations and strategic frameworks you can act on immediately." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-[#f8fafc] rounded-xl p-6 border border-slate-100 hover:border-blue-200 hover:shadow-md hover:shadow-blue-50 transition-all duration-200 group"
              >
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                  <item.icon className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
