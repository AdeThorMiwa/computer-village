import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import { NotFoundContainer } from '../style';

const NotFound = () => {
    let location = useLocation();
    return (
        <NotFoundContainer>
            <div className="__head">4<span>0</span>4</div>
            <div className="__pnf">Page <span>Not</span> Found</div>
            <p>The page <span>{`${location.pathname}`}</span> is not found</p>
            <Link to="/">Go Home</Link>
        </NotFoundContainer>
    )
}

export default NotFound
