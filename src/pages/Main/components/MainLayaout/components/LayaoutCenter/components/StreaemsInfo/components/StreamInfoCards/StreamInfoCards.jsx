/* eslint-disable import/no-extraneous-dependencies */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEye, faHeart } from '@fortawesome/free-solid-svg-icons';
import './styles.scss';

const streamsList = [
  {
    streamerName: 'dilertv',
    viewers: 228,
    likes: 7981,
    img: 'https://static-cdn.jtvnw.net/previews-ttv/live_user_dilertv-268x170.jpg',
  },
  {
    streamerName: 'namar34',
    viewers: 148,
    likes: 40,
    img: 'https://static-cdn.jtvnw.net/previews-ttv/live_user_namar34-268x170.jpg',
  },
  {
    streamerName: 'getcool',
    viewers: 78,
    likes: 306,
    img: 'https://static-cdn.jtvnw.net/previews-ttv/live_user_getcool-268x170.jpg',
  },
];

export const StreamsInfoCards = () => (
  <div className="streams-info-cards">
    {streamsList.map((el) => (
      <div className="stream-info-card">
        <div className="stream-card-preview">
          <img src={el.img} alt="preview" />
        </div>
        <div className="stream-card-info">
          <span>
            <FontAwesomeIcon icon={faUser} />
            {el.streamerName}
          </span>
          <span>
            <FontAwesomeIcon icon={faEye} />
            {el.viewers}
          </span>
          <span>
            <FontAwesomeIcon icon={faHeart} />
            {el.likes}
          </span>
        </div>
      </div>
    ))}
  </div>
);
