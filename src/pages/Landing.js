import React, { Fragment, useState, useEffect } from "react";
import Slider from "react-slick";
import CategoryList from "../components/CategoryList/CategoryList";
import { Category } from "../components/Category/Category";
import {
  HorizontalBanner,
  HorizontalBannerSkeleton,
} from "../components/Banners/HorizontalBanner";

import {
  HeadBanner,
  HeadBannerSkeleton,
} from "../components/Banners/HeadBanner";
import {
  CardBanner,
  CardBannerSkeleton,
} from "../components/Banners/CardBanner";
import { Layout } from "../settings/landingPage";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectHighlightTodaysDeal,
  selectHighlightNewOffer,
} from "../redux/site/site.selector";
import StoreListing from "../components/StoreListing/StoreListing";
import HOST from "../proxy";

const Landing = ({ highlightTodayDeals, highlightNewOffer }) => {
  const {
    sliderSetting,
    categories,
    bannerSource: { topMainBanners, topSideBanner, adsBanner },
    topCategoryListings: { title, dataSource },
  } = Layout;

  const [headerBanners, setHeaderBanners] = useState([]);
  const [sideBanner, setTopSideBanner] = useState(null);
  const [adsBanners, setAdsBanners] = useState(null);

  // fetch Top Main Banners...
  useEffect(() => {
    fetch(`${HOST}${topMainBanners}`)
      .then((res) => res.json())
      .then((data) => setHeaderBanners(data));
  }, [setHeaderBanners, topMainBanners]);
  // fetch Top SIde Banner...
  useEffect(() => {
    fetch(`${HOST}${topSideBanner}`)
      .then((res) => res.json())
      .then((data) => setTopSideBanner(data));
  }, [setTopSideBanner, topSideBanner]);
  // fetch Ads Banner...
  useEffect(() => {
    fetch(`${HOST}${adsBanner}`)
      .then((res) => res.json())
      .then((data) => setAdsBanners(data));
  }, [setAdsBanners, adsBanner]);

  return (
    <Fragment>
      <div className="row" id="today-deals">
        <div className="col-12 col-md-9 col-lg-8 py-2">
          {headerBanners.length ? (
            <Slider
              {...sliderSetting}
              className={` transition ${
                highlightTodayDeals ? "highlighter" : ""
              }`}
            >
              {headerBanners.map((banner, i) => (
                <HeadBanner key={i} {...banner} />
              ))}
            </Slider>
          ) : (
            <HeadBannerSkeleton />
          )}
        </div>
        <div className="col-12 col-md-3 d-none d-md-block col-lg-4 py-2">
          {sideBanner !== null ? (
            <CardBanner
              className={`${highlightNewOffer ? "highlighter" : ""}`}
              {...sideBanner[0]}
            />
          ) : (
            <CardBannerSkeleton />
          )}
        </div>
      </div>
      <CategoryList title={title} dataSource={dataSource} />
      {categories.map(({ title, menu, defaultSource }, i) =>
        i <= 1 ? (
          <div className="my-4" key={i}>
            <Category title={title} dataSource={defaultSource} menu={menu} />
          </div>
        ) : (
          ""
        )
      )}
      {adsBanners ? (
        <HorizontalBanner {...adsBanners[0]} />
      ) : (
        <HorizontalBannerSkeleton />
      )}
      {categories.map(({ title, menu, defaultSource }, i) =>
        i >= 2 && i <= 3 ? (
          <div className="my-4" key={i}>
            <Category title={title} dataSource={defaultSource} menu={menu} />
          </div>
        ) : (
          ""
        )
      )}
      <div id="best-sellers" className="my-4">
        <StoreListing />
      </div>
      {categories.map(({ title, menu, defaultSource }, i) =>
        i >= 4 && i <= 6 ? (
          <div className="my-4" key={i}>
            <Category title={title} dataSource={defaultSource} menu={menu} />
          </div>
        ) : (
          ""
        )
      )}
    </Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  highlightTodayDeals: selectHighlightTodaysDeal,
  highlightNewOffer: selectHighlightNewOffer,
});

export default connect(mapStateToProps)(Landing);
