import { RegistrationField } from './components/RegistrationField';
import { RegistrationHeader } from './components/RegistrationHeader';
import './styles.scss';

export const Registration = () => (
  <div className="registration">
    <div className="registration-layaout">
      <div className="logo-nav">
        <img src="https://cp.wowcircle.net/assets/images/logo/logo.png" alt="logo" />
      </div>
      <div className="registration-content-container">
        <RegistrationHeader />
        <RegistrationField />
      </div>
      <div className="registration-footer">© 2010-2023 Комплекс серверів WoW Circle</div>
    </div>
    <div className="bg-image" />
  </div>
);
