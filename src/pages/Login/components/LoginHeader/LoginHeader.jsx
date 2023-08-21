import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import './styles.scss';

export const LoginHeader = () => (
  <div className="login-header">
    <div className="nav-home">
      <FontAwesomeIcon icon={faHouse} />
      На сайт
    </div>
    <div className="lang-option">
      <img
        src="https://www.freepnglogos.com/uploads/ukraine-flag-png/circle-shiny-ukraine-flag-picture-17.png"
        alt="lang"
      />
      <img src="https://cp.wowcircle.net/assets/images/icon/en.png" alt="lang" />
    </div>
  </div>
);
