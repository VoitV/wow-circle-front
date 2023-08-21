import { FriendsInfo } from './components/FriendsInfo';
import { Useful } from './components/Useful';
import { Discord } from './components/Discord';
import './styles.scss';

export const AdditionalInfo = () => (
  <div className="aditional-info">
    <FriendsInfo />
    <Useful />
    <Discord />
  </div>
);
