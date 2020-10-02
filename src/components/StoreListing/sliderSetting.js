export const settings = {
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
    responsive: [
        {
            breakpoint: 1154,
            settings: {
                slidesToShow: 5
            }
        },
        {
            breakpoint: 992,
            settings: {
            slidesToShow: 5
            }
        },
        {
            breakpoint: 768,
            settings: {
            slidesToShow: 3
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2
            }
        }
    ]
};