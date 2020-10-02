import styled from 'styled-components';
import Colors from '../../../resource/color';

export const RegisterContainer = styled.form`
    background: ${Colors.white};
    opacity: 0;
    transition: 0.9s;

    h3 {
        font-weight: normal
    }

    button {
        padding: 10px 12px;
        width: 100%;
        box-sizing: border-box;
        border-radius: 2px;
        color: white;
        transition: 0.5s;
        cursor: pointer;
        margin: 10px 0px;

        &.btn-facebook {
            border: 1px solid ${Colors.facebook};
            background: ${Colors.facebook};

            :hover {
                background: ${Colors.white};
                color: ${Colors.facebook}
            }
        }

        &.btn-google {
            border: 1px solid ${Colors.google_plus};
            background: ${Colors.google_plus};

            :hover {
                background: ${Colors.white};
                color: ${Colors.google_plus}
            }
        }
    }
`; 