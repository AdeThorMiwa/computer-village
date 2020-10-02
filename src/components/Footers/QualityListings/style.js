import styled from 'styled-components';
import Colors from '../../../resource/color';

export const ListingContainer = styled.div`
    padding: 0px;
    width: 100%;

    & > div {
        width: 100%;
        display: flex;
        align-item: center;
        justify-content: space-between;
        padding: 26px 0px;

        & > div {
            width:  ${({itemCount}) => 100/itemCount + '%'};
            display: flex;
            border-left: 1px solid ${Colors.midTone};
            padding: 8px 22px;
            justify-content: space-between;
            align-items: center;

            @media screen and (max-width: 992px) {
                :nth-child(3) {
                    border-left: none;
                }
            }

            @media screen and (max-width: 576px) {
                border-bottom: 1px dotted ${Colors.midTone};
                border-left: none;

                :last-child {
                    border-bottom: none;
                }
            }

            :first-child {
                border-left: none;
            }

            :last-child {
                padding-right: 0px;
            }

            i {
                font-size: 42px;
                color: ${Colors.Primary}
            }

            & > div {
                display: flex;
                flex-direction: column;
                min-width: 70%;

                span:first-child {
                    font-weight: bolder;
                    font-size: 14px;
                }

                span:last-child {
                    font-size: 13px;
                    color: ${Colors.MiniDark}
                }
            }
        }
    }
`; 