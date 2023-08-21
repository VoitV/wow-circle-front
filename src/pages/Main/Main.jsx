import { HeaderBackgroundImg } from '../../components/BackgroundImages/HeaderBackgroundImg/HeaderBackgroundImg';
import { Header } from '../../components/header/Header';
import { Logo } from './components/Logo/Logo';
import { MainLyaout } from './components/MainLayaout/MainLayaout';
import './styles.scss';

export const Main = () => (
  <div className="main-page">
    <div className="main-page-content">
      <Header type="login" />
      <Logo />
      <MainLyaout />
    </div>
    <HeaderBackgroundImg />
  </div>
);
