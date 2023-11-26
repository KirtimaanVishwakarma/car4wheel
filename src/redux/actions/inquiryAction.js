import axios from "axios";
import { INQUIRY } from "../../utils/apiConstant";
export const addInquiry = (myForm) => async (dispatch) => {
  try {
    dispatch({ type: "addInquiryRequest" });
    let { data } = await axios.post(INQUIRY, myForm, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    dispatch({ type: "addInquirySuccess", payload: data });
  } catch (err) {
    dispatch({ type: "addInquiryError", payload: err.response.data.message });
  }
};

export const getInquiry = () => async (dispatch) => {
  try {
    dispatch({ type: "getInquiryRequest" });
    const { data } = await axios.get(INQUIRY, {
      withCredentials: true,
    });
    dispatch({ type: "getInquirySuccess", payload: data });
  } catch (err) {
    dispatch({ type: "getInquiryeError", payload: err.response.data.message });
  }
};

export const deleteInuqiry = (id) => async (dispatch) => {
  try {
    dispatch({ type: "deleteInquiryRequest" });
    const { data } = await axios.delete(`${INQUIRY}/${id}`, {
      withCredentials: true,
    });
    dispatch({ type: "deleteInquirySuccess", payload: data });
  } catch (err) {
    dispatch({
      type: "deleteInquiryError",
      payload: err.response.data.message,
    });
  }
};
