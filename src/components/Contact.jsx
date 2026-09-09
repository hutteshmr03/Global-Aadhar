import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, User, Send, CheckCircle2 } from 'lucide-react';
import { brandMeta } from '../data/brandContent';

export default function Contact({ onNavigateContact }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log('[Global Aadhar Strategic Inquiry Payload]:', formData);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
  };

  return (
    <section id="contact-overview" className="deck-section bg-[#E5E3DE] scroll-mt-32">
      <div className="deck-container">
        {/* Slide Header */}
        <div className="slide-header-bar">
          <div className="flex items-center gap-2 text-[#2D5A54]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2D5A54]"></span>
            <span>{brandMeta.name}</span>
          </div>
          <div className="text-[#555555]">
            SLIDE 09 • GET IN TOUCH
          </div>
        </div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 sm:mb-10 space-y-3 max-w-3xl flex flex-col sm:flex-row sm:items-end justify-between gap-4"
        >
          <div>
            <h2 className="deck-section-title">
              LET'S BUILD IMPACT TOGETHER
            </h2>
            <p className="deck-section-intro">
              Connect with our leadership team in Panjim, Goa for strategic PR consultations, media campaigns, or institutional partnerships.
            </p>
          </div>

          {onNavigateContact && (
            <button
              onClick={onNavigateContact}
              className="btn-primary-teal text-xs py-2.5 px-5 shrink-0 shadow-xs cursor-pointer"
            >
              <span>Dedicated Contact Page</span>
              <Send className="w-3.5 h-3.5 ml-1.5" />
            </button>
          )}
        </motion.div>

        {/* 2-Column Grid: Left Contact Card & Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
          {/* Left: Contact Card (Darker Brand Teal) */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 p-5 sm:p-6 lg:p-8 rounded-2xl bg-[#23413C] text-white shadow-sm flex flex-col justify-between border border-[#2D5A54]"
          >
            <div className="space-y-6">
              <div className="border-b border-white/15 pb-5">
                <span className="font-deck-body text-[11px] font-bold text-[#EDEBE7] uppercase tracking-widest block mb-1 opacity-90">
                  HEADQUARTERS & DESK
                </span>
                <h3 className="font-deck-headline text-xl sm:text-2xl tracking-tight text-white">
                  GLOBAL AADHAR
                </h3>
                <p className="font-deck-body text-xs text-[#D5D1C8] pt-1">
                  Strategic Communications & Public Relations
                </p>
              </div>

              <div className="flex flex-col gap-4 text-xs font-deck-body">
                {/* Partner */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-white">
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-[#D5D1C8] uppercase font-bold tracking-wider">Leadership</div>
                    <div className="font-bold text-sm text-white">{brandMeta.presentedBy}</div>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-white">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-[#D5D1C8] uppercase font-bold tracking-wider">Office Address</div>
                    <div className="text-[#EDEBE7] leading-relaxed text-xs">{brandMeta.address}</div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-white">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-[#D5D1C8] uppercase font-bold tracking-wider">Email Inquiry</div>
                    <a href={`mailto:${brandMeta.email}`} className="text-white font-bold hover:underline text-xs transition-colors">
                      {brandMeta.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-white">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-[#D5D1C8] uppercase font-bold tracking-wider">Direct Telephone</div>
                    <a href={`tel:${brandMeta.phone.replace(/\s+/g, '')}`} className="text-white font-bold hover:underline text-xs transition-colors">
                      {brandMeta.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-5 mt-6 border-t border-white/15 text-[11px] text-[#D5D1C8] leading-relaxed">
              Serving government departments, institutional networks, corporates, and NGOs across Goa and Western India.
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 p-5 sm:p-6 lg:p-8 rounded-2xl bg-[#EDEBE7] border border-[#D5D1C8] shadow-sm flex flex-col justify-between"
          >
            {submitted ? (
              <div className="text-center py-10 space-y-4 animate-fade-in my-auto">
                <div className="w-12 h-12 rounded-full bg-[#2D5A54]/10 text-[#2D5A54] mx-auto flex items-center justify-center border border-[#2D5A54]/30">
                  <CheckCircle2 className="w-7 h-7" />
                </div>

                <h3 className="font-deck-headline text-xl sm:text-2xl text-[#2D5A54]">
                  Message Logged Successfully
                </h3>

                <p className="font-deck-body text-xs sm:text-sm text-[#2B2B2B] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-[#2D5A54]">{formData.name}</strong>. Our partner desk in Panjim will review your brief and connect with you shortly.
                </p>

                <div className="pt-2">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', company: '', message: '' });
                    }}
                    className="btn-secondary-outline text-xs py-2 px-4"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <span className="font-deck-body text-[11px] font-bold text-[#2D5A54] uppercase tracking-wider block mb-1">
                    START A CONVERSATION
                  </span>
                  <h3 className="font-deck-headline text-lg sm:text-xl text-[#2D5A54] tracking-tight">
                    Schedule a Strategic Briefing
                  </h3>
                </div>

                {/* Name & Email Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-deck-body text-[11px] font-bold uppercase tracking-wider text-[#2B2B2B] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Rahul Deshmukh"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full h-10 px-3.5 rounded-lg bg-[#E5E3DE] border border-[#D5D1C8] text-[#2B2B2B] font-deck-body text-xs focus:outline-none focus:border-[#2D5A54] focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-deck-body text-[11px] font-bold uppercase tracking-wider text-[#2B2B2B] mb-1.5">
                      Official Email *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="name@organization.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full h-10 px-3.5 rounded-lg bg-[#E5E3DE] border border-[#D5D1C8] text-[#2B2B2B] font-deck-body text-xs focus:outline-none focus:border-[#2D5A54] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                {/* Company / Organization */}
                <div>
                  <label className="block font-deck-body text-[11px] font-bold uppercase tracking-wider text-[#2B2B2B] mb-1.5">
                    Company / Organization *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Goa Tourism Board / Zenith Healthcare"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full h-10 px-3.5 rounded-lg bg-[#E5E3DE] border border-[#D5D1C8] text-[#2B2B2B] font-deck-body text-xs focus:outline-none focus:border-[#2D5A54] focus:bg-white transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block font-deck-body text-[11px] font-bold uppercase tracking-wider text-[#2B2B2B] mb-1.5">
                    Project Brief / Communication Requirements *
                  </label>
                  <textarea
                    required
                    rows="3"
                    placeholder="Describe your PR goals, upcoming events, CSR storytelling, or technology requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3.5 rounded-lg bg-[#E5E3DE] border border-[#D5D1C8] text-[#2B2B2B] font-deck-body text-xs focus:outline-none focus:border-[#2D5A54] focus:bg-white transition-colors resize-none leading-relaxed"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-primary-teal text-xs py-3 justify-center shadow-md font-bold tracking-wider mt-1"
                >
                  {loading ? (
                    <span>Submitting Inquiry...</span>
                  ) : (
                    <>
                      <span>Transmit Brief to Partner Desk</span>
                      <Send className="w-3.5 h-3.5 ml-1.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
