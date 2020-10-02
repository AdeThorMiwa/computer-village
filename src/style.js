import styled from 'styled-components';
import Colors from './resource/color';

export const AppContainer = styled.div`
    .justify-center {
        justify-content: flex-start;
    }

    .skeleton-container {
        background: linear-gradient(to right bottom, ${Colors.bannerGradient}) !important;
    }

    .transition {
        transition: 0.5s;
    }
    .highlighter {
        ${'' /* border: 1px solid ${Colors.success}; */}
        box-shadow: 1px 1px 16px ${Colors.Primary}
    }

    .slick-prev, .slick-next {
        border: 1px solid #aaa !important;
        width: 40px !important;
        height: 40px !important;
        z-index: 1 !important;

        :before {
            font-family: 'LineAwesome' !important;
            color: #aaa
        }
    }

    .slick-prev {
        left: 10px;

        :before {
            content: '\f111' !important;
        }
    }

    .slick-next {
        right: 10px;

        :before {
            content: '\f112' !important;
        }
    }

    @media screen and (max-width: 576px) {
        .justify-sm-center {
            justify-content: center
        }
        .align-sm-center {
            align-items: center
        }
        .text-sm-small {
            font-size: 10px !important;
        }
    }

    @media screen and (max-width: 768px) {
        
        .justify-md-center {
            justify-content: center
        }
        .align-md-center {
            align-items: center
        }
        .text-md-small {
            font-size: 20px !important;
        }
    }

    @media screen and (max-width: 992px) {
        .justify-lg-center {
            justify-content: center
        }
        .align-lg-center {
            align-items: center
        }
    }

    .fade {
        animation-name: fade;
        animation-duration: 1s;

        @keyframes fade {
            from {opacity: .4}
            to {opacity: 1}
        }
    }
`;

export const FAQContainer = styled.section`
    .__faq-header {
        width: 100%;
        text-align: center;
        padding: 72px 0;
        font-weight: normal
    }

    @media screen and (max-width: 768px) {
        .__faq-header {
            padding: 48px 0px;
        }
    }
`;

export const NotFoundContainer = styled.div`
    width: 80%;
    margin: auto;
    text-align: center;
    padding-bottom: 52px;

    .__head {
        color: ${Colors.Primary};
        font-size: 30vh;

        span {
            color: black
        }

        @media screen and (max-width: 768px) {
            font-size: 30vw;
        }
    }

    .__pnf {
        color: black; 
        font-size: 20px;

        span {
            color: ${Colors.Primary}
        }
    }

    p {
        span {
            color: ${Colors.Primary}
        }
    }
    a {
        padding: 10px 12px;
        background: ${Colors.Primary};
        color: white;
        border: 1px solid ${Colors.Primary};
        cursor: pointer;
        transition: 0.6s;
        text-decoration: none;

        :hover {
            color: ${Colors.Primary};
            background: white;
        }
    }
`;

export const SearchContainer = styled.section`

    .__search-topper {
        color: ${Colors.midTone};
        text-align: center;
        padding: 22px 0px;
    }
`;