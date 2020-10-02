import axios from "axios";
import { storeActionTypes } from "./store.types";
import HOST from "../../proxy";

export const fetchStoreStarted = () => ({
  type: storeActionTypes.FETCH_STORE_STARTED,
});

export const fetchStoreSuccessful = (store) => ({
  type: storeActionTypes.FETCH_STORE_SUCCESS,
  bundle: store,
});

export const fetchStoreFailure = (errorMessage) => ({
  type: storeActionTypes.FETCH_STORE_FAILED,
  bundle: errorMessage,
});

export const fetchStoreAsync = (storeId) => async (dispatch) => {
  dispatch(fetchStoreStarted());

  try {
    const res = await axios.get(`${HOST}/api/store/${storeId}`);
    dispatch(fetchStoreSuccessful(res.data));
  } catch (e) {
    dispatch(fetchStoreFailure(e.msg));
  }
};

export const fetchStoresStarted = () => ({
  type: storeActionTypes.FETCH_STORES_STARTED,
});

export const fetchStoresSuccessful = (stores) => ({
  type: storeActionTypes.FETCH_STORES_SUCCESS,
  bundle: stores,
});

export const fetchStoresFailure = (errorMessage) => ({
  type: storeActionTypes.FETCH_STORES_FAILED,
  bundle: errorMessage,
});

export const fetchStoresAsync = () => async (dispatch) => {
  dispatch(fetchStoresStarted());

  try {
    const res = await axios.get(`${HOST}/api/store`);
    dispatch(
      fetchStoresSuccessful(typeof res.data === "object" ? res.data : [])
    );
  } catch (e) {
    dispatch(fetchStoresFailure(e.msg));
  }
};
