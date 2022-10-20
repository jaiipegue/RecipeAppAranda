import React from "react";

import "./styles/FoodCardHover.scss";

import portionIcon from "../../assets/icons/ic_portion.svg";
import chefIcon from "../../assets/icons/ic_chef.svg";
import timeIcon from "../../assets/icons/ic_time.svg";

export const FoodCardHover = () => {
  return (
    <>
      <div className="divhover">
        <div className="hoverTarjet">
          <div className="descriptionHover">
            <img
              className="descriptionHover__imgHover"
              src={portionIcon}
              alt="portion"
            />
            <span className="descriptionHover__titTextHover">
              Tamaño de la porción
            </span>
            <span className="descriptionHover__textHover">4 raciones</span>
          </div>
          <div className="descriptionHover">
            <img
              className="descriptionHover__imgHover"
              src={timeIcon}
              alt="time"
            />
            <span className="descriptionHover__titTextHover">
              Tiempo de preparación
            </span>
            <span className="descriptionHover__textHover">10 minutos</span>
          </div>
          <div className="descriptionHover">
            <img
              className="descriptionHover__imgHover"
              src={chefIcon}
              alt="chef"
            />
            <span className="descriptionHover__titTextHover">Dificultad</span>
            <span className="descriptionHover__textHover">fácil</span>
          </div>
        </div>
      </div>
    </>
  );
};
