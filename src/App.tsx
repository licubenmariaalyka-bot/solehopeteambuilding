import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Church, Building, Users, CheckCircle2, ChevronRight, 
  Play, Menu, X, BookOpen, Scissors, Video, ClipboardList, 
  Mail, Truck, HelpCircle, Lock, ShieldCheck, Heart, Sparkles,
  Info, ExternalLink, Globe, Smartphone, Compass, ArrowRight, Plus, Minus,
  Award, Clock, Camera, Upload, Link as LinkIcon, RotateCcw, Volume2, VolumeX
} from "lucide-react";
const logoImg = "/src/assets/images/sole-hope-logo-wide.png";
import BookingModal from "./components/BookingModal";
import ContactModal from "./components/ContactModal";
import VideoModal from "./components/VideoModal";
import WelcomeModal from "./components/WelcomeModal";
import ChurchMissions from "./components/ChurchMissions";
import CorporateMissions from "./components/CorporateMissions";
import IndividualMissions from "./components/IndividualMissions";
import OurImpact from "./components/OurImpact";
import StoriesOfHope from "./components/StoriesOfHope";
import Footer from "./components/Footer";

interface ImageCustomizerProps {
  imageKey: string;
  currentImage: string;
  defaultImage: string;
  onSave: (url: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

function ImageCustomizer({ imageKey, currentImage, defaultImage, onSave, isOpen, onClose }: ImageCustomizerProps) {
  const [urlInput, setUrlInput] = useState(currentImage);

  // Sync state if image changes or customizer opens
  useEffect(() => {
    if (isOpen) {
      setUrlInput(currentImage);
    }
  }, [currentImage, isOpen]);

  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 bg-deep-ocean/95 backdrop-blur-sm z-30 p-5 flex flex-col justify-between text-white transition-all duration-300">
      <div>
        <div className="flex justify-between items-center mb-3">
          <h6 className="font-serif font-bold text-sm text-parchment flex items-center gap-1.5">
            <Camera className="w-4 h-4 text-clay" /> Customize Image
          </h6>
          <button 
            type="button"
            onClick={onClose}
            className="p-1 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        
        <p className="text-[11px] text-white/70 mb-4 font-sans leading-relaxed">
          Upload a local file from your computer/device or paste a web URL.
        </p>

        <div className="space-y-3.5">
          {/* File input */}
          <label className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-clay hover:bg-clay/90 text-white rounded-xl text-xs font-bold uppercase tracking-wider cursor-pointer transition-all shadow-md shadow-clay/10 hover:scale-[1.01] active:scale-95">
            <Upload className="w-4 h-4" />
            <span>Upload File</span>
            <input 
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    const resultStr = reader.result as string;
                    onSave(resultStr);
                    localStorage.setItem(imageKey, resultStr);
                    onClose();
                  };
                  reader.readAsDataURL(file);
                }
              }}
            />
          </label>

          <div className="relative flex items-center justify-center py-1">
            <span className="bg-deep-ocean px-2 text-[9px] text-white/45 uppercase tracking-widest font-sans font-bold z-10">Or URL</span>
            <div className="absolute left-0 right-0 h-px bg-white/10" />
          </div>

          <div className="space-y-1.5">
            <div className="flex gap-2">
              <input 
                type="text"
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
                placeholder="https://example.com/image.jpg"
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-clay/50 font-sans"
              />
              <button 
                type="button"
                onClick={() => {
                  if (urlInput.trim()) {
                    onSave(urlInput);
                    localStorage.setItem(imageKey, urlInput);
                    onClose();
                  }
                }}
                className="bg-clay hover:bg-clay/90 text-white font-bold text-xs px-4 rounded-xl transition-all cursor-pointer"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>

      <button 
        type="button"
        onClick={() => {
          onSave(defaultImage);
          localStorage.removeItem(imageKey);
          onClose();
        }}
        className="flex items-center justify-center gap-1.5 w-full py-2 border border-white/10 hover:bg-white/5 text-white/60 hover:text-white rounded-xl text-[10px] uppercase tracking-wider font-sans font-bold transition-all mt-4 cursor-pointer"
      >
        <RotateCcw className="w-3.5 h-3.5" />
        <span>Reset to Default</span>
      </button>
    </div>
  );
}

export default function App() {
  const [activeView, setActiveView] = useState<"home" | "church" | "corporate" | "individual" | "impact" | "stories">("home");
  const [isWelcomeOpen, setIsWelcomeOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingType, setBookingType] = useState<"church" | "corporate" | "individual">("individual");
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactExperience, setContactExperience] = useState("General Inquiry");
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [inlineVideoPlaying, setInlineVideoPlaying] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Interactive Impact Calculator state
  const [volunteerSize, setVolunteerSize] = useState(25);
  
  // FAQ toggles
  const [faqActive, setFaqActive] = useState<number | null>(null);

  // Editable Images state
  const [imageMain, setImageMain] = useState(() => {
    return localStorage.getItem("party_image_main") || "/src/assets/images/shoe-cutting-volunteers.webp";
  });
  const [imageSub1, setImageSub1] = useState(() => {
    return localStorage.getItem("party_image_sub1") || "/src/assets/images/problem_reinfestation_feet_1783107783503.jpg";
  });
  const [imageSub2, setImageSub2] = useState(() => {
    return localStorage.getItem("party_image_sub2") || "/src/assets/images/children-with-shoes.webp";
  });

  // Track currently active editing image ("main", "sub1", "sub2", or null)
  const [activeEditImage, setActiveEditImage] = useState<"main" | "sub1" | "sub2" | null>(null);
  const [editUrlInput, setEditUrlInput] = useState("");
  const [isMuted, setIsMuted] = useState(true);

  // Auto-welcome popup removed per user request

  const handleOpenBooking = (type: "church" | "corporate" | "individual") => {
    setBookingType(type);
    setIsBookingOpen(true);
  };

  const handleOpenContact = (experience?: string) => {
    setContactExperience(experience || "General Inquiry");
    setIsContactOpen(true);
  };

  const handleSelectExperience = (view: "church" | "corporate" | "individual") => {
    setIsWelcomeOpen(false);
    setActiveView(view);
    window.scrollTo({ top: 0 });
  };

  // Safe impact calculator calculations
  const calculateImpact = (size: number) => {
    return {
      denimGathered: Math.round(size * 1.8),
      kidsProtected: Math.round(size * 1.2),
      artisanHours: Math.round(size * 2.5),
      medicalTreatments: Math.round(size * 0.8),
      equivalentSponsorship: Math.round(size * 35)
    };
  };

  const currentImpact = calculateImpact(volunteerSize);

  const handleSubpageNavigation = (
    targetView: "home" | "church" | "corporate" | "individual" | "impact" | "stories",
    targetSection?: string
  ) => {
    setActiveView(targetView);
    if (targetView === "home") {
      if (targetSection) {
        setTimeout(() => {
          const el = document.getElementById(targetSection);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        window.scrollTo({ top: 0 });
      }
    } else {
      window.scrollTo({ top: 0 });
    }
  };

  const faqs = [
    {
      question: "How do we ship our cut templates back to Sole Hope?",
      answer: "When you receive your Physical Shoe Party Kit via FedEx, it includes a pre-paid FedEx return shipping label. Simply place all cut denim and liner materials inside the reusable mailer bag, attach the pre-paid label, and drop it off at any FedEx location or schedule a free pickup."
    },
    {
      question: "Does the denim have to be a specific brand or color?",
      answer: "Not at all! We encourage any clean, used denim in all shades of blue, grey, or black. Stretchy or lightweight denim is fine for some layers, but standard heavyweight cotton denim is preferred as it is highly durable and provides the best defense against protective climate fleas."
    },
    {
      question: "Can children or senior groups participate successfully?",
      answer: "Yes, this is an incredibly multi-generational activity! Tracing curves on denim is easy for children, the cutting is perfect for adults, and senior groups can safely pin the template parts together. There is a meaningful role for everyone at the table."
    },
    {
      question: "Where exactly does our $95.00 kit purchase go?",
      answer: "Your kit purchase covers the physical manufacturing of your precision acrylic templates, fabric chalk, pins, printed catalog sheets, pre-paid return shipping across international borders, and directly subsidizes the diagnostics, antibiotic ointment, and wages of local Ugandan nurses on physical clinic days."
    }
  ];

  return (
    <div className="min-h-screen bg-parchment text-deep-ocean font-sans relative selection:bg-clay/20 selection:text-primary">
      <AnimatePresence mode="wait">
        {activeView !== "home" ? (
          <motion.div
            key={activeView}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {activeView === "church" && (
              <ChurchMissions 
                onBack={(targetView, targetSection) => handleSubpageNavigation(targetView, targetSection)}
                onOpenBooking={handleOpenBooking}
                onOpenVideo={() => setIsVideoOpen(true)}
                onOpenContact={handleOpenContact}
              />
            )}
            {activeView === "corporate" && (
              <CorporateMissions 
                onBack={(targetView, targetSection) => handleSubpageNavigation(targetView, targetSection)}
                onOpenBooking={handleOpenBooking}
                onOpenVideo={() => setIsVideoOpen(true)}
                onOpenContact={handleOpenContact}
              />
            )}
            {activeView === "individual" && (
              <IndividualMissions 
                onBack={(targetView, targetSection) => handleSubpageNavigation(targetView, targetSection)}
                onOpenBooking={handleOpenBooking}
                onOpenVideo={() => setIsVideoOpen(true)}
                onOpenContact={handleOpenContact}
              />
            )}
            {activeView === "impact" && (
              <OurImpact 
                onBack={(targetView, targetSection) => handleSubpageNavigation(targetView, targetSection)}
                onOpenBooking={handleOpenBooking}
                onOpenVideo={() => setIsVideoOpen(true)}
                onOpenContact={handleOpenContact}
              />
            )}
            {activeView === "stories" && (
              <StoriesOfHope 
                onBack={(targetView, targetSection) => handleSubpageNavigation(targetView, targetSection)}
                onOpenBooking={handleOpenBooking}
                onOpenVideo={() => setIsVideoOpen(true)}
                onOpenContact={handleOpenContact}
              />
            )}
          </motion.div>
        ) : (
          <motion.div
            key="home"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
      
      {/* Top Header/Navigation */}
      <header className="w-full z-45 bg-parchment border-b border-deep-ocean/5">
        <nav className="flex justify-between items-center px-6 py-2 md:py-3 max-w-7xl mx-auto">
          {/* Logo Brand Title */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => { setActiveView("home"); }} 
              className="font-serif text-2xl font-bold text-clay uppercase tracking-tight flex items-center gap-2 bg-transparent border-none outline-none cursor-pointer"
            >
              <img 
                src={logoImg} 
                alt="Sole Hope Logo" 
                className="h-10 md:h-14 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => { setActiveView("impact"); window.scrollTo({ top: 0 }); }} 
              className="text-sm font-semibold text-deep-ocean/80 hover:text-clay transition-all cursor-pointer bg-transparent border-none outline-none"
            >
              Our Mission
            </button>
            <button 
              onClick={() => setIsVideoOpen(true)} 
              className="text-sm font-semibold text-deep-ocean/80 hover:text-clay transition-all cursor-pointer bg-transparent border-none outline-none"
            >
              How It Works
            </button>
          </div>

          {/* Action CTA Button */}
          <div className="hidden md:block">
            <button 
              onClick={() => handleOpenContact("General Inquiry")}
              className="bg-clay hover:brightness-110 text-white font-bold text-xs uppercase tracking-widest px-7 py-3 rounded-full hover:scale-105 active:scale-95 transition-all outline-none cursor-pointer shadow-md shadow-clay/10"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Hamburg Control */}
          <button 
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-deep-ocean hover:bg-deep-ocean/5 rounded-full transition-all cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-parchment border-b border-deep-ocean/10 px-6 py-4 space-y-3"
            >
              <button 
                onClick={() => { setMobileMenuOpen(false); setActiveView("impact"); window.scrollTo({ top: 0 }); }} 
                className="block w-full text-left text-sm font-medium text-deep-ocean py-2 border-b border-deep-ocean/5 bg-transparent"
              >
                Our Mission
              </button>
              <button 
                onClick={() => { setMobileMenuOpen(false); setIsVideoOpen(true); }} 
                className="block w-full text-left text-sm font-medium text-deep-ocean py-2 border-b border-deep-ocean/5 bg-transparent" 
              >
                How It Works
              </button>
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleOpenContact("General Inquiry");
                }}
                className="w-full bg-clay text-white font-bold text-xs uppercase tracking-widest py-3 rounded-full text-center block mt-4 shadow-md"
              >
                Contact Us
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero / Welcome & Selection Section */}
      <section className="relative py-3 md:py-4 bg-parchment overflow-hidden min-h-[calc(100vh-80px)] flex flex-col justify-center">
        {/* Soft elegant background glows */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-clay/10 rounded-full blur-3xl pointer-events-none opacity-40 animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-deep-ocean/10 rounded-full blur-3xl pointer-events-none opacity-30 animate-pulse" style={{ animationDuration: '12s' }} />

        {/* Subtle craft dot grid pattern representing template cutting sheets */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(#1A3A5C 1.5px, transparent 1.5px)", backgroundSize: "24px 24px" }} />

        {/* Custom graphic "sewing patterns/shoe template" curves in the background */}
        <svg className="absolute top-8 right-24 w-64 h-64 text-clay/[0.08] pointer-events-none hidden lg:block" viewBox="0 0 100 100" fill="none">
          <path d="M5 50 C 35 15, 65 85, 95 50" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
          <circle cx="5" cy="50" r="1.5" fill="currentColor" />
          <circle cx="95" cy="50" r="1.5" fill="currentColor" />
        </svg>

        {/* Full-width Welcome Banner (Spans Edge to Edge) */}
        <div className="w-full relative z-10 text-center mb-5 md:mb-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative flex flex-col items-center space-y-4 overflow-hidden w-full py-8 px-6 md:py-12 md:px-16 shadow-[0_15px_35px_rgba(26,58,92,0.12)] border-t border-x border-white/20 rounded-t-3xl md:rounded-t-[2.5rem] group bg-deep-ocean/20"
          >
            {/* Background / Banner Image (Brighter & More Natural with Soft Overlay) */}
            <div className="absolute inset-0 z-0">
              <img 
                id="hero-banner-image"
                src="/src/assets/images/children-shoes-lineup.jpg" 
                alt="Sole Hope Shoe Cutting Party"
                className="w-full h-full object-cover filter brightness-[0.88] saturate-[1.0] contrast-[1.02] transition-transform duration-1000 group-hover:scale-105 cursor-pointer"
                referrerPolicy="no-referrer"
              />
              {/* Subtle dark overlay for clean text legibility */}
              <div className="absolute inset-0 bg-gradient-to-b from-deep-ocean/65 via-deep-ocean/45 to-deep-ocean/70 backdrop-brightness-90 pointer-events-none" />
            </div>

            {/* Elements on top of background image */}
            <div className="relative z-10 flex flex-col items-center space-y-3.5 max-w-5xl mx-auto text-center py-2">
              <h1 className="font-serif leading-tight tracking-tight text-white max-w-4xl mx-auto">
                <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-1 tracking-tight text-white drop-shadow-md">
                  Choose Your
                </span>
                <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-parchment drop-shadow-md">
                  Shoe Cutting Party <span className="text-clay">Experience</span>
                </span>
              </h1>

              {/* Short, thin subtle accent line */}
              <div className="w-16 h-[2px] bg-clay/80 mx-auto rounded-full my-0.5" />
              
              {/* Simple readable subheadline text - wider layout */}
              <p className="font-sans text-sm sm:text-base md:text-lg text-white/95 leading-relaxed max-w-2xl mx-auto font-normal drop-shadow-sm px-2">
                Choose the group that best describes you, and we’ll guide you to the right kit, pricing, and next step.
              </p>

              {/* Lightweight Warm Cream Quote Box - wider layout */}
              <div className="inline-flex items-center py-2.5 px-5 sm:px-6 bg-parchment/20 backdrop-blur-md border-l-2 border-clay rounded-r-lg max-w-2xl text-center md:text-left shadow-xs border-t border-r border-b border-white/20 mt-1">
                <p className="font-serif text-xs sm:text-sm md:text-base text-parchment/95 font-normal leading-relaxed italic drop-shadow-xs">
                  "Every Shoe Cutting Party helps turn donated denim into protective shoes that protect healing feet and help prevent reinfestation after jigger treatment."
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Column choices grid container with standard margins */}
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col gap-4">
          
          {/* Cards Row - Fully integrated, 3-column, shorter heights */}
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 max-w-6xl mx-auto">
              
              {/* Card 1: Business */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -6, scale: 1.015 }}
                onClick={() => { setActiveView("corporate"); window.scrollTo({ top: 0 }); }}
                className="bg-white rounded-2xl border border-deep-ocean/10 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_15px_35px_rgba(26,58,92,0.06)] hover:border-clay/40 transition-all duration-500 flex flex-col group cursor-pointer relative overflow-hidden text-left"
              >
                {/* Image Block with shorter aspect ratio */}
                <div className="w-full aspect-[21/9] sm:aspect-[16/7] overflow-hidden relative bg-deep-ocean/5 shrink-0">
                  <img 
                    src="/src/assets/images/corporate_volunteering_1782505474243.jpg" 
                    alt="Corporate volunteering teams crafting shoe templates" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-ocean/10 to-transparent" />
                  {/* Thin top status accent line on hover */}
                  <div className="absolute top-0 left-0 h-[3px] bg-clay/0 group-hover:bg-clay/80 w-0 group-hover:w-full transition-all duration-500" />
                </div>

                {/* Text details container */}
                <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between relative z-10 gap-3">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-1.5">
                      <div className="w-6 h-6 rounded-lg bg-clay/5 text-clay flex items-center justify-center shrink-0 group-hover:bg-clay group-hover:text-white transition-all duration-300 shadow-xs">
                        <Building className="w-3 h-3" />
                      </div>
                      <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-clay/60 group-hover:text-clay transition-colors duration-300 block font-bold">
                        Corporate Experience
                      </span>
                    </div>

                    <h3 className="font-serif text-base font-bold text-deep-ocean flex items-center gap-1">
                      Corporate Teams
                      <span className="inline-block w-1 h-1 rounded-full bg-clay opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
                    </h3>
                    
                    <p className="text-sm font-sans text-on-surface-variant leading-relaxed line-clamp-2">
                      Create a meaningful team-building experience that brings your team together and creates real impact.
                    </p>
                  </div>

                  {/* Bottom action block */}
                  <div className="pt-3 border-t border-deep-ocean/5 flex items-center justify-between">
                    <span className="text-[9px] font-sans font-extrabold uppercase tracking-widest text-clay group-hover:text-deep-ocean transition-colors duration-300">
                      Explore Corporate Team Building
                    </span>
                    <div className="w-6 h-6 rounded-full bg-deep-ocean/5 text-deep-ocean flex items-center justify-center shrink-0 group-hover:bg-clay group-hover:text-white transition-all duration-300 transform group-hover:translate-x-1 shadow-xs">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card 2: Individual */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -6, scale: 1.015 }}
                onClick={() => { setActiveView("individual"); window.scrollTo({ top: 0 }); }}
                className="bg-white rounded-2xl border border-deep-ocean/10 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_15px_35px_rgba(26,58,92,0.06)] hover:border-clay/40 transition-all duration-500 flex flex-col group cursor-pointer relative overflow-hidden text-left"
              >
                {/* Image Block with shorter aspect ratio */}
                <div className="w-full aspect-[21/9] sm:aspect-[16/7] overflow-hidden relative bg-deep-ocean/5 shrink-0">
                  <img 
                    src="/src/assets/images/family_volunteering_1782505486984.jpg" 
                    alt="Family and friends volunteering together cutting shoes" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-ocean/10 to-transparent" />
                  {/* Thin top status accent line on hover */}
                  <div className="absolute top-0 left-0 h-[3px] bg-clay/0 group-hover:bg-clay/80 w-0 group-hover:w-full transition-all duration-500" />
                </div>

                {/* Text details container */}
                <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between relative z-10 gap-3">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-1.5">
                      <div className="w-6 h-6 rounded-lg bg-clay/5 text-clay flex items-center justify-center shrink-0 group-hover:bg-clay group-hover:text-white transition-all duration-300 shadow-xs">
                        <Users className="w-3 h-3" />
                      </div>
                      <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-clay/60 group-hover:text-clay transition-colors duration-300 block font-bold">
                        Local Gatherings
                      </span>
                    </div>

                    <h3 className="font-serif text-base font-bold text-deep-ocean flex items-center gap-1">
                      Individuals & Families
                      <span className="inline-block w-1 h-1 rounded-full bg-clay opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
                    </h3>
                    
                    <p className="text-sm font-sans text-on-surface-variant leading-relaxed line-clamp-2">
                      Host a Shoe Cutting Party at home, school, with friends, or in your local community.
                    </p>
                  </div>

                  {/* Bottom action block */}
                  <div className="pt-3 border-t border-deep-ocean/5 flex items-center justify-between">
                    <span className="text-[9px] font-sans font-extrabold uppercase tracking-widest text-clay group-hover:text-deep-ocean transition-colors duration-300">
                      Buy a Host Kit
                    </span>
                    <div className="w-6 h-6 rounded-full bg-deep-ocean/5 text-deep-ocean flex items-center justify-center shrink-0 group-hover:bg-clay group-hover:text-white transition-all duration-300 transform group-hover:translate-x-1 shadow-xs">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card 3: Church */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ y: -6, scale: 1.015 }}
                onClick={() => { setActiveView("church"); window.scrollTo({ top: 0 }); }}
                className="bg-white rounded-2xl border border-deep-ocean/10 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_15px_35px_rgba(26,58,92,0.06)] hover:border-clay/40 transition-all duration-500 flex flex-col group cursor-pointer relative overflow-hidden text-left"
              >
                {/* Image Block with shorter aspect ratio */}
                <div className="w-full aspect-[21/9] sm:aspect-[16/7] overflow-hidden relative bg-deep-ocean/5 shrink-0">
                  <img 
                    src="/src/assets/images/church_volunteering_1782505501137.jpg" 
                    alt="Church and missions volunteers sewing shoes" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-ocean/10 to-transparent" />
                  {/* Thin top status accent line on hover */}
                  <div className="absolute top-0 left-0 h-[3px] bg-clay/0 group-hover:bg-clay/80 w-0 group-hover:w-full transition-all duration-500" />
                </div>

                {/* Text details container */}
                <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between relative z-10 gap-3">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-1.5">
                      <div className="w-6 h-6 rounded-lg bg-clay/5 text-clay flex items-center justify-center shrink-0 group-hover:bg-clay group-hover:text-white transition-all duration-300 shadow-xs">
                        <Church className="w-3 h-3" />
                      </div>
                      <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-clay/60 group-hover:text-clay transition-colors duration-300 block font-bold">
                        Mission & Ministry
                      </span>
                    </div>

                    <h3 className="font-serif text-base font-bold text-deep-ocean flex items-center gap-1">
                      Churches
                      <span className="inline-block w-1 h-1 rounded-full bg-clay opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
                    </h3>
                    
                    <p className="text-sm font-sans text-on-surface-variant leading-relaxed line-clamp-2">
                      Lead your congregation, youth group, mission team, or ministry in a hands-on service experience.
                    </p>
                  </div>

                  {/* Bottom action block */}
                  <div className="pt-3 border-t border-deep-ocean/5 flex items-center justify-between">
                    <span className="text-[9px] font-sans font-extrabold uppercase tracking-widest text-clay group-hover:text-deep-ocean transition-colors duration-300">
                      Plan a Church Party
                    </span>
                    <div className="w-6 h-6 rounded-full bg-deep-ocean/5 text-deep-ocean flex items-center justify-center shrink-0 group-hover:bg-clay group-hover:text-white transition-all duration-300 transform group-hover:translate-x-1 shadow-xs">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </section>

      {/* Footer Block */}
      <Footer 
        onNavigate={(view) => setActiveView(view)} 
        onOpenContact={handleOpenContact} 
      />
          </motion.div>
        )}
      </AnimatePresence>

      {/* MODALS CONTROLLERS */}
      <AnimatePresence>
        {isWelcomeOpen && (
          <WelcomeModal 
            isOpen={isWelcomeOpen}
            onClose={() => setIsWelcomeOpen(false)}
            onSelectExperience={handleSelectExperience}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isBookingOpen && (
          <BookingModal 
            isOpen={isBookingOpen} 
            onClose={() => setIsBookingOpen(false)} 
            initialType={bookingType}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isContactOpen && (
          <ContactModal 
            isOpen={isContactOpen} 
            onClose={() => setIsContactOpen(false)} 
            initialExperience={contactExperience}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isVideoOpen && (
          <VideoModal 
            isOpen={isVideoOpen} 
            onClose={() => setIsVideoOpen(false)} 
          />
        )}
      </AnimatePresence>

    </div>
  );
}
