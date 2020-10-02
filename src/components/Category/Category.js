import React, { Fragment, useEffect, useState } from "react";
import { CATContainer, CATHeader } from "./style";
import {
  ProductItem,
  ProductItemSkeleton,
} from "../ItemCards/product-item/ProductItem";
import Slider from "react-slick";
import { settings } from "./slideSetting";
import { inArray } from "../../utils/index";
import HOST from "../../proxy";

const Category = ({ title, dataSource, menu, exclude = [] }) => {
  const [data, setData] = useState(null);
  const [source, setSource] = useState(dataSource);
  const skeleton = [1, 2, 3, 4, 5];

  useEffect(() => {
    if (dataSource) {
      fetch(`${HOST}${source}`)
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((err) => {});
    } else {
      setData([]);
    }
  }, [source, dataSource]);

  const onClickHandler = (e, source) => {
    setSource(source);
  };

  return (
    <CATContainer>
      <CATHeader>
        <h3
          style={{
            textAlign: !menu ? "center" : "",
            width: !menu ? "100%" : "",
          }}
        >
          {title}
        </h3>
        <nav>
          <ul className="d-none d-md-flex">
            {menu && (
              <Fragment>
                {menu.map((item, i) => (
                  <li
                    key={i}
                    onClick={(e) => onClickHandler(e, item.dataSource)}
                  >
                    {item.title}
                  </li>
                ))}
              </Fragment>
            )}
          </ul>
        </nav>
      </CATHeader>
      <div className="row">
        <div className="col-12">
          <Slider {...settings}>
            {data
              ? data.map(
                  (item, i) =>
                    !inArray(exclude, item._id) && (
                      <ProductItem key={i} {...item} />
                    )
                )
              : skeleton.map((i) => <ProductItemSkeleton key={i} />)}
          </Slider>
        </div>
      </div>
    </CATContainer>
  );
};

const CategorySkeleton = ({ title }) => {
  return (
    <CATContainer>
      <CATHeader>
        <h3 style={{ textAlign: "center", width: "100%" }}>{title}</h3>
      </CATHeader>
      <div className="row">
        <div className="col-12">
          <Slider {...settings}>
            {[1, 2, 3, 4, 5].map((i) => (
              <ProductItemSkeleton key={i} />
            ))}
          </Slider>
        </div>
      </div>
    </CATContainer>
  );
};

export { Category, CategorySkeleton };
