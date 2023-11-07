import { REVIEWS, SINGLE_REVIEW} from '../../utils/apiConstant';
import axios from 'axios';
import { attachParams } from '../../utils/apiUtils';

export const addReview = (myForm) => async (dispatch) => {
    try {
      dispatch({ type: 'addReviewRequest' });
      let { data } = await axios.post(SINGLE_REVIEW, myForm, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      });
      dispatch({ type: 'addReviewSuccess', payload: data });
    } catch (err) {
      dispatch({ type: 'addReviewError', payload: err.response.data.message });
    }
  };

  export const getReviewList = () => async (dispatch) => {
    try {
      dispatch({ type: 'getReviewListRequest' });
      const {data} =await axios.get(REVIEWS, {
        withCredentials: true,
      });
      dispatch({ type: 'getReviewListSuccess', payload: data });
    } catch (err) {
      dispatch({ type: 'getReviewListError', payload: err.response.data.message });
    }
  };

  export const deleteReview = (id) => async (dispatch) => {
    try {
      dispatch({ type: 'deleteReviewRequest' });
      const {data}=await axios.delete(`${SINGLE_REVIEW}/${id}`,{
        withCredentials:true
      })
      dispatch({ type: 'deleteReviewSuccess', payload: data });
    } catch (err) {
      dispatch({ type: 'deleteReviewError', payload: err.response.data.message });
    }
  };