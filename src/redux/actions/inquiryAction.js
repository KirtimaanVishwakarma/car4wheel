import axios from "axios";
import { INQUIRY } from "../../utils/apiConstant";
import { data } from "autoprefixer";
export const addInquiry = (myForm) => async (dispatch) => {
  try {
    dispatch({ type: "addInquiryRequest" });
    let { data } = await axios.post(INQUIRY, myForm, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    });
    dispatch({ type: "addInquirySuccess", payload: data });
  } catch (err) {
    dispatch({ type: "addInquiryError", payload: err.response.data.message });
  }
  console.log(data);
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
