import styled from 'styled-components';
import Colors from '../../resource/color';

export const NewsLetterModalContainer = styled.div`
    background: ${Colors.white};
    position: relative;
    overflow: hidden;

    .__content {
        width: 60%;
        margin: 72px auto;
        text-align: center;

        p {font-size: 14px;}

        @media screen and (max-width: 785px) {
            width: 94% !important;
            margin-bottom: 32px;
        }
    }
`;

export const NewsLetterForm = styled.form`
    display: flex;
    border: 1px solid ${Colors.Light};
    border-right: none;
    flex: 1;
    box-sizing: border-box;
    max-width: 100%;
    border-radius: 2px;

    button {
        padding: 9px 6px;
        border: none;
        background: white;
        border-right: 1px solid ${Colors.Light};
        cursor: pointer;
        display: flex;
        align-items: center;
    }

    button[type="submit"]{
        background: ${Colors.Primary};
        color: ${Colors.white};
        border: none;
        font-size: 14px;
        line-height: 1;
    }

    input {
        border: none;
        padding: 9px;
        flex: 1;
        font-size: 14px;
        line-height: 1
    }

    button:active, button:focus, input:active, input:focus {
        outline: none
    }
`;

export const CloseButton = styled.button`
    padding: 4px 14px;
    background: black;
    color: white;
    border: 1px solid black;
    transition: 0.5s;
    cursor: pointer;
    margin: 1px;
    position: absolute;
    right: 1px;
    top: 1px;

    :hover {
        background: white;
        color: black;
    }

    :active, :focus {
        outline: none;
    }
`;