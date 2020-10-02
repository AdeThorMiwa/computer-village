import styled from 'styled-components';
import Colors from '../../../resource/color';

export const FooterContainer = styled.footer`
    background: ${({ bg }) => bg === 'light' ? Colors.white : Colors.Lighter };
    border-top: 1px solid ${Colors.Light};
`;

export const Wrapper = styled.div`
    margin: auto;
`;