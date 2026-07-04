import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "./Footer";
import { 
  Heart, Award, Users, CheckCircle2, Scissors, Sparkles, 
  Globe, Share2, Mail, FileText, ArrowDown, HelpCircle, ChevronDown,
  Menu, X
} from "lucide-react";
const logoImg = "/images/sole-hope-logo.png";

interface OurImpactProps {
  onBack: (targetView: "home" | "church" | "corporate" | "individual" | "impact" | "stories", targetSection?: string) => void;
  onOpenBooking: (type: "church" | "corporate" | "individual") => void;
  onOpenVideo: () => void;
  onOpenContact?: (experience?: string) => void;
}

export default function OurImpact({ onBack, onOpenBooking, onOpenVideo, onOpenContact }: OurImpactProps) {
  const [faqActive, setFaqActive] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLinkClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    scrollToSection(sectionId);
  };

  const handleChooseExperienceClick = () => {
    setIsMobileMenuOpen(false);
    onBack("home", "experience-section");
  };

  const impactFaqs = [
    {
      question: "How do you verify the shoes reach those in need?",
      answer: "Every clinical visit and shoe distribution is documented by our team on the ground in Jinja, Uganda. We track patient recovery rates, medical checkups, and school attendance metrics to measure long-term lifestyle improvement."
    },
    {
      question: "How is my party suggestion or donation utilized?",
      answer: "Over 85% of all resources go directly into field services. Donations fund the purchase of locally recycled tires, salary payments for our Ugandan tailors and shoemakers, medical grade supplies for jigger removal, and post-care follow-up."
    },
    {
      question: "Can we track the work of the local shoemakers we fund?",
      answer: "Absolutely! We share regular monthly updates, photo diaries, and artisan spotlights so our wonderful host networks can see the exact hands bringing their cut denim layouts to life."
    }
  ];

  const [shoesCounter, setShoesCounter] = useState(0);
  const [yearsCounter, setYearsCounter] = useState(0);
  const [partiesCounter, setPartiesCounter] = useState(0);

  useEffect(() => {
    const duration = 1500;
    const steps = 60;
    const intervalTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setShoesCounter(Math.floor(progress * 300000));
      setYearsCounter(Math.floor(progress * 16));
      setPartiesCounter(Math.floor(progress * 12000));

      if (step >= steps) {
        setShoesCounter(300000);
        setYearsCounter(16);
        setPartiesCounter(12000);
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  const handleExploreClick = () => {
    const el = document.getElementById("stats-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-parchment text-ink font-sans selection:bg-clay/20 selection:text-primary">
      
      
      <header className="sticky top-0 z-50 bg-parchment/95 backdrop-blur-md border-b border-deep-ocean/5 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="flex justify-between items-center py-3 md:py-4">
            
            <div className="flex items-center shrink-0">
              <button 
                onClick={() => onBack("home")}
                className="font-serif text-2xl font-bold text-clay uppercase tracking-tight flex items-center gap-2 hover:scale-105 transition-all text-left bg-transparent border-none outline-none cursor-pointer"
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
                onClick={() => handleLinkClick("impact-journey")}
                className="text-sm font-semibold text-deep-ocean hover:text-clay transition-all bg-transparent border-none outline-none cursor-pointer"
              >
                How It Works
              </button>
              <button 
                onClick={handleChooseExperienceClick}
                className="text-sm font-semibold text-deep-ocean hover:text-clay transition-all bg-transparent border-none outline-none cursor-pointer"
              >
                Choose Experience
              </button>
              <button 
                onClick={() => onBack("stories")}
                className="text-sm font-semibold text-deep-ocean hover:text-clay transition-all bg-transparent border-none outline-none cursor-pointer"
              >
                Stories
              </button>
              <button 
                onClick={() => handleLinkClick("impact-faq-section")}
                className="text-sm font-semibold text-deep-ocean hover:text-clay transition-all bg-transparent border-none outline-none cursor-pointer"
              >
                FAQ
              </button>
            </div>

            
            <div className="flex items-center gap-2 sm:gap-3">
              <button 
                onClick={handleChooseExperienceClick}
                className="bg-clay hover:brightness-110 text-white font-sans font-bold text-[11px] sm:text-xs uppercase tracking-widest px-4 sm:px-6 py-2 sm:py-2.5 rounded-full hover:scale-105 active:scale-95 transition-all outline-none cursor-pointer shadow-sm"
              >
                Choose Your Experience
              </button>

              
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-1.5 text-deep-ocean hover:text-clay transition-all cursor-pointer bg-transparent border-none"
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
                  onClick={() => handleLinkClick("impact-journey")}
                  className="text-left py-2 text-sm font-semibold text-deep-ocean hover:text-clay transition-all bg-transparent border-none outline-none"
                >
                  How It Works
                </button>
                <button 
                  onClick={handleChooseExperienceClick}
                  className="text-left py-2 text-sm font-semibold text-deep-ocean hover:text-clay transition-all bg-transparent border-none outline-none"
                >
                  Choose Experience
                </button>
                <button 
                  onClick={() => { setIsMobileMenuOpen(false); onBack("stories"); }}
                  className="text-left py-2 text-sm font-semibold text-deep-ocean hover:text-clay transition-all bg-transparent border-none outline-none"
                >
                  Stories
                </button>
                <button 
                  onClick={() => handleLinkClick("impact-faq-section")}
                  className="text-left py-2 text-sm font-semibold text-deep-ocean hover:text-clay transition-all bg-transparent border-none outline-none"
                >
                  FAQ
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        
        <section className="relative h-[650px] md:h-[720px] flex items-center overflow-hidden bg-deep-ocean text-white">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-deep-ocean/50 z-10" />
            <img 
              className="w-full h-full object-cover" 
              alt="Ugandan child treated with compassionate care at clinical outreach station"
              src="/images/shoe-party-group.jpg"
            />
          </div>
          <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
                Your Hands, Their Feet, A New Story.
              </h1>
              <p className="text-base md:text-lg mb-10 text-white/95 max-w-xl font-sans leading-relaxed">
                Your hands cut the denim, their feet find freedom, and together we write a new story of hope. See the tangible impact of every stitch and every gift in our community's mission to heal.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={handleExploreClick}
                  className="bg-white text-deep-ocean px-8 py-4 font-sans font-bold text-xs uppercase tracking-widest rounded-full hover:bg-parchment transition-all flex items-center gap-2 cursor-pointer shadow-lg outline-none"
                >
                  Explore Impact <ArrowDown className="w-4 h-4 text-clay" />
                </button>
              </div>
            </motion.div>
          </div>
          
          
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-parchment to-transparent z-10" />
        </section>

        
        <section id="stats-section" className="py-20 md:py-24 bg-parchment">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              
              <motion.div 
                whileHover={{ y: -8 }}
                className="p-8 border border-deep-ocean/5 rounded-2xl bg-white/60 backdrop-blur-sm shadow-sm transition-all duration-300 text-center space-y-4"
              >
                <div className="w-14 h-14 bg-white text-clay rounded-full flex items-center justify-center mx-auto shadow-sm">
                  <Heart className="w-7 h-7 fill-clay/10" />
                </div>
                <div className="font-serif text-4xl md:text-5xl font-extrabold text-deep-ocean">
                  {shoesCounter.toLocaleString()}+
                </div>
                <p className="font-sans text-[10px] md:text-xs uppercase font-extrabold tracking-widest text-on-surface-variant">
                  Pairs of Shoes Given
                </p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -8 }}
                className="p-8 border border-deep-ocean/5 rounded-2xl bg-white/60 backdrop-blur-sm shadow-sm transition-all duration-300 text-center space-y-4"
              >
                <div className="w-14 h-14 bg-white text-clay rounded-full flex items-center justify-center mx-auto shadow-sm">
                  <Award className="w-7 h-7" />
                </div>
                <div className="font-serif text-4xl md:text-5xl font-extrabold text-deep-ocean">
                  {yearsCounter} Years
                </div>
                <p className="font-sans text-[10px] md:text-xs uppercase font-extrabold tracking-widest text-on-surface-variant">
                  Of Dedicated Service
                </p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -8 }}
                className="p-8 border border-deep-ocean/5 rounded-2xl bg-white/60 backdrop-blur-sm shadow-sm transition-all duration-300 text-center space-y-4"
              >
                <div className="w-14 h-14 bg-white text-clay rounded-full flex items-center justify-center mx-auto shadow-sm">
                  <Users className="w-7 h-7" />
                </div>
                <div className="font-serif text-4xl md:text-5xl font-extrabold text-deep-ocean">
                  {partiesCounter.toLocaleString()}+
                </div>
                <p className="font-sans text-[10px] md:text-xs uppercase font-extrabold tracking-widest text-on-surface-variant">
                  Parties Hosted Globally
                </p>
              </motion.div>

            </div>
          </div>
        </section>

        
        <section id="impact-journey" className="py-20 md:py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 space-y-4">
              <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-clay block">Step by Step Restoration</span>
              <h2 className="font-serif text-3xl md:text-4xl text-deep-ocean font-bold">The Journey of a Shoe</h2>
              <p className="text-sm md:text-base text-on-surface-variant max-w-lg mx-auto font-sans">
                From a scrap of denim in your living room to a life-changing step in Jinja.
              </p>
            </div>

            <div className="relative">
              
              <div className="hidden md:block absolute top-[48px] left-[10%] right-[10%] h-[3px] bg-parchment -translate-y-1/2 z-0">
                <div className="h-full bg-clay/20 w-full" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative z-10">
                
                <div className="flex flex-col items-center text-center space-y-4 group">
                  <div className="w-24 h-24 rounded-full bg-parchment flex items-center justify-center border-4 border-white shadow-md group-hover:scale-105 transition-transform duration-300">
                    <Scissors className="text-clay w-10 h-10" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-deep-ocean">Cut with Love</h3>
                  <p className="text-xs md:text-sm text-on-surface-variant font-sans leading-relaxed px-4">
                    Community gatherings where denim is hand-cut into patterns, infused with the heart of service.
                  </p>
                </div>

                
                <div className="flex flex-col items-center text-center space-y-4 group">
                  <div className="w-24 h-24 rounded-full bg-parchment flex items-center justify-center border-4 border-white shadow-md group-hover:scale-105 transition-transform duration-300">
                    <Sparkles className="text-clay w-10 h-10" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-deep-ocean">Crafted with Care</h3>
                  <p className="text-xs md:text-sm text-on-surface-variant font-sans leading-relaxed px-4">
                    Local Ugandan shoemakers finish each pair using recycled tires for durable, protective soles.
                  </p>
                </div>

                
                <div className="flex flex-col items-center text-center space-y-4 group">
                  <div className="w-24 h-24 rounded-full bg-parchment flex items-center justify-center border-4 border-white shadow-md group-hover:scale-105 transition-transform duration-300">
                    <Heart className="text-clay w-10 h-10" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-deep-ocean">Walk in Freedom</h3>
                  <p className="text-xs md:text-sm text-on-surface-variant font-sans leading-relaxed px-4">
                    Jigger-free children attending school and playing without fear, thanks to their protective footwear.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        
        <section className="py-20 md:py-24 bg-parchment">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              <div className="lg:col-span-7 space-y-8">
                <div className="space-y-4">
                  <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-clay block">Life Transformed</span>
                  <h2 className="font-serif text-3xl md:text-4xl text-deep-ocean font-bold">Emma Stepping into Brighter Future</h2>
                  <p className="text-xs md:text-sm text-on-surface-variant font-sans leading-relaxed">
                    Meet Emma, a 10 year-old from a remote Ugandan village whose life was overwhelmed by severe jigger infestations. The relentless itch and pain turned her daily walk to school into raw agony. Living with her grandmother, Emma suffered physically and was isolated by the stigma of her condition.
                  </p>
                  <blockquote className="text-sm md:text-base italic border-l-4 border-clay pl-6 py-2 bg-white/40 font-sans my-4 text-deep-ocean">
                    "Transformed by her experience, Emma returned home vibrant, healthy, and engaged."
                  </blockquote>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl overflow-hidden aspect-square border border-deep-ocean/5 shadow-sm">
                    <img 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                      alt="Namazzi smiling and stepping into freedom in her new denim Sole Hope shoes" 
                      src="/images/church-volunteering.jpg"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden aspect-square border border-deep-ocean/5 shadow-sm">
                    <img 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                      alt="Medical outreach team of staff washing and treating children's feet" 
                      src="/images/corporate-volunteering.jpg"
                    />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-white p-8 md:p-10 rounded-2xl border border-deep-ocean/5 shadow-sm relative overflow-hidden space-y-6">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-parchment rounded-full opacity-40 z-0" />
                <h3 className="font-serif text-xl font-bold text-deep-ocean relative z-10">Outreach Outcomes</h3>
                
                <ul className="space-y-6 relative z-10">
                  <li className="flex gap-4 items-start">
                    <CheckCircle2 className="w-5 h-5 text-clay shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-serif text-sm md:text-base font-bold text-deep-ocean">Clinical Treatment</h4>
                      <p className="text-xs md:text-sm text-on-surface-variant font-sans leading-relaxed">
                        Clinical care, outreach, and prevention education support children and families affected by jiggers.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <CheckCircle2 className="w-5 h-5 text-clay shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-serif text-sm md:text-base font-bold text-deep-ocean">Education Workshops</h4>
                      <p className="text-xs md:text-sm text-on-surface-variant font-sans leading-relaxed">
                        Health education classes for parents on hygiene and parasite prevention.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <CheckCircle2 className="w-5 h-5 text-clay shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-serif text-sm md:text-base font-bold text-deep-ocean">Local Employment</h4>
                      <p className="text-xs md:text-sm text-on-surface-variant font-sans leading-relaxed">
                        Providing sustainable income for over 40 local tailors and shoemakers.
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="mt-8 p-6 bg-brand-sand/15 border border-brand-sand/40 rounded-xl italic text-xs md:text-sm text-on-surface-variant font-sans leading-relaxed relative z-10">
                  "The impact is not just in the shoes themselves, but in the restoration of dignity and the reclamation of a future where these children can walk freely toward their dreams."
                </div>
              </div>

            </div>
          </div>
        </section>

        
        <section id="impact-faq-section" className="py-20 md:py-24 bg-white border-t border-deep-ocean/5">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="font-serif text-3xl md:text-4xl text-deep-ocean font-bold text-center mb-12 animate-fade-in">
              Impact Frequently Asked Questions
            </h2>
            
            <div className="space-y-4">
              {impactFaqs.map((faq, idx) => {
                const isActive = faqActive === idx;
                return (
                  <div key={idx} className="bg-brand-sand/10 hover:bg-brand-sand/20 rounded-xl border border-brand-sand/25 overflow-hidden transition-all duration-300">
                    <button 
                      onClick={() => setFaqActive(isActive ? null : idx)}
                      className="w-full text-left px-6 py-5 focus:outline-none flex justify-between items-center gap-4 bg-transparent border-none outline-none cursor-pointer"
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
                          className="px-6 pb-6 pt-1 text-xs md:text-sm text-on-surface-variant leading-relaxed border-t border-deep-ocean/5"
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

        
        <section className="py-20 md:py-24 bg-clay text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent pointer-events-none" />
          <div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative z-10">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Ready to start your own ripple of change?
            </h2>
            <p className="text-sm md:text-lg text-white/95 max-w-2xl mx-auto leading-relaxed font-sans">
              Whether it's hosting a shoe-cutting party with friends or giving a monthly gift, your involvement is the catalyst for hope in Uganda.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
              <button 
                onClick={() => onBack("individual")}
                className="bg-deep-ocean hover:brightness-110 text-white font-sans font-bold text-xs uppercase tracking-widest px-10 py-5 rounded-full hover:scale-105 active:scale-95 shadow-xl transition-all outline-none cursor-pointer w-full sm:w-auto"
              >
                Host a Party
              </button>
              <button 
                onClick={() => {
                  alert("Thank you for your generosity! You are being redirected to our secure donation partner.");
                }}
                className="bg-transparent border-2 border-white text-white font-sans font-bold text-xs uppercase tracking-widest px-10 py-[18px] rounded-full hover:bg-white hover:text-clay transition-all outline-none cursor-pointer w-full sm:w-auto"
              >
                Donate Now
              </button>
            </div>
          </div>
        </section>
      </main>

      
      <Footer 
        onNavigate={(view, section) => onBack(view as any, section)} 
        onOpenContact={onOpenContact} 
      />

    </div>
  );
}
