import { createReducer } from '@reduxjs/toolkit';

export const carReducer = createReducer({},{
addCarRequest:(state)=>{
    state.loading=true;
},
addCarSuccess: (state, action) =>{
    state.loading= false;
    state.carList=action.payload;
    state.message = action.payload.message;
},
addCarError: (state, action) =>{
    state.loading = false;
    state.error = action.payload; 
},

// all cars reducer 
getAllCarRequest:(state)=>{
  state.loading=true;
},
getAllCarSuccess: (state, action) =>{
  state.loading= false;
  state.carList=action.payload;
},
getAllCarError: (state, action) =>{
  state.loading = false;
  state.error = action.payload; 
},

//get car detail
getCardDetailRequest:(state)=>{
state.loading=true;
},
getCardDetailSuccess:(state,action)=>{
state.loading=false;
state.details=action.payload;
},
getCardDetailFail:(state,action)=>{
state.loading=false;
state.error=action.payload;
},

clearError: (state) => {
    state.error = null;
  },
  clearMessage: (state) => {
    state.message = null;
  },

})
