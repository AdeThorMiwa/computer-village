import styled from 'styled-components';
import Colors from '../../../resource/color';

const Styles = {
    h4: {
        textTransform: 'uppercase',
        marginBottom: '18px'
    },
    text: {
        padding: '4px 0px',
        fontSize: '14px',
        color: Colors.MiniDark
    }
}


export const LinksContainer = styled.div`
    width: 100%;
    padding: 0px;

    & > div {
        border-top: 1px solid ${Colors.midTone};
        border-bottom: 1px solid ${Colors.midTone};

        & > div {
            margin: 72px 0px;
            display: flex;
            justify-content: space-between;

            .wrapper {
                justify-content: space-between;
            }

            .newsletter {
                width: 35%;

                @media screen and (max-width: 576px) {
                    border-top: 1px solid ${Colors.midTone};
                    margin-top: 12px;
                    padding-top: 12px;
                }
                

                h4 {${Styles.h4}}

                p {${Styles.text}}

                & > div div {

                    h5 {
                        ${Styles.text};
                        font-weight: normal
                    }

                    & > div {
                        display: flex;
                        width: 100%;
                        justify-content: space-between;
                        align-items: center;
                        
                        i {
                            cursor: pointer;

                            &.fa-twitter {color: ${Colors.twitter}}
                            &.fa-facebook {color: ${Colors.facebook}}
                            &.fa-google-plus {color: ${Colors.google_plus}}
                            &.fa-instagram {color: ${Colors.instagram}}
                            &.fa-youtube {color: ${Colors.youtube}}
                        }
                    }
                }
            }
        }
    }
`;

export const LinksWrapper = styled.div`

    h4 {${Styles.h4}}

    @media screen and (max-width: 576px) {
        border-top: 1px dotted ${Colors.midTone};
        padding: 10px 0px;

        :first-child {
            border-top: none
        }
    }

    & > div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        span, a {
            ${Styles.text}
            cursor: pointer;

            :hover {
                color: ${Colors.Dark};
                text-decoration: underline
            }
        }
    }
`;