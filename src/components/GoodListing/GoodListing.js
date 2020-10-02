import React, { useState } from 'react'
import { GoodListingContainer } from './style'
import { wordsToUpper } from '../../utils'
import { Link } from 'react-router-dom'
import { SeeMoreButton } from '../Helpers/Helpers'
import { DivSkeleton, SpanSkeleton } from '../skeleton/style'

const GoodListing = ({ data }) => {
    const [displayedItems, setDisplayedItems] = useState(4);
    return (
        <GoodListingContainer> 
            <div className="wrapper">
                <h2>Sold By {data.length} More Seller</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Price</th>
                            <th className="d-none d-sm-table-cell">Description</th>
                            <th>Seller Information</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(({price, description, store, views, _id}, i) => i < displayedItems &&  <tr key={i}>
                                    <td>₦{price}</td>
                                    <td className="d-none d-sm-table-cell">{ description ? <>{ description.length > 60 ? wordsToUpper(`${description.slice(0, 60)}...`) : wordsToUpper(description)}</> : 'No Description Available for this Product!'}</td>
                                    <td>
                                        <span>{ store ? wordsToUpper(store.name) : 'Anonymous'}</span>
                                        <span className="d-none d-sm-block">{views} Views</span>
                                    </td>
                                    <td><Link to={`/product/${_id}`}>View</Link></td>
                                </tr>
                            )}
                    </tbody>
                </table>
                { displayedItems < data.length && <SeeMoreButton onClick={() => setDisplayedItems(displayedItems + 4)} /> }
            </div>
        </GoodListingContainer>
    )
}

const GoodListingSkeleton = () => {
    return (
        <GoodListingContainer> 
            <div className="wrapper">
                <h2>Sold By 0 More Seller</h2>
                <SpanSkeleton style={{ width: '40%', marginTop: '6px'}}/>
                <DivSkeleton style={{ height: '40px'}} />
            </div>
        </GoodListingContainer>
    )
}

export { GoodListing, GoodListingSkeleton }
