import React, { useState } from 'react'
import { FooterContainer, Wrapper } from './style'
import Listings from '../QualityListings/Listings'
import LinkListings from '../LinkListings/LinkListings';
import Foot from '../Foot/Foot';
import { useLocation } from 'react-router-dom';
import { Modal } from '../../Helpers/Helpers';
import Terms from '../../Terms/Terms';

const Footer = () => {
    let location = useLocation().pathname;
    const [showTerms, setShowTerms] = useState(false);
    
    return (
        <FooterContainer className="row m-0" bg={ location.includes('auth') ? 'light' : 'dark'}>
            <Modal show={showTerms} setShow={setShowTerms} size="md" position="top">
                <Terms setShow={setShowTerms} />
            </Modal>
            <Wrapper className="col-12 col-md-10 mx-auto p-0"> 
                <Listings/>
                <LinkListings showTerms={showTerms} setShowTerms={setShowTerms}/>
                <Foot/>
            </Wrapper>
        </FooterContainer>
    )
}

export default Footer
