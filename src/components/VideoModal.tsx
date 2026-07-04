import { motion } from "motion/react";
import { X, HelpCircle } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VideoModal({ isOpen, onClose }: VideoModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-[#0A121F] rounded-3xl overflow-hidden shadow-2xl max-w-4xl w-full border border-clay/20 relative"
      >
        {/* Header Controls */}
        <div className="flex justify-between items-center bg-[#0E1A2C] px-6 py-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="p-1 px-2.5 bg-clay text-on-primary rounded font-bold text-[10px] uppercase tracking-wider">Documentary Video Player</span>
            <p className="font-serif text-sm text-parchment font-semibold">"Sole Hope: Denim to Protection"</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 bg-white/10 hover:bg-white/20 rounded-full text-parchment transition-all hover:scale-105 cursor-pointer"
            aria-label="Close videoplayer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Canvas - Real YouTube Embed */}
        <div className="relative bg-black aspect-video">
          <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/ZfOY0aCD6Zo?si=kkJvBngprNAKi91a&autoplay=1" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>

        {/* Video Side features description */}
        <div className="bg-[#0C1727] p-6 border-t border-white/10 text-xs text-parchment/65 leading-relaxed space-y-2">
          <p className="font-bold text-white uppercase tracking-widest text-[10px] text-clay flex items-center gap-1">
            <HelpCircle className="w-3.5 h-3.5" /> Did you know?
          </p>
          <p>
            By ordering the $95 host kit, you sponsor shoe patterns, physical acrylic tracing templates, materials, standard logistics support, and medical treatments for jigger flea removal clinics in Uganda.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
