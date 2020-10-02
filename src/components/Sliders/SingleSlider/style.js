import styled from 'styled-components';
import Colors from '../../../resource/color';

export const SliderContainer = styled.div`
    width: 100%;
    overflow: hidden;

    .is-grabbing {
        cursor: grabbing !important;
    }
    
    .wrapper{ 
        width: 100%;
        position: relative;
        cursor: grab;
        background: green;
    }

    .slide {
        width: 300px;
        height: 300px;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;

        :first-child {
            background: red;
        }

        :last-child {
            background: red;
        }
    }

    .shifting {
        transition: left .2s ease-out;
    }
`; 