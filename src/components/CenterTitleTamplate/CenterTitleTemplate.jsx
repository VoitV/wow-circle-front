/* eslint-disable react/prop-types */
import './styles.scss';

export const CenterTitleTemplate = ({ url, textBig, textSml, buttonText }) => (
  <div className="info-title">
    <img src={url} alt="title" />
    <div className="info-text">
      <h1>{textBig}</h1>
      <div>{textSml}</div>
    </div>
    <div className="info-more-btn">{buttonText}</div>
  </div>
);
