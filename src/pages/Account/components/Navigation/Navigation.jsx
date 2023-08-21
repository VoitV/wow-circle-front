import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGear,
  faCircleXmark,
  faEnvelope,
  faLockOpen,
  faHistory,
  faBong,
  faCartShopping,
  faUser,
  faMale,
  faShield,
  faFlag,
  faUsers,
  faAreaChart,
} from '@fortawesome/free-solid-svg-icons';
import './styles.scss';

const navigationList = [
  {
    className: 'managment',
    text: 'Управління',
    svg: faGear,
  },
  {
    className: 'paymant',
    text: 'Поповнити рахунок',
    svg: faCircleXmark,
  },
  {
    className: 'email-change',
    text: 'Змінити e-mail',
    svg: faEnvelope,
  },
  {
    className: 'password-change',
    text: 'Змінити пароль',
    svg: faLockOpen,
  },
  {
    className: 'history',
    text: 'Історія',
    svg: faHistory,
  },
  {
    className: 'bonus-services',
    text: 'Бонус послуги',
    svg: faBong,
  },
  {
    className: 'shop',
    text: 'Магазин товарів',
    svg: faCartShopping,
  },
  {
    className: 'shop-characters-buy',
    text: 'Купити персонажа',
    svg: faUser,
  },
  {
    className: 'shop-characters-sell',
    text: 'Продати персонажа',
    svg: faUser,
  },
  {
    className: 'check-charackter',
    text: 'Подивитися персонажа',
    svg: faMale,
  },
  {
    className: 'restore-charackter',
    text: 'Відновити персонажа',
    svg: faMale,
  },
  {
    className: 'fix-error',
    text: 'Виправити помилки',
    svg: faShield,
  },
  {
    className: 'voting',
    text: 'Голосування',
    svg: faFlag,
  },
  {
    className: 'loyalti',
    text: 'Лоялність',
    svg: faHistory,
  },
  {
    className: 'guilds',
    text: 'Гільдії',
    svg: faUsers,
  },
  {
    className: 'top-kills',
    text: 'Топ вбивст',
    svg: faAreaChart,
  },
  {
    className: 'arena-info',
    text: 'Статистика арени',
    svg: faAreaChart,
  },
  {
    className: 'pve-info',
    text: 'Ладер PvE',
    svg: faAreaChart,
  },
  {
    className: 'battlegrounds',
    text: 'Поля боїв',
    svg: faAreaChart,
  },
];

export const Navigation = () => (
  <div className="navigation">
    <div className="title">Навігація</div>
    {navigationList.map((el) => (
      <div className={`${el.className} navigation-button`}>
        <FontAwesomeIcon icon={el.svg} />
        {el.text}
      </div>
    ))}
  </div>
);
