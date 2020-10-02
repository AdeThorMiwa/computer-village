import styled from 'styled-components';

export const StoreListingContainer = styled.section`

    h2{
        font-size: 20px;
    }

    .wrapper {
        padding: 0px 4px !important;
    }

    .storeListingSlider .slick-prev, .storeListingSlider .slick-next {
        border: none !important;

        :before {
            font-family: 'LineAwesome' !important;
            color: #666;
            font-weight: bold;
        }
    }

    .slick-prev {
        left: 10px !important;

        :before {
            content: '\f111' !important;
        }
    }

    .slick-next {
        right: 10px !important;

        :before {
            content: '\f112' !important;
        }
    }
`;