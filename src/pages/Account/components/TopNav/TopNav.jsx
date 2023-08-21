import './styles.scss';

export const TopNav = () => (
  <div className="top-nav">
    <div className="nav-left">
      <div className="select">WoW Circle 3.3.5a x100</div>
      <div className="user-name">m4uot</div>
      <div className="balance-container">
        <img
          className="rank-img"
          src="https://cp.wowcircle.net/assets/images/icon/icon_rank.gif"
          alt="rank"
        />
        <div className="balance-text">Баланс:</div>
        <div className="account-balance">&nbsp;155</div>
        <img src="https://cp.wowcircle.net/assets/images/icon/coin.png" alt="coins" />
      </div>
    </div>
    <div className="nav-right">
      <div className="button-top-nav">Отримати бонуси</div>
      <div className="button-top-nav">Отримати бонуси</div>
      <div className="button-top-nav">Отримати бонуси</div>
      <div className="button-top-nav">Отримати бонуси</div>
    </div>
  </div>
);
