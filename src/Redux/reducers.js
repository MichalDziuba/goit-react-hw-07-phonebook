import { initialContacts } from "./state";
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  items: [],
  filter: "",
};
export const contactListSlice = createSlice({
  name: "contactList",
  initialState,
  reducers: {
    addContact: (state, action) => ({
      ...state,
      items: [...state.items, action.payload],
    }),

    deleteContact: (state, action) => ({
      ...state,
      items:[...state.items.filter(({id})=>id!==action.payload)]
    }),
     
    filterContacts: (state, action) => ({ ...state, filter: action.payload }),
  },
});

export const { addContact, deleteContact, filterContacts } =
  contactListSlice.actions;

export default contactListSlice.reducer;
