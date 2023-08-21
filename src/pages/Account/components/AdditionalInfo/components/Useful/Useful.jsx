import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import './styles.scss';

const usefulInfo = [
  {
    text: 'Як голосувати?',
  },
  {
    text: 'Як поповнити рахунок?',
  },
  {
    text: 'Що таке Loot Box?',
  },
  {
    text: 'Магазин персонажів?',
  },
  {
    text: 'Як голосувати?',
  },
];

export const Useful = () => (
  <div className="useful">
    <div className="useful-title">Корисне</div>
    <div className="useful-info">
      {usefulInfo.map((el) => (
        <div className="useful-info-item">
          <FontAwesomeIcon icon={faQuestionCircle} />
          {el.text}
        </div>
      ))}
    </div>
  </div>
);
