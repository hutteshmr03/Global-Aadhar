import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, User, Send, CheckCircle2, ArrowRight, Clock, ShieldCheck, MessageSquare } from 'lucide-react';
import { brandMeta } from '../data/brandContent';

export default function Contact({ onNavigateContact }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceInterest: 'Strategic PR Retainer',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log('[Global Aadhar Direct Inquiry]:', formData);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 450);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-[#1A332F] text-white relative overflow-hidden scroll-mt-28">
      {/* Ambient Lighting Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-emerald-500/10 blur-[130px] pointer-events-none animate-pulse-glow"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#2D5A54]/35 blur-[130px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '2s' }}></div>

      <div className="deck-container relative z-10 space-y-10 sm:space-y-12">
        {/* Top Eyebrow Section Bar */}
        <div className="flex items-center justify-between border-b border-white/15 pb-4 text-xs font-deck-body font-bold text-emerald-300 uppercase tracking-widest">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
            </span>
            <span>GLOBAL AADHAR • STRATEGIC CONSULTATION</span>
          </div>
          <span className="text-[#D5D1C8] hidden sm:inline-block">
            PANJIM BUREAU • 24/7 STRATEGIC DESK
          </span>
        </div>

        {/* Section Headline */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4 max-w-3xl"
        >
          <div className="text-xs font-deck-body font-bold text-emerald-300 uppercase tracking-[0.2em]">
            Executive Strategic Inquiry
          </div>
          <h2 className="font-deck-headline text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
            LET'S BUILD IMPACT TOGETHER.
          </h2>
          <p className="font-deck-body text-xs sm:text-base text-[#D5D1C8] leading-relaxed max-w-2xl">
            Connect directly with our leadership team in Panjim, Goa to discuss corporate PR retainers, broadcast campaigns, or integrated communications strategy.
          </p>
        </motion.div>

        {/* 2-Column High-Impact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Direct Contact & Office Details */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 p-6 sm:p-8 lg:p-10 rounded-3xl bg-white/5 border border-white/15 backdrop-blur-md flex flex-col justify-between space-y-8"
          >
            <div className="space-y-6">
              <div className="border-b border-white/15 pb-5">
                <span className="text-[10.5px] font-deck-body font-bold text-emerald-300 uppercase tracking-widest block mb-1">
                  HEADQUARTERS & DESK
                </span>
                <h3 className="font-deck-headline text-2xl text-white">
                  GLOBAL AADHAR
                </h3>
                <p className="font-deck-body text-xs text-[#D5D1C8] pt-1">
                  Strategic Communications & Public Relations
                </p>
              </div>

              <div className="space-y-5 text-xs font-deck-body">
                {/* Leadership */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-emerald-300 border border-white/10">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-[#D5D1C8] uppercase font-bold tracking-wider">Leadership</div>
                    <div className="font-bold text-sm text-white">{brandMeta.presentedBy}</div>
                    <div className="text-[11px] text-[#D5D1C8]/80">Partner & Principal Consultant</div>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-emerald-300 border border-white/10">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-[#D5D1C8] uppercase font-bold tracking-wider">Headquarters Office</div>
                    <div className="font-semibold text-xs sm:text-sm text-white leading-snug">
                      2nd Floor, Velho Building, Opposite Municipal Garden, Panjim, Goa 403001
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-emerald-300 border border-white/10">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-[#D5D1C8] uppercase font-bold tracking-wider">Direct Email</div>
                    <a href="mailto:amol@globalaadhar.com" className="font-bold text-sm text-emerald-200 hover:text-white transition-colors underline decoration-emerald-400/40">
                      amol@globalaadhar.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-emerald-300 border border-white/10">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-[#D5D1C8] uppercase font-bold tracking-wider">Direct Phone / WhatsApp</div>
                    <a href="tel:+919326510950" className="font-bold text-sm text-emerald-200 hover:text-white transition-colors">
                      +91 9326510950
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Response SLA Note */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3 text-xs text-[#D5D1C8]">
              <Clock className="w-4 h-4 text-emerald-300 shrink-0" />
              <span>Dedicated 24-hour response SLA for all institutional briefs.</span>
            </div>
          </motion.div>

          {/* Right Column: Direct Strategic Consultation Form */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 p-6 sm:p-8 lg:p-10 rounded-3xl bg-white text-[#2B2B2B] shadow-2xl space-y-6"
          >
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#2D5A54]/10 text-[#2D5A54] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-deck-headline text-2xl text-[#2D5A54]">
                  INQUIRY TRANSMITTED SUCCESSFULLY
                </h3>
                <p className="font-deck-body text-xs sm:text-sm text-[#555555] max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out. Amol K Arondekar and the Global Aadhar strategic communications desk will review your mandate and respond within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', company: '', serviceInterest: 'Strategic PR Retainer', message: '' });
                  }}
                  className="btn-primary-teal text-xs py-2.5 px-6 rounded-full cursor-pointer mt-2"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <h3 className="font-deck-headline text-xl sm:text-2xl text-[#1A332F]">
                    INITIATE STRATEGIC DIALOGUE
                  </h3>
                  <p className="font-deck-body text-xs text-[#555555]">
                    Share your requirements with our Panjim bureau.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-deck-body text-[11px] font-bold text-[#2D5A54] uppercase tracking-wider">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ramesh Prabhu"
                      className="w-full px-4 py-3 rounded-xl border border-[#D5D1C8] focus:border-[#2D5A54] focus:ring-2 focus:ring-[#2D5A54]/20 bg-[#EDEBE7]/40 text-xs font-medium text-[#2B2B2B] outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-deck-body text-[11px] font-bold text-[#2D5A54] uppercase tracking-wider">
                      Official Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@organization.com"
                      className="w-full px-4 py-3 rounded-xl border border-[#D5D1C8] focus:border-[#2D5A54] focus:ring-2 focus:ring-[#2D5A54]/20 bg-[#EDEBE7]/40 text-xs font-medium text-[#2B2B2B] outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-deck-body text-[11px] font-bold text-[#2D5A54] uppercase tracking-wider">
                      Phone / Mobile *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl border border-[#D5D1C8] focus:border-[#2D5A54] focus:ring-2 focus:ring-[#2D5A54]/20 bg-[#EDEBE7]/40 text-xs font-medium text-[#2B2B2B] outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-deck-body text-[11px] font-bold text-[#2D5A54] uppercase tracking-wider">
                      Organization / Entity
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Goa Pharma Ltd."
                      className="w-full px-4 py-3 rounded-xl border border-[#D5D1C8] focus:border-[#2D5A54] focus:ring-2 focus:ring-[#2D5A54]/20 bg-[#EDEBE7]/40 text-xs font-medium text-[#2B2B2B] outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-deck-body text-[11px] font-bold text-[#2D5A54] uppercase tracking-wider">
                    Primary Service Mandate
                  </label>
                  <select
                    value={formData.serviceInterest}
                    onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#D5D1C8] focus:border-[#2D5A54] focus:ring-2 focus:ring-[#2D5A54]/20 bg-[#EDEBE7]/40 text-xs font-semibold text-[#2B2B2B] outline-none transition-all cursor-pointer"
                  >
                    <option>Strategic PR Retainer</option>
                    <option>Broadcast & Media Production</option>
                    <option>Government Relations & Policy Comms</option>
                    <option>CSR Storytelling & Impact Reporting</option>
                    <option>Events & Institutional Experiences</option>
                    <option>Digital PR & Sumant Cloud Tech Integration</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="font-deck-body text-[11px] font-bold text-[#2D5A54] uppercase tracking-wider">
                    Brief Overview of Requirements
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your communication goals, upcoming announcements, or institutional mandate..."
                    className="w-full px-4 py-3 rounded-xl border border-[#D5D1C8] focus:border-[#2D5A54] focus:ring-2 focus:ring-[#2D5A54]/20 bg-[#EDEBE7]/40 text-xs font-medium text-[#2B2B2B] outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-primary-teal text-xs sm:text-sm py-3.5 justify-center shadow-lg cursor-pointer font-bold hover:scale-[1.01] active:scale-[0.99] transition-all"
                >
                  <span>{loading ? 'Transmitting Brief...' : 'Transmit Strategic Consultation Request'}</span>
                  <Send className="w-4 h-4 ml-1.5" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
