import './styles.scss';

export const Logo = () => (
  <div className="logo-content-container">
    <div className="logo-content">
      <div className="logo-img">
        <img src="https://wowcircle.net/themes/wowcircle/images/logo/logo_hover.png" alt="logo" />
      </div>
      <div className="players-online">
        <span className="text-header">
          <b>Загальний онлайн:</b>
        </span>
        <br />
        <span className="online-count">
          <b>18000</b>
        </span>
        <br />
        <span className="server-status">Статус серверів</span>
      </div>
    </div>
  </div>
);
