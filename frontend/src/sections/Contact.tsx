import { motion } from "motion/react";
import { Mail, Phone, MapPin, ArrowRight, Building, Loader2 } from "lucide-react";
import { CONTACT_INFO } from "../constants";
import { useEmailForm } from "../hooks/useEmailForm";

export function Contact() {
  const { formData, isSending, honeypotRef, handleChange, handleSubmit } = useEmailForm({
    firstName: "",
    lastName: "",
  });

  return (
    <section id="contact" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold tracking-widest uppercase mb-5"
          >
            Reach Out
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight"
          >
            Get In <span className="text-gradient">Touch</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-base text-slate-600"
          >
            Whether you need expert insights, in-depth research, or custom solutions, we are here to help.
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Contact Info Cards Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10"
          >
            {[
              { icon: Phone, label: "India", value: CONTACT_INFO.phone_ind, href: `tel:${CONTACT_INFO.phone_ind.replace(/\s/g, "")}` },
              { icon: Phone, label: "USA", value: CONTACT_INFO.phone_usa, href: `tel:${CONTACT_INFO.phone_usa.replace(/\s/g, "")}` },
              { icon: Mail, label: "Email", value: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
              { icon: Building, label: "Office", value: CONTACT_INFO.address, href: "#" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="bg-[#f8fafc] rounded-xl p-5 border border-slate-100 hover:border-blue-200 transition-all duration-200 group"
              >
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-3 group-hover:bg-blue-600 transition-colors">
                  <item.icon className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <div className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">{item.label}</div>
                <div className="text-sm font-semibold text-slate-900">{item.value}</div>
              </a>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#f8fafc] rounded-2xl p-8 md:p-10 border border-slate-100"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot Field */}
              <input type="text" ref={honeypotRef} className="hidden" aria-hidden="true" />
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">First Name</label>
                  <input
                    name="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm text-slate-900"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Last Name</label>
                  <input
                    name="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm text-slate-900"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Corporate Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm text-slate-900"
                  placeholder="john@company.com"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">How can we help?</label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm text-slate-900 resize-none"
                  placeholder="Tell us about your research needs..."
                />
              </div>
              <button
                type="submit"
                disabled={isSending}
                className="w-full flex items-center justify-center px-6 py-3.5 bg-blue-600 text-white rounded-lg font-semibold text-sm hover:bg-blue-700 transition-colors group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
