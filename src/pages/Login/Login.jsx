import { LoginField } from './components/LoginField';
import { LoginHeader } from './components/LoginHeader';
import './styles.scss';

export const Login = () => (
  <div className="login">
    <div className="login-layaout">
      <div className="logo-nav">
        <img src="https://cp.wowcircle.net/assets/images/logo/logo.png" alt="logo" />
      </div>
      <div className="login-content-container">
        <LoginHeader />
        <LoginField />
      </div>
      <div className="login-footer">© 2010-2023 Комплекс серверів WoW Circle</div>
    </div>
    <div className="bg-image" />
  </div>
);
