import styled from 'styled-components';
import Colors from '../../resource/color';

const containerStyle = {
    background: ``,
    border: `1px solid ${Colors.midTone}`,
}

export const HBanner = styled.div`
    ${containerStyle}
    margin-top: 24px;

    & > div {
        padding: 42px;
        display: flex;
        justify-content: space-between;
        background: url(${({bg}) => bg}) right no-repeat;
        background-size: 400px 300px;

        @media screen and (max-width: 768px) {
            background-size: 250px 200px
        }

        @media screen and (max-width: 576px) {
            background-size: 200px 150px;
        }
    }

    .desc {
        width: 40%;

        h3 {
            font-weight: normal;
            font-size: 32px
        }

        p {
            font-size: 12px;
            color: ${Colors.Secondary}
        }
    }

    .pricing {
        width: 60%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        button, a {
            max-width: 100px;
            padding: 6px 10px;
            background: ${Colors.Accent};
            border: 1px solid ${Colors.Primary};
            border-radius: 2px;
            color: ${Colors.white};
            cursor: pointer;
            margin: 20px 0px;
            text-decoration: none;
        }

        span {
            line-height: 30px
        }

        .oldPrice {
            text-decoration: line-through;
            color: ${Colors.Secondary};
        }

        .newPrice {
            color: ${Colors.success};
            font-size: 32px;
            flex: 1
        }
    }
`;

export const HeadBannerContainer = styled.div`
    ${containerStyle}
    position: static;

    & > div {
        padding: 42px 62px;
        display: flex;
        justify-content: space-between;
        background: url(${({bg}) => bg}) right no-repeat;
        background-size: 400px 300px;
        position: static;

        @media screen and (max-width: 768px) {
            background-size: 250px 200px
        }

        @media screen and (max-width: 576px) {
            padding: 24px 20px;
            background-size: 200px 150px;

            button {
                padding: 4px 6px;
                font-size: 12px
            }
        }
    }

    .desc {
        width: 70%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        position: static;

        @media screen and (max-width: 992px) {
            width: 95%;

            h3 {
                font-size: 28px !important;
            }
        }

        @media screen and (max-width: 768px) {

            h3 {
                font-size: 26px !important;
            }
        }

        @media screen and (max-width: 576px) {
            width: 100%;

            h3 {
                font-size: 20px !important;
                text-shadow: 1px 1px 2px ${Colors.Primary}
            }

            .percent-off {
                font-size: 14px !important;
                background: ${Colors.success};
                color: white !important;
                padding: 2px 6px;
                position: absolute;
                border-radius: 3px;
                top: 12px;
                right: 20px;
            }
        }

        h3 {
            font-weight: normal;
            font-size: 32px;
        }

        & > div {
            margin: 14px 0px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            position: static;

            span:first-child {
                color: ${Colors.Dark};
                font-size: 12px;
                text-transform: uppercase;
                font-weight: bold;
            }
            
            span:last-child {
                color: ${Colors.success};
                font-size: 32px;
                transition: 0.9s;
            }
        }

        a, button {
            max-width: 100px;
            padding: 6px 10px;
            background: ${Colors.Accent};
            border: 1px solid ${Colors.Primary};
            border-radius: 2px;
            color: ${Colors.white};
            cursor: pointer;
            text-decoration: none
        }
    }

    .skeleton {
        h3{
            width: 100%;
            height: 40px
        }

        span:first-child {
            margin-bottom: 10px;
            width: 80px
        }

        span:last-child {
            height: 40px;
            width: 90px
        }

        @media screen and (max-width: 576px) {
            h3 {
                height: 25px;
            }

            .percent-off {
                height: 20px !important;
                width: 50px !important;
                position: absolute !important;
                background: ${Colors.skeletonBackground}
            }
        }
    }
`;

export const CardBannerContainer = styled.div`
    background: linear-gradient(to right bottom, ${Colors.bannerGradient});
    border: 1px solid ${Colors.midTone};
    height: 100%;

    a {
        max-width: 100px;
        padding: 6px 10px;
        background: ${Colors.Accent};
        border: 1px solid ${Colors.Primary};
        border-radius: 2px;
        color: ${Colors.white};
        cursor: pointer;
        text-decoration: none
    }

    & > div {
        background: url(${({bg}) => bg}) no-repeat;
        background-size: 80% auto;
        background-position: 50% 100%;
        width: 100%;
        height: 100%;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;

        h4 {
            margin-top: 16px;
        }

        h2 {
            font-size: 22px;
            font-weight: normal;
            text-align: center;
            margin: 10px 0px;
            text-transform: uppercase;
        }

        & > span {
            font-size: 14px;

            span {
                color: ${Colors.danger}
            }
        }

        @media screen and (max-width: 992px) {
            background-position: 70% 90%;
            background-size: 200px 150px;

            h2 {
                font-size: 18px;
            }
        }
        
    }
`;
