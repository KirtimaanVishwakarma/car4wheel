import { CAR, CREATE_CAR, GET_ALL_CARS } from "../../utils/apiConstant";
import axios from "axios";
import { attachParams } from "../../utils/apiUtils";

export const addCar = (myForm) => async (dispatch) => {
  try {
    dispatch({ type: "addCarRequest" });
    const { data } = await axios.post(CREATE_CAR, myForm, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    });
    dispatch({ type: "addCarSuccess", payload: data.response });
  } catch (err) {
    dispatch({ type: "addCarError", payload: err.response.data.message });
  }
};

export const getAllCars =
  (size, page, keyword, ...query) =>
  async (dispatch) => {
    const params = {
      size: size || "",
      page: page || 1,
      keyword: keyword || "",
      ...query[0],
    };
    const url = attachParams(
      GET_ALL_CARS,
      params
      //   {
      //   size: size || "",
      //   page: page || 1,
      //   keyword: keyword || "",
      // }
    );
    try {
      dispatch({ type: "getAllCarRequest" });
      const { data } = await axios.get(url, {
        withCredentials: true,
      });

      dispatch({ type: "getAllCarSuccess", payload: data });
    } catch (error) {
      dispatch({
        type: "getAllCarError",
        payload: error.response.data.message,
      });
    }
  };

export const getCarDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: "getCardDetailRequest" });
    const { data } = await axios.get(CAR + id, {
      withCredentials: true,
    });
    dispatch({ type: "getCardDetailSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "getCardDetailFail",
      payload: error.response.data.message,
    });
  }
};

export const updateCar = (myForm, id) => async (dispatch) => {
  try {
    dispatch({ type: "updateCarRequest" });
    const { data } = await axios.put(CAR + id, myForm, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    });
    dispatch({ type: "updateCarSuccess", payload: data });
  } catch (err) {
    dispatch({ type: "updateCarError", payload: err.response.data.message });
  }
};

export const deleteCar = (id) => async (dispatch) => {
  try {
    dispatch({ type: "deleteCarRequest" });
    const { data } = await axios.delete(CAR + id, {
      withCredentials: true,
    });
    dispatch({ type: "deleteCarSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "deleteCarError", payload: error.response.data.message });
  }
};
