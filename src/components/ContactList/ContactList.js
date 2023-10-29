import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../contactsSlice';
import './ContactList.module.css';

function ContactList({ contacts }) {
  const dispatch = useDispatch();

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id} className="contact-item">
          {contact.name}: {contact.number}
          <button
            className="delete-button"
            onClick={() => handleDeleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
