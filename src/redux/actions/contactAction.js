import axios from "axios";
import { CONTACT } from "../../utils/apiConstant";
export const addContact = (myForm) => async (dispatch) => {
  try {
    dispatch({ type: "addContactRequest" });
    let { data } = await axios.post(CONTACT, myForm, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    dispatch({ type: "addContactSuccess", payload: data });
  } catch (err) {
    dispatch({ type: "addContactError", payload: err.response?.data.message });
  }
};

export const getContact = () => async (dispatch) => {
  try {
    dispatch({ type: "getContactRequest" });
    const { data } = await axios.get(CONTACT, {
      withCredentials: true,
    });
    dispatch({ type: "getContactSuccess", payload: data });
  } catch (err) {
    dispatch({ type: "getContactError", payload: err.response.data.message });
  }
};

export const deleteContact = (id) => async (dispatch) => {
  try {
    dispatch({ type: "deleteContactRequest" });
    const { data } = await axios.delete(`${CONTACT}/${id}`, {
      withCredentials: true,
    });
    dispatch({ type: "deleteContactSuccess", payload: data });
  } catch (err) {
    dispatch({
      type: "deleteContactError",
      payload: err.response.data.message,
    });
  }
};
