import React, { useEffect } from 'react'
import { StoreListingContainer } from './style'
import Slider from 'react-slick'
import { settings } from './sliderSetting'
import { Store, StoreSkeleton } from '../Stores/Store'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectStores } from '../../redux/store/store.selectors'
import { fetchStoresAsync } from '../../redux/store/store.action'
import { Spinner } from '../Helpers/Helpers'

const StoreListing = ({ stores, fetchStores }) => {

    useEffect(() => {
        fetchStores()
    }, [fetchStores]) 
    
    return (
        <StoreListingContainer>
            <h2>Best Sellers</h2>
            <Slider className="storeListingSlider" {...settings}>
                { stores ? ( (stores.length > 0 ) ? ( 
                        stores.map((store, i) => <div className="wrapper" key={i}><Store {...store} /></div>)
                    ) : (
                        [1,2,3,4,5,6,7].map(i => <div className="wrapper" key={i}><StoreSkeleton /></div>)
                    )) : <Spinner />
                }
            </Slider>
        </StoreListingContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    stores: selectStores
})

const mapDispatchToProps = dispatch => ({
    fetchStores: () => dispatch(fetchStoresAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(StoreListing)
