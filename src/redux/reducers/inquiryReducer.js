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
  }
);
