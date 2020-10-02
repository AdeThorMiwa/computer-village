import styled from 'styled-components';
import Colors from '../../resource/color';

const position = {
    right: {
        top: '-5px',
        left: '105%'
    },
    left: {
        top: '-5px',
        right: '105%'
    },
    top: {
        bottom: '100%',
        left: '50%',
        marginLeft: '-60px'
    },
    bottom: {
        top: '100%',
        left: '50%',
        marginLeft: '-60px'
    }
}

const tooltipArrow = {
    top: {
        top: '100%',
        left: '50%',
        borderColor: 'rgba(76, 52, 43, 0.7) transparent transparent transparent'
    },
    bottom: {
        bottom: '100%',
        left: '50%',
        borderColor: 'transparent transparent rgba(76, 52, 43, 0.7) transparent'
    },
    left: {
        top: '50%',
        left: '103%',
        marginTop: '-5px', 
        borderColor: 'transparent transparent transparent rgba(76, 52, 43, 0.7)'
    },
    right: {
        top: '50%',
        right: '100%',
        marginTop: '-5px',
        borderColor: 'transparent rgba(76, 52, 43, 0.7) transparent transparent'  
    }
}

export const TooltipContainer = styled.span`
    background-color: rgba(76, 52, 43, 0.7);
    color: #fff;
    text-align: center;
    padding: 5px 8px;
    border-radius: 3px;
    font-size: 12px;
    min-width: 80px;

    position: absolute;
    z-index: 1;
    opacity: 0;
    visibility: none;
    transition: opacity 1s;

    ${({pos}) => position[pos]}
    ${({width, pos}) => pos === 'top' || pos === 'bottom' ? { marginLeft: `-${Number(width)/2}px` } : ''};

    ::after {
        content: " ";
        position: absolute;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        ${({pos}) => tooltipArrow[pos]}
    }

    &.show {
        visibility: visible;
        opacity: 1;
    }
`;

export const MoreButton = styled.button`
    border: none;
    background: transparent;
    color: ${Colors.Primary};
    display: block;
    width: 100%;
    cursor: pointer;
    transition: 0.6s;
    margin-top: 10px;
`;

export const ZeroFoundContainer = styled.div`
    text-align: center;
    width: 100%;
    font-size: 28px;
    padding: 16px;

    @media screen and (max-width: 768px) {
        font-size: 18px;
    }
`;

export const SpinnerCon = styled.span`
    width: ${({ size }) => `${size}px`};
    height: ${({ size }) => `${size}px`};
    border-radius: 100%;
    border: 2px solid #f3f3f3;
    border-top: 2px solid ${Colors.Primary};
    display: inline-block;
    margin: 0px 6px;
    animation: spin 0.5s linear infinite;

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;

export const SearchingBox = styled.div`
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ScrollToTopContainer = styled.div`
    position: fixed;
    bottom: 15px;
    right: 15px;
    font-size: 18px;
    line-height: 53px;
    width: 55px;
    height: 55px;
    background: ${Colors.Primary};
    color: ${Colors.white};
    text-align: center;
    z-index: 100;
    cursor: pointer;
    display: ${({show}) => show ? 'block': 'none'};
    opacity: ${({show}) => show ? 1: 0};
    border-radius: 50%;
    transition: all 1s ease;
`;

export const Overlayer = styled.div`
    background-color: rgb(0, 0, 0);
    position: fixed;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.7;
    z-index: 9998;
    cursor: pointer;
    display: none;
    transition: 0.6s;

    &.show {
        display: block;
    }
`;

export const ModalContainer = styled.div`

    .__modal-show-content {
        display: block;
        z-index: 9999;
        opacity: 1;
    }
`;

const computeModalSize = size => {
    switch(size) {
        case 'sm': 
            return '30%';
        case 'md':
            return '50%';
        case 'lg':
            return '75%';
        case 'xl':
            return '95%';
        default: 
            return '50%';
    }
}

const computeModalPosition = pos => {
    switch(pos) {
        case 'center':
            return '25%';
        case 'top':
        default:
            return '10%';
    }
}

export const ModalContent = styled.div`
    top: ${({pos}) => computeModalPosition(pos)} !important;
    position: fixed !important;
    padding: 0px;

    left: 0px;
    right: 0px;
    margin-left: auto;
    margin-right: auto;
    display: none;

    width: ${({size}) => computeModalSize(size)};

    @media screen and (max-width: 785px) {
        width: 98% !important
    }
`;

export const PaginationContainer = styled.div`
    display: flex;
    width: 100%;

    @media screen and (max-width: 768px) {
        justify-content: center;
        margin-bottom: 12px;
    }

    .no-border {
        border: none;
        background: transparent;
        flex: 1;

        :hover {
            background: transparent;
        }
    }

    .active {
        background: ${Colors.Lighter};
    }

    span, a {
        width: 30px;
        height: 30px;
        border-radius: 1px;
        padding: 4px;
        color: ${Colors.MiniDark};
        border: 1px solid ${Colors.midTone};
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        text-decoration: none;
        transition: 0.5s;
        margin-left: 2px;
        margin-right: 2px;
        max-width: 30px;

        :hover {
            background: ${Colors.Lighter}
        }
    }
`;

export const FilterDropDownCon = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media screen and (max-width: 768px) {
        justify-content: center;

        .category__select {
            flex: 1
        }
    }

    label {
        margin: 0;
        margin-right: 10px; 
    }

    .category__select{
        position: relative;
        border: 1px solid ${Colors.Light};
        cursor: pointer;

        .category__select__display{
            width: 100%;
            display: flex;
            min-width: 200px;
            justify-content: space-between;
            padding: 8px;

            @media screen and (max-width: 576px) {
                min-width: 150px !important;
                padding: 6px;
            }

            div {
                font-size: 14px;
                color: ${Colors.MiniDark}
            }

            i {
                cursor: pointer;
                font-size: 14px;
            }
        }

        ul{
            list-style: none;
            z-index: 10;
            width: 100%;
            background: white;
            border: 1px solid ${Colors.Light};
            position: absolute;

            li {
                padding: 8px 10px;
                font-size: 14px;
                transition: 0.5s;
                cursor: pointer;

                :hover {
                    background: ${Colors.Light}
                }
            }
        }
    }
`;

export const PageLoaderContainer = styled.div`
    height: 0.2em;
    width: 0.2em;
    box-shadow: -0.7em -0.7em 0 0.2em ${Colors.Primary},
                -0.7em -0.7em 0 0.2em ${Colors.Primary},
                -0.7em -0.7em 0 0.2em ${Colors.Primary},
                -0.7em -0.7em 0 0.2em ${Colors.Primary};
    animation: loader-38 6s infinite;
    
    @keyframes loader-38 {
        0% {
            box-shadow: -0.7em -0.7em 0 0.2em ${Colors.Primary},
                        -0.7em -0.7em 0 0.2em ${Colors.Primary},
                        -0.7em -0.7em 0 0.2em ${Colors.Primary},
                        -0.7em -0.7em 0 0.2em ${Colors.Primary};
        }
        8.33% {
            box-shadow: -0.7em -0.7em 0 0.2em ${Colors.Primary},
                        0.7em -0.7em 0 0.2em ${Colors.Primary},
                        0.7em -0.7em 0 0.2em ${Colors.Primary},
                        0.7em -0.7em 0 0.2em ${Colors.Primary};
        }
        16.66% {
            box-shadow: -0.7em -0.7em 0 0.2em ${Colors.Primary},
                        0.7em -0.7em 0 0.2em ${Colors.Primary}, 
                        0.7em 0.7em 0 0.2em ${Colors.Primary}, 
                        0.7em 0.7em 0 0.2em ${Colors.Primary};
        }
        24.99% {
            box-shadow: -0.7em -0.7em 0 0.2em ${Colors.Primary}, 
                        0.7em -0.7em 0 0.2em ${Colors.Primary}, 
                        0.7em 0.7em 0 0.2em ${Colors.Primary}, 
                        -0.7em 0.7em 0 0.2em ${Colors.Primary};
        }
        33.32% {
            box-shadow: -0.7em -0.7em 0 0.2em ${Colors.Primary}, 
                        0.7em -0.7em 0 0.2em ${Colors.Primary}, 
                        0.7em 0.7em 0 0.2em ${Colors.Primary}, 
                        -0.7em -0.7em 0 0.2em ${Colors.Primary};
        }
        41.65% {
            box-shadow: 0.7em -0.7em 0 0.2em ${Colors.Primary},
                        0.7em -0.7em 0 0.2em ${Colors.Primary},
                        0.7em 0.7em 0 0.2em ${Colors.Primary},
                        0.7em -0.7em 0 0.2em ${Colors.Primary};
        }
        49.98% {
            box-shadow: 0.7em 0.7em 0 0.2em ${Colors.Primary},
                        0.7em 0.7em 0 0.2em ${Colors.Primary},
                        0.7em 0.7em 0 0.2em ${Colors.Primary},
                        0.7em 0.7em 0 0.2em ${Colors.Primary};
        }
        58.31% {
            box-shadow: -0.7em 0.7em 0 0.2em ${Colors.Primary},
                        -0.7em 0.7em 0 0.2em ${Colors.Primary},
                        0.7em 0.7em 0 0.2em ${Colors.Primary},
                        -0.7em 0.7em 0 0.2em ${Colors.Primary};
        }
        66.64% {
            box-shadow: -0.7em -0.7em 0 0.2em ${Colors.Primary},
                        -0.7em -0.7em 0 0.2em ${Colors.Primary},
                        0.7em 0.7em 0 0.2em ${Colors.Primary},
                        -0.7em 0.7em 0 0.2em ${Colors.Primary};
        }
        74.97% {
            box-shadow: -0.7em -0.7em 0 0.2em ${Colors.Primary},
                        0.7em -0.7em 0 0.2em ${Colors.Primary},
                        0.7em 0.7em 0 0.2em ${Colors.Primary},
                        -0.7em 0.7em 0 0.2em ${Colors.Primary};
        }
        83.3% {
            box-shadow: -0.7em -0.7em 0 0.2em ${Colors.Primary},
                        0.7em 0.7em 0 0.2em ${Colors.Primary},
                        0.7em 0.7em 0 0.2em ${Colors.Primary},
                        -0.7em 0.7em 0 0.2em ${Colors.Primary};
        }
        91.63% {
            box-shadow: -0.7em -0.7em 0 0.2em ${Colors.Primary},
                        -0.7em 0.7em 0 0.2em ${Colors.Primary},
                        -0.7em 0.7em 0 0.2em ${Colors.Primary},
                        -0.7em 0.7em 0 0.2em ${Colors.Primary};
        }
        100% {
            box-shadow: -0.7em -0.7em 0 0.2em ${Colors.Primary},
                        -0.7em -0.7em 0 0.2em ${Colors.Primary},
                        -0.7em -0.7em 0 0.2em ${Colors.Primary},
                        -0.7em -0.7em 0 0.2em ${Colors.Primary};
        }
    }
`;