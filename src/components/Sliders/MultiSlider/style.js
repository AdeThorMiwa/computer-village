import styled from 'styled-components';

export const SliderContainer = styled.div`
    width: 100%;
    
    .wrapper{ 
        width: 100%;
        position: relative;
        cursor: grab;
        background: green;
        overflow: hidden
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

    .is-dragging {
        cursor: grabbing
    }

    .shifting {
        transition: left .2s ease-out;
    }
`; 


// export const SliderContainer = styled.div`
//     width: 100%;
    
//     .wrapper{ 
//         width: 100%;
//         position: relative;
//         cursor: grab;
//         background: green;
//         overflow: hidden
//     }

//     .slide {
//         width: 300px;
//         height: 300px;
//         position: absolute;
//         display: flex;
//         justify-content: center;
//         align-items: center;

//         :first-child {
//             background: red;
//         }

//         :last-child {
//             background: red;
//         }
//     }

//     .is-dragging {
//         cursor: grabbing
//     }

//     .shifting {
//         transition: left .2s ease-out;
//     }
// `; 