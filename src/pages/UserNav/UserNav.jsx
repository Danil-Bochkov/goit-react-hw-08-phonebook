import { useDispatch } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import route from 'utils/route';
import { logOut } from '../../redux/auth/auth-operations';
import style from './UserNav.module.css';
import NavActive from '../../images/bg-active-links-auth.svg';
import LogoIcon from '../../images/logo.svg';

import { ImExit } from 'react-icons/im';

const Link = styled(NavLink)`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 172px;
  height: 45px;
  color: #ffffff;
  font-weight: 600;
  font-size: 17px;
  line-height: 120%;
  letter-spacing: 0.03em;
  &.active {
    color: #1f3349;
    background-image: url(${NavActive});
    background-repeat: no-repeat;
    background-size: contain;
  }
`;

export default function UserNav() {
  const dispatch = useDispatch();

  return (
    <div className="wrapper">
      <aside className={style.sidenav}>
        <img className={style.logo} src={LogoIcon} alt="Logo" />
        <nav className={style.nav}>
          <div className="navLinks">
            <Link to={route.userInfo}>User info</Link>
            <Link to={route.contacts}>Phonebook</Link>
          </div>
          <button
            type="button"
            className={style.logOutBtn}
            onClick={() => dispatch(logOut())}
          >
            <ImExit />
            Log out
          </button>
        </nav>
      </aside>
      <div className="appField">
        <div className={style.userField}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
