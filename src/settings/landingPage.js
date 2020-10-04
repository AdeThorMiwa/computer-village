import HOST from "./../proxy";
const Layout = {
  categories: [
    {
      title: "Computer & Accessories",
      defaultSource: "/api/good?category=computer&limit=100&sort=-views",
      menu: [
        {
          title: "Most Popular",
          dataSource: "/api/good?category=computer&limit=100&sort=-views",
        },
        {
          title: "Best Seller",
          dataSource: "/api/good?category=computer&limit=100&sort=-brand",
        },
        {
          title: "New Arrival",
          dataSource: "/api/good?category=computer&limit=100&sort=-createdAt",
        },
      ],
    },
    {
      title: "Phone & Accessories",
      defaultSource: "/api/good?category=phones&limit=100&sort=-views",
      menu: [
        {
          title: "Most Popular",
          dataSource: "/api/good?category=phones&limit=100&sort=-views",
        },
        {
          title: "Best Seller",
          dataSource: "/api/good?category=phone&limit=100&sort=-brand",
        },
        {
          title: "New Arrival",
          dataSource: "/api/good?category=phones&limit=100&sort=-createdAt",
        },
      ],
    },
    {
      title: "Media Accessories",
      defaultSource: "/api/good?category=media&limit=100&sort=-views",
      menu: [
        {
          title: "Most Popular",
          dataSource: "/api/good?category=media&limit=100&sort=-views",
        },
        {
          title: "Best Seller",
          dataSource: "/api/good?category=media&limit=100&sort=-brand",
        },
        {
          title: "New Arrival",
          dataSource: "/api/good?category=media&limit=100&sort=-createdAt",
        },
      ],
    },
    {
      title: "Gaming",
      defaultSource: "/api/good?category=gaming&limit=100&sort=-views",
      menu: [
        {
          title: "Most Popular",
          dataSource: "/api/good?category=gaming&limit=100&sort=-views",
        },
        {
          title: "Best Seller",
          dataSource: "/api/good?category=gaming&limit=100&sort=-brand",
        },
        {
          title: "New Arrival",
          dataSource: "/api/good?category=gaming&limit=100&sort=-createdAt",
        },
      ],
    },
    {
      title: "Other Accessories",
      defaultSource: "/api/good?category=others&limit=100&sort=-views",
      menu: [
        {
          title: "Most Popular",
          dataSource: "/api/good?category=others&limit=100&sort=-views",
        },
        {
          title: "Best Seller",
          dataSource: "/api/good?category=others&limit=100&sort=-brand",
        },
        {
          title: "New Arrival",
          dataSource: "/api/good?category=others&limit=100&sort=-createdAt",
        },
      ],
    },
    {
      title: "Other Accessories",
      defaultSource: "/api/good?category=media&limit=100&sort=-views",
      menu: [
        {
          title: "Most Popular",
          dataSource: "/api/good?category=media&limit=100&sort=-views",
        },
        {
          title: "Best Seller",
          dataSource: "/api/good?category=media&limit=100&sort=-brand",
        },
        {
          title: "New Arrival",
          dataSource: "/api/good?category=media&limit=100&sort=-createdAt",
        },
      ],
    },
    {
      title: "Other Accessories",
      defaultSource: "/api/good?category=media&limit=100&sort=-views",
      menu: [
        {
          title: "Most Popular",
          dataSource: "/api/good?category=media&limit=100&sort=-views",
        },
        {
          title: "Best Seller",
          dataSource: "/api/good?category=media&limit=100&sort=-brand",
        },
        {
          title: "New Arrival",
          dataSource: "/api/good?category=media&limit=100&sort=-createdAt",
        },
      ],
    },
  ],
  sliderSetting: {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  },
  bannerSource: {
    topMainBanners: "/api/good?sort=-views&limit=3&discount[$gt]=1",
    topSideBanner: "/api/good?sort=-createdAt&limit=1", // sort by highest offers and date created
    adsBanner: "/api/good?limit=3",
  },
  topCategoryListings: {
    title: "Top Categories Of The Month",
    dataSource: `${HOST}/api/category`,
    data: [],
  },
};

export { Layout };
