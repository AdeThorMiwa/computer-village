import React, { useEffect } from 'react'
import { MainContainer } from './style';
import { useLocation } from 'react-router-dom';

const Main = ({ children, marginTop }) => {
    const location = useLocation();

    const execWinScrollToview = () => {
        if(window.scrollToView) {
            window.scrollToView();
            window.scrollToView = null
        }
    }

    useEffect(() => {
        document.documentElement.style.scrollBehavior = ""
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        execWinScrollToview();
    }, [location.pathname])

    return (
        <MainContainer marginTop={marginTop} className="row">
            <div className="col-md-10 col-11 mx-auto p-0">{ children }</div>
        </MainContainer>
    )
}

export default Main
