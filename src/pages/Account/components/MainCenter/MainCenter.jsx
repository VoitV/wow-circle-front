import { Management } from './components/Management/Management';
import { TopCurrentPosition } from './components/TopCurrentPosition';
import './styles.scss';

export const MainCenter = ({
  changeNavVisible,
  changeAddInfoVisible,
  selectedNavigation,
  userInfo,
  setSelectedNavigation,
}) => {
  const currentNavPosition = () => {
    if (selectedNavigation === 'management') {
      return <Management userInfo={userInfo} />;
    }
    return <div />;
  };

  return (
    <div className="main-center">
      <TopCurrentPosition
        setSelectedNavigation={setSelectedNavigation}
        changeNavVisible={changeNavVisible}
        changeAddInfoVisible={changeAddInfoVisible}
      />
      {currentNavPosition()}
    </div>
  );
};
