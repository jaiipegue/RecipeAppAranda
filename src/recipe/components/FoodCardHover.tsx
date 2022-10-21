import React, { FC } from "react";

import "./styles/FoodCardHover.scss";

import portionIcon from "../../assets/icons/ic_portion.svg";
import chefIcon from "../../assets/icons/ic_chef.svg";
import timeIcon from "../../assets/icons/ic_time.svg";

import { foodCardFinalProps } from "./types";

export const FoodCardHover: FC<foodCardFinalProps> = ({
  readyInMinutes,
  servings,
  difficulty,
}) => {
  return (
    <>
      <div className="divhover animate__animated animate__fadeIn">
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
            <span className="descriptionHover__textHover">
              {servings} raciones
            </span>
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
            <span className="descriptionHover__textHover">
              {readyInMinutes} minutos
            </span>
          </div>
          <div className="descriptionHover">
            <img
              className="descriptionHover__imgHover"
              src={chefIcon}
              alt="chef"
            />
            <span className="descriptionHover__titTextHover">Dificultad</span>
            <span className="descriptionHover__textHover">{difficulty}</span>
          </div>
        </div>
      </div>
    </>
  );
};
