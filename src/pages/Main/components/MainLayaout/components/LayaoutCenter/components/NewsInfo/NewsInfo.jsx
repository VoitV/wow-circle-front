import { CenterTitleTemplate } from '../../../../../../../../components/CenterTitleTamplate';
import { NewsInfoCard } from './components/NewsInfoCard/NewsInfoCard';

import './styles.scss';

export const NewsInfo = () => (
  <div className="news-info">
    <CenterTitleTemplate
      url="https://wowcircle.net/images/icon/news_icon.png"
      textBig="Новини WoW Circle"
      textSml="Актуальні новини"
      buttonText="Архів новин"
    />
    <div className="news-info-cards">
      <NewsInfoCard />
      <NewsInfoCard />
      <NewsInfoCard />
      <NewsInfoCard />
    </div>
  </div>
);
