import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/auth-operations';

import style from './Login.module.css';

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div className="appField">
      <div className={style.formField}>
        <h2 className={style.title}>Authorization</h2>
        <form onSubmit={handleSubmit} className={style.loginForm}>
          <label className={style.formLabel}>
            Email
            <input
              className={style.formInput}
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Enter email"
            />
          </label>

          <label className={style.formLabel}>
            Password
            <input
              className={style.formInput}
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="Enter password"
            />
          </label>

          <button type="submit" className={style.formBtn}>
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
