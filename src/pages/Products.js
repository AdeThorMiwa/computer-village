import React, { Fragment, useEffect, useState } from "react";
import { CategoryTopBar } from "../components/TopBar/CategoryTopBar/CategoryTopBar";
import {
  ProductItem,
  ProductItemSkeleton,
} from "../components/ItemCards/product-item/ProductItem";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectAllProducts } from "../redux/product/product.selector";
import {
  clearProducts,
  fetchProductsStartAsync,
} from "../redux/product/product.actions";
import { SeeMoreButton, ZeroFound } from "../components/Helpers/Helpers";
import { getProperSort } from "../utils/index";
import HOST from "../proxy";

const Products = ({
  match: {
    params: { category, brand },
  },
  products,
  fetchProducts,
  clearProducts,
}) => {
  const [sortBy, setSortBy] = useState("all");
  const [pageOffset, setPageOffset] = useState(1);
  useEffect(() => {
    fetchProducts(
      `${HOST}/api/good?category=${category}&brand=${brand}&limit=10&page=${pageOffset}${
        sortBy && `&sort=${getProperSort(sortBy)}`
      }`,
      pageOffset
    );
  }, [fetchProducts, category, brand, sortBy, pageOffset]);

  useEffect(() => {
    return () => {
      clearProducts();
    };
  }, [clearProducts]);

  const data = [
    {
      name: "date",
    },
    {
      name: "name",
    },
    {
      name: "views",
    },
  ];
  const itemClickHandler = (item) => {
    if (item === undefined) {
      setSortBy("all");
    } else {
      clearProducts();
      setSortBy(data[item].name);
      setPageOffset(1);
    }
  };
  return (
    <Fragment>
      <CategoryTopBar
        label="Sort By"
        noValue="All"
        title={brand}
        data={data}
        onItemClick={itemClickHandler}
        defaultValue={sortBy}
      />
      <section className="row m-0">
        {products ? (
          <>
            {" "}
            {products.length ? (
              products.map((product, i) => (
                <div
                  key={i}
                  className="col-6 col-sm-4 col-md-3 col-lg-auto p-0"
                >
                  <ProductItem {...product} />
                </div>
              ))
            ) : (
              <ZeroFound text="No Item Found..." />
            )}{" "}
          </>
        ) : (
          [1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className={`col-6 col-sm-4 col-md-3 col-lg-auto p-0 ${
                i > 3 && "d-none d-sm-block"
              }`}
            >
              <ProductItemSkeleton />
            </div>
          ))
        )}
      </section>
      {products && products.length ? (
        <SeeMoreButton onClick={() => setPageOffset(pageOffset + 1)} />
      ) : (
        ""
      )}
    </Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  products: selectAllProducts,
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: (url, page) => dispatch(fetchProductsStartAsync(url, page)),
  clearProducts: () => dispatch(clearProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
