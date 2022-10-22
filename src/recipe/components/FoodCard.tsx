import React, { useState, FC } from "react";

import "./styles/FoodCard.scss";
import "animate.css";

import { isMobile, openInNewTab } from "../../helpers";
import { FoodCardHover, FoodCardMain } from "./";
import { foodCardInitialProps } from "./types";

export const FoodCard: FC<foodCardInitialProps> = ({
  readyInMinutes,
  servings,
  title,
  image,
  sourceUrl,
  index,
  score,
  difficulty,
}) => {
  const [isShowHover, setIsShowHover] = useState("false");

  const showHover = () => {
    setIsShowHover("true");
  };

  const unshowHover = () => {
    setIsShowHover("false");
  };

  return (
    <>
      <li
        onMouseDown={() => openInNewTab(sourceUrl)}
        className="tarjet"
        onMouseOver={showHover}
        onMouseLeave={unshowHover}
      >
        <img className="tarjet__plate" src={image} alt="plate"></img>
        {isShowHover === "true" && isMobile() === false ? (
          <FoodCardHover
            readyInMinutes={readyInMinutes}
            servings={servings}
            title={title}
            index={index}
            difficulty={difficulty}
          />
        ) : (
          <FoodCardMain title={title} score={score} />
        )}
      </li>
    </>
  );
};
