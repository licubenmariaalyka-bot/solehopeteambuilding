import { useState } from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";
import { 
  Heart, Globe, Share2, Mail, ArrowDown, 
  Building2, Users, Quote, User, BookOpen, Sparkles, GraduationCap, ArrowRight, FileText
} from "lucide-react";
const logoImg = "/images/sole_hope_logo_primary.png";

interface StoriesOfHopeProps {
  onBack: (targetView: "home" | "church" | "corporate" | "individual" | "impact" | "stories", targetSection?: string) => void;
  onOpenBooking: (type: "church" | "corporate" | "individual") => void;
  onOpenVideo: () => void;
  onOpenContact?: (experience?: string) => void;
}

export default function StoriesOfHope({ onBack, onOpenBooking, onOpenVideo, onOpenContact }: StoriesOfHopeProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll to show content smoothly
  const handleScrollToContent = () => {
    const el = document.getElementById("stories-content");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-parchment text-[#181c22] font-sans selection:bg-clay/20 selection:text-primary overflow-x-hidden">
      
      {/* Top Header/Navigation bar */}
      <nav className="bg-parchment border-b border-deep-ocean/10 z-50 transition-all duration-300">
        <div className="flex justify-between items-center w-full px-6 md:px-12 max-w-7xl mx-auto h-20">
          <button 
            onClick={() => onBack("home")}
            className="font-serif text-2xl font-bold text-clay uppercase tracking-tight flex items-center gap-2 hover:scale-105 transition-all text-left bg-transparent border-none outline-none cursor-pointer"
          >
            <img 
              src={logoImg} 
              alt="Sole Hope Logo" 
              className="h-10 md:h-14 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </button>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <button 
              onClick={() => onBack("home", "experience-section")}
              className="text-deep-ocean hover:text-clay transition-all bg-transparent border-none outline-none cursor-pointer"
            >
              Our Mission
            </button>
            <button 
              onClick={() => onBack("home", "how-it-works")}
              className="text-deep-ocean hover:text-clay transition-all bg-transparent border-none outline-none cursor-pointer"
            >
              Get Involved
            </button>
            <button 
              onClick={() => onBack("church")}
              className="text-deep-ocean hover:text-clay transition-all bg-transparent border-none outline-none cursor-pointer"
            >
              Churches
            </button>
            <button 
              onClick={() => onBack("corporate")}
              className="text-deep-ocean hover:text-clay transition-all bg-transparent border-none outline-none cursor-pointer"
            >
              Corporate
            </button>
            <button 
              onClick={() => onBack("individual")}
              className="text-deep-ocean hover:text-clay transition-all bg-transparent border-none outline-none cursor-pointer"
            >
              Individual
            </button>
            <button 
              onClick={() => onBack("impact")}
              className="text-deep-ocean hover:text-clay transition-all bg-transparent border-none outline-none cursor-pointer"
            >
              Our Impact
            </button>
            <button 
              className="text-clay font-bold border-b-2 border-clay pb-1 hover:opacity-80 transition-all bg-transparent border-none outline-none cursor-default font-sans"
            >
              Testimonials
            </button>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => onOpenBooking("individual")}
              className="bg-clay text-white px-8 py-2.5 rounded-full text-xs uppercase tracking-widest font-bold hover:scale-105 active:scale-95 transition-all outline-none cursor-pointer"
            >
              Host a Party
            </button>
            <button 
              className="md:hidden text-deep-ocean bg-transparent border-none outline-none cursor-pointer" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className="block h-0.5 w-full bg-deep-ocean rounded-sm"></span>
                <span className="block h-0.5 w-full bg-deep-ocean rounded-sm"></span>
                <span className="block h-0.5 w-full bg-deep-ocean rounded-sm"></span>
              </div>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-parchment border-t border-deep-ocean/10 p-6 flex flex-col gap-4 animate-fade-in shadow-inner">
            <button 
              onClick={() => { setMobileMenuOpen(false); onBack("home", "experience-section"); }}
              className="text-left text-deep-ocean text-sm font-medium hover:text-clay transition-all"
            >
              Our Mission
            </button>
            <button 
              onClick={() => { setMobileMenuOpen(false); onBack("home", "how-it-works"); }}
              className="text-left text-deep-ocean text-sm font-medium hover:text-clay transition-all"
            >
              Get Involved
            </button>
            <button 
              onClick={() => { setMobileMenuOpen(false); onBack("church"); }}
              className="text-left text-deep-ocean text-sm font-medium hover:text-clay transition-all"
            >
              Churches
            </button>
            <button 
              onClick={() => { setMobileMenuOpen(false); onBack("corporate"); }}
              className="text-left text-deep-ocean text-sm font-medium hover:text-clay transition-all"
            >
              Corporate
            </button>
            <button 
              onClick={() => { setMobileMenuOpen(false); onBack("individual"); }}
              className="text-left text-deep-ocean text-sm font-medium hover:text-clay transition-all"
            >
              Individual
            </button>
            <button 
              onClick={() => { setMobileMenuOpen(false); onBack("impact"); }}
              className="text-left text-deep-ocean text-sm font-medium hover:text-clay transition-all"
            >
              Our Impact
            </button>
            <button 
              className="text-left text-clay font-bold text-sm"
              disabled
            >
              Testimonials
            </button>
          </div>
        )}
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <span className="text-xs font-mono font-bold text-clay tracking-widest block mb-4 uppercase">
              What Hosts Say
            </span>
            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-deep-ocean mb-6 leading-tight font-bold">
              What Hosts Say: Stories of Hope from Shoe Cutting Parties
            </h1>
            <p className="text-base md:text-lg text-on-surface-variant font-sans max-w-2xl mx-auto mb-10 leading-relaxed">
              Read real experiences from the churches, companies, and families who have mobilized their groups to make a tangible global impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleScrollToContent}
                className="inline-flex items-center justify-center gap-2 text-deep-ocean font-bold hover:text-clay transition-colors cursor-pointer bg-transparent border-none outline-none font-sans"
              >
                Scroll to discover
                <ArrowDown className="w-5 h-5 animate-bounce text-clay" />
              </button>
            </div>
          </div>
          
          {/* Abstract background highlights */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-clay/5 rounded-full blur-3xl -z-10" />
          <div className="absolute top-1/2 -left-48 w-[600px] h-[600px] bg-deep-ocean/5 rounded-full blur-[100px] -z-10" />
        </section>

        {/* Section 1: Church Impact */}
        <section id="stories-content" className="py-20 bg-white/40 border-t border-b border-deep-ocean/5 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 md:order-1">
              <div className="overflow-hidden bg-white shadow-xl rounded-2xl rotate-[-1deg] p-4 border border-deep-ocean/5">
                <img 
                  alt="Diverse group cutting denim" 
                  className="w-full h-[450px] object-cover rounded-xl hover:scale-102 transition-transform duration-750" 
                  src="/images/shoe_cutting_party_1782508448020.jpg"
                />
              </div>
              {/* Floating icon accessory */}
              <div className="absolute -bottom-6 -right-3 h-20 w-20 bg-clay flex items-center justify-center rounded-full text-white rotate-12 shadow-lg z-10 hover:scale-110 transition-transform">
                <Heart className="w-9 h-9 fill-white/20" />
              </div>
            </div>

            <div className="order-1 md:order-2 space-y-6">
              <span className="text-[10px] uppercase font-bold tracking-widest text-clay block">Faith in Action</span>
              <h2 className="font-serif text-3xl md:text-4xl text-deep-ocean font-bold">Bringing Restoration Together</h2>
              
              <blockquote className="space-y-4">
                <Quote className="text-clay w-12 h-12 rotate-180" />
                <p className="font-serif text-xl md:text-2xl italic text-on-surface-variant leading-relaxed text-clay-balance">
                  "Our mission Sunday was transformed. Seeing children and their grandparents sitting together, cutting fabric... it was a powerful visual of the body of Christ at work."
                </p>
                <cite className="not-italic block mt-4">
                  <div className="font-bold text-deep-ocean font-serif text-lg tracking-wide">Pastor Sarah Mitchell</div>
                  <div className="text-on-surface-variant text-xs uppercase tracking-widest font-bold mt-1">Grace Community Church</div>
                </cite>
              </blockquote>

              <p className="text-sm md:text-base text-on-surface-variant font-sans leading-relaxed">
                Sarah’s congregation organized a full day "Shoe-Cutting Party" that brought together over 200 volunteers. From reclaimed denim to completed templates, the atmosphere was thick with purpose, community, and joy.
              </p>
              
              <div className="pt-4">
                <button 
                  onClick={() => onBack("church")}
                  className="inline-flex items-center gap-2 text-clay font-bold font-sans hover:gap-4 transition-all bg-transparent border-none outline-none cursor-pointer text-sm"
                >
                  View Church Partner Resources
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Corporate CSR Stories */}
        <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16 space-y-4">
            <span className="text-[10px] uppercase font-bold tracking-widest text-clay block">Partners in Purpose</span>
            <h2 className="font-serif text-3xl md:text-4xl text-deep-ocean font-bold">CSR That Truly Matters</h2>
            <p className="text-sm md:text-base text-on-surface-variant max-w-2xl mx-auto font-sans">
              Corporate teams find more than just team-building; they discover a physical way to make a measurable difference in the world while sitting in their own boardrooms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            
            {/* TechForward Corp Card */}
            <motion.div 
              whileHover={{ y: -6 }}
              className="group bg-white border border-deep-ocean/5 p-10 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2/12 h-1.5 bg-clay" />
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 bg-on-secondary-container/10 flex items-center justify-center rounded-xl text-clay shrink-0">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-deep-ocean">TechForward Corp</h3>
                  <p className="text-[10px] text-clay uppercase tracking-widest font-bold">Team Building Impact</p>
                </div>
              </div>
              
              <blockquote className="text-sm md:text-base text-on-surface-variant italic font-sans leading-relaxed mb-8">
                "We replaced our usual happy hour with a shoe-cutting session. Our engineers, designers, and HR team were shoulder-to-shoulder. It reminded us that we’re all here to solve problems that matter."
              </blockquote>

              <div className="flex items-center gap-2 text-deep-ocean font-bold pt-4 border-t border-deep-ocean/5">
                <span className="font-serif text-2xl text-clay">1,200</span>
                <span className="text-xs uppercase tracking-wider text-on-surface-variant">Shoes Cut &amp; Sent</span>
              </div>
            </motion.div>

            {/* Miller Foundation Card */}
            <motion.div 
              whileHover={{ y: -6 }}
              className="group bg-white border border-deep-ocean/5 p-10 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2/12 h-1.5 bg-deep-ocean" />
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 bg-on-secondary-container/10 flex items-center justify-center rounded-xl text-deep-ocean shrink-0">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-deep-ocean">Miller Foundation</h3>
                  <p className="text-[10px] text-clay uppercase tracking-widest font-bold">Generational Health</p>
                </div>
              </div>
              
              <blockquote className="text-sm md:text-base text-on-surface-variant italic font-sans leading-relaxed mb-8">
                "Sustainable development is at the heart of what we fund. Sole Hope's model of local Ugandan empowerment combined with global mobilization is exactly the kind of efficiency we look for."
              </blockquote>

              <div className="flex items-center gap-2 text-deep-ocean font-bold pt-4 border-t border-deep-ocean/5">
                <span className="font-serif text-2xl text-deep-ocean">$50k</span>
                <span className="text-xs uppercase tracking-wider text-on-surface-variant">Direct Grant Impact</span>
              </div>
            </motion.div>

          </div>
        </section>

        {/* Section 3: Community 'Wall of Love' */}
        <section className="py-24 bg-deep-ocean text-parchment">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
              <div className="max-w-xl space-y-4">
                <span className="text-xs uppercase font-extrabold tracking-widest text-[#C8522A] block">Wall of Love</span>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">Our Host Feedback</h2>
                <p className="text-parchment/80 font-sans text-sm md:text-base">
                  Glimpses of the hundreds of parties happening around kitchen tables, in classrooms, and at neighborhood parks.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-0.5 w-12 bg-clay" />
                <span className="text-xs uppercase tracking-wider font-extrabold text-parchment/80">Collective Voices</span>
              </div>
            </div>

            {/* Responsive flex/grid replacement for masonry layout that builds beautifully */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Snippet 1 */}
              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl flex flex-col justify-between space-y-6">
                <p className="font-serif text-lg italic text-[#d2e4ff] leading-relaxed">
                  "The kids didn't want to stop. They loved knowing their 'art project' was going to save a child's health."
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-clay/20 flex items-center justify-center text-clay">
                    <User className="w-4 h-4" />
                  </div>
                  <span className="text-xs tracking-wider text-white/70">The Henderson Family, Texas</span>
                </div>
              </div>

              {/* Snippet 2 */}
              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl flex flex-col justify-between space-y-6">
                <p className="font-serif text-lg italic text-[#d2e4ff] leading-relaxed">
                  "Most meaningful book club meeting we've ever had. We discussed justice while our hands were busy."
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-clay/20 flex items-center justify-center text-clay">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <span className="text-xs tracking-wider text-white/70">Lakeside Readers Circle</span>
                </div>
              </div>

              {/* Snippet 3 */}
              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl flex flex-col justify-between space-y-6">
                <p className="font-serif text-lg italic text-[#d2e4ff] leading-relaxed">
                  "Hosting a party was so much easier than I thought. The host package provided everything we needed."
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-clay/20 flex items-center justify-center text-clay">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <span className="text-xs tracking-wider text-white/70">Markos G., London</span>
                </div>
              </div>

              {/* Snippet 4 */}
              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl flex flex-col justify-between space-y-6">
                <p className="font-serif text-lg italic text-[#d2e4ff] leading-relaxed">
                  "Our high school students organized the whole thing. It was amazing to see Gen Z take the lead on global health."
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-clay/20 flex items-center justify-center text-clay">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <span className="text-xs tracking-wider text-white/70">Mrs. Chen, AP Global Studies</span>
                </div>
              </div>

              {/* Snippet 5 */}
              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl flex flex-col justify-between space-y-6">
                <p className="font-serif text-lg italic text-[#d2e4ff] leading-relaxed">
                  "There's something deeply healing about taking something old (denim) and making it part of a new story."
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-clay/20 flex items-center justify-center text-clay">
                    <Heart className="w-4 h-4 fill-clay/20" />
                  </div>
                  <span className="text-xs tracking-wider text-white/70">Elena R., Textile Artist</span>
                </div>
              </div>

              {/* Snippet 6 */}
              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl flex flex-col justify-between space-y-6">
                <p className="font-serif text-lg italic text-[#d2e4ff] leading-relaxed">
                  "A simple pair of shoes changes everything for a child in Uganda. Doing our part from Ohio is an honor."
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-clay/20 flex items-center justify-center text-clay">
                    <Globe className="w-4 h-4" />
                  </div>
                  <span className="text-xs tracking-wider text-white/70">St. Jude's Outreach Team</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Call to Action */}
        <section className="py-28 px-6 text-center bg-parchment relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-8 relative z-10">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-deep-ocean font-bold tracking-tight">
              Ready to start your own story?
            </h2>
            <p className="text-sm md:text-base text-on-surface-variant font-sans max-w-lg mx-auto leading-relaxed">
              Whether you're a family of four or a team of 4,000, your action makes a historic impact. Join the global movement today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button 
                onClick={() => onOpenBooking("individual")}
                className="bg-clay text-white px-10 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:opacity-90 active:scale-95 transition-all shadow-lg flex items-center justify-center gap-2 outline-none cursor-pointer"
              >
                Host a Party <Sparkles className="w-4 h-4" />
              </button>
              <button 
                onClick={() => onBack("impact")}
                className="border-2 border-deep-ocean text-deep-ocean px-10 py-[14px] rounded-full font-bold text-xs uppercase tracking-widest hover:bg-deep-ocean hover:text-parchment active:scale-95 transition-all flex items-center justify-center gap-2 outline-none cursor-pointer"
              >
                Read Impact Report <FileText className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Organic visual borders */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-clay/20" />
          <div className="absolute top-1/2 -left-20 w-40 h-40 border border-clay/10 rounded-full" />
          <div className="absolute bottom-20 -right-20 w-60 h-60 border border-deep-ocean/10 rounded-full" />
        </section>
      </main>

      {/* Footer */}
      <Footer 
        onNavigate={(view, section) => onBack(view as any, section)} 
        onOpenContact={onOpenContact} 
      />

    </div>
  );
}
