import styled from 'styled-components';
import Colors from '../../../resource/color';

export const RouteNavContainer = styled.nav`
    width: 100%;
    background: ${Colors.Light};

    .hide {
        height: 0 !important;
        padding: 0 !important;
    }

    .wrapper {
        margin: auto;
        display: flex;
        padding: 0px 8px;
        height: 40px;
        align-items: center;
        justify-content: flex-start;
        list-style: none;
        transition: 0.4s;
        overflow: hidden;

        li {
            padding: 12px 0px;
            font-size: 12px;
            cursor: pointer;

            a {
                color: black;
                text-decoration: none
            }

            &:first-child {
                padding-left: 0px;
            }

            &:after {
                content: '/';
                margin: 0px 8px;
                color: black;
            }

            &:last-child {
                @media screen and (max-width: 567px) {
                    max-width: 60%;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
                a {
                    color: ${Colors.Primary};
                }
                
                :after {
                    content: ''
                }
            }

            :hover a {
                color: ${Colors.Primary}
            }
        }
    }
`;