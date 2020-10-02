import React from 'react'
import { ListingContainer } from './style'
import { qualityListingData } from '../../../settings/footerData'

const Listings = () => {
    return (  
        <ListingContainer itemCount={qualityListingData.length}>
            { qualityListingData.length > 0 && <div  className="row m-0">
                {qualityListingData.slice(0,5).map(({icon, title, text}, i) => {
                    return (
                        <div key={i} className={`col-12  col-lg-3 col-sm-6 ${i === (qualityListingData.length -1) && 'pr-0'}`}>
                            <i className={icon}></i>
                            <div>
                                <span>{title}</span>
                                <span>{text}</span>
                            </div>
                        </div>
                    )
                })}
            </div> }
        </ListingContainer>
    )
}

export default Listings
