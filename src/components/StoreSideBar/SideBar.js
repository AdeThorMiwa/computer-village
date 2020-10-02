import React, { Fragment } from 'react'
import { SideBarContainer, Background } from './style'
import { wordsToUpper, firstToUpper, getSocialValue } from '../../utils'
import { H3Skeleton, DivSkeleton } from '../skeleton/style';
import { ParagraphSkeleton } from '../skeleton/Skeleton';

const SideBar = ({ name, description, contact, profileBg = "info" }) => {
    let contactArray = [];
    let d;
    for( d in contact) {
        contactArray.push({ field: d, value: contact[d]})
    }

    return (
        <SideBarContainer> 
            <figure>
                <Background bg={profileBg}>
                    <span>{`${name}`[0]}</span>
                </Background>
                <figcaption>
                    <h3>{wordsToUpper(name)}</h3>
                    <p>{wordsToUpper(description)}</p>
                </figcaption>
            </figure>
            <div className="about_store">
                { contactArray.map((contact, i) => contact.value.length > 0 && contact.value.length !== "" ? <Fragment key={i}>
                    <span>{ firstToUpper(contact.field)}</span> 
                    { <span>{getSocialValue(contact.field, contact.value) }</span>}
                </Fragment>: "")}
            </div>
        </SideBarContainer>
    )
}

const SideBarSkeleton = () => {
    return (
        <SideBarContainer> 
            <figure>
                <Background className="skeleton-container">
                </Background>
                <figcaption>
                    <H3Skeleton style={{width: '100%'}} />
                    <ParagraphSkeleton />
                </figcaption>
            </figure>
            <DivSkeleton style={{marginBottom: '4px', height: '40px'}} />
            <DivSkeleton style={{marginBottom: '4px', height: '40px'}} />
        </SideBarContainer>
    )
}

export { SideBar, SideBarSkeleton }
