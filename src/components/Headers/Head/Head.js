import React, { useState, useRef, useEffect } from "react";
import { HeadContainer, SearchResult } from "./style";
import PropTypes from "prop-types";

import Settings from "../../../resource/settings";
import { useHistory, Link } from "react-router-dom";
import { connect } from "react-redux";
import { selectAllCategory } from "../../../redux/category/category.selector";
import { fetchAllCategoryStartAsync } from "../../../redux/category/category.actions";
import { createStructuredSelector } from "reselect";
import { firstToUpper } from "../../../utils/index";
import { selectSearchResult } from "../../../redux/search/search.selector";
import { fetchSearch } from "../../../redux/search/search.action";
import { Searching } from "../../Helpers/Helpers";

import SiteLogo from "../../../assets/img/village-market-logo.png";

const Head = ({
  navSize,
  allCategory,
  fetchAllCategory,
  searchResult,
  search,
}) => {
  let searchBox = useRef();
  let history = useHistory();

  useEffect(() => {
    fetchAllCategory();
  }, [fetchAllCategory]);

  useEffect(() => {
    setSearchQuery("");
  }, [history.location.pathname]);

  const [searchQuery, setSearchQuery] = useState("");
  const [posTop, setPosTop] = useState(0);
  const [isToggle, toggleCategories] = useState(false);
  const [menu, toggleMenu] = useState(false);

  const setUpSearch = (e) => {
    setSearchQuery(e.target.value);
    setPosTop(searchBox.current.offsetHeight + (navSize === "lg" ? 1 : 0));
    search(e.target.value);
  };

  const navigate = (page) => {
    history.push(page);
    toggleCategories(false);
    setSearchQuery("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    history.push(`/search/${searchQuery}`);
  };

  return (
    <HeadContainer navSize={navSize}>
      <div className="row p-1">
        <div className={`wrapper col-12 col-md-10 row  mt-1 mt-sm-4`}>
          <h2 className="site-name col-12 col-sm-3 text-center text-sm-left p-sm-2 p-md-0">
            <Link to="/">
              <img
                src={SiteLogo}
                className="site-logo"
                alt={Settings.siteName}
              />
            </Link>
          </h2>
          <div className="form-wrapper col-10 col-sm-7 pr-0 pr-md-2">
            <form onSubmit={(e) => handleSubmit(e)}>
              <div>
                <button
                  type="button"
                  onClick={() => toggleCategories(!isToggle)}
                >
                  All{" "}
                  <i className={`la la-angle-${isToggle ? "up" : "down"}`}></i>
                </button>
                <div className={`${isToggle ? "open" : ""}`}>
                  <ul className="list">
                    {allCategory && allCategory.length > 0
                      ? allCategory.map((category, i) => (
                          <li
                            key={i}
                            onClick={() =>
                              navigate(
                                `/category/${category.name.toLowerCase()}`
                              )
                            }
                          >
                            {firstToUpper(category.name)}
                          </li>
                        ))
                      : null}
                  </ul>
                </div>
              </div>
              <div>
                <input
                  type="text"
                  ref={searchBox}
                  value={searchQuery}
                  onChange={(e) => setUpSearch(e)}
                  placeholder="I'm shopping for..."
                />

                {searchQuery.trim() !== "" && (
                  <i
                    className="la la-times"
                    onClick={() => setSearchQuery("")}
                  ></i>
                )}

                {searchQuery.trim() !== "" && (
                  <SearchResult posTop={posTop}>
                    <ul>
                      {searchResult &&
                        searchResult.category.map((cat, i) => (
                          <li
                            className="li-cat"
                            onClick={() =>
                              navigate(`/category/${cat.name.toLowerCase()}`)
                            }
                            key={i}
                          >
                            <span>{firstToUpper(cat.name)}</span> in{" "}
                            <span>Categories</span>
                          </li>
                        ))}
                      {searchResult &&
                        searchResult.store.map((store, i) => (
                          <li
                            className="li-cat"
                            onClick={() => navigate(`/stores/${store._id}`)}
                            key={i}
                          >
                            <span>{searchQuery}</span> in{" "}
                            <span>{firstToUpper(store.name)}</span>
                          </li>
                        ))}
                      {searchResult &&
                        searchResult.good.map(
                          (product, i) =>
                            i < 5 && (
                              <li
                                className="li-ordinary"
                                onClick={() =>
                                  navigate(`/product/${product._id}`)
                                }
                                key={i}
                              >
                                {product.name}
                              </li>
                            )
                        )}
                      {!searchResult ||
                      (searchResult &&
                        !searchResult.category.length &&
                        !searchResult.store.length &&
                        !searchResult.good.length) ? (
                        <Searching />
                      ) : (
                        ""
                      )}
                    </ul>
                    <hr />
                    <h4>RECOMMENDED ITEMS</h4>
                    {/* <ul>
                                        { searchResult.recommended.map((item, i) => <li key={i}>
                                            <img src={item.image} alt="..."/>
                                            <div>
                                                <h3>{item.name}</h3>
                                                <div>
                                                    <span>${item.price}</span>
                                                    <span>${item.oldPrice ? item.oldPrice : '00.00'}</span>
                                                </div>
                                            </div>
                                        </li> )}
                                    </ul> */}
                  </SearchResult>
                )}
              </div>
              <button type="submit">
                <span className="d-none d-md-block">Search</span>
                <i
                  className="la la-search m-0 d-block d-md-none"
                  style={{ fontSize: "16px" }}
                ></i>
              </button>
            </form>
          </div>
          <div className="account col-1 p-0 mx-auto mr-md-0">
            <i className="la la-user d-none d-md-block"></i>
            <div className="d-block d-md-none">
              <i
                className="la la-user"
                style={{ cursor: "pointer" }}
                onClick={() => toggleMenu(!menu)}
              >
                <ul
                  className="list"
                  style={{
                    position: "absolute",
                    left: "-120px",
                    display: menu ? "block" : "none",
                  }}
                >
                  <li>
                    <Link to="/auth/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/auth/register">Register</Link>
                  </li>
                  <li>
                    <Link to="/faq">FAQ</Link>
                  </li>
                  <li>
                    <a href="https://bitstack.netlify.com">Contact Us</a>
                  </li>
                </ul>
              </i>
            </div>

            <div className="d-none d-md-flex">
              <Link to="/auth/login">Login</Link>
              {"  "}
              <Link to="/auth/register">Register</Link>
            </div>
          </div>
        </div>
      </div>
    </HeadContainer>
  );
};

Head.propTypes = {
  allCategory: PropTypes.array.isRequired,
};

const mapStateToProps = createStructuredSelector({
  allCategory: selectAllCategory,
  searchResult: selectSearchResult,
});

const mapDispatchToProps = (dispatch) => ({
  search: (query) => dispatch(fetchSearch(query)),
  fetchAllCategory: () => dispatch(fetchAllCategoryStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Head);
