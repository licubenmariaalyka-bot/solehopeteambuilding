import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Footer from "./Footer";
import { 
  Users, Heart, FileText, CheckCircle2, ChevronRight, Play, 
  Sparkles, Calendar, Layers, ShieldCheck, MapPin, Globe, Share2, Mail,
  Smartphone, Briefcase, Award, HeartHandshake, ChevronDown, ArrowRight, Scissors, Check, Send, X, Menu
} from "lucide-react";

const logoImg = "/images/sole-hope-logo-wide.png";

interface CorporateMissionsProps {
  onBack: (targetView: "home" | "church" | "corporate" | "individual" | "impact" | "stories", targetSection?: string) => void;
  onOpenBooking: (type: "church" | "corporate" | "individual") => void;
  onOpenVideo: () => void;
  onOpenContact?: (experience?: string) => void;
}

export default function CorporateMissions({ onBack, onOpenBooking, onOpenVideo, onOpenContact }: CorporateMissionsProps) {
  const [faqActive, setFaqActive] = useState<number | null>(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load the LeadConnector/GoHighLevel form embed script
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    
    script.onload = () => {
      setIsLoading(false);
    };

    document.body.appendChild(script);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      document.body.removeChild(script);
      clearTimeout(timer);
    };
  }, []);
  
  // Lead Capture Form States
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    jobTitle: "",
    website: "",
    companySize: "",
    participants: "",
    eventDate: "",
    location: "",
    format: "In-Person",
    targetPairs: "",
    goals: "",
    referral: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLinkClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    scrollToSection(sectionId);
  };

  const handleRequestQuoteClick = () => {
    setIsMobileMenuOpen(false);
    scrollToSection("corporate-lead-form");
    setTimeout(() => {
      setIsQuoteModalOpen(true);
    }, 800);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const corporateFaqs = [
    {
      question: "How many people can participate?",
      answer: "We support events of all sizes, from intimate team gatherings of 10 people to large-scale all-hands or corporate assemblies of 500+ participants."
    },
    {
      question: "Can this be done in-office, remotely, or during a retreat?",
      answer: "Absolutely. Our corporate team building is designed for ultimate flexibility. We support on-site office events, virtual sessions via video conferencing (with kits shipped directly to remote participants), or off-site corporate retreats."
    },
    {
      question: "How long does the experience take?",
      answer: "The core experience typically runs for 1.5 to 2.5 hours. It is designed to fit seamlessly into standard meeting blocks, luncheon events, or full CSR service days."
    },
    {
      question: "What is included in the corporate experience?",
      answer: "The turnkey experience includes premium material packs (heavyweight denim, custom pattern liners), acrylic cutting templates, commercial-grade safety fabric scissors, step-by-step facilitation playbooks, and pre-paid international return shipping."
    },
    {
      question: "Can we track the impact from our event?",
      answer: "Yes. Every corporate partner receives a customized impact report detailing the final tracking metrics and showing the children in Uganda protected by your team's completed shoes."
    },
    {
      question: "Do you support large company events?",
      answer: "Yes, we scale seamlessly. We provide custom dedicated event planning, bulk material coordination, multi-site shipping logistics, and optional on-site hosts to lead large enterprise groups."
    }
  ];

  return (
    <div className="min-h-screen bg-parchment text-ink font-sans selection:bg-clay selection:text-white">
      
      {/* Top Banner Navigation bar */}
      <header className="sticky top-0 z-50 bg-parchment/95 backdrop-blur-md border-b border-deep-ocean/5 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="flex justify-between items-center py-3 md:py-4">
            {/* Brand Logo Links back */}
            <div className="flex items-center shrink-0">
              <button 
                onClick={() => onBack("home")}
                className="font-serif text-2xl font-bold text-clay uppercase tracking-tight flex items-center gap-2 hover:scale-105 transition-all text-left"
              >
                <img 
                  src={logoImg} 
                  alt="Sole Hope Logo" 
                  className="h-10 sm:h-12 md:h-14 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </button>
            </div>

            {/* Nav Categories */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              <button 
                onClick={() => handleLinkClick("how-it-works-section")}
                className="text-sm font-semibold text-deep-ocean hover:text-clay transition-all"
              >
                How It Works
              </button>
              <button 
                onClick={() => handleLinkClick("corporate-pricing-section")}
                className="text-sm font-semibold text-deep-ocean hover:text-clay transition-all"
              >
                Pricing
              </button>
              <button 
                onClick={() => handleLinkClick("corporate-faq-section")}
                className="text-sm font-semibold text-deep-ocean hover:text-clay transition-all"
              >
                FAQ
              </button>
              <button 
                onClick={() => handleLinkClick("corporate-credibility-section")}
                className="text-sm font-semibold text-deep-ocean hover:text-clay transition-all"
              >
                Impact
              </button>
            </div>

            {/* Right CTA Button & Hamburger */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button 
                onClick={handleRequestQuoteClick}
                className="bg-clay hover:brightness-110 text-white font-sans font-bold text-[11px] sm:text-xs uppercase tracking-widest px-4 sm:px-6 py-2 sm:py-2.5 rounded-full hover:scale-105 active:scale-95 transition-all outline-none cursor-pointer shadow-sm"
              >
                <span className="hidden xs:inline sm:hidden md:inline lg:hidden">Request Quote</span>
                <span className="inline xs:hidden sm:inline md:hidden lg:inline">Request a Corporate Quote</span>
              </button>

              {/* Mobile Menu Toggle Button */}
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-1.5 text-deep-ocean hover:text-clay transition-all cursor-pointer"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Dropdown Nav links */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-deep-ocean/5 bg-parchment px-6 py-4 space-y-3 shadow-lg absolute w-full left-0 z-40"
            >
              <div className="flex flex-col gap-2">
                <button 
                  onClick={() => handleLinkClick("how-it-works-section")}
                  className="text-left py-2 text-sm font-semibold text-deep-ocean hover:text-clay transition-all"
                >
                  How It Works
                </button>
                <button 
                  onClick={() => handleLinkClick("corporate-pricing-section")}
                  className="text-left py-2 text-sm font-semibold text-deep-ocean hover:text-clay transition-all"
                >
                  Pricing
                </button>
                <button 
                  onClick={() => handleLinkClick("corporate-faq-section")}
                  className="text-left py-2 text-sm font-semibold text-deep-ocean hover:text-clay transition-all"
                >
                  FAQ
                </button>
                <button 
                  onClick={() => handleLinkClick("corporate-credibility-section")}
                  className="text-left py-2 text-sm font-semibold text-deep-ocean hover:text-clay transition-all"
                >
                  Impact
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        
        {/* 1. HERO SECTION */}
        <section className="relative overflow-hidden pt-16 pb-24 md:pt-24 md:pb-28 bg-white border-b border-deep-ocean/5">
          {/* Decorative background curves */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(#1A3A5C 1.5px, transparent 1.5px)", backgroundSize: "24px 24px" }} />
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-clay/10 rounded-full blur-3xl pointer-events-none opacity-40" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-deep-ocean/10 rounded-full blur-3xl pointer-events-none opacity-30" />

          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-6 space-y-6"
            >
              {/* Badge Overline */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-clay/5 border border-clay/15 rounded-full text-clay text-[11px] font-mono tracking-[0.15em] uppercase font-bold">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Corporate Team Building</span>
              </div>

              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-deep-ocean font-extrabold leading-[1.1] tracking-tight">
                Team Building That <br className="hidden md:inline" />
                <span className="text-clay italic font-normal">Creates Real Impact</span>
              </h1>

              <p className="text-base md:text-lg text-on-surface-variant max-w-2xl leading-relaxed font-sans">
                Give your team a hands-on experience that builds connection, supports your CSR goals, and helps provide protective shoes for children in Uganda.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-3">
                <button 
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="bg-clay hover:brightness-110 text-white px-8 h-13 rounded-xl font-bold text-xs uppercase tracking-widest hover:scale-[1.02] transition-all text-center flex items-center justify-center shadow-md shadow-clay/20 cursor-pointer"
                >
                  Request a Corporate Quote
                </button>
                <button 
                  onClick={() => scrollToSection("how-it-works-section")}
                  className="border border-deep-ocean text-deep-ocean bg-transparent px-8 h-13 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-deep-ocean hover:text-white transition-all text-center flex items-center justify-center whitespace-nowrap cursor-pointer"
                >
                  See How It Works
                </button>
              </div>

              <p className="text-xs text-on-surface-variant/70 italic pt-2">
                * Flexible for small teams, company retreats, service days, and CSR events.
              </p>
            </motion.div>

            <div className="lg:col-span-6 relative justify-self-center w-full max-w-xl lg:max-w-2xl mt-8 lg:mt-0">
              <div className="rounded-2xl overflow-hidden border border-deep-ocean/10 shadow-2xl rotate-1 h-72 sm:h-96 md:h-[420px] lg:h-[480px] w-full bg-[#FAF7F2]">
                <img 
                  className="w-full h-full object-cover select-none" 
                  alt="Team building experience"
                  src="/images/corporate_volunteering_1782505474243.jpg"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white px-5 py-3 rounded-xl border border-outline-variant/30 shadow-lg hidden md:block">
                <span className="font-serif text-lg font-bold text-clay">Interactive CSR</span>
                <p className="text-[9.5px] uppercase tracking-wider font-extrabold text-deep-ocean">100% Tangible &amp; Turnkey</p>
              </div>
            </div>
          </div>
        </section>


        {/* 2. BENEFITS SECTION */}
        <section id="benefits-section" className="py-20 md:py-24 bg-parchment border-b border-deep-ocean/5">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-clay font-bold block">
                Why Companies Choose This
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-deep-ocean font-extrabold tracking-tight">
                More Meaningful Than a Traditional Team-Building Day
              </h2>
              <p className="text-base text-on-surface-variant leading-relaxed">
                Your team will work together on something tangible, purposeful, and connected to real-world impact. The shoes created through Shoe Parties help protect children after jigger treatment by covering healing feet, helping prevent reinfestation, and supporting lasting freedom from jiggers.
              </p>
              <div className="w-12 h-0.5 bg-clay/40 mx-auto mt-2" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              
              {/* Card 1 */}
              <div className="bg-white rounded-2xl border border-deep-ocean/5 shadow-[0_4px_25px_rgba(26,58,92,0.02)] hover:shadow-[0_12px_40px_rgba(26,58,92,0.06)] hover:border-clay/20 transition-all duration-300 flex flex-col overflow-hidden group">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#FAF7F2] shrink-0">
                  <img 
                    src="/images/corporate_volunteering_1782505474243.jpg" 
                    alt="Authentic Connection" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-white/90 backdrop-blur-sm text-clay flex items-center justify-center font-bold shadow-sm">
                    <Users className="w-4 h-4" />
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow space-y-2">
                  <h3 className="font-serif text-lg font-bold text-deep-ocean">Authentic Connection</h3>
                  <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">
                    Bring employees together through a hands-on activity that encourages teamwork and shared purpose.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl border border-deep-ocean/5 shadow-[0_4px_25px_rgba(26,58,92,0.02)] hover:shadow-[0_12px_40px_rgba(26,58,92,0.06)] hover:border-clay/20 transition-all duration-300 flex flex-col overflow-hidden group">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#FAF7F2] shrink-0">
                  <img 
                    src="/images/shoe_cutting_party_1782508448020.jpg" 
                    alt="Tangible Impact" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-white/90 backdrop-blur-sm text-clay flex items-center justify-center font-bold shadow-sm">
                    <Scissors className="w-4 h-4" />
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow space-y-2">
                  <h3 className="font-serif text-lg font-bold text-deep-ocean">Tangible Impact</h3>
                  <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">
                    Your team helps create shoe patterns that become protective shoes for children in Uganda.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-2xl border border-deep-ocean/5 shadow-[0_4px_25px_rgba(26,58,92,0.02)] hover:shadow-[0_12px_40px_rgba(26,58,92,0.06)] hover:border-clay/20 transition-all duration-300 flex flex-col overflow-hidden group">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#FAF7F2] shrink-0">
                  <img 
                    src="/images/sole_hope_business_1782426623747.jpg" 
                    alt="CSR With Purpose" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-white/90 backdrop-blur-sm text-clay flex items-center justify-center font-bold shadow-sm">
                    <Heart className="w-4 h-4" />
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow space-y-2">
                  <h3 className="font-serif text-lg font-bold text-deep-ocean">CSR With Purpose</h3>
                  <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">
                    Give your company a practical way to connect employee engagement with meaningful social impact.
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-2xl border border-deep-ocean/5 shadow-[0_4px_25px_rgba(26,58,92,0.02)] hover:shadow-[0_12px_40px_rgba(26,58,92,0.06)] hover:border-clay/20 transition-all duration-300 flex flex-col overflow-hidden group">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#FAF7F2] shrink-0">
                  <img 
                    src="/images/church-service-group.jpg" 
                    alt="Simple to Organize" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-white/90 backdrop-blur-sm text-clay flex items-center justify-center font-bold shadow-sm">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow space-y-2">
                  <h3 className="font-serif text-lg font-bold text-deep-ocean">Simple to Organize</h3>
                  <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">
                    We guide your team through the setup, materials, and next steps so the experience is easy to host.
                  </p>
                </div>
              </div>

            </div>

            {/* Single Action Button at the bottom of the section */}
            <div className="text-center pt-12">
              <button 
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-clay hover:brightness-110 text-white px-10 py-4.5 rounded-xl font-bold text-xs uppercase tracking-widest hover:scale-105 active:scale-95 shadow-md transition-all outline-none cursor-pointer inline-flex items-center gap-2"
              >
                <span>Request a Corporate Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>


        {/* 3. HOW IT WORKS SECTION */}
        <section id="how-it-works-section" className="py-20 md:py-24 bg-white border-b border-deep-ocean/5">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-clay font-bold block">
                The Experience
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-deep-ocean font-extrabold tracking-tight">
                How the Corporate Experience Works
              </h2>
              <div className="w-12 h-0.5 bg-clay/40 mx-auto mt-2" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {/* Stepper connecting line on desktop */}
              <div className="hidden lg:block absolute top-12 left-10 right-10 h-[2px] bg-dashed bg-deep-ocean/10 z-0" style={{ backgroundImage: "linear-gradient(to right, rgba(26, 58, 92, 0.1) 50%, transparent 50%)", backgroundSize: "12px 100%" }} />

              {/* Step 1 */}
              <div className="flex flex-col space-y-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-deep-ocean text-white font-serif text-lg font-bold flex items-center justify-center shadow-md">
                  1
                </div>
                <h3 className="font-serif text-lg font-bold text-deep-ocean pt-2">Request a Quote</h3>
                <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">
                  Tell us about your company, team size, event goals, and preferred date.
                </p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col space-y-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-[#E5DCCB] text-deep-ocean font-serif text-lg font-bold flex items-center justify-center shadow-sm">
                  2
                </div>
                <h3 className="font-serif text-lg font-bold text-deep-ocean pt-2">Plan Your Experience</h3>
                <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">
                  We help guide the setup, materials, event format, and next steps for your team.
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col space-y-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-[#E5DCCB] text-deep-ocean font-serif text-lg font-bold flex items-center justify-center shadow-sm">
                  3
                </div>
                <h3 className="font-serif text-lg font-bold text-deep-ocean pt-2">Host the Event</h3>
                <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">
                  Your team gathers, cuts denim patterns, and creates a hands-on impact together.
                </p>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col space-y-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-clay text-white font-serif text-lg font-bold flex items-center justify-center shadow-md">
                  4
                </div>
                <h3 className="font-serif text-lg font-bold text-deep-ocean pt-2">Send Back the Materials</h3>
                <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">
                  Completed patterns are returned to Sole Hope and sent to Uganda to become protective shoes.
                </p>
              </div>

            </div>

            <div className="text-center pt-12">
              <button 
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-clay hover:brightness-110 text-white px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest hover:scale-105 active:scale-95 shadow-md transition-all outline-none cursor-pointer inline-flex items-center gap-2"
              >
                <span>Request Your Experience Pack</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </section>


        {/* 4. CREDIBILITY SECTION */}
        <section id="corporate-credibility-section" className="py-14 md:py-18 bg-[#FAF7F2] border-b border-deep-ocean/5">
          <div className="max-w-6xl mx-auto px-6 text-center space-y-6">
            <h2 className="font-serif text-2xl md:text-3xl text-deep-ocean font-bold">
              Trusted by Teams Who Want More Than Another Retreat
            </h2>
            <p className="text-sm md:text-base text-on-surface-variant/80 max-w-3xl mx-auto">
              A Shoe Party is more than cutting denim. It is part of Sole Hope’s prevention model. After children receive jigger treatment, protective shoes help cover healing feet, reduce the risk of reinfestation, and support long-term freedom from jiggers.
            </p>
            <div className="py-6 px-8 max-w-4xl mx-auto bg-white rounded-2xl border border-deep-ocean/5 shadow-inner">
              <p className="font-sans text-xs md:text-sm font-semibold tracking-wide text-clay/90 uppercase">
                Corporate Community Circle
              </p>
              <p className="font-serif text-sm md:text-base italic text-deep-ocean/90 leading-relaxed mt-2 font-medium">
                "Trusted by companies, churches, families, and community groups looking for meaningful ways to serve together."
              </p>
            </div>

            <div className="pt-6 flex flex-col sm:flex-row justify-center items-center gap-4">
              <button 
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-deep-ocean hover:bg-deep-ocean/90 text-white px-8 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all cursor-pointer shadow-md"
              >
                Start Your Team Event
              </button>
              <button 
                onClick={() => scrollToSection("corporate-pricing-section")}
                className="border border-deep-ocean/20 hover:border-deep-ocean text-deep-ocean px-8 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all cursor-pointer bg-white/50"
              >
                View Package Pricing
              </button>
            </div>

          </div>
        </section>


        {/* 5. PRICING SECTION */}
        <section id="corporate-pricing-section" className="py-20 md:py-24 bg-parchment border-b border-deep-ocean/5">
          <div className="max-w-7xl mx-auto px-6">
            
            {/* One pricing card only - wider horizontal layout */}
            <div className="max-w-5xl mx-auto bg-white rounded-3xl border border-deep-ocean/10 shadow-[0_15px_50px_rgba(26,58,92,0.07)] overflow-hidden relative">
              <div className="absolute top-0 inset-x-0 h-2 bg-clay" />
              
              <div className="p-6 sm:p-8 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Side: Title, Price Box & CTA */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-5 lg:border-r border-deep-ocean/10 border-b lg:border-b-0 pb-6 lg:pb-0 lg:pr-8">
                  <div className="space-y-2">
                    <span className="font-sans text-[10px] uppercase tracking-widest font-extrabold text-clay/90 block">
                      Turnkey Package
                    </span>
                    <h3 className="font-serif text-2xl lg:text-3xl font-bold text-deep-ocean leading-tight">
                      Corporate Shoe Party Experience
                    </h3>
                    <p className="text-xs text-on-surface-variant/80">
                      Designed for companies that want a meaningful team-building or CSR experience with measurable impact.
                    </p>
                  </div>

                  <div className="bg-[#FAF7F2] rounded-2xl p-5 text-center space-y-1 border border-deep-ocean/5">
                    <div className="font-serif text-4xl lg:text-5xl font-extrabold text-deep-ocean inline-flex items-baseline gap-1 justify-center">
                      <span className="text-2xl font-semibold">$</span>125
                    </div>
                    <span className="text-xs font-mono uppercase tracking-wider text-clay font-bold block mt-1">
                      Includes 2 pairs of shoes
                    </span>
                  </div>

                  <div>
                    <button 
                      onClick={() => setIsQuoteModalOpen(true)}
                      className="w-full bg-clay hover:brightness-110 text-white py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest transition-all outline-none cursor-pointer hover:scale-[1.01] shadow-md"
                    >
                      Request a Corporate Quote
                    </button>
                  </div>
                </div>

                {/* Right Side: Description, Impact Note, What's Included */}
                <div className="lg:col-span-7 space-y-5">
                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    The $125 Corporate Shoe Party Experience includes 2 pairs of shoes and gives your team a meaningful hands-on activity with real impact. Each additional pair can be completed for $35.
                  </p>

                  <p className="text-xs text-clay font-medium leading-relaxed bg-clay/5 p-3.5 rounded-xl border border-clay/10">
                    Shoes help protect healing feet, prevent reinfestation, and support lasting freedom after jigger treatment.
                  </p>

                  <div className="space-y-3 pt-1">
                    <h4 className="font-sans text-[11px] uppercase tracking-wider font-extrabold text-deep-ocean">
                      What's Included:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-on-surface-variant">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-clay shrink-0" />
                        <span>Hands-on shoe cutting activity</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-clay shrink-0" />
                        <span>Event setup guidance</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-clay shrink-0" />
                        <span>Materials and instructions</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-clay shrink-0" />
                        <span>CSR-friendly impact experience</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-clay shrink-0" />
                        <span>Flexible for small & large teams</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-clay shrink-0" />
                        <span>Option to support additional shoes</span>
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>

            <div className="text-center mt-10 space-y-3">
              <p className="text-xs text-on-surface-variant/80 font-sans">Need a custom plan for 100+ participants or multiple locations?</p>
              <button 
                onClick={() => setIsQuoteModalOpen(true)}
                className="text-clay hover:text-clay/80 font-bold text-xs uppercase tracking-widest underline decoration-2 underline-offset-4 cursor-pointer transition-colors"
              >
                Inquire About Custom Enterprise CSR Pack
              </button>
            </div>

          </div>
        </section>





        {/* 7. FAQ SECTION */}
        <section id="corporate-faq-section" className="py-20 md:py-24 bg-[#FAF7F2] border-b border-deep-ocean/5">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12 space-y-3">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-clay font-bold block">
                Questions &amp; Answers
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-deep-ocean font-extrabold tracking-tight">
                Corporate Team Building FAQs
              </h2>
              <div className="w-12 h-0.5 bg-clay/40 mx-auto mt-2" />
            </div>
            
            <div className="space-y-4">
              {corporateFaqs.map((faq, idx) => {
                const isActive = faqActive === idx;
                return (
                  <div key={idx} className="bg-white rounded-xl border border-deep-ocean/5 overflow-hidden transition-all shadow-sm">
                    <button 
                      onClick={() => setFaqActive(isActive ? null : idx)}
                      className="w-full text-left px-6 py-4.5 focus:outline-none flex justify-between items-center gap-4 cursor-pointer"
                    >
                      <h4 className="font-serif text-sm md:text-base font-bold text-deep-ocean">
                        {faq.question}
                      </h4>
                      <ChevronDown className={`text-clay w-5 h-5 shrink-0 transition-transform duration-300 ${isActive ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {isActive && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="px-6 pb-6 pt-1 text-xs md:text-sm text-on-surface-variant leading-relaxed border-t border-deep-ocean/5 font-sans"
                        >
                          {faq.answer}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            <div className="text-center pt-12 space-y-4">
              <p className="text-xs md:text-sm text-on-surface-variant">Still have questions about how our team-building events work?</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button 
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="bg-clay hover:brightness-110 text-white px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest transition-all cursor-pointer shadow-md"
                >
                  Ask a Coordinator
                </button>
                <a 
                  href="mailto:info@solehope.org"
                  className="border border-deep-ocean/20 hover:border-deep-ocean text-deep-ocean bg-white px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email Sole Hope team</span>
                </a>
              </div>
            </div>

          </div>
        </section>


        {/* 8. FINAL CTA SECTION */}
        <section id="corporate-lead-form" className="py-24 bg-white relative overflow-hidden text-center">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(#1A3A5C 1.5px, transparent 1.5px)", backgroundSize: "24px 24px" }} />
          
          <div className="max-w-3xl mx-auto px-6 text-center space-y-8 relative z-10">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-extrabold text-deep-ocean tracking-tight leading-tight">
              Ready to Give Your Team a <br className="hidden md:inline" />
              <span className="text-clay italic font-normal">Purposeful Experience?</span>
            </h2>
            <p className="text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              Create a team-building event that strengthens your people while helping protect children in Uganda.
            </p>
            <button 
              onClick={() => setIsQuoteModalOpen(true)}
              className="bg-clay hover:brightness-110 text-white px-10 py-4.5 rounded-xl font-bold text-xs uppercase tracking-widest hover:scale-105 active:scale-95 shadow-xl transition-all outline-none cursor-pointer"
            >
              Request a Corporate Quote
            </button>
          </div>
        </section>

      </main>

      {/* Footer Block */}
      <Footer 
        onNavigate={(view, section) => onBack(view as any, section)} 
        onOpenContact={onOpenContact} 
      />

      {/* Modal Popup for Corporate Quote */}
      <AnimatePresence>
        {isQuoteModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsQuoteModalOpen(false)}
              className="absolute inset-0 bg-deep-ocean/50 backdrop-blur-md"
            />
            
            {/* Modal Container */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-deep-ocean/10 z-10 flex flex-col max-h-[90vh] overflow-hidden"
            >
              {/* Close button top right */}
              <button 
                onClick={() => setIsQuoteModalOpen(false)}
                className="absolute top-5 right-5 z-20 text-deep-ocean/50 hover:text-clay hover:bg-clay/5 p-2 rounded-full transition-all duration-200 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Scrollable Container */}
              <div className="overflow-y-auto p-6 md:p-8 flex flex-col h-full">
                
                {/* Header inside Modal */}
                <div className="text-center max-w-md mx-auto mb-4 space-y-2 shrink-0">
                  <h2 className="font-serif text-2xl md:text-3xl text-deep-ocean font-extrabold tracking-tight">
                    Request a Corporate Quote
                  </h2>
                  <p className="text-xs md:text-sm text-on-surface-variant">
                    Tell us about your team and event goals, and we’ll help guide you to the right experience.
                  </p>
                  <div className="w-12 h-0.5 bg-clay/40 mx-auto mt-2" />
                </div>

                {/* GoHighLevel Embedded Form */}
                <div className="relative flex-1 min-h-[500px] md:min-h-[580px]">
                  {isLoading && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10">
                      <div className="w-10 h-10 border-3 border-clay border-t-transparent rounded-full animate-spin mb-4" />
                      <p className="text-xs font-mono uppercase tracking-widest text-deep-ocean/60">Loading Secure Form...</p>
                    </div>
                  )}

                  <iframe
                    src="https://api.leadconnectorhq.com/widget/form/tYGtbKyaOhzJgtpAmZbM"
                    style={{ width: "100%", height: "100%", minHeight: "550px", border: "none", borderRadius: "8px", display: "block" }}
                    id="inline-tYGtbKyaOhzJgtpAmZbM" 
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="Corporate Form Team Building"
                    data-height="697"
                    data-layout-iframe-id="inline-tYGtbKyaOhzJgtpAmZbM"
                    data-form-id="tYGtbKyaOhzJgtpAmZbM"
                    title="Corporate Form Team Building"
                  />
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
