import styled from 'styled-components';
import Colors from '../../../resource/color';

export const ProductItemContainer = styled.div`
    padding: 0px;
    display: flex;
    border: 1px solid ${Colors.white};
    max-width: 100%;
    width: 100%;
    flex-direction: column;
    transition: 0.6s;
    position: relative;

    &:hover {
        border: 1px solid ${Colors.Primary};
    }

    &:hover section {
        height: 150px;
        border-color: ${Colors.Primary};
    }

    img {
        max-width: 100%;
        cursor: pointer;
        min-height: 300px;
        height: 300px;
    }

    & > div {
        display: flex;
        flex-direction: column;
    }

    label {
        font-size: 14px;
        color: ${Colors.info};
    }

    #priceContainer {
        display: flex;
        justify-content: space-between;
        margin-top: 6px;
    }

    .price {
        color: ${Colors.danger};
        font-size: 13px
    }

    .price:nth-child(2) {
        color: ${Colors.Secondary};
        text-decoration: line-through
    }
`; 

export const Actions = styled.section`
    width: 100%;
    position: absolute;
    background: ${Colors.white};
    left: 0;
    height: 0px;
    bottom: 0;
    overflow: hidden;
    transition: 0.6s;
    display: flex;
    flex-direction: column;
    border-top: 1px solid ${Colors.white};
    justify-content: space-between;

    & > div:nth-child(2) {
        padding: 8px;
    }

    & > div:first-child {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        padding-top: 3px;

        .icon-con{
            border: 1px solid ${Colors.Primary};
            padding: 12px 16px;
            transition: 0.6s;
            text-decoration: none;

            :hover {
                background: ${Colors.Primary};

                i {
                    color: ${Colors.white}
                }
            }

            i {
                color: ${Colors.Primary};
                transition: 0.6s;
            }
        }
    }
`;

export const Tag = styled.span`
    background: ${Colors.Primary};
    align-self: flex-end;
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 12px;
    color: ${Colors.white};
    position: absolute;
    z-index: 1;
    top: 3px;
    right: 3px;
`;