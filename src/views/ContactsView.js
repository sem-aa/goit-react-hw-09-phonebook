import React from "react";
import s from "../App.module.css";
import Form from "../copmonents/Form/Form";
import Phonebook from "../copmonents/ContactsList/ContactsList";
import Filter from "../copmonents/Filter/Filter";
import Logo from "../copmonents/Logo/Logo";

const ContactsViews = () => {
  return (
    <div className={s.App}>
      <Logo />
      <Form />
      <h2 className={s.title}>Contacts</h2>
      <Filter />
      <Phonebook />
    </div>
  );
};

export default ContactsViews;
