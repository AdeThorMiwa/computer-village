import styled from 'styled-components';
import Colors from '../../resource/color';

export const CATContainer = styled.section`
    width: 100%;
    padding: 0px;
    margin: 0px;

    .sliderContainer{
        margin-top: 22px;
        width: 100%;

        div:focus, div:active{
            outline: none
        }
    }
`;

export const CATHeader = styled.header`
    background: ${Colors.Lighter};
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${Colors.midTone};
    margin: 0px;

    ul {
        list-style: none;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;

        li {
            padding: 0px 10px;
            font-size: 14px;
            color: ${Colors.Secondary};
            cursor: pointer;

            &:hover {
                color: ${Colors.Dark};
            }
        }
    }
`;

export const CATContent = styled.div`
    width: 100%;
    margin-top: 16px;
    display: flex;
    flex-wrap: wrap;
    justify-content: stretch;
    position: relative;
    align-items: center;

    .arrow {
        position: absolute;
        font-size: 32px;
        z-index: 10   
    }

    .arrow-right {
        right: -30px
    }

    .arrow-left {
        left: -30px
    }
`;

