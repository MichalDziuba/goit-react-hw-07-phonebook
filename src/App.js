import React from "react";
import "./App.css";
import ContactForm from "./Components/ContactForm/ContactForm";
import ContactList from "./Components/ContactList/ContactList";

export default function App() {
  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm />
      <ContactList />
    </div>
  );
}
