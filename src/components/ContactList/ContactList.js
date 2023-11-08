import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { selectContacts, selectState } from 'redux/selectors';

function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => selectContacts(state));
  const filter = useSelector((state) => selectState(state));

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ul>
      {filteredContacts.map((contact) => (
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
