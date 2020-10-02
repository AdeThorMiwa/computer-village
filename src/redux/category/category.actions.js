import axios from "axios";
import { categoryActionTypes } from "./category.types";
import { arrayHasValue } from "../../utils";
import HOST from "../../proxy";

export const fetchAllCategoryStarted = () => ({
  type: categoryActionTypes.FETCH_ALL_CATEGORY_STARTED,
});

export const fetchAllCategorySuccessful = (allCategory) => ({
  type: categoryActionTypes.FETCH_ALL_CATEGORY_SUCCESS,
  bundle: allCategory,
});

export const fetchAllCategoryFailure = (errorMessage) => ({
  type: categoryActionTypes.FETCH_ALL_CATEGORY_FAIL,
  bundle: errorMessage,
});

export const fetchAllCategoryStartAsync = () => async (dispatch) => {
  dispatch(fetchAllCategoryStarted());

  try {
    const res = await axios.get(`${HOST}/api/category`);
    dispatch(
      fetchAllCategorySuccessful(typeof res.data === "object" ? res.data : [])
    );
  } catch (e) {
    const errors = "Fetching Failed...";
    dispatch(fetchAllCategoryFailure(errors));
  }
};

export const fetchCategoryByNameStarted = () => ({
  type: categoryActionTypes.FETCH_CATEGORY_BY_NAME_STARTED,
});

export const fetchCategoryByNameSuccessful = (allCategory) => ({
  type: categoryActionTypes.FETCH_CATEGORY_BY_NAME_SUCCESS,
  bundle: allCategory,
});

export const fetchCategoryByNameFailure = (errorMessage) => ({
  type: categoryActionTypes.FETCH_CATEGORY_BY_NAME_FAIL,
  bundle: errorMessage,
});

export const fetchCategoryByNameStartAsync = (categoryName) => async (
  dispatch
) => {
  dispatch(fetchCategoryByNameStarted());

  try {
    const catResponse = await axios.get(`${HOST}/api/category`);
    const allCategory = catResponse.data;

    let categoryIsValid = arrayHasValue(allCategory, "name", categoryName);
    const res = await axios.get(
      `${
        categoryIsValid
          ? `${HOST}/api/category?name=${categoryName}`
          : `${HOST}/api/category`
      }`
    );

    let data;

    if (categoryIsValid) {
      data = res.data[0];
    } else {
      const newData = res.data.map((category) => {
        const len = category.brand.length;
        for (let i = 0; i < len; i++) {
          category.brand[i].category = category.name;
        }

        return category;
      });

      data = {
        views: 0,
        numOfGoods: 0,
        _id: "all",
        name: "all",
        image: "all.jpg",
        brand: [],
      };

      newData.map((category) => {
        data = {
          ...data,
          views: data.views + category.views,
          numOfGoods: data.numOfGoods + category.numOfGoods,
          brand: [...data.brand, ...category.brand],
        };
        return true;
      });
    }

    dispatch(fetchCategoryByNameSuccessful(data));
  } catch (e) {
    const errors = "Fetching Failed...";
    dispatch(fetchCategoryByNameFailure(errors));
  }
};

export const clearCategories = () => (dispatch) => {
  dispatch({
    type: categoryActionTypes.CLEAR_CATEGORIES,
  });
};
