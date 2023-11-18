import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducer";
import { carReducer } from "./reducers/carReducer";
import { brandReducer } from "./reducers/brandReducer";
import { reviewReducer } from "./reducers/reviewReducer";
import { offerReducer } from "./reducers/offerReducer";
export const store = configureStore({
  reducer: {
    user: userReducer,
    cars: carReducer,
    brand: brandReducer,
    review: reviewReducer,
    offer: offerReducer,
  },
});
export default store;
