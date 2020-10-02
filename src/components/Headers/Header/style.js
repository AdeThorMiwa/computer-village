import styled from "styled-components";

export const HeaderContainer = styled.header`
    position: ${({type}) => type === "sticky" ? "fixed" : "relative"};
    width: 100%;
    background: white;
    z-index: 10;
    top: 0
`;