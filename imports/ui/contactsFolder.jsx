import React, { useState } from "react";
import { ContactsCollection } from "../api/contactsCollection";

export const ContactForm = () => {
  const [name, setName] = useState();

  const saveContact = (e) => {
    e.preventDefault();
    console.log(name);
    ContactsCollection.insert({ name });
  };

  return (
    <form>
      <div>
        <label htmlFor="name">
          <input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
          />
        </label>
        <div>
          <button onClick={saveContact}> Save </button>
        </div>
      </div>
    </form>
  );
};
