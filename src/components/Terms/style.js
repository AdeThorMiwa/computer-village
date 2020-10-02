import styled from 'styled-components';
import Colors from '../../resource/color';

export const TermsContainer = styled.div`
    background: #fff;

    .__terms-header {
        padding: 12px;
        font-size: 16px;
        font-weight: normal;
        border-bottom: 1px solid ${Colors.midTone}
    }

    .__terms-body {
        height: 250px;
    }

    .__terms-footer {
        padding: 12px;
        font-size: 16px;
        font-weight: normal;
        border-top: 1px solid ${Colors.midTone};
        display: flex;
        justify-content: flex-end;

        .__terms-footer-accept, .__terms-footer-decline {
            padding: 8px 12px;
            border: 1px solid transparent;
            color: white;
            transition: 0.6s;
            cursor: pointer;

            :active, :focus {
                outline: none;
            }
        }

        .__terms-footer-accept {
            background: ${Colors.Primary};

            :hover {
                color: ${Colors.Primary};
                background: ${Colors.white};
            }
        }

        .__terms-footer-decline {
            color: black;

            :hover {
                color: ${Colors.Primary};
                background: ${Colors.white};
            }
        }
    }
`;