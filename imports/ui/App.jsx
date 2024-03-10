import React from "react";
import { ContactForm } from "./contactsFolder";
import { ContactList } from "./contactList";

export const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    <ContactForm />
    <ContactList />
  </div>
);
