// import { createStore } from "redux";
// import contactListReducer from "./reducers";

// const store = createStore(contactListReducer);
// export default store;
import { configureStore } from "@reduxjs/toolkit";
import { contactListReducer, filterReducer } from "./reducers";

export const store = configureStore({
  reducer: {
    contacts: contactListReducer,
    filter: filterReducer,
    // filter: filterReducer,
  },
});