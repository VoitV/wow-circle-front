/* eslint-disable jsx-a11y/anchor-is-valid */
import { NavLink } from 'react-router-dom';
import './styles.scss';

export const LoginField = () => (
  <div className="login-field">
    <div className="inputs-container">
      <div className="login-input-container inp-cont">
        <div className="input-text">Введіть ваш логін:</div>
        <input className="login-input input-get" />
      </div>
      <div className="password-input-container inp-cont">
        <div className="input-text">Введіть ваш логін:</div>
        <input className="login-input input-get" />
      </div>
      <NavLink to="/account" className="submit-button">
        Вхід
      </NavLink>
    </div>
    <div className="login-FAQ">
      <div className="text-FAQ">
        Якщо Ви забули свій пароль, цей сервіс дозволить Вам його згадати. Вам буде надіслано листа
        на e-mail, вказаний при реєстрації.
      </div>
      <a className="help-FAQ">Нагадати пароль</a>
      <a className="help-FAQ">Відключити 2FA</a>
    </div>
  </div>
);
