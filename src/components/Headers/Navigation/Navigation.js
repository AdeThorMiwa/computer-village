import React from 'react'
import { NavContainer } from './style';
import { useLocation, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { todaysDealClick, newOfferClick } from '../../../redux/site/site.action';
import { ScrollToView } from '../../Helpers/Helpers';

const Navigation = ({ size, showTodaysDeal, showNewOffer }) => {
    const location = useLocation()
    const isHome = location.pathname === "/";
    return (
        <NavContainer isHome={isHome} className="d-none d-sm-block row m-0">
            <ul className={`wrapper nav-${size} col-lg-10 col-md-11 px-2 px-md-0`}>
                <li><Link to="/"><i className="la la-home"> </i> Home</Link></li>
                <li><Link to="/category">All Categories</Link></li>
                <li onClick={() => showTodaysDeal()}><ScrollToView link="#today-deals"> Today Deals</ScrollToView></li>
                <li><ScrollToView link="/#best-sellers">Best Sellers <i className="fa fa-star" style={{ color: 'gold'}}></i></ScrollToView></li>
                <li onClick={() => showNewOffer()}><ScrollToView link="#today-deals"> New Offers</ScrollToView></li>
            </ul>
        </NavContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    showTodaysDeal: () => dispatch(todaysDealClick()),
    showNewOffer: () => dispatch(newOfferClick())
})

export default connect(null, mapDispatchToProps)(Navigation);
