const linkListingData = [
    {
        title: "Quick Links",
        links: [
            {
                title: 'Register A Seller',
                url: '/auth/register'
            },
            {
                title: 'Login',
                url: '/auth/login'
            },
            {
                title: 'FAQs',
                url: '/faq'
            }
        ]
    },
    {
        title: "Company",
        links: [
            {
                title: 'About Us',
                url: 'https://bitstack.netlify.com'
            },
            {
                title: 'Contact Us',
                url: 'https://bitstack.netlify.com'
            },
            {
                title: 'Terms & Conditions',
                url: 'terms',
                modal: true
            },
        ]
    },
    {
        title: "Mart Fury Business",
        links: [
            {
                title: 'Sell On MarketPlace',
                url: '/auth/register'
            },
            {
                title: 'Advertise On MarketPlace',
                url: '/advertise'
            }
        ]
    }
];

const qualityListingData = [
    {
        icon: "la la-rocket",
        title: "Free Delivery",
        text: "For all orders over $99"
    },
    {
        icon: "la la-recycle",
        title: "90 Days Return",
        text: "If goods have problem"
    },
    {
        icon: "la la-lock",
        title: "Secure Payment",
        text: "100% secure payment"
    },
    {
        icon: "la la-user",
        title: "24/7 Support",
        text: "Dedicated support"
    }
];

export { linkListingData, qualityListingData }