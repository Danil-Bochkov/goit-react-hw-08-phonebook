import { useSelector } from 'react-redux';
import { selectEmail, selectUsername } from 'redux/auth/auth-selectors';
import { randomAvatar } from 'components/randomAvatar/randomAvatar';
import style from './UserMenu.module.css';

export default function UserMenu() {
  const name = useSelector(selectUsername);
  const email = useSelector(selectEmail);

  return (
    <>
      <div className={style.headerField}>
        <p className={style.greating}>
          Hello, <b>{name}!</b>
        </p>
        <div className={style.mailField}>
          <img className={style.avatar} src={randomAvatar} alt="Icon" />
          <p className={style.mail}>{email}</p>
        </div>
      </div>
    </>
  );
}
