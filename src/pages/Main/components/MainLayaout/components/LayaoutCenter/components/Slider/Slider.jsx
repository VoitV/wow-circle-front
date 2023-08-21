/* eslint-disable import/no-extraneous-dependencies */
import { Carousel } from 'react-bootstrap';

import './styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Slider = () => (
  <div className="slider">
    <Carousel>
      <Carousel.Item>
        <img
          className=""
          src="https://wowcircle.net/themes/wowcircle/images/slide_img_1.png"
          alt="1"
        />
        <div className="cr-item-text">
          <h1 className="cr-item-text-header">Великий вибір!</h1>
          <p className="cr-item-text-main">
            Підтримуєм такі клієнти: 3.3.5Wotlk, 4.3.4Cata, 5.4.8MoP, 7.3.5Legion
          </p>
          <div className="cr-item-text-btn">Дізнатися більше</div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=""
          src="https://wowcircle.net/themes/wowcircle/images/slide_img_2.png"
          alt="1"
        />
        <div className="cr-item-text">
          <h1 className="cr-item-text-header">12 Ігрових серверів</h1>
          <p className="cr-item-text-main">
            Ігрові сервери як: 3.3.5Wotlk, 4.3.4Cata, 5.4.8MoP, 7.3.5Legion
          </p>
          <div className="cr-item-text-btn">Дізнатися більше</div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=""
          src="https://wowcircle.net/themes/wowcircle/images/slide_img_3.png"
          alt="3"
        />
        <div className="cr-item-text">
          <h1 className="cr-item-text-header">Якість та стабільність</h1>
          <p className="cr-item-text-main">Максимальна роботоздібність PvP та PvE контенту!</p>
          <div className="cr-item-text-btn">Дізнатися більше</div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=""
          src="https://wowcircle.net/themes/wowcircle/images/slide_img_4.png"
          alt="4"
        />
        <div className="cr-item-text">
          <h1 className="cr-item-text-header">Постійні оновлення</h1>
          <p className="cr-item-text-main">
            Оновлення на всіх версіях випускаються досить часто, завдяки цьому здійснюється швидке
            виправлення багів
          </p>
          <div className="cr-item-text-btn">Дізнатися більше</div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=""
          src="https://wowcircle.net/themes/wowcircle/images/slide_img_5.png"
          alt="5"
        />

        <div className="cr-item-text">
          <h1 className="cr-item-text-header">Якісне Обладнання</h1>
          <p className="cr-item-text-main">
            Обладнання проекту розташоване в центральній частині Європи, що забезпечує відмінний
            пінг із будь-якої точки світу.
          </p>
          <div className="cr-item-text-btn">Дізнатися більше</div>
        </div>
      </Carousel.Item>
    </Carousel>
  </div>
);
