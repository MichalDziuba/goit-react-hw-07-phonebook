import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchContactsFromApi,
  postContactsToApi,
  deleteContactFromApi,
} from "./mockapi";

const initialState = {
  items: [],
  filter: "",
  isLoading: false,
  status:'idle',
};

export const asyncFetchContacts = createAsyncThunk(
  "contactList/fetchContacts",
  async () => {
    const response = await fetchContactsFromApi();
    return response.data;
  }
);
export const asyncAddContact = createAsyncThunk(
  "contactList/addContact",
  async (contact) => {
    const response = await postContactsToApi(contact);
    return response.data;
  }
);
export const asyncDeleteContact = createAsyncThunk(
  "contactList/deleteContact",
  async (id) => {
    await deleteContactFromApi(id);
    const response = await fetchContactsFromApi();
    return response.data;
  }
);

export const contactListSlice = createSlice({
  name: "contactList",
  initialState,
  reducers: {
    // addContact: (state, action) => ({
    //   ...state,
    //   items: [...state.items, action.payload],
    // }),
    // deleteContact: (state, action) => ({
    //   ...state,
    //   items: [...state.items.filter(({ id }) => id !== action.payload)],
    // }),

    filterContacts: (state, action) => ({ ...state, filter: action.payload }),
  },
  extraReducers: builder => {
    builder
      .addCase(asyncFetchContacts.pending, state => {
          state.status='loading'
      })
      .addCase(asyncFetchContacts.fulfilled, (state, action) => {
      state.status='succeeded'
        state.items=state.items.concat(action.payload)
      })
      .addCase(asyncAddContact.fulfilled, (state, action) => {
      state.items.push(action.payload)
      })
      .addCase(asyncDeleteContact.fulfilled, (state, action) => {
      state.items=action.payload
    })
  }
});


export const { addContact, deleteContact, filterContacts } =
  contactListSlice.actions;

export default contactListSlice.reducer;
