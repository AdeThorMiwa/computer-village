import React from 'react'
import { TermsContainer } from './style'

const Terms = ({ setShow }) => {
    return (
        <TermsContainer>
            <h2 className="__terms-header">Terms & condition</h2>
            <div className="__terms-body">
                
            </div>
            <div className="__terms-footer">
                <button className="__terms-footer-accept">Accept</button>
                <button className="__terms-footer-decline" onClick={() => setShow(false)}>Decline</button>
            </div>
        </TermsContainer>
    )
}

export default Terms
