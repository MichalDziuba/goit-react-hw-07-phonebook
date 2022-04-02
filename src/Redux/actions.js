import { createAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

// const addContact = (name, number) => ({
//   type: "ADD_CONTACT",
//   payload: {
//     id: nanoid(),
//     name,
//    number,
//   },
// });
const addContact = createAction("contacts/Add", (name, number) => ({
  payload: {
    id: nanoid(),
    name,
    number,
  },
}));
const deleteContact = createAction("contacts/Delete");
const filterContacts=createAction("filter/Filter")
//     (id)
//  => ({
//     type: "DELETE_CONTACT",
//     payload: {
//         id,
//     }
// });
export { addContact, deleteContact,filterContacts };
