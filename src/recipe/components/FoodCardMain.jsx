import React from "react";
import startIcon from "../../assets/icons/ic_star.svg";
import heartIcon from "../../assets/icons/ic-favorite.svg";
import "./styles/FoodCardMain.scss";
export const FoodCardMain = () => {
  return (
    <>
      <div className="normalTarjet">
        <div className="textFood">
          <span className="textFood__food">Ojingeo</span>
          <span className="textFood__foodDesc">Muchim</span>
        </div>
        <div className="score">
          <img className="score__star" src={startIcon} alt="star" />
          <span className="score__span">5.0</span>
          <img className="score__heart" src={heartIcon} alt="heart" />
        </div>
      </div>
    </>
  );
};
