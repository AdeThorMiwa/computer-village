import styled from 'styled-components';
import Colors from '../../resource/color';

export const SideContentWrapper = styled.div`
    padding: 10px 0px;

    hr {
        border: 1px solid #eee;
    }

    & > div:first-child {
        margin: 10px 0px;
        display: flex;
        flex-direction: column;

        & > div:first-child {
            margin-bottom: 10px;
            span {
                font-size: 14px;

                :first-child {
                    color: ${Colors.danger};
                    font-size: 24px;
                    margin-right: 12px;
                }
                :nth-child(2) {
                    color: ${Colors.Secondary};
                    text-decoration: line-through;
                    margin-right: 4px;
                }
                :last-child {
                    color: ${Colors.danger}
                }
            }
        }

        & > ul {
            list-style: none;

            li {
                color: ${Colors.MiniDark};
                font-size: 14px;

                span {
                    color: ${Colors.info};
                    text-decoration: underline
                }

                i {
                    margin-right: 6px;
                }
            }
        }

        & > div:last-child {
            font-size: 14px;
            margin-top: 14px;

            span {
                color: ${Colors.success}
            }
        }
    }

    & > div:nth-of-type(2) {
        background: ${Colors.Lighter};
        padding: 16px 22px;
        border-radius: 2px;

        p {
            font-size: 14px;
        }
    }

    & > div:nth-of-type(3) {
        .colorContainer {
            display:flex;
            margin: 6px 0px;
        }

        i {
            padding: 2px;
            background: ${Colors.info};
            color: ${Colors.white};
            font-weight: bold;
            font-size: 12px;
            cursor: pointer;
        }

        .guarantee{
            display: flex;
            align-items: center;

            label {
                font-size: 14px;
                margin-left: 4px;
            }
        }
    }

    & > div:last-child {
        margin-top: 10px;

        a {
            width: 100%;
            margin: 0.5%;
            padding: 8px;
            border: 1px solid ${Colors.Light};
            background: ${Colors.white};
            transition: 0.6s;
            text-decoration: none;
            display: block;
            text-align: center;

            i {
                margin-left: 4px;
            }

            :last-child {
                background: ${Colors.Primary};
                border-color: ${Colors.Primary};
                color: ${Colors.white};

                :hover {
                    background: white;
                }
            }

            :hover {
                border-color: ${Colors.Primary};
                color: ${Colors.Primary}
            }
        }
    }
`;

export const Color = styled.div`
    width: 50px;
    height: 50px;
    background: ${({color}) => color};
    margin: 4px;
`;