import React from 'react';
import { RouteNavContainer } from './style';
import { useLocation, Link } from 'react-router-dom';

const RouteNav = ({ open }) => {
    const location = useLocation();
    let routes = location.pathname;
    routes = routes[routes.length - 1] === "/" ? routes.slice(1, routes.length - 2) : routes.slice(1, routes.length);
    routes = routes.split('/');
 
    let to = "";

    return (
        <RouteNavContainer className="row m-0">
            <ul className={`wrapper col-12 col-md-10 p-2 p-md-0 ${open ? '' : 'hide'}`}>
                <li><Link to="/"> <i className="fa fa-home"></i> Home</Link></li>
                { routes.map((route, i) => {
                    to = `${to}/${route}`;
                    return <li key={i} className={i===routes.length-1 ? 'd-none d-sm-block' : ''}><Link to={to}>{route}</Link></li>
                })}
            </ul>
        </RouteNavContainer>
    )
}

export default RouteNav
