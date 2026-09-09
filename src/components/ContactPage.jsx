import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, Mail, Phone, User, Send, CheckCircle2, 
  ArrowDown, ArrowUpRight, ArrowLeft, Clock, ShieldCheck, 
  Globe, Sparkles, Building2
} from 'lucide-react';
import { brandMeta } from '../data/brandContent';
import confetti from 'canvas-confetti';

export default function ContactPage({ onNavigateHome }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    serviceCategory: 'Strategic PR & Media',
    message: '',
    consent: true
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  const serviceOptions = [
    "Strategic PR & Media",
    "Government Relations",
    "CSR Storytelling & Impact",
    "Events & Experiences",
    "Digital Marketing & SEO",
    "Sumant Cloud Tech Solutions"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.consent) {
      alert("Please accept the data storage confirmation to proceed.");
      return;
    }
    setLoading(true);

    // Simulate API transmit
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // Fallback gracefully if canvas-confetti fails
      }
    }, 600);
  };

  const scrollToDetails = () => {
    const el = document.getElementById('contact-details');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#E5E3DE] text-[#2B2B2B]">
      {/* 1. HERO SECTION (Montfort Eurasia Style Atmospheric Header) */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 pt-16 pb-20 bg-[#23413C] text-white overflow-hidden">
        {/* Subtle Ambient Background Lighting & Noise Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(45,90,84,0.45)_0%,_rgba(35,65,60,0.95)_70%,_rgba(20,38,35,1)_100%)] pointer-events-none"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#2D5A54]/25 blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#2D5A54]/20 blur-3xl pointer-events-none"></div>

        {/* Top Breadcrumb Navigation */}
        <div className="relative z-10 mb-8">
          <button
            onClick={() => onNavigateHome ? onNavigateHome() : (window.location.hash = '#about')}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-[#EDEBE7] hover:text-white text-xs font-deck-body font-semibold tracking-wider uppercase transition-all duration-200 backdrop-blur-md border border-white/15 cursor-pointer shadow-xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Presentation Deck</span>
          </button>
        </div>

        {/* Hero Content Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-4xl mx-auto space-y-4 sm:space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2D5A54]/60 text-white/90 border border-white/20 text-[10px] sm:text-xs font-deck-body font-bold uppercase tracking-[0.2em]">
            <Sparkles className="w-3 h-3 text-[#EDEBE7]" />
            <span>Global Aadhar • Strategic Partner Desk</span>
          </div>

          <h1 className="font-deck-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-tight">
            Let’s get acquainted
          </h1>

          <p className="font-deck-body text-base sm:text-xl lg:text-2xl text-[#EDEBE7]/90 max-w-2xl mx-auto font-normal leading-relaxed">
            We look forward to partnering with you.
          </p>

          <p className="font-deck-body text-xs sm:text-sm text-[#D5D1C8]/80 max-w-xl mx-auto pt-2 leading-relaxed">
            Connecting institutions, corporates, NGOs, and government bodies across Goa and Western India with high-impact strategic communications.
          </p>

          {/* Smooth Scroll Indicator Button */}
          <div className="pt-8 sm:pt-10">
            <button
              onClick={scrollToDetails}
              aria-label="Scroll down to contact information"
              className="w-12 h-12 rounded-full border border-white/30 hover:border-white text-white hover:bg-white/10 flex items-center justify-center mx-auto transition-all duration-300 animate-bounce cursor-pointer shadow-md"
            >
              <ArrowDown className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </section>

      {/* 2. DIRECT CONTACT INFO (Montfort Eurasia Style Centered Agency Card) */}
      <section id="contact-details" className="py-16 sm:py-20 lg:py-24 bg-[#E5E3DE] border-b border-[#D5D1C8] scroll-mt-20">
        <div className="deck-container max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-[#EDEBE7] border border-[#D5D1C8] shadow-md text-center space-y-8"
          >
            {/* Agency Name */}
            <div className="space-y-1">
              <span className="font-deck-body text-xs font-bold text-[#2D5A54] uppercase tracking-[0.25em] block">
                HEADQUARTERS
              </span>
              <h2 className="font-deck-headline text-3xl sm:text-4xl text-[#2D5A54] tracking-tight">
                {brandMeta.name}
              </h2>
              <div className="text-xs sm:text-sm font-deck-body font-semibold text-[#555555]">
                {brandMeta.subtitle}
              </div>
            </div>

            {/* Address */}
            <div className="max-w-md mx-auto space-y-1 font-deck-body text-sm sm:text-base text-[#2B2B2B] leading-relaxed">
              <div className="flex items-center justify-center gap-2 text-[#2D5A54] mb-1">
                <MapPin className="w-4 h-4" />
                <span className="font-bold text-xs uppercase tracking-wider">Panjim Bureau</span>
              </div>
              <p className="font-medium text-[#2B2B2B]">
                {brandMeta.address}
              </p>
            </div>

            {/* Interactive Animated Underline Links */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 pt-2 font-deck-body">
              {/* Email with Hover Progress Line */}
              <a
                href={`mailto:${brandMeta.email}`}
                className="group relative inline-flex flex-col items-center text-sm sm:text-base font-bold text-[#2D5A54] hover:text-[#23413C] transition-colors py-1"
              >
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#2D5A54]" />
                  <span>{brandMeta.email}</span>
                </div>
                <div className="w-full h-[2px] bg-[#D5D1C8] mt-1 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[#2D5A54] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
                </div>
              </a>

              {/* Phone with Hover Progress Line */}
              <a
                href={`tel:${brandMeta.phone.replace(/\s+/g, '')}`}
                className="group relative inline-flex flex-col items-center text-sm sm:text-base font-bold text-[#2D5A54] hover:text-[#23413C] transition-colors py-1"
              >
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#2D5A54]" />
                  <span>{brandMeta.phone}</span>
                </div>
                <div className="w-full h-[2px] bg-[#D5D1C8] mt-1 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[#2D5A54] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
                </div>
              </a>
            </div>

            {/* Social Channels Row */}
            <div className="pt-4 flex items-center justify-center gap-3">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="w-10 h-10 rounded-full bg-[#E5E3DE] border border-[#D5D1C8] hover:border-[#2D5A54] hover:bg-[#2D5A54] text-[#2D5A54] hover:text-white flex items-center justify-center transition-all duration-200 shadow-xs cursor-pointer group"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter Profile"
                className="w-10 h-10 rounded-full bg-[#E5E3DE] border border-[#D5D1C8] hover:border-[#2D5A54] hover:bg-[#2D5A54] text-[#2D5A54] hover:text-white flex items-center justify-center transition-all duration-200 shadow-xs cursor-pointer group"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://globalaadhar.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Official Website"
                className="w-10 h-10 rounded-full bg-[#E5E3DE] border border-[#D5D1C8] hover:border-[#2D5A54] hover:bg-[#2D5A54] text-[#2D5A54] hover:text-white flex items-center justify-center transition-all duration-200 shadow-xs cursor-pointer"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>

            {/* Leadership Sign-off */}
            <div className="pt-6 border-t border-[#D5D1C8]/80 text-xs font-deck-body text-[#555555]">
              Executive Lead: <strong className="text-[#2D5A54]">{brandMeta.presentedBy}</strong>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. MESSAGE FORM SECTION ("Leave us a message" Montfort Eurasia Style) */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#E5E3DE]">
        <div className="deck-container max-w-3xl mx-auto">
          {/* Section Heading */}
          <div className="text-center space-y-3 mb-10 sm:mb-12">
            <span className="font-deck-body text-[11px] font-bold text-[#2D5A54] uppercase tracking-[0.2em] block">
              ENGAGEMENT INQUIRY
            </span>
            <h2 className="font-deck-headline text-3xl sm:text-4xl text-[#2D5A54] tracking-tight">
              Leave us a message
            </h2>
            <p className="font-deck-body text-xs sm:text-sm text-[#2B2B2B] max-w-lg mx-auto leading-relaxed">
              Have a project, campaign, or strategic requirement in mind? Share your brief and our team in Panjim will get in touch.
            </p>
          </div>

          {/* Form Card */}
          <div className="p-6 sm:p-10 lg:p-12 rounded-3xl bg-[#EDEBE7] border border-[#D5D1C8] shadow-md">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-5"
              >
                <div className="w-16 h-16 rounded-full bg-[#2D5A54]/10 text-[#2D5A54] border border-[#2D5A54]/20 mx-auto flex items-center justify-center shadow-xs">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-deck-headline text-2xl sm:text-3xl text-[#2D5A54]">
                    Message Transmitted
                  </h3>
                  <p className="font-deck-body text-xs sm:text-sm text-[#2B2B2B] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#2D5A54]">{formData.name}</strong>. Your inquiry regarding <span className="text-[#2D5A54] font-semibold">{formData.serviceCategory}</span> has been received by our Panjim Bureau. We will respond within 24 hours.
                  </p>
                </div>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        company: '',
                        serviceCategory: 'Strategic PR & Media',
                        message: '',
                        consent: true
                      });
                    }}
                    className="btn-secondary-outline text-xs py-2.5 px-6"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* 1. Email Address (Full Width) */}
                <div>
                  <label className="block font-deck-body text-xs font-bold uppercase tracking-wider text-[#2D5A54] mb-2">
                    Email Address *
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="name@organization.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full h-12 px-4 rounded-xl bg-[#E5E3DE] border border-[#D5D1C8] text-[#2B2B2B] font-deck-body text-sm focus:outline-none focus:border-[#2D5A54] focus:bg-white transition-colors"
                  />
                </div>

                {/* 2. Row: Name & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-deck-body text-xs font-bold uppercase tracking-wider text-[#2D5A54] mb-2">
                      Your Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Rahul Deshmukh"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full h-12 px-4 rounded-xl bg-[#E5E3DE] border border-[#D5D1C8] text-[#2B2B2B] font-deck-body text-sm focus:outline-none focus:border-[#2D5A54] focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-deck-body text-xs font-bold uppercase tracking-wider text-[#2D5A54] mb-2">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Zenith Healthcare / Goa Tourism"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full h-12 px-4 rounded-xl bg-[#E5E3DE] border border-[#D5D1C8] text-[#2B2B2B] font-deck-body text-sm focus:outline-none focus:border-[#2D5A54] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                {/* 3. Service Scope Selector */}
                <div>
                  <label className="block font-deck-body text-xs font-bold uppercase tracking-wider text-[#2D5A54] mb-2.5">
                    Primary Area of Interest
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {serviceOptions.map((opt) => {
                      const isSelected = formData.serviceCategory === opt;
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setFormData({ ...formData, serviceCategory: opt })}
                          className={`px-3.5 py-2 rounded-full font-deck-body text-xs font-semibold transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-[#2D5A54] text-white shadow-xs'
                              : 'bg-[#E5E3DE] text-[#2B2B2B] border border-[#D5D1C8] hover:border-[#2D5A54]'
                          }`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 4. Message Textarea */}
                <div>
                  <label className="block font-deck-body text-xs font-bold uppercase tracking-wider text-[#2D5A54] mb-2">
                    Your Message / Project Scope *
                  </label>
                  <textarea
                    required
                    rows="4"
                    placeholder="Describe your PR objectives, upcoming events, CSR documentation requirements, or technology mandates..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-4 rounded-xl bg-[#E5E3DE] border border-[#D5D1C8] text-[#2B2B2B] font-deck-body text-sm focus:outline-none focus:border-[#2D5A54] focus:bg-white transition-colors resize-none leading-relaxed"
                  ></textarea>
                </div>

                {/* 5. Privacy Consent Checkbox (Montfort Eurasia Style) */}
                <div className="pt-1">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-1 w-4 h-4 rounded border-[#D5D1C8] text-[#2D5A54] focus:ring-[#2D5A54]"
                    />
                    <span className="font-deck-body text-xs text-[#555555] leading-relaxed">
                      Check here to confirm you accept the way we intend to store and use your data for strategic communications inquiries. Click{' '}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          setPrivacyModalOpen(true);
                        }}
                        className="text-[#2D5A54] font-bold underline hover:text-[#23413C]"
                      >
                        here
                      </button>{' '}
                      for more information.
                    </span>
                  </label>
                </div>

                {/* 6. Centered Submit Button */}
                <div className="text-center pt-3">
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary-teal text-xs py-3 px-8 shadow-md uppercase tracking-wider font-bold mx-auto cursor-pointer"
                  >
                    {loading ? (
                      <span>Sending Form...</span>
                    ) : (
                      <>
                        <span>Send Form</span>
                        <Send className="w-3.5 h-3.5 ml-2" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 4. OFFICE BUREAU & OPERATIONAL ASSURANCE (Value Details Grid) */}
      <section className="py-14 sm:py-18 bg-[#EDEBE7] border-t border-[#D5D1C8]">
        <div className="deck-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#E5E3DE] border border-[#D5D1C8] space-y-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#2D5A54]/10 text-[#2D5A54] flex items-center justify-center">
                <Clock className="w-4 h-4" />
              </div>
              <h3 className="font-deck-headline text-lg text-[#2D5A54]">
                Operating Hours
              </h3>
              <p className="font-deck-body text-xs text-[#2B2B2B] leading-relaxed">
                Monday – Friday: 9:30 AM – 6:30 PM IST.<br />
                Emergency crisis communication support available 24/7 for active retainers.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#E5E3DE] border border-[#D5D1C8] space-y-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#2D5A54]/10 text-[#2D5A54] flex items-center justify-center">
                <Building2 className="w-4 h-4" />
              </div>
              <h3 className="font-deck-headline text-lg text-[#2D5A54]">
                Panjim Headquarters
              </h3>
              <p className="font-deck-body text-xs text-[#2B2B2B] leading-relaxed">
                Conveniently located at Municipal Garden, Panjim with meeting spaces for confidential corporate & institutional briefings.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#E5E3DE] border border-[#D5D1C8] space-y-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#2D5A54]/10 text-[#2D5A54] flex items-center justify-center">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="font-deck-headline text-lg text-[#2D5A54]">
                Confidentiality Assurance
              </h3>
              <p className="font-deck-body text-xs text-[#2B2B2B] leading-relaxed">
                All communications and campaign briefs are protected by standard non-disclosure protocols and rigorous institutional governance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Modal */}
      {privacyModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-[#EDEBE7] border border-[#D5D1C8] rounded-2xl p-6 sm:p-8 max-w-lg w-full shadow-2xl space-y-4">
            <h3 className="font-deck-headline text-xl text-[#2D5A54]">
              Data Privacy & Usage Policy
            </h3>
            <p className="font-deck-body text-xs text-[#2B2B2B] leading-relaxed">
              Global Aadhar treats all client inquiries with the highest level of confidentiality. Information submitted through this portal is utilized exclusively by our leadership desk in Panjim, Goa for the purpose of assessing your communications requirements and scheduling strategic consultations. We do not sell or distribute your data to third-party entities.
            </p>
            <div className="pt-2 text-right">
              <button
                onClick={() => setPrivacyModalOpen(false)}
                className="btn-primary-teal text-xs py-2 px-5"
              >
                Close Notice
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
