/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import './styles.scss';

export const SideBarBurger = () => {
  const [isHideNav, setIsHideNav] = useState(true);

  return (
    <div className="side-bar-burger">
      <div
        className="burger-open-button"
        onClick={() => {
          setIsHideNav(!isHideNav);
        }}
      >
        <span>Меню</span>
      </div>
      <nav className={isHideNav ? 'burger-nav hide' : 'burger-nav'}>
        <div className="nav-item">Головна</div>
        <div className="nav-item">Новини</div>
        <div className="nav-item">Форум</div>
        <div className="nav-item">Реєстрація</div>
        <div className="nav-item">Як підключитися</div>
        <div className="nav-item">Персональний кабінет</div>
        <div className="nav-item">Стріми</div>
        <div className="nav-item">Список змін</div>
        <div className="nav-item">Корисні теми</div>
        <div className="nav-item">Про проект</div>
      </nav>
    </div>
  );
};
