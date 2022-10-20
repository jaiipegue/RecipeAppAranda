import React, { useState, useEffect } from "react";
import { FoodCardHover } from "./FoodCardHover";
import { FoodCardMain } from "./FoodCardMain";

import "./styles/FoodCard.scss";

export const FoodCard = ({ idHover, onigeoImage }) => {
  const [isShow, setIsShow] = useState("false");
  // const { width, height } = sizeDetect();
  console.log(window.matchMedia("max-width: 600px"));
  useEffect(() => {}, []);

  return (
    <>
      <li
        className="tarjet"
        key={idHover + Math.random()}
        onMouseOver={() => setIsShow("true")}
        onMouseOut={() => setIsShow("false")}
      >
        <img className="tarjet__plate" src={onigeoImage} alt="plate"></img>
        {isShow === "true" ? <FoodCardHover /> : <FoodCardMain />}
      </li>
    </>
  );
};
