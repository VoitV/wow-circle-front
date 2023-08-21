/* eslint-disable react/prop-types */
import './styles.scss';

export const ArticleItem = ({ header, mainText, date }) => (
  <div className="article-item">
    <div className="item-header">{header}</div>
    <div className="item-text">{mainText}</div>
    <div className="item-date">{date}</div>
  </div>
);
