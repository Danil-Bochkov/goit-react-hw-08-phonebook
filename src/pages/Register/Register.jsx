import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/auth-operations';

import style from './Register.module.css';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(register({ name, email, password }));
    setEmail('');
    setName('');
    setPassword('');
  };

  return (
    <div className="appField">
      <div className={style.formField}>
        <h2 className={style.title}>Regitration</h2>
        <form onSubmit={handleSubmit} className={style.registerForm}>
          <label className={style.formLabel}>
            Name
            <input
              className={style.formInput}
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              placeholder="Enter name"
            />
          </label>

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
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
