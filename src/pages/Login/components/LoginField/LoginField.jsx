/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './styles.scss';

export const LoginField = () => {
  const [loginInputContent, changeLoginInputContent] = useState('');
  const [passwordInputContent, changePasswordInputContent] = useState('');

  const navigate = useNavigate();

  const onHandleLoginChange = (e) => {
    changeLoginInputContent(e.target.value);
  };

  const onHandlePasswordChange = (e) => {
    changePasswordInputContent(e.target.value);
  };

  const onHandleSubmit = async (e) => {
    if (loginInputContent.length !== 0 || passwordInputContent.length !== 0) {
      try {
        const token = await axios.post('http://localhost:3000/api/v1/login-user', {
          login: loginInputContent,
          password: passwordInputContent,
        });
        localStorage.setItem('acessTokenWow', token.data);
        navigate('/account');
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="login-field">
      <div className="inputs-container">
        <div className="login-input-container inp-cont">
          <div className="input-text">Введіть ваш логін:</div>
          <input
            className="login-input input-get"
            value={loginInputContent}
            onChange={onHandleLoginChange}
          />
        </div>
        <div className="password-input-container inp-cont">
          <div className="input-text">Введіть ваш логін:</div>
          <input
            className="login-input input-get"
            value={passwordInputContent}
            onChange={onHandlePasswordChange}
          />
        </div>
        <div onClick={onHandleSubmit} className="submit-button">
          Вхід
        </div>
      </div>
      <div className="login-FAQ">
        <div className="text-FAQ">
          Якщо Ви забули свій пароль, цей сервіс дозволить Вам його згадати. Вам буде надіслано
          листа на e-mail, вказаний при реєстрації.
        </div>
        <a className="help-FAQ">Нагадати пароль</a>
        <a className="help-FAQ">Відключити 2FA</a>
        <NavLink to="/registration" className="help-FAQ">
          Реєстрація
        </NavLink>
      </div>
    </div>
  );
};
