import { createReducer } from '@reduxjs/toolkit';

export const brandReducer = createReducer(
  {},
  {
    // add band
    addBrandRequest: (state) => {
      state.loading = true;
    },
    addBrandSuccess: (state, action) => {
      state.loading = false;
      state.getBrand = action.payload;
      state.message = action.payload.message;
    },
    addBrandError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // get barnd list
    getBrandListRequest: (state) => {
      state.loading = true;
    },
    getBrandListSuccess: (state, action) => {
      state.loading = false;
      state.brandList = action.payload;
    },
    getBrandListError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // delete brand
    deleteBrandRequest: (state) => {
      state.loading = true;
    },
    deleteBrandSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    deleteBrandError: (state, action) => {
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
