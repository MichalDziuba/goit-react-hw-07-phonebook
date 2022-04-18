import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import ContactForm from "./Components/ContactForm/ContactForm";
import ContactList from "./Components/ContactList/ContactList";

export default function App() {
  const stateStatus = useSelector(state => state.contacts.status)
  console.log(stateStatus)

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm />
      {stateStatus === 'loading' ? (<div className="loading">We are working for you. Please wait a second! </div>) : (
        <ContactList />
      )}
      
    </div>
  );
}
