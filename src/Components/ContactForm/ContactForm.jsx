import React from "react";
import style from "./ContactForm.module.css";
import PropTypes from "prop-types";
import Input from "../Input/Input";
import Label from "../Label/Label";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { nanoid } from "nanoid";
import { asyncAddContact } from "../../Redux/reducers";
axios.defaults.baseURL = "https://62486dce20197bb4626917a1.mockapi.io/";
const ContactForm = () => {
  const dispatch = useDispatch();

  const contacts = useSelector((state) => state.contacts.items);

  const contactsNames = contacts.map((e) => e.name);

  const saveContact = (evt) => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const contact = form.elements.name.value;
    const tel = form.elements.number.value;
    if (contactsNames.includes(contact)) {
      alert(`${contact} is already in contacts!`);
    } else {
      dispatch(
        asyncAddContact({
          id: nanoid(),
          name: contact,
          number: tel,
        })
      );
      form.reset();
      console.log(contacts);
      console.log(contact, tel);
      // }
    }
  };
  return (
    <div>
      <form onSubmit={saveContact} className={style.form}>
        <div className={style.div__wrapper}>
          <Label text="Name:" />
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
        </div>
        <div className={style.div__wrapper}>
          <Label text="Number:" />
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          />
        </div>
        <button type="submit" className={style.form__button}>
          Add Contact
        </button>
      </form>
    </div>
  );
};
ContactForm.propTypes = {
  saveContact: PropTypes.func,
};
export default ContactForm;
