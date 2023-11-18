import { createReducer } from "@reduxjs/toolkit";

export const offerReducer = createReducer(
  {},
  {
    // add band
    addOfferRequest: (state) => {
      state.loading = true;
    },
    addOfferSuccess: (state, action) => {
      state.loading = false;
      state.getOffer = action.payload;
      state.message = action.payload.message;
    },
    addOfferError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // get barnd list
    getofferListRequest: (state) => {
      state.loading = true;
    },
    getOfferListSuccess: (state, action) => {
      state.loading = false;
      state.offerList = action.payload;
    },
    getOfferListError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // delete offer
    deleteOfferRequest: (state) => {
      state.loading = true;
    },
    deleteOfferSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    deleteOfferError: (state, action) => {
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
