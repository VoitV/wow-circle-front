import { Slider } from './components/Slider';
import { StreamsInfo } from './components/StreaemsInfo';
import { NewsInfo } from './components/NewsInfo/NewsInfo';
import './styles.scss';

export const LayaoutCenter = () => (
  <div className="layaout-center">
    <div className="top-img">
      <img src="https://wowcircle.net/themes/wowcircle/images/bg/main_top_bg.png" alt="top" />
    </div>
    <div className="layaout-center-content-container">
      <div className="layaout-center-content">
        <Slider />
        <StreamsInfo />
        <NewsInfo />
      </div>
    </div>
  </div>
);
