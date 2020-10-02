import styled from 'styled-components';
import Colors from '../../resource/color';

export const ZoomContainer = styled.div`
    width: 100%;
    padding: 10px 0px;
    position: relative;

    .skeleton-zoomer {
        cursor: pointer !important;
    }

    .wrapper {
        width: 100%;
        display: flex;
        ${'' /* background: red; */}

        .active { border: 1px solid ${Colors.Primary}}
    }
`;

export const MiniImage = styled.div`
    width: 70px;
    height: 70px;
    border: 1px solid ${Colors.Light};
    margin: 10px 0px;
    padding: 4px;

    img {
        min-width: 100%;
        width: 100%;
        max-height: 100%;
        height: 70px;

    }
`;

export const Zoomer = styled.div`
    display: flex;
    align-items: ;
    justify-content: center;
    flex: 1;
    position: relative;
    cursor: none;
    height: 400px;
    padding-bottom: 42px;
    padding-top: 10px;

    img {
        width: 80%;
        margin: auto;
        cursor: none;
        max-height: 100%;
    }
    p {
        color: ${Colors.midTone};
        position: absolute;
        bottom: 0px;
        text-shadow: 1px 1px 2px black;
    }
`;

export const ZoomResult = styled.div`
    width: 300px;
    height: 300px; 
    border: 1px solid ${Colors.Primary};
    position: absolute;
    top: 0px;
    right: -300px;
    display: none;
    background: ${Colors.white};
    z-index: 1;

    @media screen and (max-width: 568px) {
        display: none !important;
    }
`;

export const ZoomLens = styled.div`
    position: absolute;
    width: 50px;
    height:50px;
    display: none;
    border: 1px solid ${Colors.Primary}
`; 