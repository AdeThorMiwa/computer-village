import styled from 'styled-components';
import Colors from '../../resource/color';

export const BrokenWrapper = styled.section`
    width: 100%; 

    .__broken {
        color: ${Colors.Primary};
        font-size: 42px;
        text-align: center;
        padding: 32px 0px;

        span {
            color: black
        }

        @media screen and (max-width: 768px) {
            font-size: 22px;
        }
    }
`;