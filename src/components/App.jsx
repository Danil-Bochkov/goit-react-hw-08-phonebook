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

// import Login from 'pages/Login/Login';
// import UserInfo from 'pages/UserInfo/UserInfo';
// import Register from 'pages/Register/Register';
// import PhoneBook from 'pages/Phonebook/Phonebook';

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
