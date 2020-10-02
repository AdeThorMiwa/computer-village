import styled from 'styled-components';
import Colors from '../../../resource/color';

export const InputBoxContainer = styled.div`
    width: 100%;
    margin-top: 15px;
    margin-bottom: 15px;
    

    input[type="text"], input[type="password"], input[type="email"] {
        width: 100%;
        padding: 10px 12px;
        box-sizing: border-box;
        border-radius: 2px;
        border: 1px solid ${Colors.Light};

        :active, :focus {
            background: ${Colors.white};
            outline: none;
        }
    }

    input[type="submit"] {
        padding: 10px 12px;
        width: 100%;
        box-sizing: border-box;
        border-radius: 2px;
        border: 1px solid ${Colors.Primary};
        background: ${Colors.Primary};
        color: white;
        transition: 0.5s;
        cursor: pointer;
        margin: 10px 0px;

        :hover {
            background: ${Colors.white};
            color: ${Colors.Primary}
        }
    }

    input:focus, input:active {
        outline: none
    }
`;

export const CheckBoxContainer = styled.div`
    margin-top: 15px;
    margin-bottom: 15px;
    cursor: pointer;

    .check-con{
        padding: 2px;
        background: ${Colors.white};
        border: 1px solid ${Colors.Primary};
        transition: 0.5s;
    }

    .is-checked { 
        background: ${Colors.Primary};
        color: ${Colors.white};
    }
`;