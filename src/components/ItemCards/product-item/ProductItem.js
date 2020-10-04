import React from "react";
import { ProductItemContainer, Tag, Actions } from "./style";
import { Link } from "react-router-dom";
import { Tooltip } from "../../Helpers/Helpers";
import { wordsToUpper } from "../../../utils";
import { SpanSkeleton, DivSkeleton } from "../../skeleton/style";
import { formatMoney } from "../../../utils/format";

const LowerContainer = ({ className = "", name, discount, price }) => {
  return (
    <div className={` ${className} `}>
      <label>{wordsToUpper(name)}</label>
      <div id="priceContainer">
        <span className="price">
          {discount
            ? `₦${formatMoney(price - Math.ceil((price * discount) / 100))}`
            : `₦${formatMoney(price)}`}
        </span>
        <span className="price">₦{discount ? formatMoney(price) : ""}</span>
      </div>
    </div>
  );
};

const ProductItem = ({
  _id,
  images,
  name,
  price,
  discount,
  store,
  showStore = true,
}) => {
  return (
    <ProductItemContainer>
      <div className="content">
        {discount ? <Tag>{discount}%</Tag> : ""}
        <img src={`${images && images[0]}`} alt={name} />
        <LowerContainer
          className="bottom-container"
          name={name}
          discount={discount}
          price={price}
        />
      </div>
      <Actions>
        <div>
          <Link className="icon-con" to={`/product/${_id}`}>
            <i className="la la-eye"></i>
            <Tooltip text="View Product" position="bottom" />
          </Link>
          {showStore && (
            <Link
              className="icon-con"
              to={store ? `/stores/${store._id}` : "#!"}
            >
              <Tooltip text="View Store" position="bottom" />
              <i className="la la-user"></i>
            </Link>
          )}
        </div>
        <LowerContainer
          name={name}
          discount={discount}
          price={price}
        />
      </Actions>
    </ProductItemContainer>
  );
};

const ProductItemSkeleton = () => {
  return (
    <ProductItemContainer>
      <div className="content" style={{ padding: "4px" }}>
        <DivSkeleton style={{ width: "100%", height: "250px" }} />
        <div className="bottom_container">
          <SpanSkeleton style={{ width: "90%", marginTop: "6px" }} />
          <div id="priceContainer">
            <SpanSkeleton />
            <SpanSkeleton />
          </div>
        </div>
      </div>
    </ProductItemContainer>
  );
};

export { ProductItem, ProductItemSkeleton };
