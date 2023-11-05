import { configureStore } from "@reduxjs/toolkit";
import {userReducer} from "./reducers/userReducer";
import { carReducer } from "./reducers/carReducer";
import { brandReducer } from "./reducers/brandReducer";
export const store=configureStore({
    reducer:{
        user:userReducer,
        cars: carReducer,
        brand:brandReducer
    },
});
export default store;