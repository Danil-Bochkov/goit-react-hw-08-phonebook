import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import NavActive from '../../images/bg-active-links.svg';
import AuthNavBar from '../../components/Navigation/AuthNavBar/AuthNavBar';
import Loader from 'components/Loader/Loader';

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

export default function AuthNav() {
  return (
    <div className="wrapper">
      <AuthNavBar>
        <Link to="/login">Authorization</Link>
        <Link to="/register">Regitration</Link>
      </AuthNavBar>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
}
