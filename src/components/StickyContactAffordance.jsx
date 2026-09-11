import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone, Mail, X, ArrowUpRight } from 'lucide-react';
import { brandMeta } from '../data/brandContent';

export default function StickyContactAffordance({ onNavigateContact }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 250);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2.5 font-deck-body">
      {/* Expanded Quick Contact Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-72 p-4 rounded-2xl bg-[#1A332F] text-white border border-emerald-500/30 shadow-2xl space-y-3.5 backdrop-blur-md"
          >
            <div className="flex items-center justify-between border-b border-white/15 pb-2.5">
              <div>
                <div className="text-[10px] font-bold text-emerald-300 uppercase tracking-wider">
                  Strategic Desk
                </div>
                <div className="font-deck-headline text-sm font-bold text-white">
                  {brandMeta.presentedBy}
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors"
                aria-label="Close contact popup"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-2 text-xs">
              <a
                href={`https://wa.me/919326510950?text=${encodeURIComponent('Hello Global Aadhar, I would like to inquire about strategic PR services.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition-colors shadow-xs"
              >
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>WhatsApp Chat</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={`tel:${brandMeta.phone}`}
                className="flex items-center justify-between p-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold transition-colors border border-white/10"
              >
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-300" />
                  <span>{brandMeta.phone}</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={`mailto:${brandMeta.email}`}
                className="flex items-center justify-between p-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold transition-colors border border-white/10"
              >
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-emerald-300" />
                  <span className="truncate">{brandMeta.email}</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Persistent Toggle Button */}
      <motion.button
        type="button"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#2D5A54] text-white shadow-xl hover:bg-[#23413C] border-2 border-white/20 transition-all cursor-pointer font-bold text-xs"
        aria-label="Direct Media Desk Contact"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
        <MessageCircle className="w-4 h-4 fill-current" />
        <span className="hidden sm:inline">Direct Desk</span>
      </motion.button>
    </div>
  );
}
