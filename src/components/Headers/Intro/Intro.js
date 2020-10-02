import React from 'react'
import { IntroContainer, InnerWrapper } from './style';
import { Link } from 'react-router-dom'

const Intro = ({ title, menuItem, isHome, open }) => { 
    return (
        <IntroContainer isHome={isHome} className="row m-0">
            <div className="col-12 col-md-10 mx-auto p-0">
                <InnerWrapper className={`${open ? '' : 'hide'} row`}>
                    <div className="col-12 col-md-6 pl-0 py-2 py-md-0">
                        <h5 className="justify-center justify-md-center">{title}</h5> 
                    </div>
                    <nav className="col-md-6 pr-0 d-none d-md-block">
                        <ul className="">
                            {menuItem && menuItem.map(({title, url}, i) => url.includes('http') ? <li key={i}><a href={url}>{title}</a></li> : <li key={i}><Link to={url}>{title}</Link></li>)}
                        </ul>
                    </nav>
                </InnerWrapper>
            </div>
        </IntroContainer>
    )
}


export default Intro;
