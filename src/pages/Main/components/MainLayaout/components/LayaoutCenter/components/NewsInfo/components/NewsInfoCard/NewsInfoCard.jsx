import './styles.scss';

export const NewsInfoCard = () => (
  <div className="news-info-card">
    <div className="bg-img">
      <img src="https://wowcircle.net/images/news_img_1.png" alt="mg" />
    </div>
    <div className="news-area">
      <div className="date">23.06.2003</div>
      <div className="title">Записи боїв арени WotLk</div>
      <div className="text">
        Якийсь час тому гравцям у нашому внутрішньоігровому меню став доступний функціонал повторів
        арени (реплеїв), що це і для чого це
      </div>
    </div>
  </div>
);
