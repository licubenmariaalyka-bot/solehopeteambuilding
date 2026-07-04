import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { X, ShieldAlert } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialExperience?: string;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isOpen) return;

    // Load the LeadConnector/GoHighLevel form embed script
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    
    // Once script loads, stop the spinner
    script.onload = () => {
      setIsLoading(false);
    };

    document.body.appendChild(script);

    // Fallback if script loading takes too long
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      document.body.removeChild(script);
      clearTimeout(timer);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-deep-ocean/65 backdrop-blur-md">
      {/* Backdrop click */}
      <div className="absolute inset-0" onClick={onClose} />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ type: "spring", duration: 0.4 }}
        className="relative w-full max-w-2xl bg-[#FAF7F2] rounded-3xl shadow-2xl border border-deep-ocean/10 z-10 flex flex-col max-h-[90vh] overflow-hidden"
        id="contact-us-modal"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 text-deep-ocean/50 hover:text-clay hover:bg-clay/5 p-2 rounded-full transition-all duration-200 cursor-pointer bg-transparent border-none"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal content body */}
        <div className="flex flex-col h-full overflow-hidden pt-8">

          {/* Iframe Form Container */}
          <div className="relative flex-1 p-4 md:p-6 min-h-[500px] md:min-h-[580px] overflow-y-auto">
            {isLoading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#FAF7F2] z-10">
                <div className="w-10 h-10 border-3 border-clay border-t-transparent rounded-full animate-spin mb-4" />
                <p className="text-xs font-mono uppercase tracking-widest text-deep-ocean/60">Loading Secure Form...</p>
              </div>
            )}

            {/* Embedded GoHighLevel Form */}
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/kTPNGdAXdOUOgwkuKBc2"
              style={{ width: "100%", height: "100%", minHeight: "600px", border: "none", borderRadius: "8px", display: "block" }}
              id="inline-kTPNGdAXdOUOgwkuKBc2" 
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Form Contact Us Team Building"
              data-height="813"
              data-layout-iframe-id="inline-kTPNGdAXdOUOgwkuKBc2"
              data-form-id="kTPNGdAXdOUOgwkuKBc2"
              title="Form Contact Us Team Building"
            />
          </div>

          {/* Footer Safety Indicator */}
          <div className="px-6 py-4 bg-deep-ocean/5 border-t border-deep-ocean/5 flex items-center justify-center gap-2 text-[10px] text-deep-ocean/60 font-mono tracking-wide uppercase shrink-0">
            <ShieldAlert className="w-3.5 h-3.5 text-clay" />
            <span>Secure 256-bit encrypted submission</span>
          </div>

        </div>
      </motion.div>
    </div>
  );
}
