import { BRAND, SINGLE_BRAND } from '../../utils/apiConstant';
import axios from 'axios';
import { attachParams } from '../../utils/apiUtils';

export const addBrand = (myForm) => async (dispatch) => {
    try {
      dispatch({ type: 'addBrandRequest' });
      let { data } = await axios.post(BRAND, myForm, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      });
      dispatch({ type: 'addBrandSuccess', payload: data });
    } catch (err) {
      dispatch({ type: 'addBrandError', payload: err.response.data.message });
    }
  };

  export const getBrandList = () => async (dispatch) => {
    try {
      dispatch({ type: 'getBrandListRequest' });
      const {data} =await axios.get(BRAND, {
        withCredentials: true,
      });
      dispatch({ type: 'getBrandListSuccess', payload: data });
    } catch (err) {
      dispatch({ type: 'getBrandListError', payload: err.response.data.message });
    }
  };

  export const deleteBrand = (id) => async (dispatch) => {
    try {
      dispatch({ type: 'deleteBrandRequest' });
      const {data}=await axios.delete(SINGLE_BRAND+id,{
        withCredentials:true
      })
      dispatch({ type: 'deleteBrandSuccess', payload: data });
    } catch (err) {
      dispatch({ type: 'deleteBrandError', payload: err.response.data.message });
    }
  };