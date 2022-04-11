// import { createStore } from "redux";
// import contactListReducer from "./reducers";

// const store = createStore(contactListReducer);
// export default store;
import { configureStore } from "@reduxjs/toolkit";
import contactListSlice  from "./reducers";
export const store = configureStore({
  reducer: {
    contacts: contactListSlice,
    // filter: filterReducer,
    // filter: filterReducer,
  },
});
// console.log(store.getState())