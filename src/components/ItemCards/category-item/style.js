import styled from 'styled-components';
import Colors from '../../../resource/color';

export const ItemContainer = styled.div`
    width: 100%;
    transition: 0.6s;
    position: relative;
    padding: 5px;

    figure {
        width: 100%;
        padding: 8px;
        margin: 0;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        color: ${Colors.Primary};
        border: 1px solid ${Colors.Light};
        transition: 0.6s; 

        :hover {
            border: 1px solid ${Colors.Primary};
        }

        .background {
            width: 100%;
            height: 150px;
            display: flex;
            justify-content: center;
            align-items: center;

            h3 {
                font-size: 72px;
                text-transform: uppercase ;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }

        span {
            color: ${Colors.MiniDark}
        }

        figcaption {
            border-top: 1px solid ${Colors.Light}
        }

        @media screen and (max-width: 576px) {
            h4, span {
                text-align: center;
                display: block;
            }
        }
    }
`; 

export const Action = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    transition: 0.7s;
    opacity: 0;

    i {
        color: ${Colors.Primary};
        font-size: 42px;
        text-shadow: 2px 2px 2px ${Colors.white}
    }
`;