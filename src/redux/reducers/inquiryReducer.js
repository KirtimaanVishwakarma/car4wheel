import { createReducer } from "@reduxjs/toolkit";

export const inquiryReducer = createReducer(
  {},
  {
    //add Inquiry
    addInquiryRequest: (state) => {
      state.loading = true;
    },
    addInquirySuccess: (state, action) => {
      state.loading = false;
      state.getInquiry = action.payload;
      state.message = action.payload.message;
    },
    addInquiryError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    //get Inquiry
    getInquiryRequest: (state) => {
      state.loading = true;
    },
    getInquirySuccess: (state, action) => {
      state.loading = false;
      state.Inquiry = action.payload;
      state.message = action.payload.message;
    },
    getInquiryError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // delete inquiry
    deleteInquiryRequest: (state) => {
      state.loading = true;
    },
    deleteInquirySuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    deleteInquiryError: (state, action) => {
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
