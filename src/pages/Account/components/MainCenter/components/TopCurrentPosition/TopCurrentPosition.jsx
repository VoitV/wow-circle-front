/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import './styles.scss';

export const TopCurrentPosition = ({
  changeNavVisible,
  changeAddInfoVisible,
  setSelectedNavigation,
}) => {
  const [leftDilatationButton, setLeftDilatationButton] = useState(true);
  const [rightDilatationButton, setRightDilatationButton] = useState(true);

  const onHandleLeftButtonClick = () => {
    changeNavVisible();
    setLeftDilatationButton(!leftDilatationButton);
  };

  const onHandleRightButtonClick = () => {
    changeAddInfoVisible();
    setRightDilatationButton(!rightDilatationButton);
  };

  return (
    <div className="top-current-position">
      <div className="left dilatation-btn" onClick={onHandleLeftButtonClick}>
        {leftDilatationButton ? (
          <img src="https://cp.wowcircle.net/assets/images/icon/left.png" />
        ) : (
          <img src="https://cp.wowcircle.net/assets/images/icon/right.png" />
        )}
      </div>
      <div className="current-position-center">
        <div
          className="management"
          onClick={(e) => {
            setSelectedNavigation(e.target.className);
          }}
        >
          Управління
        </div>
      </div>
      <div className="right dilatation-btn" onClick={onHandleRightButtonClick}>
        {rightDilatationButton ? (
          <img src="https://cp.wowcircle.net/assets/images/icon/right.png" />
        ) : (
          <img src="https://cp.wowcircle.net/assets/images/icon/left.png" />
        )}
      </div>
    </div>
  );
};
