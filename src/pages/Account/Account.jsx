/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable import/order */
import { Header } from '../../components/header/Header';
import { TopNav } from './components/TopNav';
import { Navigation } from './components/Navigation';
import { MainCenter } from './components/MainCenter/MainCenter';
import { AdditionalInfo } from './components/AdditionalInfo';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './styles.scss';

export const Account = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isNavigationHide, setIsNavigationHide] = useState(true);
  const [isAdditionalInfo, setIsAdditionalInfo] = useState(true);
  const [userInfo, setUserInfo] = useState([]);
  const [selectedNavigation, setSelectedNavigation] = useState('management');

  const navigate = useNavigate();

  const changeNavVisible = () => {
    setIsNavigationHide(!isNavigationHide);
  };

  const changeAddInfoVisible = () => {
    setIsAdditionalInfo(!isAdditionalInfo);
  };

  useEffect(() => {
    if (!localStorage.getItem('acessTokenWow')) {
      navigate('/');
    } else {
      setIsLoading(!isLoading);
      const getUserInfo = async () => {
        const userInfoReq = await axios.get('http://localhost:3000/api/v1/user', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('acessTokenWow')}`,
          },
        });

        setUserInfo(userInfoReq.data);
      };

      getUserInfo();
    }
  }, []);

  if (isLoading) {
    return <div>Loading..</div>;
  }
  return (
    <div className="account">
      <Header />
      <div className="logo-container">
        <div className="logo" />
      </div>
      <div className="account-content">
        <TopNav userInfo={userInfo} />
        <div className="layaout">
          <Navigation
            isNavigationHide={isNavigationHide}
            setSelectedNavigation={setSelectedNavigation}
            selectedNavigation={selectedNavigation}
          />
          <MainCenter
            setSelectedNavigation={setSelectedNavigation}
            selectedNavigation={selectedNavigation}
            changeNavVisible={changeNavVisible}
            changeAddInfoVisible={changeAddInfoVisible}
            userInfo={userInfo}
          />
          <AdditionalInfo isAdditionalInfo={isAdditionalInfo} />
        </div>
      </div>
    </div>
  );
};
