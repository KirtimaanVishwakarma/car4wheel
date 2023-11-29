import axios from "axios";
import {  toast } from 'react-toastify';
import { INQUIRY } from "../../utils/apiConstant";
import { attachParams } from "../../utils/apiUtils";
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
    console.log(data);
    toast.success('Message sent successfully, we will get back to you soon!')
  } catch (err) {
    console.log(err);
    dispatch({ type: "addInquiryError", payload: err.response.data.message });
  }
};

export const getInquiry = (size,page) => async (dispatch) => {

  const url=attachParams(INQUIRY,{
size:size||'',page:page||''
  })
  try {
    dispatch({ type: "getInquiryRequest" });
    const { data } = await axios.get(url, {
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
