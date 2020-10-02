import React from 'react'
import { SideContentWrapper, Color } from './style';
import { Link } from "react-router-dom";
import { firstToUpper } from '../../utils';
import Moment from 'react-moment';
import { SpanSkeleton, IconSkeleton, AnchorSkeleton } from '../skeleton/style';
import { ParagraphSkeleton } from '../skeleton/Skeleton';

const SideContent = ({ store , price, discount, discountTill, description, availableColor = [], guarantee }) => {
    return (
        <SideContentWrapper>
            <div>
                <div>
                    <span>{ discount ? `₦${price - Math.ceil((price * discount) / 100)}` : `₦${price}`}</span>
                    <span>{ discount ? `₦${price}` : ''}</span>
                    <span>{ discount ? `(-${discount}%)` : ''}</span>
                </div>
                <ul>
                    { discount ? <li><i className="fa fa-tag"></i>{ discount }% discount available on every purchase you make at <b style={{color: '#000'}}>₦{price}</b> till <b style={{color: '#000'}}><Moment format="DD/MM/YYYY">{discountTill}</Moment></b></li> : <li><i className="fa fa-tag"></i> 0% Discount Available On All Sale</li>}
                </ul>
                <div>Status: <span>In Stock</span></div>
            </div>
            <hr/>
            <div className="">
                <h4><i className="fa fa-info-circle"> </i> Description</h4>
                <p>{description ? firstToUpper(description) : 'No Description Available For This Product'}</p>
            </div>
            <hr/>
            <div>
                <h4>Available Colors</h4>
                <div className="colorContainer">
                    {availableColor.map((color, i) => <Color key={i} color={color}/>)}
                </div>
                <div className="guarantee">
                    <i className="la la-check"></i>
                    <label>{ guarantee && guarantee !== "0" ? `${guarantee} Year` : 'No'} Guarantee</label>
                </div>
            </div>
            <div>
                <Link to={ store ? `/stores/${store._id}` : ''}>View Store <i className="la la-eye"></i></Link>
            </div>
        </SideContentWrapper>
    )
}

const SideContentSkeleton = () => {
    return (
        <SideContentWrapper>
            <div>
                <div>
                    <SpanSkeleton style={{width: '100px', height: '40px'}} />
                    <SpanSkeleton />
                </div>
                <ul>
                    <li><ParagraphSkeleton /></li>
                </ul>
                <div>Status: <span>In Stock</span></div>
            </div>
            <hr/>
            <div className="skeleton-container">
                <h4><i className="fa fa-info-circle"> </i> Description</h4>
                <ParagraphSkeleton />
            </div>
            <hr/>
            <div>
                <h4>Available Colors</h4>
                <div className="colorContainer">
                    <SpanSkeleton style={{ height: '50px', marginRight: '6px'}} />
                    <SpanSkeleton style={{ height: '50px', marginRight: '6px'}} />
                    <SpanSkeleton style={{ height: '50px', marginRight: '6px'}} />
                    <SpanSkeleton style={{ height: '50px', marginRight: '6px'}} />
                </div>
                <div className="guarantee">
                    <IconSkeleton />
                    <SpanSkeleton style={{marginLeft: '6px'}} />
                </div>
            </div>
            <div>
                <AnchorSkeleton />
            </div>
        </SideContentWrapper>
    )
}

export { SideContent, SideContentSkeleton }
