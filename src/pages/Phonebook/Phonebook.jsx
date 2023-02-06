import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  selectContacts,
  selectFilterContact,
  selectIsLoading,
  selectError,
} from '../../redux/contacts/selectors';
import { addContact, fetchContacts } from '../../redux/contacts/operations';
import { updateFilter } from '../../redux/contacts/filterSlice';
import ContactForm from 'components/Phonebook/ContactForm/ContactForm';
import ContactList from 'components/Phonebook/ContactList/ContactList';
import Filter from 'components/Phonebook/Filter/Filter';
import Loader from '../../components/Loader/Loader';
import UserMenu from '../../components/Navigation/UserMenu/UserMenu';

import { toast } from 'react-toastify';
import style from './Phonebook.module.css';
import capitalize from 'utils/capitalize';

const PhoneBook = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilterContact);
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const filterContacts = contacts => {
    return contacts?.filter(contact =>
      contact.name?.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const doesAlreadyExist = newContact => {
    for (const { name } of contacts) {
      if (name === newContact.name) {
        return name;
      }
    }
    return false;
  };

  const addContactsForm = newContact => {
    if (doesAlreadyExist(newContact)) {
      toast.error(
        `${capitalize(
          newContact.name
        )}'s contact already exists. Please, next time be more attentive to what you are trying to add`
      );
      return;
    }
    dispatch(addContact(newContact));
  };

  const handleChange = evt => {
    dispatch(updateFilter(evt.currentTarget.value));
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <UserMenu />
      <div className={style.PhoneBook}>
        <div className={style.container}>
          <h2 className={style.PhoneBook__title}>Phonebook</h2>
          <ContactForm addContact={addContactsForm} />
        </div>

        <div className={style.container}>
          <h2 className={style.PhoneBook__title}>Contacts</h2>
          <Filter handleChange={handleChange} filter={filter} />
          {isLoading && !error && <Loader />}
          <ContactList contacts={filterContacts(contacts)} />
        </div>
      </div>
    </>
  );
};

export default PhoneBook;
