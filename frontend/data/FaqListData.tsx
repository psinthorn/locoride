export type FAQItem = {
  id: number;
  category: string;
  questions: { id: number; question: string; answer: string }[];
};

export const faqData: FAQItem[] = [
  {
    id: 1,
    category: "Booking & Payment",
    questions: [
      {
        id: 1,
        question: "How do I book an airport transfer?",
        answer: "You can book directly through our website, call us, or send a message via WhatsApp or Line."
      },
      {
        id: 2,
        question: "What payment methods do you accept?",
        answer: "We accept cash, credit/debit cards, PayPal, and bank transfers."
      },
      {
        id: 3,
        question: "Can I modify or cancel my booking?",
        answer: "Yes, modifications are allowed up to 24 hours before your transfer. Cancellations may be subject to a fee."
      },
      {
        id: 4,
        question: "Do I need to book in advance?",
        answer: "We recommend booking at least 24 hours in advance to guarantee availability."
      }
    ]
  },
  {
    id: 2,
    category: "Airport Pick-up & Drop-off",
    questions: [
      {
        id: 5,
        question: "Where will I meet my driver at the airport?",
        answer: "Your driver will be waiting at the arrivals area with a sign displaying your name."
      },
      {
        id: 6,
        question: "What happens if my flight is delayed?",
        answer: "We track flight schedules, so your driver will adjust the pickup time accordingly."
      },
      {
        id: 7,
        question: "Can I book a transfer from my hotel to the airport?",
        answer: "Yes, we provide one-way and round-trip services."
      }
    ]
  },
  {
    id: 3,
    category: "Vehicles & Services",
    questions: [
      {
        id: 8,
        question: "What types of vehicles do you offer?",
        answer: "We offer private cars, minivans, minibuses, and luxury vehicles."
      },
      {
        id: 9,
        question: "Is there a child seat available?",
        answer: "Yes, child seats are available upon request at no extra charge."
      },
      {
        id: 10,
        question: "Do you offer shared transfers?",
        answer: "No, we only provide private transfers to ensure comfort and efficiency."
      }
    ]
  },
  {
    id: 4,
    category: "Pricing & Additional Costs",
    questions: [
      {
        id: 11,
        question: "Are there any hidden fees?",
        answer: "No, our pricing is transparent with no hidden charges."
      },
      {
        id: 12,
        question: "Do you charge extra for night-time transfers?",
        answer: "No, our prices remain the same 24/7."
      }
    ]
  },
  {
    id: 5,
    category: "Safety & Comfort",
    questions: [
      {
        id: 13,
        question: "Are your drivers professional and licensed?",
        answer: "Yes, all our drivers are experienced, licensed, and trained for safe driving."
      },
      {
        id: 14,
        question: "What COVID-19 precautions do you take?",
        answer: "Our vehicles are sanitized after every trip, and drivers follow health protocols."
      }
    ]
  }
];
