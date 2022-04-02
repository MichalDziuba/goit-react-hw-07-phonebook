import { initialContacts } from "./state";
import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact, filterContacts } from "./actions";
const contactListReducer = createReducer(initialContacts, {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});
const filterReducer = createReducer("", {
  [filterContacts]: (state, { payload }) => [payload],
});

export { contactListReducer, filterReducer };
