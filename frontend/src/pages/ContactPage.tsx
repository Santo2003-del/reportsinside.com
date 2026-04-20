import { motion } from "motion/react";
import { Mail, Phone, ArrowRight, Send, ShieldCheck, Users, Lock, Loader2 } from "lucide-react";
import { CONTACT_INFO } from "../constants";
import { useEmailForm } from "../hooks/useEmailForm";

export function ContactPage() {
  const { formData, isSending, honeypotRef, handleChange, handleSubmit } = useEmailForm({
    fullName: "",
    company: "",
    industry: "",
  });

  return (
    <div className="pt-28">
      {/* Page Hero */}
      <section className="py-16 md:py-20 bg-[#0f172a] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(37,99,235,0.12),transparent_60%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-widest uppercase mb-5">
              Contact Us
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">
              Let's Start a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Conversation</span>
            </h1>
            <p className="text-base text-slate-400 leading-relaxed max-w-2xl">
              Ready to elevate your market strategy? Connect with our expert analysts today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Get In Touch - Premium Contact Form */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-50/50 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-slate-50 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-16 items-start">

              {/* Left Side - Trust Indicators & Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-2 space-y-10"
              >
                <div>
                  <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[11px] font-bold tracking-[0.2em] uppercase mb-6">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Secure & Confidential
                  </div>
                  <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] mb-6 leading-[1.1]">
                    Let's Build Your <span className="text-blue-600">Strategy</span>
                  </h2>
                  <p className="text-lg text-slate-500 leading-relaxed font-medium">
                    Bridge the gap between data and decision-making. Our experts are ready to provide the clarity you need to move forward.
                  </p>
                </div>

                {/* Trust Badges */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm flex flex-col items-center text-center">
                    <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-3">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div className="text-[13px] font-bold text-[#0f172a]">Fully Compliant</div>
                    <div className="text-[11px] text-slate-400 font-medium">Global Standards</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm flex flex-col items-center text-center">
                    <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-3">
                      <Users className="w-5 h-5" />
                    </div>
                    <div className="text-[13px] font-bold text-[#0f172a]">Vetted Experts</div>
                    <div className="text-[11px] text-slate-400 font-medium">Strict Screening</div>
                  </div>
                </div>

                {/* Contact Cards */}
                <div className="space-y-4 pt-4">
                  <a href={`tel:${CONTACT_INFO.phone_ind.replace(/\s/g, "")}`} className="flex items-center gap-4 p-5 bg-[#0f172a] rounded-2xl border border-white/5 hover:bg-[#1e293b] hover:shadow-xl transition-all duration-300 group">
                    <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                      <Phone className="w-5 h-5 text-blue-400 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-0.5">India Support</div>
                      <div className="text-[15px] font-bold text-white tracking-wide">{CONTACT_INFO.phone_ind}</div>
                    </div>
                  </a>

                  <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                      <Mail className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Global Email</div>
                      <div className="text-[15px] font-bold text-[#0f172a]">{CONTACT_INFO.email}</div>
                    </div>
                  </a>
                </div>
              </motion.div>

              {/* Right Side - Premium Form */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="lg:col-span-3"
              >
                <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-100 shadow-[0_20px_60px_rgba(15,23,42,0.08)] relative">
                  <div className="absolute top-0 right-10 -translate-y-1/2 flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg">
                    <Lock className="w-3 h-3" />
                    End-to-End Encrypted
                  </div>

                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/20">
                      <Send className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-[#0f172a] text-xl">Rapid Response Form</h3>
                      <p className="text-[13px] text-slate-400 font-semibold">Our analysts review all inquiries within 2 hours</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-7">
                    {/* Honeypot Field */}
                    <input type="text" ref={honeypotRef} className="hidden" aria-hidden="true" />

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2.5">
                        <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                        <input
                          name="fullName"
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/5 focus:border-blue-500 focus:bg-white transition-all text-[15px] text-slate-900 font-semibold placeholder:text-slate-300"
                          placeholder="Ex: John Doe"
                        />
                      </div>
                      <div className="space-y-2.5">
                        <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Corporate Email</label>
                        <input
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/5 focus:border-blue-500 focus:bg-white transition-all text-[15px] text-slate-900 font-semibold placeholder:text-slate-300"
                          placeholder="name@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2.5">
                        <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Company</label>
                        <input
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/5 focus:border-blue-500 focus:bg-white transition-all text-[15px] text-slate-900 font-semibold placeholder:text-slate-300"
                          placeholder="Organization Name"
                        />
                      </div>
                      <div className="space-y-2.5">
                        <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Industry</label>
                        <select
                          name="industry"
                          value={formData.industry}
                          onChange={handleChange}
                          className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/5 focus:border-blue-500 focus:bg-white transition-all text-[15px] text-slate-900 font-semibold appearance-none cursor-pointer"
                        >
                          <option>Select Industry</option>
                          <option>Healthcare</option>
                          <option>Technology</option>
                          <option>Automotive</option>
                          <option>Finance</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2.5">
                      <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Your Requirements</label>
                      <textarea
                        name="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/5 focus:border-blue-500 focus:bg-white transition-all text-[15px] text-slate-900 font-semibold resize-none placeholder:text-slate-300"
                        placeholder="Tell us about the insights you're looking for..."
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSending}
                        className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-blue-600 text-white rounded-2xl font-extrabold text-[16px] hover:bg-blue-500 hover:shadow-[0_15px_35px_rgba(37,99,235,0.3)] transition-all duration-300 group active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isSending ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Processing...
                          </>
                        ) : (
                          <>
                            Submit Inquiry
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                          </>
                        )}
                      </button>
                    </div>

                    <p className="text-center text-[11px] text-slate-400 font-medium">
                      By submitting this form, you agree to our <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>. <br className="hidden sm:block"/>
                      No shared data is sold to third parties.
                    </p>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
