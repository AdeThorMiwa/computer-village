import styled from 'styled-components';
import Colors from '../../../resource/color';

export const NavContainer = styled.nav`
    width: 100%;
    background: ${({isHome}) => isHome ? Colors.Primary : Colors.white};
    ${({isHome}) => !isHome && `border-top: 1px solid #ccc`};
    border-bottom: 1px solid ${Colors.Light};

    .nav-sm li {
        font-size: 12px !important;
        padding: 8px 0px;

        @media screen and (max-width: 798px){
            font-size: 10px !important;
            padding: 8px 0px;
        }
    }

    .wrapper {
        margin: auto;
        display: flex;
        padding: 0px;
        align-items: center;
        justify-content: space-between;
        list-style: none;

        li {
            padding: 12px 0px; 
            text-transform: uppercase;
            font-size: 14px;
            cursor: pointer;
            transition: 0.4s;
            color: ${({isHome}) => isHome ? Colors.white : Colors.Dark};

            a {
                color: ${({isHome}) => isHome ? Colors.white : Colors.Dark};
                text-decoration: none;

                :hover {
                    color: ${({isHome}) => isHome ? Colors.Lighter : Colors.midTone}
                }
            }

            @media screen and (max-width: 798px){
                font-size: 10px;
                padding: 8px 0px;
            }

            :hover {
                color: ${({isHome}) => isHome ? Colors.Lighter : Colors.midTone}
            }
        }
    }
`;