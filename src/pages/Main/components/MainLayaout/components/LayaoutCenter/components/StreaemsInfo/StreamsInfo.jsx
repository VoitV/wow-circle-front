import { CenterTitleTemplate } from '../../../../../../../../components/CenterTitleTamplate';
import { StreamsInfoCards } from './components/StreamInfoCards';
import './styles.scss';

export const StreamsInfo = () => (
  <div className="streams-info">
    <CenterTitleTemplate
      url="https://wowcircle.net/images/icon/stream_icon.png"
      textBig="Стрими наших гравців по WoW"
      textSml="Зараз ведеться 3 онлайн трансляцій!"
      buttonText="Дивитися більше"
    />
    <StreamsInfoCards />
    <hr />
  </div>
);
