import React from "react";
import "./styles/Header.scss";

export const Header = () => {
  return (
    <>
      <div className="headform">
        <div className="header">
          <div className="title">
            <span className="title__principalText">
              Recipe<span className="title__secondaryText">App</span>
            </span>
          </div>
          <div className="menuHead">
            <ul className="menuHead__listSelect">
              <li className="menuHead__itemSelect selected">Home</li>
              <li className="menuHead__itemSelect">Vegetarianos</li>
              <li className="menuHead__itemSelect">Platos Principales</li>
              <li className="menuHead__itemSelect">Tortas</li>
              <li className="menuHead__itemSelect">Comida R&aacute;pida</li>
              <li className="menuHead__itemSelect">Men&uacute; Ni&ntilde;os</li>
              <li className="menuHead__itemSelect">Sopas</li>
            </ul>
          </div>
          <div className="icoHome"></div>
        </div>
      </div>
    </>
  );
};
