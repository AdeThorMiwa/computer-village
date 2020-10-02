import React from 'react';
import { BrokenWrapper } from './style';

const Broken = () => {
    return (
        <BrokenWrapper>
            <h3 className="__broken">Page <span>Is</span> Broken...</h3>
            <p>Check Your Internet Connection and Try Again.</p>
        </BrokenWrapper>
    )
}

export default Broken;