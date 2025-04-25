
// Mock data for the Product Insights Dashboard

const keyMetrics = [
  {
    name: "Overall Sentiment",
    value: "72",
    change: 3.5,
    changeLabel: "from last period",
    changeType: "positive" as const,
  },
  {
    name: "Feedback Volume",
    value: "1,254",
    change: 12.8,
    changeLabel: "from last period",
    changeType: "positive" as const,
  },
  {
    name: "Critical Issues",
    value: "7",
    change: -2,
    changeLabel: "from last period",
    changeType: "positive" as const,
  },
];

const feedbackSources = [
  { name: "Support Tickets", value: 456, color: "#4f46e5" },
  { name: "Merchant Conversation", value: 234, color: "#0ea5e9" },
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

const generateId = () => Math.random().toString(36).substring(2, 9);

const topFeedbackCategories = {
  complaints: [
    {
      id: generateId(),
      title: "Payment processing timeouts during high-traffic periods",
      count: 248,
      trend: 12,
      severity: 9,
      category: "Payment Processing",
      verbatim: [
        "Payment processing takes too long during peak hours",
        "Customers abandon cart due to payment timeouts",
        "High-value transactions timing out during checkout"
      ]
    },
    {
      id: generateId(),
      title: "Integration with legacy POS systems failing",
      count: 187,
      trend: 5,
      severity: 7,
      category: "System Integration",
      verbatim: [
        "Can't connect our old POS system with the new checkout",
        "Integration errors with legacy systems",
        "POS sync issues causing duplicate transactions"
      ]
    },
    {
      id: generateId(),
      title: "Customer information not being saved correctly",
      count: 143,
      trend: 8,
      severity: 6,
      category: "Data Management",
      verbatim: [
        "Customer details disappear after refreshing the page",
        "Having to re-enter customer information repeatedly",
        "Address validation errors preventing order completion"
      ]
    },
    {
      id: generateId(),
      title: "Mobile checkout experience is confusing for customers",
      count: 124,
      trend: 3,
      severity: 5,
      category: "User Experience",
      verbatim: [
        "Too many steps in the mobile checkout flow",
        "Buttons are too small on mobile devices",
        "Form validation errors not clearly visible on smartphones"
      ]
    },
  ],
  improvements: [
    {
      id: generateId(),
      title: "Add multi-currency support for international merchants",
      count: 156,
      trend: 14,
      severity: 5,
      category: "Feature Request",
      verbatim: [
        "Need support for multiple currencies",
        "International merchants requesting currency conversion",
        "Currency conversion fees are too high"
      ]
    },
    {
      id: generateId(),
      title: "Implement bulk order processing capability",
      count: 132,
      trend: 9,
      severity: 4,
      category: "Feature Request",
      verbatim: [
        "Need to process multiple orders at once",
        "Bulk order management would save time",
        "Request for batch processing of orders"
      ]
    },
    {
      id: generateId(),
      title: "Provide more detailed analytics on customer behavior",
      count: 98,
      trend: 7,
      severity: 3,
      category: "Analytics",
      verbatim: [
        "Would like to see customer journey analytics",
        "Need better insights on abandoned carts",
        "Request for customer segmentation reports"
      ]
    },
    {
      id: generateId(),
      title: "Add customizable email templates for order confirmations",
      count: 87,
      trend: 5,
      severity: 2,
      category: "Communication",
      verbatim: [
        "Want to personalize order confirmation emails",
        "Need branding options for customer communications",
        "Request for HTML email template editor"
      ]
    },
  ],
  praises: [
    {
      id: generateId(),
      title: "Quick and responsive customer support team",
      count: 87,
      trend: 15,
      severity: 2,
      category: "Customer Support",
      verbatim: [
        "Support team resolved our issue within minutes",
        "Excellent customer service experience",
        "Very helpful and knowledgeable support staff"
      ]
    },
    {
      id: generateId(),
      title: "Intuitive merchant dashboard interface",
      count: 65,
      trend: 5,
      severity: 1,
      category: "User Experience",
      verbatim: [
        "The dashboard is very easy to navigate",
        "Love the new interface updates",
        "Clean and simple design makes work efficient"
      ]
    },
    {
      id: generateId(),
      title: "Seamless integration with our existing systems",
      count: 58,
      trend: 3,
      severity: 1,
      category: "System Integration",
      verbatim: [
        "Easy to connect with our inventory management",
        "API documentation is clear and comprehensive",
        "Integration process was much faster than expected"
      ]
    },
    {
      id: generateId(),
      title: "Fast and reliable payment processing",
      count: 52,
      trend: 4,
      severity: 1,
      category: "Payment Processing",
      verbatim: [
        "Transactions complete quickly even during busy periods",
        "No more payment failures since switching to this system",
        "Payment reconciliation is accurate and automatic"
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
