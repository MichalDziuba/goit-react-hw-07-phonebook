import React from "react";
import { nanoid } from "nanoid";
import styles from "./ContactList.module.css";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import Filter from "../Filter/Filter";
import { deleteContact } from "../../Redux/actions";
import { saveToLocalStorage } from "../../Redux/state";

function ContactList() {
  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter);
  saveToLocalStorage("CONTACTS", contacts);
  const dispatch = useDispatch();
  return (
    <div>
      {contacts.length > 0 ? (
        <>
          <h2>Contacts</h2>
          <Filter />
          <ul className={styles.contact__list}>
            {contacts
              .filter(({ name }) => name.toLowerCase().includes(filter))
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
}

ContactList.propTypes = {
  filter: PropTypes.string,
  contacts: PropTypes.array,
  deleteContact: PropTypes.func,
};
export default ContactList;
