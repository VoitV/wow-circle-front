import React, { useEffect, useState } from 'react';
import './styles.scss';

export const Management = ({ userInfo }) => {
  const tableValue = [
    {
      descriptionText: 'Поштова адреса',
      image: 'https://cp.wowcircle.net/assets/images/icon/icon_email.gif',
      buttonText: 'Змінити',
      userInfo: userInfo.email,
    },
    {
      descriptionText: 'Режим акаунту',
      image: 'https://cp.wowcircle.net/assets/images/icon/icon_acc_mode_0.png',
      buttonText: 'Змінити',
      userInfo: userInfo.accountStatus,
    },
    {
      descriptionText: 'Останній вхід',
      image: 'https://cp.wowcircle.net/assets/images/icon/icon_last_login.gif',
      buttonText: '',
      userInfo: '2023-06-02 10:34:30',
    },
    {
      descriptionText: 'Останній IP',
      image: 'https://cp.wowcircle.net/assets/images/icon/icon_last_ip.gif',
      buttonText: 'Історія',
      userInfo: userInfo.ip,
    },
    {
      descriptionText: 'Мобільний телефон',
      image: 'https://cp.wowcircle.net/assets/images/icon/icon_mobile.png',
      buttonText: userInfo.phone ? 'Відвязати' : 'Привязати',
      userInfo: userInfo.phone ? userInfo.phone : 'Не підключено',
    },
    {
      descriptionText: 'Двухфакторна аутентифікація',
      image: 'https://cp.wowcircle.net/assets/images/icon/icon_mobile.png',
      buttonText: userInfo.twoFactor ? 'Відключити' : 'Підключити',
      userInfo: userInfo.twoFactor ? 'Підключена' : 'Не підключена',
    },
    {
      descriptionText: 'Бан',
      image: 'https://cp.wowcircle.net/assets/images/icon/icon_banned.gif',
      buttonText: 'Разбанить',
      userInfo: userInfo.isBaned ? 'Так' : 'Ні',
    },
    {
      descriptionText: 'Мут',
      image: 'https://cp.wowcircle.net/assets/images/icon/icon_muted.gif',
      buttonText: 'Зняти мут',
      userInfo: userInfo.isBaned ? 'Так' : 'Ні',
    },
    {
      descriptionText: 'В грі',
      image: 'https://cp.wowcircle.net/assets/images/icon/icon_online.gif',
      buttonText: '',
      userInfo: userInfo.isInGame ? 'Так' : 'Ні',
    },
    {
      descriptionText: 'Бонуси',
      image: 'https://cp.wowcircle.net/assets/images/icon/coin.png',
      buttonText: 'Поповнити рахунок',
      userInfo: userInfo.balance,
    },
  ];

  return (
    <div className="center-management-info">
      <div className="managment-info-content-cotnainer">
        <div className="managment-title">Загальна інформація</div>
        <table>
          {tableValue.map((el) => (
            <tr key={el.descriptionText}>
              <td className="td-description-text">{el.descriptionText}</td>
              <td className="td-image">
                <img src={el.image} alt="/img" />
              </td>
              <td className="td-info-from-user">{el.userInfo}</td>
              <td className="td-button">
                <span>{el.buttonText}</span>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};
