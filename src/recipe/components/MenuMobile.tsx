import React from "react";

import "./styles/MenuMobile.scss";

import vegetarianIcon from "../../assets/icons/ic_vegetarian.svg";
import principalIcon from "../../assets/icons/ic_main.svg";
import cakeIcon from "../../assets/icons/ic_cake.svg";
import fastfoodIcon from "../../assets/icons/ic_fast-food.svg";
import kidsfoodIcon from "../../assets/icons/ic_kids.svg";
import soupIcon from "../../assets/icons/ic_soup.svg";

export const MenuMobile = () => {
  return (
    <>
      <div className="menuHeads">
        <div className="tarjetMenu">
          <img
            className="tarjetMenu__imgMenu"
            src={vegetarianIcon}
            alt={"vegetarian icon"}
          />
          <span className="tarjetMenu__foodMenu">Vegetarianos</span>
        </div>
        <div className="tarjetMenu">
          <img
            className="tarjetMenu__imgMenu"
            src={principalIcon}
            alt={"principal icon"}
          />
          <span className="tarjetMenu__foodMenu">Principales</span>
        </div>
        <div className="tarjetMenu">
          <img
            className="tarjetMenu__imgMenu"
            src={cakeIcon}
            alt={"cake icon"}
          />
          <span className="tarjetMenu__foodMenu">Tortas</span>
        </div>
        <div className="tarjetMenu">
          <img
            className="tarjetMenu__imgMenu"
            src={fastfoodIcon}
            alt={"fast food icon"}
          />
          <span className="tarjetMenu__foodMenu">Rápida</span>
        </div>
        <div className="tarjetMenu">
          <img
            className="tarjetMenu__imgMenu"
            src={kidsfoodIcon}
            alt={"kids food icon"}
          />
          <span className="tarjetMenu__foodMenu">Menú Niños</span>
        </div>
        <div className="tarjetMenu">
          <img
            className="tarjetMenu__imgMenu"
            src={soupIcon}
            alt={"soup icon"}
          />
          <span className="tarjetMenu__foodMenu">Sopas</span>
        </div>
      </div>
    </>
  );
};
