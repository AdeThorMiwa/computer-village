import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentProduct, selectAllProducts, isProductLoading } from '../redux/product/product.selector';
import { fetchProductStartAsync, fetchProductRelatedByNameAsync, clearProduct, clearProducts } from '../redux/product/product.actions';

import { ImageZoom, ImageZoomSkeleton } from '../components/ImageZoom/ImageZoom';

import { SideContent, SideContentSkeleton } from '../components/ItemSideContent/SideContent';
import { Category, CategorySkeleton } from '../components/Category/Category';
import { GoodListing } from '../components/GoodListing/GoodListing';
import { ProductTopBar, ProductTopBarSkeleton } from '../components/TopBar/ProductTopBar/ProductTopBar';
import { ZeroFound } from '../components/Helpers/Helpers';


const Product = ({ currentProduct, products, match, fetchProduct, fetchRelatedProducts, clearProduct, clearProducts }) => {

    useEffect(() => {
        fetchProduct(match.params.productId);

        return () => {
            clearProduct()
        }
    }, [fetchProduct, match.params.productId, clearProduct])

    useEffect(() => {
        if(currentProduct) { fetchRelatedProducts(currentProduct.category, currentProduct.name) }
        return () => {
            clearProducts()
        }
    }, [fetchRelatedProducts, currentProduct, clearProducts])

    return (
        <Fragment>
            { currentProduct ? <ProductTopBar {...currentProduct} /> : <ProductTopBarSkeleton /> }
            <section className="row m-0"> 
                <div className="col-12 col-md-7 p-0">
                    { currentProduct ? <ImageZoom data={currentProduct.images} /> : <ImageZoomSkeleton />}
                </div>
                <div className="col-12 col-md-5 p-0">
                    { currentProduct ? <SideContent {...currentProduct} /> : <SideContentSkeleton />  } 
                </div>
            </section>
            { products ? <> { products.length ? <GoodListing data={products} /> : <ZeroFound /> } </> : "" }
            <div className="my-3">
                { currentProduct ? <Category title="Other Products From This Store" dataSource={currentProduct.store ? `/api/good?limit=10&sort=-createdAt&store=${currentProduct.store._id}` : ''} exclude={[currentProduct._id]} showMenu={false} /> : <CategorySkeleton title="Other Products From This Store" /> }
            </div>
        </Fragment>
    )
};

const mapStateToProps = createStructuredSelector({
    currentProduct: selectCurrentProduct,
    products: selectAllProducts,
    isLoading: isProductLoading
})

const mapDispatchToProps = dispatch => ({
    fetchProduct: id => dispatch(fetchProductStartAsync(id)),
    fetchRelatedProducts: (category, name) => dispatch(fetchProductRelatedByNameAsync(category, name)),
    clearProduct: () => dispatch(clearProduct()),
    clearProducts: () => dispatch(clearProducts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Product);