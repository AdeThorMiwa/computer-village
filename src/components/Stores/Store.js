import React from "react";
import {
  StoreComponentContainer,
  Background,
  Info,
  Tags,
  Tag,
  Description,
  Clearfix,
} from "./style";
import { firstToUpper } from "../../utils";
import { Link } from "react-router-dom";
import { H3Skeleton, SpanSkeleton, DivSkeleton } from "../skeleton/style";

const Store = ({ _id, name, category = [], description }) => {
  const color = `rgb(${Math.floor(Math.random() * 200)},${Math.floor(
    Math.random() * 200
  )},${Math.floor(Math.random() * 225)})`;
  return (
    <StoreComponentContainer color={color}>
      <Background color={color}>{name[0]}</Background>
      <Info>
        <h3>
          <Link to={`/stores/${_id}`}>{firstToUpper(name)}</Link>
        </h3>
        <Tags>
          {category.map((item, i) => i < 3 && <Tag key={i}>{item}</Tag>)}
        </Tags>
        {category.length <= 2 && <Clearfix />}
      </Info>
      <Description color={color}>
        {description && description.length > 50
          ? `${description.slice(0, 47)}...`
          : description}
      </Description>
    </StoreComponentContainer>
  );
};

const StoreSkeleton = () => {
  return (
    <StoreComponentContainer>
      <DivSkeleton
        style={{ width: "100%", height: "100px", borderRadius: 0 }}
      />
      <Info>
        <H3Skeleton style={{ width: "100%" }} />
        <Tags>
          <SpanSkeleton style={{ height: "15px", width: "32%" }} />
          <SpanSkeleton
            style={{ height: "15px", width: "32%", margin: "0px 2%" }}
          />
          <SpanSkeleton style={{ height: "15px", width: "32%" }} />
        </Tags>
      </Info>
      <Description>
        <SpanSkeleton style={{ width: "100%" }} />
      </Description>
    </StoreComponentContainer>
  );
};

export { Store, StoreSkeleton };
