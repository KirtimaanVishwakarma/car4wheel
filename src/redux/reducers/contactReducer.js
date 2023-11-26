import { createReducer } from "@reduxjs/toolkit";

export const contactReducer = createReducer(
  {},
  {
    //add Contact
    addContactRequest: (state) => {
      state.loading = true;
    },
    addContactSuccess: (state, action) => {
      state.loading = false;
      state.getContact = action.payload;
      state.message = action.payload.message;
    },
    addContactError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    //get Contact
    getContactRequest: (state) => {
      state.loading = true;
    },
    getContactSuccess: (state, action) => {
      state.loading = false;
      state.contact = action.payload;
      state.message = action.payload.message;
    },
    getContactError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // delete Contact
    deleteContactRequest: (state) => {
      state.loading = true;
    },
    deleteContactSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    deleteContactError: (state, action) => {
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
