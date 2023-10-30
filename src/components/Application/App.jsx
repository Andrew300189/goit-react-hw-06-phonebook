import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact, updateFilter } from '../../redux/contactsSlice';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { selectContacts, selectState } from '../../redux/selectors';
import './App.module.css';

function App() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectState);
  const dispatch = useDispatch();

  const isContactExist = (name) => {
    return contacts.some((contact) => contact.name === name);
  };

  const handleAddContact = (name, number) => {
    if (isContactExist(name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const contact = { id: nanoid(), name, number };
    dispatch(addContact(contact));
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const handleFilterChange = (filter) => {
    dispatch(updateFilter(filter));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <h2>Contacts</h2>
      <p>Find contacts by name</p>
      <Filter filter={filter} onFilterChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDeleteContact={handleDeleteContact} />
    </div>
  );
}

export default App;
