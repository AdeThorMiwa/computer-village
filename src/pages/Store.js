import React, { useEffect, Fragment, useState } from "react";
import { SideBar, SideBarSkeleton } from "../components/StoreSideBar/SideBar";
import {
  ProductItem,
  ProductItemSkeleton,
} from "../components/ItemCards/product-item/ProductItem";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentStore } from "../redux/store/store.selectors";
import { fetchStoreAsync } from "../redux/store/store.action";
import {
  fetchProductsStartAsync,
  clearProducts,
} from "../redux/product/product.actions";
import { selectAllProducts } from "../redux/product/product.selector";
import Colors from "../resource/color";
import { SeeMoreButton, ZeroFound } from "../components/Helpers/Helpers";
import HOST from "../proxy";

const Styles = {
  headerStyle: {
    border: "1px solid #888",
    background: Colors.Light,
    color: "#222",
    margin: 0,
    padding: "6px 10px",
    fontWeight: "normal",
  },
};

const Store = ({
  currentStore,
  products,
  match,
  fetchStore,
  fetchProducts,
  clearProducts,
}) => {
  const [pageOffset, setPageOffset] = useState(1);
  useEffect(() => {
    fetchStore(match.params.storeId);

    return () => {
      clearProducts();
    };
  }, [fetchStore, match.params.storeId, clearProducts]);

  useEffect(() => {
    fetchProducts(
      `${HOST}/api/good?store=${match.params.storeId}&limit=8&page=${pageOffset}`,
      pageOffset
    );
  }, [fetchProducts, match.params.storeId, pageOffset]);

  return (
    <div className="row m-0 my-4">
      <div className="col-12 col-md-4 col-lg-3">
        {currentStore ? <SideBar {...currentStore} /> : <SideBarSkeleton />}
      </div>
      <div className="col-12 col-md-8 col-lg-9 m-0 mt-2 mt-sm-0">
        <h2 style={Styles.headerStyle}>Products From This Store</h2>
        <div className="row m-0">
          {products ? (
            <>
              {" "}
              {products.length ? (
                <Fragment>
                  {products.map((product, i) => (
                    <div className="col-6 col-sm-4 col-lg-3 p-0" key={i}>
                      <ProductItem {...product} showStore={false} />
                    </div>
                  ))}
                </Fragment>
              ) : (
                <ZeroFound />
              )}{" "}
            </>
          ) : (
            [1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div className="col-6 col-sm-4 col-lg-3 p-0" key={i}>
                <ProductItemSkeleton />
              </div>
            ))
          )}
        </div>
        {products && products.length >= 8 && (
          <SeeMoreButton onClick={(e) => setPageOffset(pageOffset + 1)}>
            View More
          </SeeMoreButton>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentStore: selectCurrentStore,
  products: selectAllProducts,
});

const mapDispatchToProps = (dispatch) => ({
  fetchStore: (id) => dispatch(fetchStoreAsync(id)),
  fetchProducts: (url, page) => dispatch(fetchProductsStartAsync(url, page)),
  clearProducts: () => dispatch(clearProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Store);
