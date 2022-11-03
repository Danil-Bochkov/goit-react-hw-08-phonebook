import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  selectContacts,
  selectFilterContact,
  selectIsLoading,
  selectError,
} from '../../redux/contacts/selectors';
import { fetchContacts } from '../../redux/contacts/operations';
import { updateFilter } from '../../redux/contacts/filterSlice';

import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';
import Loader from '../../components/Loader/Loader';
import UserMenu from '../../components/UserMenu/UserMenu';

import './style.scss';

export const PhoneBook = () => {
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

  const handleChange = evt => {
    dispatch(updateFilter(evt.currentTarget.value));
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <UserMenu />
      <div className="PhoneBook">
        <div className="container wrapperPhonebook">
          <h2 className="PhoneBook__title">Phonebook</h2>
          <ContactForm />
        </div>

        <div className="container wrapperContacts">
          <h2 className="PhoneBook__title">Contacts</h2>
          <Filter handleChange={handleChange} filter={filter} />
          {isLoading && !error && <Loader />}
          <ContactList contacts={filterContacts(contacts)} />
        </div>
      </div>
    </>
  );
};

// import { lazy } from 'react';
// import { Route, Routes } from 'react-router-dom';
// import { SharedLayout } from './SharedLayout';

// import route from 'utils/route';

// const Home = lazy(() => import('../pages/Home'));
// const Movies = lazy(() => import('../pages/Movies'));
// const MoviesDetails = lazy(() => import('../pages/MoviesDetails'));

// export const App = () => {
//   return (
//     <Routes>
//       <Route path={route.home} element={<SharedLayout />}>
//         <Route index element={<Home />} />
//         <Route path={route.movies} element={<Movies />} />
//         <Route path={route.moviesId} element={<MoviesDetails />} />
//       </Route>
//     </Routes>
//   );
// };