import styled from 'styled-components';
import Colors from '../../../resource/color';

export const AuthFormContainer = styled.section`
    background: ${Colors.Lighter};

    .col-12 {
        margin-top: 62px;
        margin-bottom: 62px;
    }

    .tab_header {
        width: 100%;
        display: flex;
        align-items: center;

        .tab_header__heading {
            flex: 1;
            font-size: 20px;
            font-weight: bold;
            padding: 8px 20px;
            cursor: pointer;
            box-sizing: border-box;
            color: ${Colors.Secondary};
            transition: 0.5s;

            :first-child {
                text-align: right;
            }

            &.active {
                color: ${Colors.Dark}
            }
        }
    }
`;