import { CAR, GET_ALL_CARS, SINGLE_BRAND } from '../../utils/apiConstant';
import axios from 'axios';
import { attachParams } from '../../utils/apiUtils';

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

export const getAllCars = (size) => async (dispatch) => {
  const url=attachParams(GET_ALL_CARS,{
    size:size||''
  })
  try {
    dispatch({ type: 'getAllCarRequest' });
    const { data } = await axios.get(url, {
      withCredentials: true,
    });

    dispatch({ type: 'getAllCarSuccess', payload: data });
  } catch (error) {
    dispatch({ type: 'getAllCarError', payload: error.response.data.message });
  }
};

export const getCarDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: 'getCardDetailRequest' });
    const { data } = await axios.get(`${CAR}/${id}`, {
      withCredentials: true,
    });
    dispatch({ type: 'getCardDetailSuccess', payload: data });
  } catch (error) {
    dispatch({ type: 'getCardDetailFail', payload: error.response.data.message });
  }
};

export const deleteBrandHandler=async(id)=>{
  try {
    const {data}=await axios.delete(SINGLE_BRAND+id,{
      withCredentials:true
    })
    console.log(data);
   
  } catch (error) {
    console.log(error);
  }
}


