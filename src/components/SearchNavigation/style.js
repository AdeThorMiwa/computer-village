import styled from 'styled-components';
import Colors from '../../resource/color';

export const SearchNavigationContainer = styled.nav`
    padding: 18px 0px;

    border-top: 1px solid ${Colors.Light};
    border-bottom: 1px solid ${Colors.Light};

    & > div {
        justify-content: center;
        align-items: center;
    }
`;