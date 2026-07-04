export interface PartyBookingState {
  partyType: "church" | "corporate" | "individual";
  hostName: string;
  email: string;
  phone: string;
  organization: string;
  estimatedAttendees: number;
  targetDenimPairs: number;
  additionalKitMaterials: boolean;
  notes: string;
  kitSelection: "digital" | "physical";
  paymentDetails?: {
    cardNumber: string;
    cardExpiry: string;
    cardCvc: string;
    billingZip: string;
  };
  churchMinistryType?: string;
  churchOutreachGoal?: string;
  corporateDepartment?: string;
  corporateEsgFocus?: string;
  corporateEventType?: string;
  individualOccasion?: string;
  individualParticipantAges?: string[];
  individualExperienceLevel?: string;
  eventDate?: string;
}

export interface FAQItem {
  question: string;
  category: string;
  answer: string;
}

export interface ImpactEstimation {
  shoesMade: number;
  childrenProtected: number;
  employmentHours: number;
  medicalCareSupplied: number;
}
