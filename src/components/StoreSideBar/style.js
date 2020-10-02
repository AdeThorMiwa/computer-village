import styled from 'styled-components';
import Colors from '../../resource/color';

export const SideBarContainer = styled.aside`
    display: flex;
    width: 100%;
    flex-direction: column;
    position: sticky;
    position: -webkit-sticky;
    top: 0px;

    figure {
        width: 100%;
        border: 1px solid ${Colors.Secondary};
        position: relative;
        border-radius: 4px;

        img {
            max-width: 100%;
            width: 100%;
            padding: 2px;
            max-height: 300px;
        }

        figcaption {
            width: 100%;
            background: rgba(0,0,0,0.5);
            padding: 10px;
            position: absolute;
            bottom: 0;
            color: white;
            border-bottom-right-radius: 4px;
            border-bottom-left-radius: 4px;

            h3 {
                font-weight: normal;
                font-size: 16px;
                text-shadow: 2px 2px 2px ${Colors.Dark}
            }

            p {
                font-size: 12px;
                margin: 0
            }
        }
    }

    .about_store {
        width: 100%;
        display: flex;
        flex-direction: column;
        border-radius: 3px;
        border: 1px solid ${Colors.Secondary};

        span {
            flex: 1;
            border-bottom: 1px solid ${Colors.Secondary};
            padding: 10px 12px;
            text-align: center;
            transition: 0.6s;

            a{ 
                color: ${Colors.Dark};
                text-decoration: none
            }

            :nth-child(odd) {
                font-weight: bold;
                font-size: 18px;
                background: ${Colors.Secondary}
            }

            :nth-child(even) {
                cursor: pointer;
                :hover {
                    background: ${Colors.Light}
                }
            }

            :last-child {
                border-bottom: none
            }
        }
    }
`;

export const Background = styled.div`
    width: 100%;
    min-height: 100%;
    height: 250px;
    background: ${({bg}) => Colors[bg]};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;

    span {
        font-size: 82px;
        color: white;
        margin-bottom: 22px;
        text-transform: uppercase
    }
`;
