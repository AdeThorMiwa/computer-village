import React, { useState, useRef } from 'react'
import Intro from '../Intro/Intro'
import Head from '../Head/Head'
import Navigation from '../Navigation/Navigation'
import RouteNav from '../RouteNav/RouteNav';
import { useLocation } from 'react-router-dom';
import { HeaderContainer } from './style';
import Settings from '../../../resource/settings';
import { inArray } from '../../../utils';

const Header = () => {
    const location = useLocation();
    const container = useRef();

    const isHome = location.pathname === "/";
    const intro = {
        title: "Welcome to MarketPlace Online Shopping Store !",
        menuItem: [
            {
                title: 'Sell On MarketPlace',
                url: '/auth/register'
            },
            {
                title: 'FAQ',
                url: '/faq'
            },
            {
                title: 'Contact Us',
                url: 'https://bitstack.netlify.com'
            },
        ]
    }

    const [navSize, setNavSize] = useState("lg");
    window.addEventListener('scroll', () => initNavSizeSetter());

    const initNavSizeSetter = (e) => {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            setNavSize("sm");
        } else {
            setNavSize("lg")
        }
    }

    const path = location.pathname;
    const pathArr = path.split('/');

    const page = pathArr[ (pathArr.length - (path[path.length - 1] === '/' ? 2 : 1)) ]

    return (
        <HeaderContainer ref={container} type={Settings.headerType}>
            <Intro {...intro} isHome={isHome} open={navSize === "lg"} />
            <Head navSize={navSize}/>
            <Navigation size={navSize} />
            { !inArray(['', '/'], page) ? <RouteNav open={navSize === "lg"}/> : '' }
        </HeaderContainer>
    )
}

export default Header
