import React from 'react';
import { LinksContainer, LinksWrapper } from './style';
import { Link } from 'react-router-dom';
import { linkListingData } from '../../../settings/footerData';
import NewsLetter from '../../NewsLetter/NewsLetter';

const LinkListings = ({ showTerms, setShowTerms }) => {
    return (
        <LinksContainer itemCount={linkListingData.length}> 
            <div> 
                <div className="row m-0 pt-2">
                    <div className="wrapper p-0 col-12 col-md-8">
                        <div className="row m-0" style={{ width: '100%'}}>
                        {linkListingData.slice(0,5).map(({title, links}, i) => {
                            return (
                                <LinksWrapper key={i} className="col-12 col-sm-4 p-3  p-md-0 text-center text-sm-left">
                                    <h4>{title}</h4>
                                    <div className="align-sm-center"> 
                                        {links.map(({title, url, modal}, j) => url && (url.includes('http') || url.includes('www')) ? <a href={url} key={j}>{title}</a> : modal ? <span key={j} onClick={url === 'terms' && (() => setShowTerms(!showTerms))}>{title}</span> : <Link to={url} key={j}>{title}</Link>)}
                                    </div>
                                </LinksWrapper>
                            )
                        })}
                        </div>
                    </div>
                    <div className="newsletter col-12 col-md-4">
                        <h4 className="text-center text-md-left">Newsletter</h4>
                        <div>
                            <p className="text-center text-md-left">Register now to get updates on promotions & coupons</p>
                            <NewsLetter />
                            {/* <div>
                                <h5 className="text-center text-md-left">Follow Us</h5>
                                <div className="p-4 p-md-2">
                                    <i className="fa fa-twitter"></i>
                                    <i className="fa fa-facebook"></i>
                                    <i className="fa fa-google-plus"></i>
                                    <i className="fa fa-instagram"></i>
                                    <i className="fa fa-youtube"></i>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </LinksContainer>
    )
}

export default LinkListings
