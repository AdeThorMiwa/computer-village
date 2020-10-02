import styled from 'styled-components';
import Colors from '../../../resource/color';

export const TopBarContainer = styled.div`
    width: 100%;
    padding: 12px 0px;

    .category {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid ${Colors.Light};
        padding: 12px 0px;

        h2 {
            font-weight: normal
        }

        .category__wrapper {
            display: flex;
            align-items: center;

            label {
                margin-right: 10px; 
            }
        }

        .category__select{
            position: relative;
            border: 1px solid ${Colors.Light};
            cursor: pointer;

            .category__select__display{
                width: 100%;
                display: flex;
                min-width: 200px;
                justify-content: space-between;
                padding: 8px;

                @media screen and (max-width: 576px) {
                    min-width: 150px !important;
                    padding: 6px;
                }

                div {
                    font-size: 14px;
                    color: ${Colors.MiniDark}
                }

                i {
                    cursor: pointer;
                    font-size: 14px;
                }
            }

            ul{
                list-style: none;
                z-index: 10;
                width: 100%;
                background: white;
                border: 1px solid ${Colors.Light};
                position: absolute;

                li {
                    padding: 8px 10px;
                    font-size: 14px;
                    transition: 0.5s;
                    cursor: pointer;

                    :hover {
                        background: ${Colors.Light}
                    }
                }
            }
        }

    }
`;