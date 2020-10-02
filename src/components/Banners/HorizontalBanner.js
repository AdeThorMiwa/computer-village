import React from "react";
import { HBanner } from "./style";
import { wordsToUpper } from "../../utils";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { H3Skeleton, SpanSkeleton } from "../skeleton/style";
import { ParagraphSkeleton } from "../skeleton/Skeleton";

const HorizontalBanner = ({
  _id,
  name,
  description = `Get this ${name} at an affordable price`,
  images,
  price,
  oldPrice,
}) => {
  return (
    <HBanner bg={`${images && images[0]}`}>
      <div className="row px-3 px-md-4 py-3 py-md-4 m-0">
        <div className="desc col-12 col-md-6">
          <h3 className="text-md-small">{wordsToUpper(name)}</h3>
          <p>{description.slice(0, 200)}</p>
        </div>
        <div className="pricing col-12 col-md-6">
          <span className="oldPrice d-none d-sm-flex">
            {!oldPrice ? "$00.00" : oldPrice}
          </span>
          <span className="newPrice d-none d-sm-flex">${price}</span>
          <Link to={`/product/${_id}`}>View Now</Link>
        </div>
      </div>
    </HBanner>
  );
};

const HorizontalBannerSkeleton = () => {
  return (
    <HBanner className="skeleton-container">
      <div className="row px-3 px-md-4 py-3 py-md-4 m-0">
        <div className="desc col-12 col-md-6">
          <H3Skeleton style={{ width: "100%", height: "40px" }} />
          <ParagraphSkeleton />
        </div>
        <div className="pricing col-12 col-md-6">
          <SpanSkeleton className="d-none d-sm-flex" />
          <SpanSkeleton
            className="d-none d-sm-flex"
            style={{ width: "100px", marginTop: "6px", height: "35px" }}
          />
          <SpanSkeleton
            style={{ width: "100px", marginTop: "10px", height: "40px" }}
          />
        </div>
      </div>
    </HBanner>
  );
};

export { HorizontalBanner, HorizontalBannerSkeleton };
