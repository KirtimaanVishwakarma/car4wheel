import { OFFERS, SINGLE_OFFER } from "../../utils/apiConstant";
import axios from "axios";
import { attachParams } from "../../utils/apiUtils";

export const createOffer = (myForm) => async (dispatch) => {
  try {
    dispatch({ type: "addOfferRequest" });
    let { data } = await axios.post(OFFERS, myForm, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    dispatch({ type: "addOfferSuccess", payload: data });
  } catch (err) {
    dispatch({ type: "addOfferError", payload: err.response.data.message });
  }
};

export const getOfferList = () => async (dispatch) => {
  try {
    dispatch({ type: "getofferListRequest" });
    const { data } = await axios.get(OFFERS, {
      withCredentials: true,
    });
    dispatch({ type: "getOfferListSuccess", payload: data });
  } catch (err) {
    dispatch({ type: "getOfferListError", payload: err.response.data.message });
  }
};

export const deleteOffer = (id) => async (dispatch) => {
  try {
    dispatch({ type: "deleteOfferRequest" });
    const { data } = await axios.delete(SINGLE_OFFER + id, {
      withCredentials: true,
    });
    dispatch({ type: "deleteOfferSuccess", payload: data });
  } catch (err) {
    dispatch({ type: "deleteOfferError", payload: err.response.data.message });
  }
};
