import { configureStore } from "@reduxjs/toolkit";
import {userReducer} from "./reducers/userReducer";
import { carReducer } from "./reducers/carReducer";
export const store=configureStore({
    reducer:{
        user:userReducer,
        cars: carReducer
    },
});
export default store;