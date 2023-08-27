/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useNavigate } from 'react-router-dom';
import './styles.scss';

export const TopNav = ({ userInfo }) => {
  const navigate = useNavigate();
  const onHandleExitClick = () => {
    localStorage.removeItem('acessTokenWow');
    navigate('/login');
  };
  return (
    <div className="top-nav">
      <div className="nav-left">
        <div className="select">WoW Circle 3.3.5a x100</div>
        <div className="user-name">{userInfo.login}</div>
        <div className="balance-container">
          <img
            className="rank-img"
            src="https://cp.wowcircle.net/assets/images/icon/icon_rank.gif"
            alt="rank"
          />
          <div className="balance-text">Баланс:</div>
          <div className="account-balance">&nbsp;{userInfo.balance}</div>
          <img src="https://cp.wowcircle.net/assets/images/icon/coin.png" alt="coins" />
        </div>
      </div>
      <div className="nav-right">
        <div className="button-top-nav">Отримати бонуси</div>
        <div className="button-top-nav">Правила користувачів</div>
        <div className="button-top-nav">Список забанених</div>
        <div className="button-top-nav" onClick={onHandleExitClick}>
          Вихід
        </div>
      </div>
    </div>
  );
};
