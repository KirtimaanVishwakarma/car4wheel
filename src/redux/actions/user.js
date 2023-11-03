import { GET_PROFILE, LOGIN, LOGOUT } from '../../utils/apiConstant';

import axios from 'axios';

export const login = (email, password) => async (dispatch) => {
    
  try {
    dispatch({ type: 'loginRequest' });
    const { data } = await axios.post(
      LOGIN,
      { email, password },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );
    dispatch({ type: 'loginSuccess',payload:data});
  } catch (error) {
    dispatch({ type: 'loginfailed',payload:error.response.data.message});
  }
};

export const logout=()=>async dispatch=>{
    try {
        dispatch({ type: 'logoutRequest' });
        const { data } = await axios.post(
            LOGOUT,
          {
            withCredentials: true,
          }
        );
        console.log(data);
        dispatch({ type: 'logoutSuccess',payload:data}); 
    } catch (error) {
        dispatch({ type: 'logoutFail',payload:error.response.data.message}); 
    }
}

export const getProfile=()=>async dispatch=>{
    try {
        dispatch({ type: 'userProfileRequest' });
        const { data } = await axios.get(
            GET_PROFILE,
          {
            withCredentials: true,
          }
        );
        console.log(data);
        dispatch({ type: 'userProfileSuccess',payload:data}); 
    } catch (error) {
        dispatch({ type: 'userProfilefailed',payload:error.response.data.message}); 
    }
}