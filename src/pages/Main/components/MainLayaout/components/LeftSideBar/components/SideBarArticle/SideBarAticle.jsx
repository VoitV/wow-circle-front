import { ArticleItem } from './components/ArticleItem';
import './styles.scss';

const articleItems = [
  {
    header: 'Про персонал',
    mainText: 'Продовження статті про управління проектом WoW Circle, тепер більше',
    date: '5 лютого 2013 р., 16:01',
  },
  {
    header: 'Управління проектом',
    mainText: 'У цій статті я розповім про управління проектом WoW Circle',
    date: '5 лютого 2013 р., 15:20',
  },
];

export const SideBarArticle = () => (
  <div className="side-bar-article">
    <div className="article-header">КОРИСНІ СТАТТІ</div>
    {articleItems.map((el) => (
      <ArticleItem header={el.header} mainText={el.mainText} date={el.date} />
    ))}
    <div className="read-more">Читати ще</div>
  </div>
);
