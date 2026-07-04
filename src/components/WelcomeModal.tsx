import React, { useState, useRef } from "react";
import { motion } from "motion/react";
import { X, Church, Building, Users, Sparkles, Heart } from "lucide-react";
const logoImg = "/src/assets/images/sole-hope-logo-wide.png";

interface WelcomeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectExperience: (view: "church" | "corporate" | "individual") => void;
}

export default function WelcomeModal({ isOpen, onClose, onSelectExperience }: WelcomeModalProps) {
  if (!isOpen) return null;

  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState(0);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const scrollLeft = container.scrollLeft;
    const cardWidth = container.offsetWidth * 0.85; // approximate card width on mobile
    if (cardWidth > 0) {
      const index = Math.round(scrollLeft / (cardWidth + 20)); // width + gap
      setActiveCard(Math.max(0, Math.min(2, index)));
    }
  };

  const scrollToCard = (index: number) => {
    const container = scrollRef.current;
    if (container) {
      const cardWidth = container.offsetWidth * 0.85;
      container.scrollTo({
        left: index * (cardWidth + 20), // cardWidth + gap
        behavior: "smooth"
      });
      setActiveCard(index);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-deep-ocean/80 backdrop-blur-md"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ type: "spring", duration: 0.4 }}
        className="relative bg-[#FAF9F5] w-full max-w-[1060px] rounded-2xl shadow-2xl border border-brand-sand/25 overflow-hidden z-10 flex flex-col my-4"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full bg-white/80 hover:bg-white text-deep-ocean shadow-sm hover:scale-110 active:scale-95 border border-brand-sand/10 hover:border-brand-sand/30 transition-all z-20 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header Block */}
        <div className="pt-7 pb-4 px-6 md:pt-9 md:pb-6 text-center max-w-2xl mx-auto space-y-2 md:space-y-3 flex flex-col items-center">
          <img 
            id="welcome-modal-logo"
            src={logoImg} 
            alt="Sole Hope Logo" 
            className="h-18 md:h-24 w-auto object-contain mb-1 transition-transform duration-500 hover:rotate-1 hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <h2 className="font-serif text-2xl md:text-4xl text-deep-ocean font-bold tracking-tight">
            Choose Your Shoe Cutting Party Experience
          </h2>
          <p className="font-sans text-sm md:text-base text-on-surface-variant leading-relaxed">
            Tell us who you are hosting with so we can guide you to the right kit, pricing, and next step.
          </p>
        </div>

        {/* Experience Cards Grid */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex md:grid md:grid-cols-3 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory md:snap-none gap-5 px-6 md:px-10 pb-4 md:pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] scroll-smooth"
        >
          
          {/* Church Experience */}
          <motion.div 
            whileHover={{ y: -6, scale: 1.015 }}
            whileTap={{ scale: 0.985 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onClick={() => onSelectExperience("church")}
            className="group relative h-[250px] md:h-[270px] w-[85%] sm:w-[320px] md:w-full flex-shrink-0 snap-center md:snap-align-none rounded-xl overflow-hidden shadow-md cursor-pointer border border-brand-sand/15 flex flex-col justify-end p-5 md:p-6 hover:shadow-xl hover:border-clay/20 transition-all duration-300"
          >
            <img 
              src="/src/assets/images/family_volunteering_1782505486984.jpg"
              alt="Church volunteers cutting denim"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-ocean/95 via-deep-ocean/60 to-transparent transition-opacity duration-300 group-hover:via-deep-ocean/65" />
            
            <div className="relative z-10 space-y-2.5">
              <div className="w-8 h-8 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all duration-300 group-hover:bg-clay group-hover:scale-110">
                <Church className="w-4 h-4 transition-transform duration-300 group-hover:rotate-3" />
              </div>
              <div>
                <h4 className="font-serif text-lg md:text-xl font-bold text-white tracking-tight">Churches</h4>
                <p className="text-[11px] md:text-xs text-white/80 font-sans mt-0.5 leading-relaxed">
                  Deeply connected mission projects for congregations, youth ministries, and small groups.
                </p>
              </div>
              <div className="bg-clay hover:bg-clay/90 text-white font-sans font-bold text-[9px] md:text-[10px] uppercase tracking-wider py-1.5 md:py-2 px-3 rounded-full w-full transition-all mt-1 flex items-center justify-center gap-1.5 shadow-sm group-hover:brightness-105">
                <span>Plan a Church Shoe Cutting Party</span>
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </div>
            </div>
          </motion.div>

          {/* Corporate Experience */}
          <motion.div 
            whileHover={{ y: -6, scale: 1.015 }}
            whileTap={{ scale: 0.985 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onClick={() => onSelectExperience("corporate")}
            className="group relative h-[250px] md:h-[270px] w-[85%] sm:w-[320px] md:w-full flex-shrink-0 snap-center md:snap-align-none rounded-xl overflow-hidden shadow-md cursor-pointer border border-brand-sand/15 flex flex-col justify-end p-5 md:p-6 hover:shadow-xl hover:border-clay/20 transition-all duration-300"
          >
            <img 
              src="/src/assets/images/corporate_volunteering_1782505474243.jpg"
              alt="Corporate team building"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:-rotate-1"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-ocean/95 via-deep-ocean/60 to-transparent transition-opacity duration-300 group-hover:via-deep-ocean/65" />
            
            <div className="relative z-10 space-y-2.5">
              <div className="w-8 h-8 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all duration-300 group-hover:bg-clay group-hover:scale-110">
                <Building className="w-4 h-4 transition-transform duration-300 group-hover:rotate-3" />
              </div>
              <div>
                <h4 className="font-serif text-lg md:text-xl font-bold text-white tracking-tight">Corporate Teams</h4>
                <p className="text-[11px] md:text-xs text-white/80 font-sans mt-0.5 leading-relaxed">
                  Tactile team-building with measurable CSR footprint and corporate alignment.
                </p>
              </div>
              <div className="bg-clay hover:bg-clay/90 text-white font-sans font-bold text-[9px] md:text-[10px] uppercase tracking-wider py-1.5 md:py-2 px-3 rounded-full w-full transition-all mt-1 flex items-center justify-center gap-1.5 shadow-sm group-hover:brightness-105">
                <span>Explore Corporate Team Building</span>
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </div>
            </div>
          </motion.div>

          {/* Individual Experience */}
          <motion.div 
            whileHover={{ y: -6, scale: 1.015 }}
            whileTap={{ scale: 0.985 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onClick={() => onSelectExperience("individual")}
            className="group relative h-[250px] md:h-[270px] w-[85%] sm:w-[320px] md:w-full flex-shrink-0 snap-center md:snap-align-none rounded-xl overflow-hidden shadow-md cursor-pointer border border-brand-sand/15 flex flex-col justify-end p-5 md:p-6 hover:shadow-xl hover:border-clay/20 transition-all duration-300"
          >
            <img 
              src="/src/assets/images/church_volunteering_1782505501137.jpg"
              alt="Individual and families tracing shoes"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-ocean/95 via-deep-ocean/60 to-transparent transition-opacity duration-300 group-hover:via-deep-ocean/65" />
            
            <div className="relative z-10 space-y-2.5">
              <div className="w-8 h-8 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all duration-300 group-hover:bg-clay group-hover:scale-110">
                <Users className="w-4 h-4 transition-transform duration-300 group-hover:rotate-3" />
              </div>
              <div>
                <h4 className="font-serif text-lg md:text-xl font-bold text-white tracking-tight">Individuals & Families</h4>
                <p className="text-[11px] md:text-xs text-white/80 font-sans mt-0.5 leading-relaxed">
                  Host intimate shoe-cutting gatherings at home with friends, families, or neighbors.
                </p>
              </div>
              <div className="bg-clay hover:bg-clay/90 text-white font-sans font-bold text-[9px] md:text-[10px] uppercase tracking-wider py-1.5 md:py-2 px-3 rounded-full w-full transition-all mt-1 flex items-center justify-center gap-1.5 shadow-sm group-hover:brightness-105">
                <span>Order a Host Kit</span>
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile Page Indicator Dots */}
        <div className="flex md:hidden justify-center items-center gap-2 pb-5 pt-1">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              onClick={() => scrollToCard(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeCard === index ? "bg-clay w-4" : "bg-clay/20 hover:bg-clay/40"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Footer info links */}
        <div className="bg-[#FAF9F5] border-t border-brand-sand/15 px-6 py-6 flex flex-col items-center justify-center text-center font-sans">
          <div className="max-w-md flex flex-col items-center gap-2 group/footer cursor-default">
            <div className="flex items-center justify-center w-9 h-9 rounded-full bg-clay/8 border border-clay/15 text-clay shadow-sm transition-all duration-300 group-hover/footer:scale-110 group-hover/footer:bg-clay/15">
              <Heart className="w-4.5 h-4.5 fill-clay text-clay animate-pulse" />
            </div>
            <div className="space-y-1">
              <p className="text-xs md:text-sm text-deep-ocean font-serif font-bold tracking-tight transition-colors duration-300 group-hover/footer:text-clay">
                Over 300,000+ pairs of shoes hand-fitted in Jinja, Uganda
              </p>
              <p className="text-[11px] md:text-xs text-clay italic font-medium leading-relaxed">
                Restoring health, hope, and childhood dignity, one loving hand, one step at a time.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
