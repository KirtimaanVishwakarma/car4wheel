import { createReducer } from '@reduxjs/toolkit';

export const reviewReducer = createReducer(
  {},
  {
    // add band
    addReviewRequest: (state) => {
      state.loading = true;
    },
    addReviewSuccess: (state, action) => {
      state.loading = false;
      state.getBrand = action.payload;
      state.message = action.payload.message;
    },
    addReviewError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // get barnd list
    getReviewListRequest: (state) => {
      state.loading = true;
    },
    getReviewListSuccess: (state, action) => {
      state.loading = false;
      state.reviewList = action.payload;
    },
    getReviewListError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // delete brand
    deleteReviewRequest: (state) => {
      state.loading = true;
    },
    deleteReviewSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    deleteReviewError: (state, action) => {
      state.loading = false;
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
