import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faForward } from '@fortawesome/free-solid-svg-icons';
import './styles.scss';

const friendList = ['Hekatia', 'Гипероглиф', 'Oramuda', 'Darkfrosst', 'Darkfrost'];

export const FriendsInfo = () => (
  <div className="friends-info">
    <div className="friends-list-title">Друзі</div>
    <table className="friends-list-container">
      <thead>
        <tr>
          <td className="left-part">Імʼя</td>
          <td className="right-parrt">У грі</td>
        </tr>
      </thead>
      {friendList.map((el) => (
        <tr>
          <td className="left-part">{el}</td>
          <td className="right-parrt">
            <img src="https://cp.wowcircle.net/assets/images/icon/online.png" alt="/" />
          </td>
        </tr>
      ))}
    </table>
    <div className="friends-list-pagination">
      <div className="btn-container">
        <FontAwesomeIcon icon={faBackward} />
      </div>
      <div>Сторінка</div>
      <div className="page-counter">1</div>
      <div className="btn-container">
        <FontAwesomeIcon icon={faForward} />
      </div>
    </div>
  </div>
);
