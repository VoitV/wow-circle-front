/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { NavLink, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import './styles.scss';

export const RegistrationField = () => {
  const [loginInputContent, changeLoginInputContent] = useState('');
  const [passwordInputContent, changePasswordInputContent] = useState('');
  const [emailInputContent, changeEmailInputContent] = useState('');

  const navigate = useNavigate();

  const onHandleLoginChange = (e) => {
    changeLoginInputContent(e.target.value);
  };

  const onHandlePasswordChange = (e) => {
    changePasswordInputContent(e.target.value);
  };
  const onHandleEmailChange = (e) => {
    changeEmailInputContent(e.target.value);
  };

  const onHandleSubmit = async (e) => {
    if (
      loginInputContent.length === 0 ||
      passwordInputContent.length === 0 ||
      emailInputContent.length === 0
    ) {
      return;
    }

    const token = await axios.post('http://localhost:3000/api/v1/create-user', {
      email: emailInputContent,
      login: loginInputContent,
      password: passwordInputContent,
    });

    localStorage.setItem('acessTokenWow', token.data);

    navigate('/account');
  };

  return (
    <div className="registration-field">
      <div className="text-header">Реєстрація</div>
      <div className="inputs-container">
        <div className="login-input-container inp-cont">
          <div className="input-text">Введіть ваш логін:</div>
          <input
            className="registration-input input-get"
            value={loginInputContent}
            onChange={onHandleLoginChange}
          />
        </div>
        <div className="password-input-container inp-cont">
          <div className="input-text">Введіть ваш пароль:</div>
          <input
            className="registration-input input-get"
            value={passwordInputContent}
            onChange={onHandlePasswordChange}
          />
        </div>
        <div className="email-input-container inp-cont">
          <div className="input-text">Введіть ваш емейл:</div>
          <input
            className="registration-input input-get"
            value={emailInputContent}
            onChange={onHandleEmailChange}
          />
        </div>
        <div className="submit-button-container">
          <div className="submit-button" onClick={onHandleSubmit}>
            Зареєструватися
          </div>
        </div>
      </div>
    </div>
  );
};
