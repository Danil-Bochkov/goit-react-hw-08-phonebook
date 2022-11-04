import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCurrentUser } from '../redux/auth/auth-operations';
import { Routes, Route } from 'react-router-dom';
import { PhoneBook } from 'pages/Phonebook/Phonebook';
import Register from '../pages/Register/Register';
import Login from '../pages/Login/Login';
import { PrivateRoute } from './hook/PrivateRoute';
import { RestrictedRoute } from './hook/RestrictedRoute';
import UserInfo from 'pages/UserInfo/UserInfo';
import route from 'utils/route';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchContacts } from 'redux/contacts/operations';
import UserNav from 'pages/UserNav/UserNav';
import AuthNav from 'pages/AuthNav/AuthNav';

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  useEffect(() => {
    if (token) {
      dispatch(fetchContacts());
    }
  }, [token, dispatch]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <RestrictedRoute restricted>
              <AuthNav />
            </RestrictedRoute>
          }
        >
          <Route path={route.logIn} element={<Login />} />
          <Route path={route.register} element={<Register />} />
        </Route>
        {/* //! Авторизированый пользователь */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <UserNav />
            </PrivateRoute>
          }
        >
          <Route index element={<UserInfo />} end />
          <Route path={route.contacts} element={<PhoneBook />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};
