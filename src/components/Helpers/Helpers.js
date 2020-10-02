import React, { useRef, useEffect, useState } from 'react'
import { TooltipContainer, MoreButton, SearchingBox, ScrollToTopContainer, Overlayer, ModalContainer, ModalContent, PaginationContainer, FilterDropDownCon, ZeroFoundContainer, SpinnerCon, PageLoaderContainer } from './style'
import { useHistory, Link, useLocation } from 'react-router-dom';
import { firstToUpper } from '../../utils';

const Tooltip = ({ text, position = "top" }) => {
    const ref = useRef();
    const [show, setShow] = useState(false)
    const [width, setWidth] = useState(0);

    const onParentMouseOver = e => {
        setShow(true)
    }

    const onParentMouseLeave = e => {
        setShow(false);
    }

    useEffect(() => {
        ref.current.parentNode.addEventListener('mouseover', onParentMouseOver);
        ref.current.parentNode.addEventListener('mouseleave', onParentMouseLeave);
        ref.current.parentNode.addEventListener('mouseout', onParentMouseLeave);
        setWidth(ref.current.offsetWidth);
    }, [])
    return (
        <TooltipContainer ref={ref} className={`${ show && 'show' }`} pos={position} width={width}>
            {text}
        </TooltipContainer>
    )
}

const SeeMoreButton = ({ style, children, value = "See More", ...otherProps }) => {
    return <MoreButton style={style} {...otherProps}>{children || value}</MoreButton>
}

const ZeroFound = ({ text = "No Item Found..." }) => {
    return <ZeroFoundContainer>{text}</ZeroFoundContainer>
}

const Spinner = ({ size = 20 }) => {
    return <SpinnerCon size={size} />
}

const Searching = () => {
    return <SearchingBox>Searching... <Spinner /></SearchingBox>
}

const ScrollToTop = () => {
    const [show, toggleShow] = useState(window.scrollY > 300);

    const scrollToTop = () => {
        document.documentElement.style.scrollBehavior = "smooth"
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    window.addEventListener('scroll', () => toggleShow(window.scrollY > 300));
    
    return (
        <ScrollToTopContainer show={show} onClick={() => scrollToTop()}><i className="la la-angle-up"></i></ScrollToTopContainer>
    )
}

const ScrollToView = ({ text, children, link, onClick, ...props }) => {
    let history = useHistory();
    let location = history.location;
    const linkArr = link.split('#');
    const page = linkArr[0]
    const viewId = linkArr[1];

    const scrollToView = () => {
        const view = document.querySelector(`#${viewId}`);
        try {
            document.documentElement.style.scrollBehavior = "smooth"
            window.scrollTo(0, view.offsetTop)
        }catch (e) {
            window.scrollToView = () => {
                document.documentElement.style.scrollBehavior = "smooth"
                try {
                    window.scrollTo(0, document.querySelector(`#${viewId}`).offsetTop)
                } catch(e) {}
            }
        }
        if(location.pathname !== page && location.pathname !== `/${page}`) history.push(page);
    }

    const handleClick = () => {
        if(typeof onClick === "function") onClick();
        scrollToView()
    }

    return <span {...props} onClick={() => handleClick()}>{children || text}</span>
}

const Modal = ({ size = "md", position = "center", animate = 'fade', children, component, setShow, show = false }) => {
    let modalContent = useRef();
    const onOverlayClick = e => {
        if (typeof setShow === "function") setShow(false)
    }
    return (
        <ModalContainer>
            <ModalContent className={`${animate} ${show && '__modal-show-content' }`} ref={modalContent} size={size} pos={position}>
                {children || component}
            </ModalContent>

            <Overlay onClick={onOverlayClick} show={show} />
        </ModalContainer>
    )
}

const Overlay = ({ show, onClick = null }) => {
    const clickHandler = e => typeof onClick === "function" && onClick(e);
    return <Overlayer onClick={e => clickHandler(e)} className={`${show ? 'show' : ''}`} />
}

const Pagination = ({ pageAmount, current = 1 }) => {
    let data = [];
    let z;
    for(z=1;z<=pageAmount;z++){ data.push(z) }
    const location = useLocation();

    current = Number(current);
    current = current < 1 ? 1 : current;
    current = current > data.length ? data.length : current;
    
    const locationArr = location.pathname.split('/').filter(item => item.length);
    const BASE_URL = `/${locationArr[0]}/${locationArr[1]}`;

    return (
        <PaginationContainer>
            { current > 1 && <Link to={`${BASE_URL}/${data[current - 2]}`}><i className="la la-angle-left"></i></Link>}
            { current >= 3 && <Link to={`${BASE_URL}/1`}>1</Link> }
            { current - 2 >= 1 && <span className="no-border">...</span> }
            {data.map(i => {
                return (i >= current && i < current + 3 && <Link to={`${BASE_URL}/${i}`} className={i === current ? 'active' : ''} key={i}>{ i }</Link>)
            })}
            { current + 2 < data.length && <span className="no-border">...</span> }
            { current + 2 !== data.length && current + 2 < data.length && <Link to={`${BASE_URL}/${data[data.length - 1]}`}>{data.length}</Link> }
            { current + 2 < data.length && <Link to={`${BASE_URL}/${data[current]}`}><i className="la la-angle-right"></i></Link>}
        </PaginationContainer>
    )
}

const FilterDropDown = ({ data = [], label, defaultValue = "none", onItemClick, noValue }) => {
    const [open, toggleSelect] = useState(false);
    const setCategory = (i, e) => {
        if(typeof onItemClick === 'function') {onItemClick(e, i);toggleSelect(false);}
    }

    return (
        <FilterDropDownCon>
            { label && <label>{label} : </label>}
            <div className="category__select" onClick={() => toggleSelect(!open)}>
                <div className="category__select__display">
                    <div>{firstToUpper(defaultValue)}</div>
                    <i className={`la la-angle-${ open ? 'up' : 'down' }`}></i>
                </div>
                { open && <ul>
                    { noValue && <li onClick={() => setCategory(noValue)}>{firstToUpper(noValue)}</li> }
                    { data.map((cat, i) => typeof cat === "object" ? <li key={i} onClick={e => setCategory(e, i)}>{firstToUpper(cat.name)}</li> : <li key={i} onClick={e => setCategory(e, i)}>{firstToUpper(cat)}</li>) }
                </ul> }
            </div>
        </FilterDropDownCon>
    )
}

export const PageLoader = () => {
    return <PageLoaderContainer />
}

export { Tooltip, SeeMoreButton, ZeroFound, Spinner, Searching, ScrollToTop, ScrollToView, Overlay, Modal, Pagination, FilterDropDown }
