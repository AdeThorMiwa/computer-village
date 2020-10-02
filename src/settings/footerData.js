const linkListingData = [
  {
    title: "Quick Links",
    links: [
      {
        title: "Register A Seller",
        url: "/auth/register",
      },
      {
        title: "Login",
        url: "/auth/login",
      },
      {
        title: "FAQs",
        url: "/faq",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        title: "About Us",
        url: "https://bitstack.netlify.com",
      },
      {
        title: "Contact Us",
        url: "https://bitstack.netlify.com",
      },
      {
        title: "Terms & Conditions",
        url: "terms",
        modal: true,
      },
    ],
  },
  {
    title: "Village Market Business",
    links: [
      {
        title: "Sell On Village Market",
        url: "/auth/register",
      },
      {
        title: "Advertise On Village Market",
        url: "/advertise",
      },
    ],
  },
];

const qualityListingData = [
  {
    icon: "la la-rocket",
    title: "Instant Connect",
    text: "Between sellers and buyers",
  },
  {
    icon: "la la-recycle",
    title: "Market Integrity",
    text: "Maintained between our customers",
  },
  {
    icon: "la la-lock",
    title: "Absolute Control",
    text: "100% in your hands",
  },
  {
    icon: "la la-user",
    title: "24/7 Support",
    text: "Dedicated support",
  },
];

export { linkListingData, qualityListingData };
