import { FriendsInfo } from './components/FriendsInfo';
import { Useful } from './components/Useful';
import { Discord } from './components/Discord';
import './styles.scss';

export const AdditionalInfo = ({ isAdditionalInfo }) => {
  const classNameAdditionInfo = isAdditionalInfo ? 'aditional-info' : 'aditional-info hide';
  return (
    <div className={classNameAdditionInfo}>
      <FriendsInfo />
      <Useful />
      <Discord />
    </div>
  );
};
