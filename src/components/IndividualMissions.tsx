import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "./Footer";
import { 
  Heart, Users, ShoppingCart, Scissors, Sparkles, 
  CheckCircle2, ArrowRight, ChevronDown, Globe, 
  Share2, Mail, Check, Send, BookOpen, GraduationCap, Calendar, Home,
  X, Menu, Star, ShieldCheck, Calculator, HelpCircle
} from "lucide-react";

const logoImg = "/images/regenerated_image_1782340932866.png";
const problemFeetImg = "/images/problem_reinfestation_feet_1783107783503.jpg";
const solutionShoesImg = "/images/solution_protective_shoes_1783107803010.jpg";
const heroBgImg = "/images/regenerated_image_1783109436794.jpg";
const shoePartyPackImg = "/images/shoe_party_pack_1783110078134.jpg";
const gatherSuppliesImg = "/images/regenerated_image_1783111723579.png";
const traceCutImg = "/images/shoe_cutting_party_1782508448020.jpg";
const shipMaterialsImg = "/images/regenerated_image_1783111849673.webp";
const holisticCareImg = "/images/sole_hope_individual_1782426636553.jpg";

interface IndividualMissionsProps {
  onBack: (targetView: "home" | "church" | "corporate" | "individual" | "impact" | "stories", targetSection?: string) => void;
  onOpenBooking: (type: "church" | "corporate" | "individual") => void;
  onOpenVideo: () => void;
  onOpenContact?: (experience?: string) => void;
}

export default function IndividualMissions({ onBack, onOpenBooking, onOpenVideo, onOpenContact }: IndividualMissionsProps) {
  const [faqActive, setFaqActive] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleLinkClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    scrollToSection(sectionId);
  };

  const handleBuyExperienceClick = () => {
    setIsMobileMenuOpen(false);
    setIsLeadModalOpen(true);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const individualFaqs = [
    {
      question: "What is included with the $95 Shoe Party Experience Pack?",
      answer: "Your $95 purchase gives you full access to digital hosting materials (downloadable shoe patterns, host guide, guided event steps, mission videos, shipping instructions, and impact resources) and includes 2 completed pairs of protective shoes. If your group creates additional pairs, each additional pair can be completed for $35."
    },
    {
      question: "Do I or my guests need sewing experience?",
      answer: "No sewing experience is needed! There is zero sewing involved during your Shoe Party. You simply trace printable patterns onto denim and cut them with scissors. Skilled Ugandan artisans assemble and craft the final shoes."
    },
    {
      question: "How do these shoes help children in Uganda?",
      answer: "These shoes help protect healing feet, prevent reinfestation, and support lasting freedom from jiggers after treatment. They serve as an essential barrier between a child's skin and contaminated soil."
    },
    {
      question: "What supplies do I need to gather?",
      answer: "All you need to gather are old denim jeans, sharp scissors, sharpies or markers, and safety pins. One pair of adult jeans creates approximately four to five pairs of shoes."
    },
    {
      question: "How do I send the cut denim back?",
      answer: "Once your party is complete, pack your cut denim patterns into a envelope or box and ship them to Sole Hope following the clear shipping instructions included in your host package."
    },
    {
      question: "How many people can I invite to a Shoe Party?",
      answer: "As many as you like! You can host an intimate gathering at home with family, or organize a larger event at school, church, or in your community."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-ink font-sans selection:bg-clay selection:text-white">
      
      
      <header className="relative z-50 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-deep-ocean/5 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="flex justify-between items-center py-3 md:py-4">
            
            <div className="flex items-center shrink-0">
              <button 
                onClick={() => onBack("home")}
                className="font-serif text-2xl font-bold text-clay uppercase tracking-tight flex items-center gap-2 hover:scale-102 transition-all text-left outline-none cursor-pointer"
              >
                <img 
                  src={logoImg} 
                  alt="Sole Hope Logo" 
                  className="h-10 sm:h-12 md:h-14 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </button>
            </div>

            
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              <button 
                onClick={() => handleLinkClick("how-it-works-section")}
                className="text-xs font-bold uppercase tracking-wider text-deep-ocean hover:text-clay transition-all cursor-pointer"
              >
                How It Works
              </button>
              <button 
                onClick={() => handleLinkClick("whats-included-section")}
                className="text-xs font-bold uppercase tracking-wider text-deep-ocean hover:text-clay transition-all cursor-pointer"
              >
                What’s Included
              </button>
              <button 
                onClick={() => handleLinkClick("individual-pricing-section")}
                className="text-xs font-bold uppercase tracking-wider text-deep-ocean hover:text-clay transition-all cursor-pointer"
              >
                Pricing
              </button>
              <button 
                onClick={() => handleLinkClick("individual-faq-section")}
                className="text-xs font-bold uppercase tracking-wider text-deep-ocean hover:text-clay transition-all cursor-pointer"
              >
                FAQ
              </button>
            </div>

            
            <div className="flex items-center gap-2 sm:gap-3">
              <button 
                onClick={handleBuyExperienceClick}
                className="bg-clay hover:brightness-110 text-white font-sans font-bold text-[11px] sm:text-xs uppercase tracking-widest px-4 sm:px-6 py-2 sm:py-2.5 rounded-full hover:scale-105 active:scale-95 transition-all outline-none cursor-pointer shadow-sm"
              >
                Buy the Experience
              </button>

              
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

        
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-deep-ocean/5 bg-[#FAF7F2] px-6 py-4 space-y-3 shadow-lg absolute w-full left-0 z-40"
            >
              <div className="flex flex-col gap-2">
                <button 
                  onClick={() => handleLinkClick("how-it-works-section")}
                  className="text-left py-2 text-sm font-semibold text-deep-ocean hover:text-clay transition-all"
                >
                  How It Works
                </button>
                <button 
                  onClick={() => handleLinkClick("whats-included-section")}
                  className="text-left py-2 text-sm font-semibold text-deep-ocean hover:text-clay transition-all"
                >
                  What’s Included
                </button>
                <button 
                  onClick={() => handleLinkClick("individual-pricing-section")}
                  className="text-left py-2 text-sm font-semibold text-deep-ocean hover:text-clay transition-all"
                >
                  Pricing
                </button>
                <button 
                  onClick={() => handleLinkClick("individual-faq-section")}
                  className="text-left py-2 text-sm font-semibold text-deep-ocean hover:text-clay transition-all"
                >
                  FAQ
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        
        <section className="relative min-h-[500px] lg:min-h-[560px] flex items-center overflow-hidden bg-[#FAF7F2] border-b border-deep-ocean/10 text-deep-ocean">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2] via-[#FAF7F2]/75 via-45% to-transparent z-5 pointer-events-none" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full pointer-events-none">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-8 space-y-6 pointer-events-auto"
            >
              
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-clay/15 border border-clay/30 text-clay rounded-full text-xs font-semibold font-sans shadow-sm">
                <span>Hands-on Prevention &amp; Healing Experience</span>
              </div>

              <h1 id="individual-hero-title" className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight max-w-4xl text-deep-ocean">
                Turn Old Denim Into Protection for Children in Uganda
              </h1>
              <p className="text-base md:text-lg text-on-surface-variant max-w-2xl leading-relaxed font-sans">
                Host a meaningful Shoe Party at home, school, or with friends. Sole Hope gives you the digital guides, shoe patterns, videos, and step-by-step instructions to help turn donated denim into protective shoes for children in Uganda. These shoes help protect healing feet, prevent reinfestation, and support lasting freedom from jiggers after treatment.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                  onClick={() => setIsLeadModalOpen(true)}
                  className="bg-clay hover:brightness-110 text-white px-8 h-14 rounded-xl font-bold text-xs uppercase tracking-widest hover:scale-[1.02] active:scale-98 transition-all text-center flex items-center justify-center shadow-lg shadow-clay/20 cursor-pointer"
                >
                  Buy the Shoe Party Experience
                </button>
                <button 
                  onClick={() => scrollToSection("whats-included-section")}
                  className="border border-deep-ocean/20 hover:border-deep-ocean/40 bg-white hover:bg-white/80 text-deep-ocean px-8 h-14 rounded-xl font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center cursor-pointer text-center shadow-sm"
                >
                  See What’s Included
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs text-on-surface-variant pt-2 font-medium">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-clay" />
                  No Sewing Required
                </span>
                <span className="text-deep-ocean/20">•</span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-clay" />
                  Instant Digital Access
                </span>
                <span className="text-deep-ocean/20">•</span>
                <span className="flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-clay" />
                  Includes 2 Pairs of Shoes
                </span>
              </div>
            </motion.div>
          </div>

          <img 
            className="absolute inset-0 w-full h-full object-cover select-none opacity-80 z-0" 
            alt="People gathering around a table cutting denim for shoes"
            src={heroBgImg}
            referrerPolicy="no-referrer"
          />
        </section>

        
        <section id="problem-solution-section" className="py-12 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10 space-y-2">
              <span className="text-[10px] uppercase tracking-widest font-bold text-clay block font-mono">
                The Prevention Mission
              </span>
              <h2 className="font-serif text-2xl md:text-3xl text-deep-ocean font-extrabold tracking-tight">
                Why Protective Shoes Matter
              </h2>
              <p className="text-sm md:text-base text-on-surface-variant leading-relaxed max-w-2xl mx-auto font-sans">
                The problem is not just poverty: it is reinfestation after treatment. Children need protective shoes after jigger treatment to keep their feet safe and healthy. The shoes created through this experience are a vital part of prevention, supporting healing and long-term protection.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
              
              
              <div className="group bg-[#FAF7F2] border border-clay/20 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="relative h-36 sm:h-44 overflow-hidden bg-deep-ocean/5">
                  <img 
                    src={problemFeetImg} 
                    alt="Dusty ground in Uganda where children walk barefoot" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-transparent to-black/20" />
                </div>
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-start">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-deep-ocean mb-1.5">
                    The Problem: Reinfestation
                  </h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed font-sans">
                    Medical treatment removes jiggers and treats painful infections, but without protective footwear, children walk barefoot on soil where parasites re-enter their skin. Reinfestation restarts the painful cycle, preventing children from walking or attending school.
                  </p>
                </div>
              </div>

              
              <div className="group bg-[#FAF7F2] border border-clay/20 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col relative">
                <div className="relative h-36 sm:h-44 overflow-hidden bg-clay/5">
                  <img 
                    src={solutionShoesImg} 
                    alt="Handcrafted protective denim shoes for children in Uganda" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-transparent to-black/20" />
                </div>
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-start relative z-10">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-deep-ocean mb-1.5">
                    The Solution: Lasting Prevention
                  </h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed font-sans">
                    Durable closed-toe shoes act as a physical barrier against reinfestation. By hosting a Shoe Party, your group cuts denim uppers that our Ugandan shoemakers assemble into custom protective shoes to protect healing feet and support long-term freedom from jiggers.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </section>

        
        <section id="individual-pricing-section" className="py-12 md:py-16 bg-white border-b border-deep-ocean/5">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="text-center max-w-3xl mx-auto mb-8 space-y-1.5">
              <span className="text-[10px] uppercase tracking-widest font-bold text-clay block font-mono">
                Transparent Impact
              </span>
              <h2 className="font-serif text-2xl md:text-3xl text-deep-ocean font-extrabold tracking-tight">
                Shoe Party Experience
              </h2>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              
              <div className="lg:col-span-5 space-y-4">
                <h3 className="font-serif text-xl md:text-2xl font-extrabold text-deep-ocean leading-tight">
                  Your $95 Gathering Funds Two Completed Pairs of Shoes
                </h3>
                <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed font-sans">
                  Your $95 Shoe Party Experience gives you access to the digital hosting materials and includes 2 pairs of protective shoes. If your group creates additional pairs, each additional pair can be completed for $35.
                </p>
                <div className="space-y-2 pt-1">
                  <div className="flex gap-2.5">
                    <div className="w-4 h-4 bg-clay/10 text-clay rounded-full flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">✓</div>
                    <p className="text-xs font-semibold text-deep-ocean">Includes 2 pairs of completed protective shoes</p>
                  </div>
                  <div className="flex gap-2.5">
                    <div className="w-4 h-4 bg-clay/10 text-clay rounded-full flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">✓</div>
                    <p className="text-xs font-semibold text-deep-ocean">Full digital access to downloadable patterns &amp; host guide</p>
                  </div>
                  <div className="flex gap-2.5">
                    <div className="w-4 h-4 bg-clay/10 text-clay rounded-full flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">✓</div>
                    <p className="text-xs font-semibold text-deep-ocean">Guided event steps, mission videos &amp; shipping instructions</p>
                  </div>
                  <div className="flex gap-2.5">
                    <div className="w-4 h-4 bg-clay/10 text-clay rounded-full flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">✓</div>
                    <p className="text-xs font-semibold text-deep-ocean">Additional pairs completed for $35 each</p>
                  </div>
                </div>
              </div>

              
              <div className="lg:col-span-7 bg-[#FAF7F2] border border-clay/20 rounded-2xl shadow-lg overflow-hidden relative flex flex-col">
                <div className="relative h-32 sm:h-36 w-full overflow-hidden bg-clay/10">
                  <img 
                    src={shoePartyPackImg} 
                    alt="Shoe Party Experience Pack Kit" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-transparent to-black/20" />
                </div>

                <div className="p-5 md:p-6 space-y-3">
                  <div className="flex justify-between items-baseline pb-2.5 border-b border-deep-ocean/10">
                    <div>
                      <h4 className="font-serif text-lg md:text-xl font-bold text-deep-ocean">Shoe Party Experience Pack</h4>
                      <p className="text-[10px] text-clay font-bold uppercase tracking-wide mt-0.5 font-mono">Digital Host Experience</p>
                    </div>
                    <div className="text-right">
                      <span className="font-serif text-2xl sm:text-3xl font-extrabold text-[#1a3a5c]">$95</span>
                      <span className="text-[11px] text-on-surface-variant font-medium block">Includes 2 pairs of shoes</span>
                    </div>
                  </div>

                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    Digital Shoe Party Experience for hosting a hands-on denim cutting gathering. Includes downloadable patterns, host guide, videos, shipping instructions, and impact resources. Additional pairs can be completed for $35 each.
                  </p>

                  <p className="text-xs text-deep-ocean/80 font-medium leading-relaxed bg-deep-ocean/[0.04] p-3 rounded-xl border border-deep-ocean/10">
                    These shoes help protect healing feet, prevent reinfestation, and support lasting freedom from jiggers after treatment.
                  </p>

                  <div className="pt-0.5">
                    <button 
                      onClick={() => setIsLeadModalOpen(true)}
                      className="w-full bg-clay hover:brightness-110 text-white py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all hover:scale-[1.01] shadow-md cursor-pointer flex items-center justify-center gap-2"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      <span>Buy the Shoe Party Experience</span>
                    </button>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        
        <section id="how-it-works-section" className="py-12 md:py-16 bg-[#FAF7F2] border-b border-deep-ocean/5">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
              <span className="text-[10px] uppercase tracking-widest font-bold text-clay block font-mono">
                Simple Step-By-Step
              </span>
              <h2 className="font-serif text-2xl md:text-3xl text-deep-ocean font-extrabold tracking-tight">
                How It Works
              </h2>
              <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed max-w-2xl mx-auto font-sans">
                Hosting a Shoe Party is simple, engaging, and requires zero sewing.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
              {[
                {
                  step: 1,
                  title: "Buy the Experience",
                  desc: "Purchase the $95 pack to receive instant digital access to patterns, host guide, videos, and return shipping instructions.",
                  img: shoePartyPackImg,
                  alt: "Shoe Party Experience Pack"
                },
                {
                  step: 2,
                  title: "Gather Your Supplies",
                  desc: "Collect old denim jeans, fabric scissors, markers, and safety pins. Invite family, friends, or community members over.",
                  img: gatherSuppliesImg,
                  alt: "Gathering denim and supplies with friends"
                },
                {
                  step: 3,
                  title: "Trace & Cut Patterns",
                  desc: "Trace printable patterns onto denim and cut out shapes. Zero sewing required for your guests!",
                  img: traceCutImg,
                  alt: "Tracing and cutting denim shoe patterns"
                },
                {
                  step: 4,
                  title: "Ship Materials Back",
                  desc: "Ship your cut denim back to Sole Hope. Our Ugandan shoemakers assemble them into protective shoes!",
                  img: shipMaterialsImg,
                  alt: "Finished protective shoes for children"
                }
              ].map((item) => (
                <div key={item.step} className="bg-white rounded-xl border border-deep-ocean/10 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col">
                  <div className="relative h-32 sm:h-36 w-full bg-clay/5 overflow-hidden">
                    <img 
                      src={item.img} 
                      alt={item.alt} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    <div className="absolute top-2.5 left-2.5 w-7 h-7 bg-clay text-white rounded-lg flex items-center justify-center font-bold text-xs shadow-md font-mono z-10">
                      {item.step}
                    </div>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-start space-y-1.5">
                    <h3 className="font-serif text-sm font-bold text-deep-ocean">{item.title}</h3>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        
        <section id="what-you-provide-section" className="py-12 md:py-16 bg-white border-b border-deep-ocean/5">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
              <span className="text-[10px] uppercase tracking-widest font-bold text-clay block font-mono">
                Gathering Materials
              </span>
              <h2 className="font-serif text-2xl md:text-3xl text-deep-ocean font-extrabold tracking-tight">
                What You Provide
              </h2>
              <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed max-w-xl mx-auto font-sans">
                Simple everyday items you and your guests can easily collect at home.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
              {[
                { 
                  name: "Old denim jeans", 
                  image: "/images/regenerated_image_1782764753623.jpg"
                },
                { 
                  name: "Sharp scissors", 
                  image: "/images/regenerated_image_1782764755431.png"
                },
                { 
                  name: "Sharpies or markers", 
                  image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=600&q=80"
                },
                { 
                  name: "Safety pins", 
                  image: "/images/regenerated_image_1783112038735.jpg"
                }
              ].map((item, index) => (
                <div key={index} className="bg-[#FAF7F2] rounded-xl border border-deep-ocean/5 overflow-hidden flex flex-col hover:shadow-md transition-all duration-300">
                  <div className="relative aspect-[4/3] w-full bg-clay/5 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-3.5 flex-1 flex flex-col justify-center text-center">
                    <h4 className="font-serif font-bold text-deep-ocean text-xs md:text-sm leading-tight">
                      {item.name}
                    </h4>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-6">
              <p className="text-xs md:text-sm text-clay font-bold font-sans bg-clay/5 inline-block px-5 py-2.5 rounded-full border border-clay/15">
                Note: One pair of adult jeans creates approximately four to five pairs of shoes.
              </p>
            </div>

          </div>
        </section>

        
        <section className="py-16 md:py-20 bg-[#FAF7F2] border-b border-deep-ocean/5">
          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12 space-y-3">
              <span className="text-[10px] uppercase tracking-widest font-bold text-clay block font-mono">
                Broader Prevention Work
              </span>
              <h2 className="font-serif text-2xl md:text-4xl text-deep-ocean font-extrabold tracking-tight">
                Your Purchase Helps Fund Protection and Prevention
              </h2>
              <p className="text-xs md:text-sm text-on-surface-variant font-sans leading-relaxed">
                Your purchase does more than create shoes. It helps support healing, prevention, and the work needed to keep children protected after treatment.
              </p>
            </div>

            <div className="bg-white rounded-[2rem] border border-deep-ocean/5 shadow-[0_24px_60px_rgba(26,58,92,0.08)] overflow-hidden max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2">

                
                <div className="relative h-[340px] sm:h-[400px] lg:h-auto min-h-[400px] bg-parchment/50 p-6 md:p-8">
                  <div className="absolute top-8 right-8 bottom-8 left-8 bg-parchment rounded-[2rem] -rotate-1 shadow-inner" />

                  <div className="absolute top-0 left-0 w-[58%] h-[56%] rounded-2xl overflow-hidden shadow-lg z-10 -rotate-2 border-[5px] border-white">
                    <img
                      src="/images/holistic_care_medical_1783126149423.jpg"
                      alt="Medical checkup supporting holistic care in Uganda"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="absolute top-7 right-0 w-[54%] h-[52%] rounded-2xl overflow-hidden shadow-lg z-20 rotate-1 border-[5px] border-white">
                    <img
                      src="/images/holistic_care_shoes_1783126149423.jpg"
                      alt="Locally made protective shoes providing lasting prevention"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="absolute bottom-0 left-[10%] w-[58%] h-[54%] rounded-2xl overflow-hidden shadow-lg z-30 rotate-2 border-[5px] border-white">
                    <img
                      src="/images/holistic_care_outreach_1783126149423.jpg"
                      alt="Community outreach and foot washing prevention program"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                </div>

                
                <div className="relative p-8 md:p-10 lg:p-12 space-y-6 flex flex-col justify-center">
                  <div className="absolute top-4 right-4 md:top-5 md:right-5 z-10 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-md border border-deep-ocean/5">
                    <span className="font-serif text-xl md:text-2xl font-extrabold text-deep-ocean block leading-none">$95</span>
                    <span className="text-[10px] text-on-surface-variant font-medium leading-tight block mt-0.5">funds protection</span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-deep-ocean">
                      Holistic Care &amp; Prevention
                    </h3>
                    <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed font-sans">
                      In addition to helping create protective shoes, your purchase supports broader Sole Hope work connected to treatment, education, outreach, and long-term freedom from jiggers.
                    </p>
                  </div>

                  <ul className="space-y-3">
                    {[
                      "Medical treatment and gentle jigger removal for children",
                      "Hygiene education and community health training",
                      "Mobile clinic outreach in rural villages",
                      "Fair wages for skilled Ugandan shoemakers and tailors",
                      "Follow-up care and long-term prevention monitoring"
                    ].map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-clay/10 text-clay flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="text-xs md:text-sm text-deep-ocean font-medium font-sans">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>

          </div>
        </section>

        
        <section className="py-12 md:py-16 bg-white border-b border-deep-ocean/5">
          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10 space-y-2">
              <span className="text-[10px] uppercase tracking-widest font-bold text-clay block font-mono">
                Host Stories
              </span>
              <h2 className="font-serif text-2xl md:text-3xl text-deep-ocean font-extrabold tracking-tight">
                Host Stories &amp; Community Impact
              </h2>
              <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed font-sans">
                See how individuals, teachers, and groups are bringing hands-on protection to life.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">

              
              <div className="bg-[#FAF7F2] p-5 rounded-2xl border border-deep-ocean/5 space-y-3 shadow-sm">
                <span className="font-serif text-3xl text-clay/30 leading-none">"</span>
                <p className="text-xs text-on-surface-variant leading-relaxed -mt-4">
                  Hosting a shoe party was incredibly rewarding. We invited 12 friends and family members over, cut denim patterns around the dining table, and discussed the real impact these shoes have on children's health.
                </p>
                <div className="flex items-center gap-2.5 pt-2 border-t border-deep-ocean/5">
                  <div className="w-7 h-7 rounded-full bg-clay/10 text-clay font-bold text-[10px] flex items-center justify-center">SM</div>
                  <div>
                    <h4 className="font-serif font-bold text-[11px] text-deep-ocean">Sarah Miller</h4>
                    <span className="text-[9px] text-on-surface-variant font-mono">Home Party Host</span>
                  </div>
                </div>
              </div>

              
              <div className="bg-[#FAF7F2] p-5 rounded-2xl border border-deep-ocean/5 space-y-3 shadow-sm">
                <span className="font-serif text-3xl text-clay/30 leading-none">"</span>
                <p className="text-xs text-on-surface-variant leading-relaxed -mt-4">
                  I hosted this in my 6th-grade classroom. It was a tangible, hands-on way for students to learn about prevention and global health. The digital guides made leading the activity seamless.
                </p>
                <div className="flex items-center gap-2.5 pt-2 border-t border-deep-ocean/5">
                  <div className="w-7 h-7 rounded-full bg-clay/10 text-clay font-bold text-[10px] flex items-center justify-center">MH</div>
                  <div>
                    <h4 className="font-serif font-bold text-[11px] text-deep-ocean">Marcus Hayes</h4>
                    <span className="text-[9px] text-on-surface-variant font-mono">Classroom Educator</span>
                  </div>
                </div>
              </div>

              
              <div className="bg-[#FAF7F2] p-5 rounded-2xl border border-deep-ocean/5 space-y-3 shadow-sm">
                <span className="font-serif text-3xl text-clay/30 leading-none">"</span>
                <p className="text-xs text-on-surface-variant leading-relaxed -mt-4">
                  Our monthly group turned our gathering into a Sole Hope Shoe Party. We had so much fun tracing and cutting. Knowing that these shoes prevent reinfestation made the night truly meaningful.
                </p>
                <div className="flex items-center gap-2.5 pt-2 border-t border-deep-ocean/5">
                  <div className="w-7 h-7 rounded-full bg-clay/10 text-clay font-bold text-[10px] flex items-center justify-center">EL</div>
                  <div>
                    <h4 className="font-serif font-bold text-[11px] text-deep-ocean">Emily Larson</h4>
                    <span className="text-[9px] text-on-surface-variant font-mono">Community Host</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        
        <section id="individual-faq-section" className="py-10 md:py-12 bg-[#FAF7F2] border-b border-deep-ocean/5">
          <div className="max-w-2xl mx-auto px-6">

            <div className="text-center max-w-2xl mx-auto mb-8 space-y-3">
              <h2 className="font-serif text-xl text-deep-ocean font-extrabold tracking-tight">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-2 max-w-2xl mx-auto">
              {individualFaqs.map((faq, idx) => {
                const isActive = faqActive === idx;
                return (
                  <div key={idx} className="border border-deep-ocean/5 bg-white rounded-xl p-3 shadow-sm transition-all">
                    <button
                      onClick={() => setFaqActive(isActive ? null : idx)}
                      className="w-full text-left flex justify-between items-center gap-4 focus:outline-none cursor-pointer"
                    >
                      <span className="font-serif font-bold text-sm text-deep-ocean">
                        {faq.question}
                      </span>
                      <ChevronDown className={`text-clay w-3.5 h-3.5 shrink-0 transition-transform duration-300 ${isActive ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <p className="pt-1.5 text-xs text-on-surface-variant leading-relaxed font-sans">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        
        <section className="py-20 md:py-24 bg-[#FAF7F2] border-t border-deep-ocean/10 text-deep-ocean relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-6 text-center space-y-8 relative z-10">
            <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight max-w-3xl mx-auto text-deep-ocean">
              Ready to Host Your Shoe Party?
            </h2>
            <p className="text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed font-sans">
              Gather your friends, family, or community and turn donated denim into real protection for children in Uganda.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4 max-w-md mx-auto">
              <button 
                onClick={() => setIsLeadModalOpen(true)}
                className="bg-clay text-white px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:scale-105 active:scale-95 shadow-xl transition-all outline-none cursor-pointer flex-1"
              >
                Buy the Shoe Party Experience
              </button>
              <button 
                onClick={() => onOpenContact ? onOpenContact("Individual Inquiry") : setIsLeadModalOpen(true)}
                className="border border-deep-ocean/30 text-deep-ocean px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-deep-ocean hover:text-white transition-all outline-none cursor-pointer flex-1"
              >
                Contact Us
              </button>
            </div>
          </div>
        </section>

      </main>

      
      <Footer 
        onNavigate={(view, section) => onBack(view as any, section)} 
        onOpenContact={onOpenContact} 
      />

      
      <AnimatePresence>
        {isLeadModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
            
            <div className="absolute inset-0" onClick={() => setIsLeadModalOpen(false)} />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative w-full max-w-xl bg-[#FAF7F2] rounded-3xl shadow-2xl border border-deep-ocean/10 z-10 flex flex-col max-h-[90vh] overflow-hidden"
            >
              
              <button
                onClick={() => setIsLeadModalOpen(false)}
                className="absolute top-5 right-5 z-20 text-deep-ocean/50 hover:text-clay hover:bg-clay/5 p-2 rounded-full transition-all duration-200 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              
              <div className="pt-8 px-6 md:px-10 text-center max-w-md mx-auto space-y-1.5 flex flex-col items-center">
                <img 
                  src={logoImg} 
                  alt="Sole Hope Logo" 
                  className="h-10 md:h-12 w-auto object-contain mb-1"
                  referrerPolicy="no-referrer"
                />
                <span className="text-[9px] uppercase tracking-widest font-mono font-bold text-clay block">
                  Shoe Party Experience Pack - $95
                </span>
                <h2 className="font-serif text-2xl md:text-3xl text-deep-ocean font-extrabold tracking-tight">
                  Buy the Shoe Party Experience
                </h2>
                <p className="text-xs text-on-surface-variant font-sans pt-1">
                  Includes digital host materials + 2 completed pairs of shoes. Additional pairs completed for $35 each.
                </p>
              </div>

              
              <div className="overflow-y-auto p-4 md:p-6 flex-1">
                <div className="bg-white border border-deep-ocean/5 p-2 rounded-2xl shadow-sm overflow-hidden min-h-[500px]">
                  <iframe
                    src="https://api.leadconnectorhq.com/widget/form/pxjHYs9x29CFEyPYNVMy"
                    style={{ width: "100%", height: "100%", minHeight: "500px", border: "none", borderRadius: "8px" }}
                    id="modal-pxjHYs9x29CFEyPYNVMy" 
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="Form 2"
                    data-height="1272"
                    data-layout-iframe-id="modal-pxjHYs9x29CFEyPYNVMy"
                    data-form-id="pxjHYs9x29CFEyPYNVMy"
                    title="Form 2"
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

