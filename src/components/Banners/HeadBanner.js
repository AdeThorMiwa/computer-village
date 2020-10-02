import React from "react";
import { HeadBannerContainer } from "./style";
import { wordsToUpper } from "../../utils";
import { Link } from "react-router-dom";
import { H3Skeleton, SpanSkeleton, ButtonSkeleton } from "../skeleton/style";

const HeadBanner = ({ _id, images, name, discount }) => {
  return (
    <HeadBannerContainer bg={images && images[0]}>
      <div>
        <div className="desc">
          <h3>{wordsToUpper(name)}</h3>
          <div>
            <span className="d-none d-sm-flex">Sale up to</span>
            <span className="percent-off">{discount}% Off</span>
          </div>
          <Link to={`/product/${_id}`}>View Now</Link>
        </div>
      </div>
    </HeadBannerContainer>
  );
};

const HeadBannerSkeleton = () => {
  return (
    <HeadBannerContainer className="skeleton-container">
      <div className="skeleton">
        <div className="desc">
          <H3Skeleton />
          <div>
            <SpanSkeleton className="d-none d-sm-flex" />
            <SpanSkeleton className="percent-off" />
          </div>
          <ButtonSkeleton />
        </div>
      </div>
    </HeadBannerContainer>
  );
};

export { HeadBanner, HeadBannerSkeleton };
