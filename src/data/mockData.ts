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
      title: "Cash on Delivery orders getting delayed",
      count: 286,
      trend: 15,
      severity: 8,
      category: "COD",
      merchantGMV: 5000000,
      verbatim: [
        "COD delivery took 2 days longer than prepaid orders",
        "Cash collection issues causing delivery delays",
        "Delivery personnel not carrying enough change for COD"
      ]
    },
    {
      id: generateId(),
      title: "Coupon code not applying correctly",
      count: 234,
      trend: 12,
      severity: 7,
      category: "Coupon Engine",
      verbatim: [
        "WELCOME50 coupon showing error on checkout",
        "Multiple coupons not working as advertised",
        "Discount amount incorrect after applying coupon"
      ]
    },
    {
      id: generateId(),
      title: "Saved addresses disappearing",
      count: 178,
      trend: 8,
      severity: 6,
      category: "Address Management",
      verbatim: [
        "Have to re-enter address every time I order",
        "Default address keeps changing randomly",
        "Address saved but not showing in checkout"
      ]
    },
    {
      id: generateId(),
      title: "Order placement failures during peak hours",
      count: 156,
      trend: 5,
      severity: 7,
      category: "Order Processing",
      verbatim: [
        "Order failed during sale event",
        "Payment successful but order not confirmed",
        "Multiple order placement attempts needed"
      ]
    }
  ],
  improvements: [
    {
      id: generateId(),
      title: "Add UPI payment option for COD orders",
      count: 245,
      trend: 18,
      severity: 4,
      category: "COD",
      merchantGMV: 3000000,
      verbatim: [
        "Would like to pay via UPI on delivery",
        "Digital payment options needed for COD",
        "Contactless payment request for COD orders"
      ]
    },
    {
      id: generateId(),
      title: "Implement coupon suggestion feature",
      count: 189,
      trend: 9,
      severity: 3,
      category: "Coupon Engine",
      verbatim: [
        "Show best applicable coupon automatically",
        "Need coupon recommendations based on cart",
        "Suggest coupons during checkout"
      ]
    },
    {
      id: generateId(),
      title: "Allow multiple shipping addresses per order",
      count: 167,
      trend: 7,
      severity: 4,
      category: "Address Management",
      verbatim: [
        "Want to split order to different addresses",
        "Need gift shipping to multiple addresses",
        "Bulk order to different locations option"
      ]
    },
    {
      id: generateId(),
      title: "Add order scheduling feature",
      count: 134,
      trend: 5,
      severity: 3,
      category: "Order Processing",
      verbatim: [
        "Would like to schedule future deliveries",
        "Need recurring order option",
        "Advance order booking feature request"
      ]
    }
  ],
  praises: [
    {
      id: generateId(),
      title: "Fast COD order processing",
      count: 156,
      trend: -12,
      severity: 2,
      category: "COD",
      merchantGMV: 2000000,
      verbatim: [
        "COD delivery was faster than expected",
        "Smooth cash handling process",
        "Professional delivery staff for COD"
      ]
    },
    {
      id: generateId(),
      title: "Great coupon savings experience",
      count: 134,
      trend: -8,
      severity: 1,
      category: "Coupon Engine",
      verbatim: [
        "Easy to apply discount coupons",
        "Amazing deals with seasonal coupons",
        "Coupon stacking feature is fantastic"
      ]
    },
    {
      id: generateId(),
      title: "Seamless address update process",
      count: 112,
      trend: -5,
      severity: 1,
      category: "Address Management",
      verbatim: [
        "Address verification is quick and accurate",
        "Love the address suggestion feature",
        "Easy to manage multiple addresses"
      ]
    },
    {
      id: generateId(),
      title: "Quick order confirmation",
      count: 98,
      trend: -4,
      severity: 1,
      category: "Order Processing",
      verbatim: [
        "Instant order confirmation received",
        "Smooth checkout process",
        "Order tracking updates are timely"
      ]
    }
  ]
};

export default {
  keyMetrics,
  feedbackSources,
  sentimentTrend,
  topFeedbackCategories,
};
