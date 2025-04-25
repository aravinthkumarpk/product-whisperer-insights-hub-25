
// Mock data for the Product Insights Dashboard

const keyMetrics = [
  {
    name: "Overall Sentiment",
    value: "72",
    change: 3.5,
    changeLabel: "from last period",
    changeType: "positive",
  },
  {
    name: "Feedback Volume",
    value: "1,254",
    change: 12.8,
    changeLabel: "from last period",
    changeType: "positive",
  },
  {
    name: "Critical Issues",
    value: "7",
    change: -2,
    changeLabel: "from last period",
    changeType: "positive",
  },
  {
    name: "Avg. Resolution Time",
    value: "3.2 days",
    change: 0.5,
    changeLabel: "from last period",
    changeType: "negative",
  },
];

const feedbackSources = [
  { name: "Support Tickets", value: 456, color: "#4f46e5" },
  { name: "App Reviews", value: 234, color: "#0ea5e9" },
  { name: "Customer Surveys", value: 198, color: "#8b5cf6" },
  { name: "Sales CRM Notes", value: 145, color: "#10b981" },
  { name: "Chat Transcripts", value: 221, color: "#f59e0b" },
];

const sentimentTrend = [
  {
    date: "Jan 01",
    positive: 40,
    negative: 20,
    neutral: 35,
  },
  {
    date: "Jan 08",
    positive: 45,
    negative: 25,
    neutral: 30,
  },
  {
    date: "Jan 15",
    positive: 42,
    negative: 32,
    neutral: 26,
  },
  {
    date: "Jan 22",
    positive: 38,
    negative: 34,
    neutral: 28,
  },
  {
    date: "Jan 29",
    positive: 40,
    negative: 30,
    neutral: 30,
  },
  {
    date: "Feb 05",
    positive: 45,
    negative: 25,
    neutral: 30,
  },
  {
    date: "Feb 12",
    positive: 50,
    negative: 20,
    neutral: 30,
  },
  {
    date: "Feb 19",
    positive: 55,
    negative: 15,
    neutral: 30,
  },
  {
    date: "Feb 26",
    positive: 60,
    negative: 15,
    neutral: 25,
  },
  {
    date: "Mar 05",
    positive: 65,
    negative: 12,
    neutral: 23,
  },
];

// Generate IDs
const generateId = () => Math.random().toString(36).substring(2, 9);

const topFeedbackCategories = {
  complaints: [
    {
      id: generateId(),
      title: "Payment processing failure",
      count: 248,
      trend: 12,
      severity: 9,
      category: "Payment Processing",
      verbatim: [
        "The payment keeps failing without any clear error message.",
        "I tried to check out 3 times and each time the payment failed at the last step.",
        "Our customers are complaining that payments are failing intermittently during checkout."
      ]
    },
    {
      id: generateId(),
      title: "Slow checkout experience",
      count: 187,
      trend: 5,
      severity: 7,
      category: "Performance",
      verbatim: [
        "The checkout takes too long to process each step.",
        "Magic Checkout is noticeably slower than our previous checkout system.",
        "We're seeing customers abandon carts due to the slow checkout process."
      ]
    },
    {
      id: generateId(),
      title: "Form validation errors",
      count: 165,
      trend: -2,
      severity: 6,
      category: "UX/UI",
      verbatim: [
        "The form keeps telling me my address is invalid when it's correct.",
        "Validation errors are confusing and don't explain how to fix them.",
        "Too many false validation errors during the checkout process."
      ]
    },
    {
      id: generateId(),
      title: "Mobile compatibility issues",
      count: 134,
      trend: 8,
      severity: 7,
      category: "Mobile",
      verbatim: [
        "Checkout doesn't work properly on my iPhone.",
        "The buttons are too small on mobile devices.",
        "The form fields get cut off on mobile screens."
      ]
    },
    {
      id: generateId(),
      title: "Card declined unexpectedly",
      count: 112,
      trend: 3,
      severity: 8,
      category: "Payment Processing",
      verbatim: [
        "Valid cards are being declined for no reason.",
        "My card works everywhere else but gets declined in Magic Checkout.",
        "Customers are complaining about false card declines."
      ]
    },
  ],
  improvements: [
    {
      id: generateId(),
      title: "Save payment methods",
      count: 156,
      trend: 14,
      severity: 5,
      category: "Feature Request",
      verbatim: [
        "Would be great if I could save my payment details for next time.",
        "Add an option to remember payment information.",
        "Please add a feature to save cards for repeat purchases."
      ]
    },
    {
      id: generateId(),
      title: "Express checkout option",
      count: 132,
      trend: 9,
      severity: 4,
      category: "Feature Request",
      verbatim: [
        "Need a one-click option for repeat customers.",
        "Could you add an express checkout for returning users?",
        "An express checkout would drastically improve the experience."
      ]
    },
    {
      id: generateId(),
      title: "More payment methods",
      count: 98,
      trend: 2,
      severity: 3,
      category: "Payment Options",
      verbatim: [
        "Please add support for PayPal.",
        "Would like to see Apple Pay and Google Pay integration.",
        "Need more alternative payment methods for international customers."
      ]
    },
    {
      id: generateId(),
      title: "Order summary clarity",
      count: 67,
      trend: -1,
      severity: 2,
      category: "UX/UI",
      verbatim: [
        "Order summary could be more detailed.",
        "Show a breakdown of taxes and shipping in the summary.",
        "Make the order summary more prominent during checkout."
      ]
    },
  ],
  praises: [
    {
      id: generateId(),
      title: "Address auto-completion",
      count: 87,
      trend: 15,
      severity: 2,
      category: "Feature",
      verbatim: [
        "The address auto-complete feature is fantastic!",
        "Love how it fills in my address automatically.",
        "Address lookup saves so much time during checkout."
      ]
    },
    {
      id: generateId(),
      title: "Clean interface",
      count: 65,
      trend: 5,
      severity: 1,
      category: "UX/UI",
      verbatim: [
        "The checkout interface is clean and easy to understand.",
        "Much more modern looking than our old checkout.",
        "Great user interface design - very intuitive."
      ]
    },
    {
      id: generateId(),
      title: "Order confirmation",
      count: 42,
      trend: 3,
      severity: 1,
      category: "UX/UI",
      verbatim: [
        "The order confirmation is clear and provides all necessary details.",
        "Really appreciate the immediate confirmation email.",
        "The order summary on completion is very helpful."
      ]
    },
  ],
};

export default {
  keyMetrics,
  feedbackSources,
  sentimentTrend,
  topFeedbackCategories,
};
