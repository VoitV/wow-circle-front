import { Socials } from './components/Socials';
import { OptionLanguage } from './components/OptionLanguage';
import { Login } from './components/Login/Login';
import './styles.scss';

export const Header = ({ type }) => {
  if (type === 'login') {
    return (
      <header className="header">
        <div className="header-container">
          <div className="header-container-content">
            <OptionLanguage />
            <Login />
            <Socials />
          </div>
        </div>
      </header>
    );
  }
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-container-content">
          <OptionLanguage />
          <Socials />
        </div>
      </div>
    </header>
  );
};
