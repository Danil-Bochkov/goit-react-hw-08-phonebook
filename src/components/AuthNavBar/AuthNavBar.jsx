import style from './AuthNavBar.module.css';
import LogoIcon from '../../images/logo.svg';

export default function AuthNavBar({ children }) {
  return (
    <aside className={style.sidenav}>
      <div className={style.logo}>
        <img src={LogoIcon} alt="Logo" />
        <p className={style.logo_text}>
          System for doing homework using React and Redux
        </p>
      </div>
      <div className={style.nav}>{children}</div>
    </aside>
  );
}
