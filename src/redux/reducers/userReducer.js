import { createReducer } from '@reduxjs/toolkit';


export const userReducer = createReducer(
  {},
  {
    loginRequest: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
    },
    loginfailed: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },

    // get user profile 
    userProfileRequest: (state) => {
      state.loading = true;
    },
    userProfileSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
    },
    userProfilefailed: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },

    //logout
    logoutRequest: (state) => {
        state.loading = true;
      },
      logoutSuccess: (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.message = action.payload;
      },
      logoutFail: (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
      },
    clearError: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = null;
    },
  }
);
