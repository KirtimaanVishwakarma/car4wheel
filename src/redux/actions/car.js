import { CAR, GET_ALL_CARS } from '../../utils/apiConstant';
import axios from 'axios';

export const addCar = (myForm) => async (dispatch) => {
  try {
    dispatch({ type: 'addCarRequest' });
    let { data } = await axios.post(CAR, myForm, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: true,
    });
    dispatch({ type: 'addCarSuccess', payload: data.response });
  } catch (err) {
    dispatch({ type: 'addCarError', payload: err.response.data.message });
  }
};

export const getAllCars = () => async (dispatch) => {
  try {
    dispatch({ type: 'getAllCarRequest' });
    const { data } = await axios.get(GET_ALL_CARS, {
      withCredentials: true,
    });

    dispatch({ type: 'getAllCarSuccess', payload: data });
  } catch (error) {
    dispatch({ type: 'getAllCarError', payload: error.response.data.message });
  }
};
