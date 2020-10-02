import { searchActionTypes } from "./search.types";
import axios from "axios";
import HOST from "../../proxy";

const fetchSearchStarted = () => ({
  type: searchActionTypes.FETCH_SEARCH_STARTED,
});

const fetchSearchSuccess = (bundle) => ({
  type: searchActionTypes.FETCH_SEARCH_SUCCESS,
  bundle: bundle,
});

const fetchSearchFullSuccess = (bundle) => ({
  type: searchActionTypes.FETCH_SEARCH_FULL_SUCCESS,
  bundle: bundle,
});

const fetchSearchFailed = (errMsg) => ({
  type: searchActionTypes.FETCH_SEARCH_FAILED,
  bundle: errMsg,
});

export const fetchSearch = (query, page = null) => async (dispatch) => {
  dispatch(fetchSearchStarted());
  if (page) {
    const { data } = await axios.get(`${HOST}/api/search/${query}`);
    dispatch(fetchSearchFullSuccess({ data, page }));
    return;
  }
  try {
    const res = await axios.get(`${HOST}/api/search/${query}`);
    dispatch(fetchSearchSuccess(res.data));
  } catch (e) {
    dispatch(fetchSearchFailed(e));
  }
};
