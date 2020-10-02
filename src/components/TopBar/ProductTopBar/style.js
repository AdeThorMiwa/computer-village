import styled from 'styled-components';
import Colors from '../../../resource/color';

export const TopBarContainer = styled.div`
    width: 100%;
    padding: 0px; 

    .wrapper {
        padding: 16px 0px 10px 0px;
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        border-bottom: 1px solid ${Colors.Light};
        
        & > div:first-child {

            h2 {
                font-weight: normal;
            }

            ul { 
                display: flex;
                list-style: none;
                margin-top: 10px;

                li {
                    font-size: 14px;
                    color: ${Colors.Secondary};
                    text-align: center;
                    border-left: 1px solid ${Colors.Secondary};

                    :first-child {
                        border-left: none;
                        text-align: left;

                        span {
                            color: ${Colors.Primary}
                        }
                    }
                    :nth-child(2), :last-child span {
                        color: ${Colors.Dark};

                        span {
                            color: ${Colors.Primary}
                        }
                    }
                }
            }

            @media screen and (max-width: 576px){
                h2 {
                    font-size: 18px;
                }

                ul li {
                    font-size: 12px;
                }
            }
        }

        & > div:last-child {
            display: flex;
            justify-content: space-between;
        }
    }

    .skeleton {
        @media screen and (max-width: 789px){
            h2 {
                width: 100% !important;
            }
        }
    }
`;

export const SocialItem = styled.span`
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${Colors.white};
    background: ${({bg}) => `${Colors[bg]}`};
    border-radius: 3px;
    cursor: pointer;

    a {
        color: white;

        :hover {
            text-decoration: none;
            color: ${Colors.Primary}
        }
    }

    @media screen and (max-width: 576px){
        height: 30px;
        width: 30px;
    } 
`; 