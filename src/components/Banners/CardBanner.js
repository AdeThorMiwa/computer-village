import React, { useState, useEffect } from "react";
import { CardBannerContainer } from "./style";
import { wordsToUpper } from "../../utils";
import { Link } from "react-router-dom";
import { H2Skeleton, H4Skeleton, SpanSkeleton } from "../skeleton/style";
import { formatMoney } from "../../utils/format";

const CardBanner = ({ _id, images, name, price, brand, className = "" }) => {
  const starters = ["Amazing new", "Get Awesome"];

  const [randomIndex, setRandomIndex] = useState(0);
  useEffect(() => {
    setRandomIndex(Math.floor(Math.random() * starters.length));
  }, [starters.length]);

  return (
    <CardBannerContainer
      bg={`${images && images[0]}`}
      className={`${className}`}
    >
      <div>
        <h4>{wordsToUpper(name)}</h4>
        <h2>
          {starters[randomIndex]} {brand}
        </h2>
        <span>
          Starting at <span>₦{formatMoney(price)}</span>
        </span>
        <Link to={`/product/${_id}`}>View</Link>
      </div>
    </CardBannerContainer>
  );
};

const CardBannerSkeleton = () => {
  return (
    <CardBannerContainer>
      <div>
        <H4Skeleton
          style={{ height: "18px", width: "70%", marginTop: "14px" }}
        />
        <H2Skeleton
          style={{ width: "80%", height: "30px", marginTop: "16px" }}
        />
        <SpanSkeleton style={{ width: "50%", marginTop: "12px" }} />
      </div>
    </CardBannerContainer>
  );
};

export { CardBanner, CardBannerSkeleton };
