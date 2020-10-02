import React, { useEffect, useState } from "react";
import {
  CLContainer,
  CLHeader,
  CLRow,
  CLCol,
  CLMinContainer,
  CLImage,
  CLTitle,
  CLListGroup,
  CLListItem,
} from "./style";
import { wordsToUpper, firstToUpper } from "../../utils";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { SpanSkeleton, DivSkeleton, H3Skeleton } from "../skeleton/style";

const CategoryList = ({ title, dataSource, data = [] }) => {
  const [categories, setCategories] = useState(data);
  const skeleton = [1, 2, 3, 4, 5, 6];
  useEffect(() => {
    fetch(dataSource)
      .then((res) => res.json())
      .then((res) => setCategories(res))
      .catch((e) => {});
  }, [dataSource]);

  return (
    <CLContainer>
      <CLHeader>{title}</CLHeader>
      <CLRow className="row m-0">
        {categories.length > 0
          ? categories.map(({ name, brand, thumbnail }, i) => {
              return (
                <div key={i} className="col-12 col-md-4 col-sm-6 p-odd">
                  <CLCol>
                    <CLMinContainer>
                      <CLImage src={thumbnail} />
                    </CLMinContainer>
                    <CLMinContainer style={{ marginLeft: "14px" }}>
                      <CLTitle>{wordsToUpper(name)}</CLTitle>
                      {brand.length > 0 && (
                        <CLListGroup>
                          {brand.slice(0, 4).map((item, i) => (
                            <CLListItem key={i}>
                              <Link
                                to={`/category/${name}/${item.name.toLowerCase()}`}
                              >
                                {firstToUpper(item.name)}
                              </Link>
                            </CLListItem>
                          ))}
                        </CLListGroup>
                      )}
                    </CLMinContainer>
                  </CLCol>
                </div>
              );
            })
          : skeleton.map((item, i) => (
              <div
                key={i}
                className={`col-12 col-md-4 col-sm-6 p-odd ${
                  i >= 3 && "d-none d-sm-block"
                }`}
              >
                <CLCol className="skeleton-container">
                  <CLMinContainer>
                    <DivSkeleton style={{ width: "100px", height: "100px" }} />
                  </CLMinContainer>
                  <CLMinContainer style={{ marginLeft: "14px" }}>
                    <H3Skeleton style={{ width: "100%", height: "20px" }} />
                    <CLListGroup>
                      <CLListItem>
                        <SpanSkeleton style={{ height: "10px" }} />
                      </CLListItem>
                      <CLListItem>
                        <SpanSkeleton style={{ height: "10px" }} />
                      </CLListItem>
                      <CLListItem>
                        <SpanSkeleton style={{ height: "10px" }} />
                      </CLListItem>
                      <CLListItem>
                        <SpanSkeleton style={{ height: "10px" }} />
                      </CLListItem>
                    </CLListGroup>
                  </CLMinContainer>
                </CLCol>
              </div>
            ))}
      </CLRow>
    </CLContainer>
  );
};

export default CategoryList;
