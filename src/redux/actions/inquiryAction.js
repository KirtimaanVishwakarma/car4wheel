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
