import styled, { css } from 'styled-components';
import Colors from '../../resource/color';

const BaseSkeleton = css`
    display: inline-block;
    height: 1em;
    position: relative !important;
    overflow: hidden !important;
    background-color: ${Colors.skeletonBackground} !important;
    margin: 0;
    padding: 0;
    border-radius: 3px;
    border: none !important;

    :after {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        transform: translateX(-100%);
        background-image: linear-gradient(90deg,rgba(255,255,255, 0) 0%, rgba(255,255,255, 0.2) 20%, rgba(255,255,255, 0.5) 60%, rgba(255,255,255, 0) );
        animation: shimmer 1.1s infinite;
        content: '';
    }

    @keyframes shimmer {
      100% {
        transform: translateX(100%);
      }
    }
`;

export const DivSkeleton = styled.div`
    ${BaseSkeleton};
    width: 100%;
    height: 20px;
`;

export const SpanSkeleton = styled.span`
    ${BaseSkeleton};
    width: 50px;
    height: 20px;
`;

export const IconSkeleton = styled.i`
    ${BaseSkeleton};
    width: 20px;
    height: 20px;
`;

// Headers 
export const H1Skeleton = styled.h1`
    ${BaseSkeleton}
`;
export const H2Skeleton = styled.h2`
    ${BaseSkeleton}
`;
export const H3Skeleton = styled.h3`
    ${BaseSkeleton}
`;
export const H4Skeleton = styled.h4`
    ${BaseSkeleton}
`;
export const H5Skeleton = styled.h5`
    ${BaseSkeleton}
`;

export const ButtonSkeleton = styled.button`
    ${BaseSkeleton};
    height: 38px;
    width: 100px;
    background: ${Colors.skeletonBackground} !important;
    border: none !important;
`;

export const AnchorSkeleton = styled.a`
    ${BaseSkeleton};
    height: 38px;
    width: 100px;
`;
