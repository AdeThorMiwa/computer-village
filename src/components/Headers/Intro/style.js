import styled from 'styled-components';
import Colors from '../../../resource/color';

export const IntroContainer = styled.div`
    width: 100%;
    font-size: 14px;
    background: ${({isHome}) => isHome ? Colors.Light : Colors.white};
    overflow: hidden;

    .hide {
        height: 0px;
        opacity: 0;
        display: none;
    }
`;

export const InnerWrapper = styled.div`
    width: 100%;
    margin: auto;
    display: flex;
    padding: 10px 0px;
    align-items: center;
    color: ${Colors.MiniDark};
    justify-content: space-between;
    transition: 0.4s;

    h5 {
        font-weight: normal;
        word-spacing: 1px;
        height: 100%;
        margin: 0;
        display: flex;
        align-items: center;
    }

    ul {
        list-style: none;
        display: flex;
        margin: 0;
        justify-content: flex-end;
    } 

    li {
        padding: 0px 14px;
        border-left: 1px solid ${Colors.midTone};
        font-size: 12px;
        cursor: pointer;

        a {
            text-decoration: none;
            color: ${Colors.MiniDark}
        }

        &:first-child {
            border-left-color: transparent;
        }

        &:last-child {
            padding-right: 0px
        }
    }
`;