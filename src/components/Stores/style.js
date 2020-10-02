import styled from 'styled-components';
import Colors from '../../resource/color';

export const StoreComponentContainer = styled.figure`
    border: 1px solid ${Colors.Light};
    width: 100%;
    transition: 0.6s;
    border-radius: 4px;
    overflow: hidden;
    cursor: pointer;
    max-width: 160px;


    :hover {
        border-color: ${({color}) => color}
    }

    a {
        color: black;
        text-decoration: none;

        :hover {
            color: ${({color}) => color}
        }
    }
`;

export const Background = styled.div`
    width: 100%;
    background: ${({color}) => color};
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 52px;
    color: white;
    text-transform: uppercase;
`; 

export const Info = styled.figcaption`
    padding: 3px;
    box-sizing: border-box;

    h3 {
        font-size: 14px;
    }
`;

export const Tags = styled.div`
    display: flex;
    flex-wrap: wrap
`;

export const Tag = styled.span`
    font-size: 10px;
    background: ${({ index }) => index === 1 ? `rgb(${Math.floor(Math.random() * 200)},${Math.floor(Math.random() * 200)},${Math.floor(Math.random() * 225)})` 
    : `rgb(${Math.floor(Math.random() * 200)},${Math.floor(Math.random() * 200)},${Math.floor(Math.random() * 225)}) `};
    border-radius: 2px;
    color: white;
    text-align: center;
    padding: 0px 2px;
    margin-bottom: 2px;
    margin-right: 3px;
`;

export const Description = styled.p`
    font-size: 12px;
    margin: 0;
    padding: 3px;
    font-weight: bold
`;

export const Clearfix = styled.div`
    padding: 8px 0px 9px 0px;
`;