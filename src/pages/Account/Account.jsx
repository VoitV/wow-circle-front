import { Header } from '../../components/header/Header';
import { TopNav } from './components/TopNav';
import { CurrentPosition } from './components/CurrentPosition';
import { Navigation } from './components/Navigation';
import './styles.scss';
import { MainCenter } from './components/MainCenter/MainCenter';
import { AdditionalInfo } from './components/AdditionalInfo';

export const Account = () => (
  <div className="account">
    <Header />
    <div className="logo-container">
      <div className="logo" />
    </div>
    <div className="account-content">
      <TopNav />
      <CurrentPosition />Í
      <div className="layaout">
        <Navigation />
        <MainCenter />
        <AdditionalInfo />
      </div>
    </div>
  </div>
);
