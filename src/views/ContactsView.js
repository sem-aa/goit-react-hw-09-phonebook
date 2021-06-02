import React from "react";
import s from "../App.module.css";
import Form from "../copmonents/Form/Form";
import Phonebook from "../copmonents/ContactsList/ContactsList";
import Filter from "../copmonents/Filter/Filter";
import Logo from "../copmonents/Logo/Logo";

const ContactsViews = () => {
  return (
    <div className={s.views}>
      <Logo />
      <Form className={s.form}/>
      <Filter />
      <Phonebook />
    </div>
  );
};

export default ContactsViews;
