import styled from 'styled-components';
import Colors from '../../resource/color';

export const GoodListingContainer = styled.section`
    width: 100%;

    .wrapper{
        width: 100%;

        h2 {
            font-size: 18px;
            font-weight: bold;
            ${'' /* background: yellow; */}
            width: 100%;
            padding: 10px 0px;
            border-bottom: 1px solid ${Colors.Light}
        }

        table {
            margin-top: 32px;
            width: 100%;
            border: 1px solid ${Colors.Light};
            border-collapse: collapse;
        }
        
        tr {
            border-bottom: 1px solid ${Colors.Light};
            th {
                padding: 12px 14px;
                border-bottom: 1px solid ${Colors.Light};
                border-collapse: collapse;
                background: ${Colors.Lighter};
                color: ${Colors.MiniDark};
                text-transform: uppercase;
                font-size: 12px;
                text-align: left;
            }

            td {
                padding: 14px;
                font-size: 14px;
                color: ${Colors.Secondary};
                border-collapse: collapse;

                :first-child {
                    font-size: 16px;
                    color: ${Colors.danger}
                }

                :nth-child(3) {
                    display: flex;
                    flex-direction: column;

                    span:first-child {
                        color: ${Colors.Dark};
                        font-weight: bold;
                    }

                    span:last-child {
                        color: black;
                    }
                }

                button, a {
                    background: ${Colors.Primary};
                    padding: 8px 14px;
                    border: 1px solid ${Colors.Primary};
                    color: ${Colors.white};
                    border-radius: 2px;
                    cursor: pointer;
                    transition: 0.6s;
                    text-decoration: none !important;

                    :hover {
                        background: ${Colors.white};
                        color: ${Colors.Primary};
                        text-decoration: none
                    }

                    @media screen and (max-width: 567px) {
                        padding: 4px 8px;
                        font-size: 12px;
                    }
                }
            }
        }
    }
`;