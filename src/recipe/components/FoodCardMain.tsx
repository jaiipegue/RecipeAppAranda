import { FC } from "react";
import { useSelector } from "react-redux";

import "./styles/FoodCardMain.scss";

import startIcon from "../../assets/icons/ic_star.svg";
import heartIcon from "../../assets/icons/ic-favorite.svg";

import { foodCardMainProps } from "./types";

export const FoodCardMain: FC<foodCardMainProps> = ({ title, score }) => {
  const { queryParams } = useSelector((state: any) => state.recipe);

  return (
    <>
      <div className="normalTarjet">
        <div className="textFood">
          <span className="textFood__food">{title.substring(0, 7)}</span>
          <span className="textFood__foodDesc">&nbsp;{queryParams}</span>
        </div>
        <div className="score">
          <img className="score__star" src={startIcon} alt="star" />
          <span className="score__span">{score}</span>
          <img className="score__heart" src={heartIcon} alt="heart" />
        </div>
      </div>
    </>
  );
};
