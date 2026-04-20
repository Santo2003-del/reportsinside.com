import { motion } from "motion/react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] pointer-events-none opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.08)] border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
                alt="Business intelligence and data analytics"
                className="w-full h-[460px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -bottom-6 -right-4 bg-white p-6 rounded-xl border border-slate-100 max-w-[200px] hidden md:block"
            >
              <div className="text-3xl font-bold text-blue-600 mb-1">15+</div>
              <div className="text-slate-600 text-sm font-medium leading-snug">Years of actionable market intelligence</div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[11px] font-bold tracking-widest uppercase mb-6">
              Who We Are
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
              Empowering Decisions with{" "}
              <span className="text-gradient">Real-World Expertise.</span>
            </h2>
            <div className="text-base text-slate-600 mb-10 leading-relaxed space-y-5 font-medium">
              <p>Reports Insider is a dynamic expert network services company that connects organizations with highly experienced industry professionals to deliver fast, accurate, and actionable insights.</p>
              <p>Built on the model of global top leaders. we specialize in providing on-demand access to experts across diverse industries including healthcare, technology, finance, manufacturing, and more.</p>
              <p>We act as a bridge between decision-makers and domain experts, enabling consulting firms, private equity investors, and corporate teams to gain real-world knowledge through expert calls, surveys, and customized research engagements.</p>
              <p>At Reports Insider, our strength lies in our ability to quickly identify and connect with the right experts, ensuring our clients receive relevant insights within tight timelines. We are committed to maintaining the highest standards of quality, confidentiality, and compliance in every interaction.</p>
              <p>Driven by a client-first approach and a growing global network, Reports Insider empowers businesses to make informed decisions with confidence.</p>
            </div>

            <div className="space-y-4 mb-8">
              {[
                "Proprietary data methodologies and analytics",
                "Global network of industry experts and analysts",
                "Customized research tailored to your strategic goals",
                "Uncompromising commitment to accuracy and integrity"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.08 }}
                  className="flex items-start group"
                >
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5 group-hover:bg-blue-600 transition-colors duration-200">
                    <CheckCircle2 className="h-3 w-3 text-blue-600 group-hover:text-white transition-colors duration-200" />
                  </div>
                  <span className="text-slate-700 text-sm font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center px-8 py-4 bg-slate-900 text-white rounded-xl text-[15px] font-bold hover:bg-blue-600 shadow-lg shadow-slate-900/20 hover:shadow-blue-600/30 hover:-translate-y-1 transition-all duration-300 group"
            >
              Discover Our Story
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
