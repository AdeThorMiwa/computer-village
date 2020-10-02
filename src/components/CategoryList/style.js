import styled from 'styled-components';
import Colors from '../../resource/color';

export const CLContainer = styled.div`
    width: 100%;

    .p-odd {
        margin-top: 10px !important;

        :first-child, :nth-child(4){
            padding-left: 0;
        }

        :last-child, :nth-child(3) { padding-right: 0}
        :nth-child(2), :nth-child(5) { padding: 0}

        @media screen and  (max-width: 768px) { 
            :nth-child(4) {padding-right: 0}
            :last-child, :nth-child(3) { padding-left: 0 }
            :nth-child(3), :nth-child(5) { padding-right: 15px }
        }
        @media screen and (max-width: 576px) { 
            padding: 0 !important;
        }
    }
`;

export const CLHeader = styled.h2`
    border-bottom: 1px solid ${Colors.Light};
    padding-bottom: 10px;
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 0px;
`;

export const CLRow = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: stretch;
    background: ;
    align-content: space-between;
`;

export const CLCol = styled.div`
    width: 100%;
    border: 1px solid ${Colors.Light};
    padding: 12px;
    display: flex;
    justify-content: space-between;
    transition: 0.6s;
    height: 100%;

    &:hover {
        border-color: ${Colors.Primary};
    }
`;

export const CLMinContainer = styled.div`
    box-sizing: border-box;
`;

export const CLImage = styled.img`
    max-width: 100%;
    max-height: 100px;
    object-fit: cover;
    height: auto
`;

export const CLTitle = styled.h3`
    width: 100%;
    text-align: left;
    font-weight: normal;
    font-size: 17px;
    margin-bottom: 10px;
`;

export const CLListGroup = styled.ul`

`;

export const CLListItem = styled.li`
    list-style-type: none;
    font-size: 13px;
    cursor: pointer;
    line-height: 18px;
    color: ${Colors.Secondary};
    transition: 0.4s;

    a {
        color: ${Colors.Secondary};
    }

    &:hover {
        text-decoration: underline;
        color: ${Colors.Dark}
    }
`;

export const CLNoDataFound = styled.p`
    text-align: center;
    display: block;
    width: 100%
`;