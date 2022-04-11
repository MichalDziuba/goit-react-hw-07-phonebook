import React from "react";
import { nanoid } from "nanoid";
import styles from "./ContactList.module.css";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import Filter from "../Filter/Filter";
import { deleteContact } from "../../Redux/reducers";
import { saveToLocalStorage } from "../../Redux/state";
import axios from "axios";
axios.defaults.baseURL = "https://62486dce20197bb4626917a1.mockapi.io/";
// const contactsApi = async () => {
//   const response = await axios
//     .get("/contacts")
//     .then(function (response) {
//       console.log(response.data);
//       return response.data;
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
//   return response;
// };
// const contactsApi1 =  contactsApi() ;
// console.log(contactsApi1);
const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.contacts.filter);
  console.log(contacts.length)
  console.log(filter)

  

  // saveToLocalStorage("CONTACTS", contacts);
  const dispatch = useDispatch();
  return (
    <div>
      {contacts.length > 0 ? (
        <>
          <h2>Contacts</h2>
          <Filter />
          <ul className={styles.contact__list}>
            {contacts
              .filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()))
              .map((item) => (
                <li key={nanoid()} className={styles.contact__item}>
                  {item.name}: {item.number}
                  <button
                    className={styles.button__delete}
                    type="button"
                    onClick={() => dispatch(deleteContact(item.id))}
                  >
                    Delete
                  </button>
                </li>
              ))}
          </ul>
        </>
      ) : (
        <div className={styles.addNewContact}>ADD A NEW CONTACT !</div>
      )}
    </div>
  );
};

ContactList.propTypes = {
  filter: PropTypes.string,
  contacts: PropTypes.array,
  deleteContact: PropTypes.func,
};
export default ContactList;
