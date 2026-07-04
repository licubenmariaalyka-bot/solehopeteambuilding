import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Lock, CreditCard, ShoppingBag, CheckCircle2, Truck } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: "church" | "corporate" | "individual";
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    cardNumber: "",
    cardExpiry: "",
    cardCvc: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => {
        const copy = { ...prev };
        delete copy[field];
        return copy;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim() || !formData.email.includes("@")) newErrors.email = "Valid email is required";
    if (!formData.address.trim()) newErrors.address = "Shipping address is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.state.trim()) newErrors.state = "State is required";
    if (!formData.zip.trim()) newErrors.zip = "ZIP code is required";
    if (!formData.cardNumber.replace(/\s/g, "")) {
      newErrors.cardNumber = "Card number is required";
    } else if (formData.cardNumber.replace(/\s/g, "").length < 16) {
      newErrors.cardNumber = "Card number must be 16 digits";
    }
    if (!formData.cardExpiry.trim()) newErrors.cardExpiry = "Expiry is required";
    if (!formData.cardCvc.trim() || formData.cardCvc.trim().length < 3) {
      newErrors.cardCvc = "CVC is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-deep-ocean/60 backdrop-blur-md">
      {/* Backdrop click */}
      <div className="absolute inset-0" onClick={onClose} />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ type: "spring", duration: 0.4 }}
        className="relative w-full max-w-2xl bg-[#FAF7F2] rounded-3xl shadow-2xl border border-deep-ocean/10 z-10 flex flex-col max-h-[90vh] overflow-hidden"
        id="party-booking-modal"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 text-deep-ocean/50 hover:text-clay hover:bg-clay/5 p-2 rounded-full transition-all duration-200 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Container */}
        <div className="overflow-y-auto p-6 md:p-10 space-y-6">
          
          {isSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8 space-y-6 max-w-lg mx-auto"
            >
              <div className="w-16 h-16 bg-clay/10 text-clay rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-deep-ocean">
                  Order Placed Successfully!
                </h3>
                <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Your Individual Shoe Cutting Party Kit is officially on its way! We have sent a confirmation email to <strong>{formData.email}</strong>.
                </p>
              </div>
              
              <div className="p-4 bg-white rounded-2xl border border-deep-ocean/5 inline-flex items-center gap-3 text-xs text-deep-ocean/80 font-medium">
                <Truck className="w-4 h-4 text-clay" />
                <span>Standard shipping arrives in 3-5 business days.</span>
              </div>

              <div>
                <button
                  onClick={onClose}
                  className="bg-deep-ocean hover:brightness-110 text-[#FAF7F2] text-xs uppercase tracking-widest font-bold px-8 py-3.5 rounded-xl transition-all cursor-pointer shadow-md"
                >
                  Close &amp; Keep Exploring
                </button>
              </div>
            </motion.div>
          ) : (
            <div className="space-y-6">
              {/* Header inside Modal */}
              <div className="text-center max-w-md mx-auto space-y-2 flex flex-col items-center">
                <img 
                  src="/images/sole-hope-logo-wide.png" 
                  alt="Sole Hope Logo" 
                  className="h-10 md:h-12 w-auto object-contain mb-1"
                  referrerPolicy="no-referrer"
                />
                <span className="text-[9px] uppercase tracking-widest font-mono font-bold text-clay block">
                  Secure Checkout
                </span>
                <h2 className="font-serif text-2xl md:text-3xl text-deep-ocean font-extrabold tracking-tight">
                  Purchase Your Host Kit
                </h2>
                <p className="text-sm text-on-surface-variant">
                  Order your Individual Shoe Cutting Party Kit for $95. Free shipping included.
                </p>
                <div className="w-12 h-0.5 bg-clay/40 mx-auto mt-2" />
              </div>

              {/* Order Summary box */}
              <div className="bg-white border border-deep-ocean/5 rounded-2xl p-6 space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-deep-ocean/5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-clay/5 rounded-xl flex items-center justify-center text-clay">
                      <ShoppingBag className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif text-sm font-bold text-deep-ocean">
                        Shoe Party Experience Pack
                      </h4>
                      <p className="text-[10px] text-on-surface-variant font-medium">Qty: 1 • Free Shipping</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-serif text-lg md:text-xl font-bold text-[#1a3a5c]">$95.00</span>
                  </div>
                </div>
                <p className="text-sm text-on-surface-variant/90 leading-relaxed font-sans">
                  Digital Shoe Party Experience for hosting a hands-on denim cutting gathering. Includes downloadable patterns, host guide, videos, shipping instructions, and impact resources. The $95 pack includes 2 pairs of protective shoes for children in Uganda. Additional pairs can be completed for $35 each.
                </p>
              </div>

              {/* Checkout Form */}
              <form onSubmit={handleCheckoutSubmit} className="space-y-6">
                {/* Section: Shipping Information */}
                <div className="space-y-4">
                  <h3 className="text-[10px] font-mono uppercase tracking-wider text-clay font-bold block border-b border-deep-ocean/5 pb-1">
                    Shipping Details
                  </h3>
                  
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono uppercase tracking-wider text-deep-ocean/80 font-bold block">
                      Full Name <span className="text-clay">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Jane Doe"
                      className="w-full bg-white border border-deep-ocean/10 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-clay/20 focus:border-clay/80 transition-all text-deep-ocean"
                    />
                    {errors.name && <p className="text-[10px] text-clay font-medium">{errors.name}</p>}
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-mono uppercase tracking-wider text-deep-ocean/80 font-bold block">
                      Email Address <span className="text-clay">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="jane@example.com"
                      className="w-full bg-white border border-deep-ocean/10 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-clay/20 focus:border-clay/80 transition-all text-deep-ocean"
                    />
                    {errors.email && <p className="text-[10px] text-clay font-medium">{errors.email}</p>}
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-mono uppercase tracking-wider text-deep-ocean/80 font-bold block">
                      Street Address <span className="text-clay">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.address}
                      onChange={(e) => handleInputChange("address", e.target.value)}
                      placeholder="123 Purpose Lane"
                      className="w-full bg-white border border-deep-ocean/10 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-clay/20 focus:border-clay/80 transition-all text-deep-ocean"
                    />
                    {errors.address && <p className="text-[10px] text-clay font-medium">{errors.address}</p>}
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="space-y-1 col-span-1">
                      <label className="text-[10px] font-mono uppercase tracking-wider text-deep-ocean/80 font-bold block">
                        City <span className="text-clay">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => handleInputChange("city", e.target.value)}
                        placeholder="Austin"
                        className="w-full bg-white border border-deep-ocean/10 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-clay/20 focus:border-clay/80 transition-all text-deep-ocean"
                      />
                      {errors.city && <p className="text-[10px] text-clay font-medium">{errors.city}</p>}
                    </div>

                    <div className="space-y-1 col-span-1">
                      <label className="text-[10px] font-mono uppercase tracking-wider text-deep-ocean/80 font-bold block">
                        State <span className="text-clay">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.state}
                        onChange={(e) => handleInputChange("state", e.target.value)}
                        placeholder="TX"
                        className="w-full bg-white border border-deep-ocean/10 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-clay/20 focus:border-clay/80 transition-all text-deep-ocean"
                      />
                      {errors.state && <p className="text-[10px] text-clay font-medium">{errors.state}</p>}
                    </div>

                    <div className="space-y-1 col-span-1">
                      <label className="text-[10px] font-mono uppercase tracking-wider text-deep-ocean/80 font-bold block">
                        ZIP Code <span className="text-clay">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.zip}
                        onChange={(e) => handleInputChange("zip", e.target.value)}
                        placeholder="78701"
                        className="w-full bg-white border border-deep-ocean/10 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-clay/20 focus:border-clay/80 transition-all text-deep-ocean"
                      />
                      {errors.zip && <p className="text-[10px] text-clay font-medium">{errors.zip}</p>}
                    </div>
                  </div>
                </div>

                {/* Section: Payment Information */}
                <div className="space-y-4">
                  <h3 className="text-[10px] font-mono uppercase tracking-wider text-clay font-bold block border-b border-deep-ocean/5 pb-1">
                    Payment Details
                  </h3>

                  <div className="space-y-1">
                    <label className="text-[10px] font-mono uppercase tracking-wider text-deep-ocean/80 font-bold block">
                      Card Number <span className="text-clay">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={formData.cardNumber}
                        onChange={(e) => {
                          const val = e.target.value.replace(/\D/g, "").slice(0, 16);
                          const formatted = val.replace(/(\d{4})(?=\d)/g, "$1 ");
                          handleInputChange("cardNumber", formatted);
                        }}
                        placeholder="4111 2222 3333 4444"
                        className="w-full bg-white border border-deep-ocean/10 rounded-xl pl-10 pr-4 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-clay/20 focus:border-clay/80 transition-all text-deep-ocean font-mono"
                      />
                      <CreditCard className="w-4 h-4 text-deep-ocean/30 absolute left-3.5 top-3" />
                    </div>
                    {errors.cardNumber && <p className="text-[10px] text-clay font-medium">{errors.cardNumber}</p>}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono uppercase tracking-wider text-deep-ocean/80 font-bold block">
                        Expiry Date <span className="text-clay">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.cardExpiry}
                        onChange={(e) => {
                          let val = e.target.value.replace(/\D/g, "").slice(0, 4);
                          if (val.length > 2) {
                            val = val.slice(0, 2) + "/" + val.slice(2);
                          }
                          handleInputChange("cardExpiry", val);
                        }}
                        placeholder="MM/YY"
                        className="w-full bg-white border border-deep-ocean/10 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-clay/20 focus:border-clay/80 transition-all text-deep-ocean font-mono"
                      />
                      {errors.cardExpiry && <p className="text-[10px] text-clay font-medium">{errors.cardExpiry}</p>}
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-mono uppercase tracking-wider text-deep-ocean/80 font-bold block">
                        CVC <span className="text-clay">*</span>
                      </label>
                      <input
                        type="password"
                        value={formData.cardCvc}
                        onChange={(e) => {
                          const val = e.target.value.replace(/\D/g, "").slice(0, 4);
                          handleInputChange("cardCvc", val);
                        }}
                        placeholder="•••"
                        className="w-full bg-white border border-deep-ocean/10 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-clay/20 focus:border-clay/80 transition-all text-deep-ocean font-mono"
                      />
                      {errors.cardCvc && <p className="text-[10px] text-clay font-medium">{errors.cardCvc}</p>}
                    </div>
                  </div>
                </div>

                {/* Footer Security / Action */}
                <div className="pt-4 border-t border-deep-ocean/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-on-surface-variant/70 text-[10px]">
                    <Lock className="w-3.5 h-3.5 text-clay" />
                    <span>256-bit SSL Encrypted Connection</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3.5 bg-clay text-white rounded-xl font-bold text-xs uppercase tracking-widest transition-all hover:brightness-110 flex items-center justify-center gap-2 outline-none cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Processing Order...</span>
                      </>
                    ) : (
                      <span>Place Order ($95.00)</span>
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}

        </div>
      </motion.div>
    </div>
  );
}
