import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "./Footer";
import { 
  HeartHandshake, ChevronRight, Play, ArrowRight, CheckCircle2, 
  ChevronDown, BookOpen, Scissors, Video, HelpCircle, 
  Globe, Share2, Mail, Calendar, Users, Award, MapPin, Check, MessageSquare, Info,
  X, Menu
} from "lucide-react";

const logoImg = "/images/regenerated_image_1782340932866.png";

interface ChurchMissionsProps {
  onBack: (targetView: "home" | "church" | "corporate" | "individual" | "impact" | "stories", targetSection?: string) => void;
  onOpenVideo: () => void;
  onOpenBooking: (type: "church" | "corporate" | "individual") => void;
  onOpenContact?: (experience?: string) => void;
}

export default function ChurchMissions({ onBack, onOpenVideo, onOpenBooking, onOpenContact }: ChurchMissionsProps) {
  const [faqActive, setFaqActive] = useState<number | null>(null);

  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const scrollToForm = () => {
    setIsFormModalOpen(true);
  };

  const handleLinkClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    scrollToSection(sectionId);
  };

  const handleRequestPartyClick = () => {
    setIsMobileMenuOpen(false);
    setIsFormModalOpen(true);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToFormAndFocusQuestion = () => {
    if (onOpenContact) {
      onOpenContact("Church Inquiry");
    } else {
      setIsFormModalOpen(true);
    }
  };

  const churchFaqs = [
    {
      question: "Does our church need sewing experience?",
      answer: "Not at all! A Shoe Cutting Party requires zero sewing or sewing machines. Your group will simply trace and cut denim patterns using heavy-duty fabric scissors and mark them. Our professional, fairly-paid tailors and shoemakers in Uganda handle all the physical assembly and stitching."
    },
    {
      question: "How many people can participate?",
      answer: "Any size group can host, from a small home group of 5-10 people, to multi-generational youth groups, up to an entire congregation of hundreds serving together. The activity is highly scalable, simple to organize, and perfect for all ages."
    },
    {
      question: "Can youth groups or small groups host this?",
      answer: "Absolutely. It's an exceptionally engaging hands-on project for youth groups, mission teams, women's ministries, and bible study groups. It helps translate abstract concepts of global outreach into a tangible service task."
    },
    {
      question: "How long does a church party usually take?",
      answer: "A standard party takes between 1.5 to 2 hours. This includes a warm opening welcome & prayer, watching a custom Sole Hope mission story video, a quick cutting demonstration, hands-on cutting with background fellowship, and a closing prayer over the completed shoe patterns."
    },
    {
      question: "What materials do we need to collect?",
      answer: "Your church will need to collect old, clean denim (jeans, jackets, skirts) from your congregation ahead of time, plus fabric scissors, safety pins, and fabric markers. Sole Hope provides the step-by-step templates, video media loops, and shipping instructions."
    },
    {
      question: "How do we send everything back to Sole Hope?",
      answer: "Once your party is finished, pack up the cut denim shoe patterns and return them to Sole Hope using the mailing and shipping instructions provided in your Church Host Pack. We compile and ship them directly to our clinic and workshop in Jinja, Uganda."
    },
    {
      question: "How much does it cost to provide shoes?",
      answer: "Each pair of shoes is currently estimated at $35. This tax-deductible donation covers the medical wash & checkup for the child, the materials, fair wages for the Ugandan artisans who sew the shoes, and follow-up medical care."
    }
  ];

  return (
    <div className="min-h-screen bg-parchment text-ink font-sans selection:bg-clay/20 selection:text-clay">
      
      
      <header className="relative z-50 bg-parchment/95 backdrop-blur-md border-b border-deep-ocean/5 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="flex justify-between items-center py-3 md:py-4">
            
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

            
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              <button 
                onClick={() => handleLinkClick("how-it-serves")}
                className="text-sm font-semibold text-deep-ocean hover:text-clay transition-all cursor-pointer"
              >
                How It Works
              </button>
              <button 
                onClick={() => handleLinkClick("church-pricing-section")}
                className="text-sm font-semibold text-deep-ocean hover:text-clay transition-all cursor-pointer"
              >
                Pricing
              </button>
              <button 
                onClick={() => handleLinkClick("church-faq-section")}
                className="text-sm font-semibold text-deep-ocean hover:text-clay transition-all cursor-pointer"
              >
                FAQ
              </button>
            </div>

            
            <div className="flex items-center gap-2 sm:gap-3">
              <button 
                onClick={handleRequestPartyClick}
                className="bg-clay hover:brightness-110 text-white font-sans font-bold text-[11px] sm:text-xs uppercase tracking-widest px-4 sm:px-6 py-2 sm:py-2.5 rounded-full hover:scale-105 active:scale-95 transition-all outline-none cursor-pointer shadow-sm"
              >
                Request Church Party Details
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
              className="md:hidden border-t border-deep-ocean/5 bg-parchment px-6 py-4 space-y-3 shadow-lg absolute w-full left-0 z-40"
            >
              <div className="flex flex-col gap-2">
                <button 
                  onClick={() => handleLinkClick("how-it-serves")}
                  className="text-left py-2 text-sm font-semibold text-deep-ocean hover:text-clay transition-all cursor-pointer"
                >
                  How It Works
                </button>
                <button 
                  onClick={() => handleLinkClick("church-pricing-section")}
                  className="text-left py-2 text-sm font-semibold text-deep-ocean hover:text-clay transition-all cursor-pointer"
                >
                  Pricing
                </button>
                <button 
                  onClick={() => handleLinkClick("church-faq-section")}
                  className="text-left py-2 text-sm font-semibold text-deep-ocean hover:text-clay transition-all cursor-pointer"
                >
                  FAQ
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        
        <div className="px-4 md:px-8 pt-6 pb-6">
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative overflow-hidden rounded-3xl pt-16 pb-16 md:pt-20 md:pb-20 shadow-xl"
          >
            
            <div className="absolute inset-0 z-0">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAknnI22WUJW79y9a7x7FRGwm1tlYrD9TbBS3DHzJk_J_GDZbOTkOXdul9eNmhSrJPAxkLEA_LhkKeDd-rAzx7QcuCNUTIWELTjiQPmf8x9wey41dsZmYRVGn8qgB4ilzdctXOoZvUA1O8Df7zha94mOqEhaW1JNijK7nfulT7Z0iOrkO9_sa568kCsJoWMUkUlKc6Ki-UKEw8Q0HDTNSSR7YcIdLRMufsrrVmR07_bLjPdw8El2_w3"
                alt=""
                aria-hidden="true"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/55 to-white/20" />
            </div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="lg:col-span-6 space-y-6"
              >
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-deep-ocean font-extrabold leading-[1.1] tracking-tight">
                  Put Faith Into Action <br className="hidden md:inline" />
                  <span className="text-clay italic font-normal">Through a Hands-On Mission Experience</span>
                </h1>

                <p className="text-base md:text-lg text-on-surface-variant max-w-2xl leading-relaxed font-sans">
                  Host a Shoe Cutting Party that helps your church serve together, create protective shoes for children in Uganda, and connect your congregation to a mission they can physically take part in.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-3">
                  <button 
                    onClick={scrollToForm}
                    className="bg-clay hover:brightness-110 text-white px-8 h-13 rounded-xl font-bold text-xs uppercase tracking-widest hover:scale-[1.02] transition-all text-center flex items-center justify-center gap-2 shadow-md shadow-clay/20 cursor-pointer"
                  >
                    Request Church Party Details <ArrowRight className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => scrollToSection("how-it-serves")}
                    className="border border-deep-ocean text-deep-ocean bg-transparent px-8 h-13 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-deep-ocean hover:text-white transition-all text-center flex items-center justify-center whitespace-nowrap cursor-pointer"
                  >
                    See How It Works
                  </button>
                </div>

                <p className="text-xs text-on-surface-variant/70 italic pt-2">
                  * Perfect for churches, youth groups, mission teams, women's ministries, and outreach groups.
                </p>
              </motion.div>

              <div className="lg:col-span-6 relative justify-self-center w-full max-w-md lg:max-w-xl mt-8 lg:mt-0">
                <div className="rounded-2xl overflow-hidden border border-deep-ocean/10 shadow-2xl rotate-1 h-72 sm:h-96 md:h-[420px] lg:h-[480px] w-full bg-[#FAF7F2]">
                  <img 
                    className="w-full h-full object-cover select-none" 
                    alt="Child Handmade Denim Shoes"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3iJGv-t_A0xHOhpDySFcfUP0I_E8KaE_jablgy8JxYxqzmVtfgEcKXXDpL6lweLUyMu_ZgiDKnTwcdmnXhRKDiA7ne4lBY4YPk7XF_s1oMBW-akM8XzX6bljsctyD1yiR_snVoa8ahaF7G8kF7S4VW42-KG_IRSlNEVsVdMaKig7sp9djxxE5gTxCEkooUiIP3io3etkIFHSE_fHJlIVmXbCRcmr1wOwHoquX-FA7WnJkWEL6jwc-tl1SvkmQyO0wQXiI9Vkc3risjQ"
                  />
                </div>
              </div>
            </div>
          </motion.section>
        </div>

        
        <section className="py-20 md:py-24 bg-white border-b border-deep-ocean/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
              <span className="text-xs font-mono uppercase tracking-widest text-clay font-bold block">
                Made for Churches
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-deep-ocean font-bold tracking-tight">
                A Practical Mission Experience for Your Church Family
              </h2>
              <p className="text-sm md:text-base text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
                A Shoe Cutting Party gives your congregation a simple way to serve together. The shoes created through Shoe Parties help protect children after jigger treatment by covering healing feet, helping prevent reinfestation, and supporting lasting freedom from jiggers.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="bg-parchment/40 border border-deep-ocean/5 hover:border-clay/20 p-8 rounded-2xl transition-all shadow-sm flex flex-col space-y-4">
                <div className="w-10 h-10 rounded-xl bg-clay/10 text-clay flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-deep-ocean">Congregations</h3>
                <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                  Bring your church family together around a hands-on act of service.
                </p>
              </div>

              
              <div className="bg-parchment/40 border border-deep-ocean/5 hover:border-clay/20 p-8 rounded-2xl transition-all shadow-sm flex flex-col space-y-4">
                <div className="w-10 h-10 rounded-xl bg-clay/10 text-clay flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-deep-ocean">Youth Groups</h3>
                <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                  Help students connect faith, compassion, and action in a practical way.
                </p>
              </div>

              
              <div className="bg-parchment/40 border border-deep-ocean/5 hover:border-clay/20 p-8 rounded-2xl transition-all shadow-sm flex flex-col space-y-4">
                <div className="w-10 h-10 rounded-xl bg-clay/10 text-clay flex items-center justify-center">
                  <Calendar className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-deep-ocean">Mission Teams</h3>
                <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                  Add a meaningful service activity to your next mission-focused gathering.
                </p>
              </div>

              
              <div className="bg-parchment/40 border border-deep-ocean/5 hover:border-clay/20 p-8 rounded-2xl transition-all shadow-sm flex flex-col space-y-4">
                <div className="w-10 h-10 rounded-xl bg-clay/10 text-clay flex items-center justify-center">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-deep-ocean">Women’s Ministries &amp; Small Groups</h3>
                <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                  Create a warm, purposeful gathering that helps provide protective shoes for children.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <button 
                onClick={() => setIsFormModalOpen(true)}
                className="bg-clay hover:brightness-110 text-white px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-widest transition-all shadow-lg shadow-clay/15 hover:scale-102 active:scale-98 cursor-pointer inline-flex items-center gap-2"
              >
                Request Church Party Details <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        
        <section id="church-impact-section" className="py-20 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
              <span className="text-xs font-mono uppercase tracking-widest text-clay font-bold block">
                Your Church's Impact
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-deep-ocean font-bold tracking-tight">
                Your Service Helps Protect Children
              </h2>
              <p className="text-sm md:text-base text-on-surface-variant max-w-xl mx-auto leading-relaxed">
                A Shoe Party is more than cutting denim. It is part of Sole Hope's prevention model. After children receive jigger treatment, protective shoes help cover healing feet, reduce the risk of reinfestation, and support long-term freedom from jiggers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <div className="bg-parchment/30 border border-deep-ocean/5 p-8 rounded-2xl flex flex-col space-y-4">
                <div className="w-10 h-10 rounded-xl bg-clay/10 text-clay flex items-center justify-center">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-deep-ocean">Protect Children</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Help provide shoes that protect children from jiggers, infection, and missed school days.
                </p>
              </div>

              
              <div className="bg-parchment/30 border border-deep-ocean/5 p-8 rounded-2xl flex flex-col space-y-4">
                <div className="w-10 h-10 rounded-xl bg-clay/10 text-clay flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-deep-ocean">Serve Together</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Give your congregation a practical way to put compassion into action.
                </p>
              </div>

              
              <div className="bg-parchment/30 border border-deep-ocean/5 p-8 rounded-2xl flex flex-col space-y-4">
                <div className="w-10 h-10 rounded-xl bg-clay/10 text-clay flex items-center justify-center">
                  <Scissors className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-deep-ocean">Support Local Shoemakers</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Completed denim patterns are turned into shoes by local shoemakers in Uganda.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <button 
                onClick={() => setIsFormModalOpen(true)}
                className="bg-clay hover:brightness-110 text-white px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-widest transition-all shadow-lg shadow-clay/15 hover:scale-102 active:scale-98 cursor-pointer inline-flex items-center gap-2"
              >
                Request Church Party Details <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        
        <section id="how-it-serves" className="py-20 md:py-24 bg-parchment">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
              <span className="text-xs font-mono uppercase tracking-widest text-clay font-bold block">
                How It Works
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-deep-ocean font-bold tracking-tight">
                How Your Church Serves
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              
              <div className="relative group bg-white rounded-2xl border border-deep-ocean/5 shadow-[0_4px_25px_rgba(26,58,92,0.02)] hover:shadow-[0_12px_40px_rgba(26,58,92,0.06)] hover:border-clay/20 hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden h-full">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#FAF7F2] shrink-0">
                  <img 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 select-none" 
                    alt="Outreach Pack flat lay"
                    src="/images/regenerated_image_1782940586663.jpg"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow space-y-4">
                  <div className="w-10 h-10 rounded-full bg-clay text-white flex items-center justify-center font-serif text-base font-bold shadow-sm">
                    1
                  </div>
                  <h3 className="font-serif text-lg font-bold text-deep-ocean">Plan Your Church Party</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    Choose a date, gather your group, and request the resources you need to host.
                  </p>
                </div>
              </div>

              
              <div className="relative group bg-white rounded-2xl border border-deep-ocean/5 shadow-[0_4px_25px_rgba(26,58,92,0.02)] hover:shadow-[0_12px_40px_rgba(26,58,92,0.06)] hover:border-clay/20 hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden h-full">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#FAF7F2] shrink-0">
                  <img 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 select-none" 
                    alt="Church group cutting denim together"
                    src="/images/regenerated_image_1782863249241.jpg"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow space-y-4">
                  <div className="w-10 h-10 rounded-full bg-clay text-white flex items-center justify-center font-serif text-base font-bold shadow-sm">
                    2
                  </div>
                  <h3 className="font-serif text-lg font-bold text-deep-ocean">Gather Denim</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    Invite your church family to bring old denim and prepare for a hands-on service experience.
                  </p>
                </div>
              </div>

              
              <div className="relative group bg-white rounded-2xl border border-deep-ocean/5 shadow-[0_4px_25px_rgba(26,58,92,0.02)] hover:shadow-[0_12px_40px_rgba(26,58,92,0.06)] hover:border-clay/20 hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden h-full">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#FAF7F2] shrink-0">
                  <img 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 select-none" 
                    alt="Shoe cutting party activity"
                    src="/images/shoe_cutting_party_1782508448020.jpg"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow space-y-4">
                  <div className="w-10 h-10 rounded-full bg-clay text-white flex items-center justify-center font-serif text-base font-bold shadow-sm">
                    3
                  </div>
                  <h3 className="font-serif text-lg font-bold text-deep-ocean">Cut Together</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    Your group traces and cuts denim shoe patterns using simple instructions. No sewing or machines required.
                  </p>
                </div>
              </div>

              
              <div className="relative group bg-white rounded-2xl border border-deep-ocean/5 shadow-[0_4px_25px_rgba(26,58,92,0.02)] hover:shadow-[0_12px_40px_rgba(26,58,92,0.06)] hover:border-clay/20 hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden h-full">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#FAF7F2] shrink-0">
                  <img 
  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 select-none" 
  alt="Shoe cutting party activity"
  src="/images/corporate_volunteering_1782505474243.jpg"
/>
                </div>
                <div className="p-6 flex flex-col flex-grow space-y-4">
                  <div className="w-10 h-10 rounded-full bg-clay text-white flex items-center justify-center font-serif text-base font-bold shadow-sm">
                    4
                  </div>
                  <h3 className="font-serif text-lg font-bold text-deep-ocean">Send Materials Back</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    Return the completed materials to Sole Hope so they can be sent to Uganda and turned into protective shoes.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <button 
                onClick={() => setIsFormModalOpen(true)}
                className="bg-clay hover:brightness-110 text-white px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-widest transition-all shadow-lg shadow-clay/15 hover:scale-102 active:scale-98 cursor-pointer inline-flex items-center gap-2"
              >
                Request Church Party Details <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="relative rounded-3xl overflow-hidden bg-black/95 aspect-video group cursor-pointer shadow-2xl max-w-4xl mx-auto" onClick={onOpenVideo}>
              <img 
                className="absolute inset-0 w-full h-full object-cover opacity-65 group-hover:opacity-45 transition-opacity duration-500 select-none" 
                alt="Washing children's feet"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNTs0giDWYQ2fIy-k6c66f0nsFxe4p1JIEZImmiyDevFsgb9Qo-0B2Zez2N_rE-3thnS3fH9kmud0o3aMuN7j02VbdY9RFwDW0C9rK-09ACktkBWMtJuXIaqtdJrvfYIashZoarow4pK8nzDsNOr3mPdSoGhH53414d6jo68IyBX3OTK89hdCp2w6Z0yqty_6ivG43bKw7SZJXolV8jnV6CnjVyhN7lG06oxmFTfxe4OVV1xrT4mNhANQb9zAUsrekt2lg3z0_qb_iZQ"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button 
                  className="w-20 h-20 bg-clay text-white rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-xl ring-8 ring-white/10"
                  aria-label="Play documentary video details"
                >
                  <Play className="w-8 h-8 stroke-[2.5] translate-x-0.5 text-white" />
                </button>
              </div>
              <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                <h3 className="font-serif text-lg md:text-xl font-bold mb-1">Watch: The Journey of a Shoe</h3>
                <p className="text-[11px] text-white/80 leading-relaxed font-sans">
                  From your church fellowship hall to the red dirt paths of Jinja, Uganda.
                </p>
              </div>
            </div>
          </div>
        </section>

        
        <section id="church-pricing-section" className="py-14 md:py-16 bg-white border-t border-deep-ocean/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
              <span className="text-xs font-mono uppercase tracking-widest text-clay font-bold block">
                Church Pricing
              </span>
              <h2 className="font-serif text-2xl md:text-3xl text-deep-ocean font-bold tracking-tight">
                Church Shoe Cutting Party Pricing
              </h2>
            </div>

            <div className="max-w-lg mx-auto bg-parchment/30 border border-deep-ocean/5 rounded-3xl p-5 md:p-6 text-center space-y-3 shadow-sm">
              <h3 className="font-serif text-lg font-bold text-deep-ocean">
                Church Shoe Cutting Party Pack
              </h3>
              
              <div className="py-3 border-y border-deep-ocean/5 my-1 space-y-1">
                <span className="font-serif text-3xl font-extrabold text-[#1a3a5c] block">
                  $95
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-clay font-bold block">
                  Includes 2 pairs of shoes
                </span>
              </div>

              <p className="text-sm text-on-surface-variant leading-relaxed max-w-sm mx-auto">
                The $95 Church Shoe Cutting Party Pack includes 2 pairs of shoes and gives your church the resources to host a hands-on mission experience. Each additional pair can be completed for $35.
              </p>

              <p className="text-xs text-clay font-medium max-w-sm mx-auto leading-relaxed bg-clay/5 p-2.5 rounded-xl border border-clay/10">
                Shoes help protect healing feet, prevent reinfestation, and support lasting freedom after jigger treatment.
              </p>

              <p className="text-[11px] text-on-surface-variant/70 italic font-mono">
                * Final details may depend on group size, materials, shipping, and event needs.
              </p>

              <div className="pt-1">
                <button 
                  onClick={scrollToForm}
                  className="bg-clay text-white font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-xl hover:brightness-110 hover:scale-102 transition-all text-center shadow-md cursor-pointer"
                >
                  Request Church Party Details
                </button>
              </div>
            </div>
          </div>
        </section>



        
        <section id="church-faq-section" className="py-14 md:py-16 bg-parchment">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center space-y-2 mb-8">
              <span className="text-xs font-mono uppercase tracking-widest text-clay font-bold block">
                Questions
              </span>
              <h2 className="font-serif text-2xl md:text-3xl text-deep-ocean font-bold tracking-tight">
                Church Shoe Cutting Party FAQs
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {churchFaqs.map((faq, idx) => {
                const isActive = faqActive === idx;
                return (
                  <div key={idx} className="bg-white rounded-xl border border-deep-ocean/5 overflow-hidden transition-all shadow-sm">
                    <button
                      onClick={() => setFaqActive(isActive ? null : idx)}
                      className="w-full text-left px-4 py-3.5 focus:outline-none flex justify-between items-center gap-3 cursor-pointer"
                    >
                      <h4 className="font-serif text-sm font-bold text-deep-ocean">
                        {faq.question}
                      </h4>
                      <ChevronDown className={`text-clay w-4 h-4 shrink-0 transition-transform duration-300 ${isActive ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="px-4 pb-4 pt-1 text-xs text-on-surface-variant leading-relaxed border-t border-deep-ocean/5 font-sans"
                        >
                          {faq.answer}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        
        <section className="py-14 md:py-16 bg-deep-ocean text-white">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Ready to Lead Your Church in Mission?
            </h2>
            <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed font-sans">
              Host a hands-on mission experience that brings your congregation together and helps provide protective shoes for children in Uganda.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
              <button 
                onClick={scrollToForm}
                className="bg-clay text-white font-sans font-bold text-xs uppercase tracking-widest px-10 py-5 rounded-xl hover:brightness-110 active:scale-95 shadow-xl transition-all outline-none cursor-pointer"
              >
                Request Church Party Details
              </button>
              <button 
                onClick={scrollToFormAndFocusQuestion}
                className="bg-transparent border-2 border-white text-white font-sans font-bold text-xs uppercase tracking-widest px-10 py-5 rounded-xl hover:bg-white hover:text-deep-ocean transition-all outline-none cursor-pointer"
              >
                Ask a Question
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
        {isFormModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-deep-ocean/60 backdrop-blur-md">
            
            <div className="absolute inset-0" onClick={() => setIsFormModalOpen(false)} />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative w-full max-w-xl bg-[#FAF7F2] rounded-3xl shadow-2xl border border-deep-ocean/10 z-10 flex flex-col max-h-[90vh] overflow-hidden"
            >
              
              <button
                onClick={() => setIsFormModalOpen(false)}
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
                  Church Missions
                </span>
                <h2 className="font-serif text-2xl md:text-3xl text-deep-ocean font-extrabold tracking-tight">
                  Get Started Today
                </h2>
              </div>

              
              <div className="overflow-y-auto p-4 md:p-6 flex-1">
                <div className="bg-white border border-deep-ocean/5 p-2 rounded-2xl shadow-sm overflow-hidden min-h-[500px]">
                  <iframe
                    src="https://api.leadconnectorhq.com/widget/form/WobjIeKD1wR4gKn0ZiRw"
                    style={{ width: "100%", height: "100%", minHeight: "500px", border: "none", borderRadius: "8px" }}
                    id="modal-WobjIeKD1wR4gKn0ZiRw" 
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="Form 3"
                    data-height="849"
                    data-layout-iframe-id="modal-WobjIeKD1wR4gKn0ZiRw"
                    data-form-id="WobjIeKD1wR4gKn0ZiRw"
                    title="Form 3"
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
