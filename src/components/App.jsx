import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { fetchCurrentUser } from '../redux/auth/auth-operations';
import { fetchContacts } from 'redux/contacts/operations';

import { PrivateRoute } from './hook/PrivateRoute';
import { RestrictedRoute } from './hook/RestrictedRoute';
import route from 'utils/route';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { isRefreshing } from 'redux/auth/auth-selectors';

import Loader from './Loader/Loader';
import UserNav from 'pages/UserNav/UserNav';
import AuthNav from 'pages/AuthNav/AuthNav';

const Register = lazy(() => import('pages/Register/Register'));
const Login = lazy(() => import('pages/Login/Login'));
const PhoneBook = lazy(() => import('pages/Phonebook/Phonebook'));
const UserInfo = lazy(() => import('pages/UserInfo/UserInfo'));

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  const IsRefreshing = useSelector(isRefreshing);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  useEffect(() => {
    if (token) {
      dispatch(fetchContacts());
    }
  }, [token, dispatch]);

  return (
    <div>
      {IsRefreshing ? (
        <Loader />
      ) : (
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
      )}
      <ToastContainer />
    </div>
  );
};
