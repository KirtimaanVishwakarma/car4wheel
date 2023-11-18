import { createReducer } from "@reduxjs/toolkit";

export const carReducer = createReducer(
  {},
  {
    addCarRequest: (state) => {
      state.loading = true;
    },
    addCarSuccess: (state, action) => {
      state.loading = false;
      state.carList = action.payload;
      state.message = action.payload.message;
    },
    addCarError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // all cars reducer
    getAllCarRequest: (state) => {
      state.loading = true;
    },
    getAllCarSuccess: (state, action) => {
      state.loading = false;
      state.carList = action.payload;
    },
    getAllCarError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    //get car detail
    getCardDetailRequest: (state) => {
      state.loading = true;
    },
    getCardDetailSuccess: (state, action) => {
      state.loading = false;
      state.details = action.payload;
    },
    getCardDetailFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // update car details
    updateCarRequest: (state) => {
      state.loading = true;
    },
    updateCarSuccess: (state, action) => {
      state.loading = false;
      state.updateCar = action.payload.updatedCar;
      state.message = action.payload.message;
    },
    updateCarError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // delete car
    deleteCarRequest: (state) => {
      state.loading = true;
    },
    deleteCarSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    deleteCarError: (state, action) => {
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
