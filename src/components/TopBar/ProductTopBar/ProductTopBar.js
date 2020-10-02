import React, { Fragment } from "react";
import { TopBarContainer, SocialItem } from "./style";
import { wordsToUpper, getSocialValue } from "../../../utils";
import { Tooltip } from "../../Helpers/Helpers";
import Moment from "react-moment";
import { H2Skeleton, SpanSkeleton } from "../../skeleton/style";

const ProductTopBar = ({ name, brand, views, createdAt, store }) => {
  let contact = store ? store.contact : {};
  let contactArray = [];
  let d;
  const getContactField = (primaryField) => {
    switch (primaryField) {
      case "email":
        return "google_plus";
      default:
        return primaryField;
    }
  };
  for (d in contact) {
    let field = getContactField(d);
    contactArray.push({ field: field, value: contact[d] });
  }

  return (
    <TopBarContainer>
      <div className="wrapper row m-0">
        <div className="col-12 col-md-8 p-0">
          <h2>{wordsToUpper(name)}</h2>
          <ul className="row p-0 mx-0 my-2">
            <li className="col-4 px-0">
              Brand: <span>{brand}</span>
            </li>
            <li className="col-4 px-0">
              <span>{views}</span> Views
            </li>
            <li className="col-4 px-0">
              <span>Posted:</span> <Moment fromNow>{createdAt}</Moment>
            </li>
          </ul>
        </div>
        <div className="col-12 col-md-4 p-0 m-0" style={{ overflow: "hidden" }}>
          {contactArray.length ? (
            <Fragment>
              {contactArray.map((item, i) => (
                <SocialItem bg={item.field} key={i}>
                  <i
                    className={`fa fa-${
                      item.field === "google_plus" ? "google-plus" : item.field
                    }`}
                  ></i>
                  <Tooltip
                    position="bottom"
                    text={getSocialValue(item.field, item.value)}
                  />
                </SocialItem>
              ))}
            </Fragment>
          ) : (
            <p>No Contact Detail Available...</p>
          )}
        </div>
      </div>
    </TopBarContainer>
  );
};

const ProductTopBarSkeleton = () => {
  return (
    <TopBarContainer>
      <div className="wrapper row m-0 skeleton">
        <div className="col-12 col-md-8 p-0">
          <H2Skeleton style={{ width: "98%", height: "50px" }} />
          <ul className="row p-0 mx-0 my-2">
            <li className="col-4 px-0">
              <SpanSkeleton style={{ width: "50%" }} />
            </li>
            <li className="col-4 px-0">
              <SpanSkeleton style={{ width: "50%" }} />
            </li>
            <li className="col-4 px-0">
              <SpanSkeleton style={{ width: "50%" }} />
            </li>
          </ul>
        </div>
        <div className="col-12 col-md-4 p-0 m-0" style={{ overflow: "hidden" }}>
          {[1, 2, 3, 4].map((i) => (
            <SpanSkeleton key={i} style={{ height: "40px", width: "40px" }} />
          ))}
        </div>
      </div>
    </TopBarContainer>
  );
};

export { ProductTopBar, ProductTopBarSkeleton };
