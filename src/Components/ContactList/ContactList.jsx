import React, { useEffect } from "react";
import { nanoid } from "nanoid";
import styles from "./ContactList.module.css";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import Filter from "../Filter/Filter";
import { asyncDeleteContact } from "../../Redux/reducers";
import axios from "axios";
import {asyncFetchContacts} from '../../Redux/reducers'
axios.defaults.baseURL = "https://62486dce20197bb4626917a1.mockapi.io/";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.contacts.filter);
const dispatch = useDispatch();
  const status = useSelector(state => state.contacts.status);

  console.log(status)
  useEffect(() => {
    if (status === 'idle') {
      dispatch(asyncFetchContacts())
    }
  },[status,dispatch])
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
                    // onClick={() => dispatch(deleteContact(item.id))}
                    onClick={()=>dispatch(asyncDeleteContact(item.id))}
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
