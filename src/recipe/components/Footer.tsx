import React from "react";
import bannerFooter from "../../assets/Grupo7610.png";
import "./styles/Footer.scss";

export const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="textfooter">
          <span className="textfooter__text">Con el patrocinio de</span>
        </div>
        <img className="imgFooter" src={bannerFooter} alt="footer" />
      </div>
    </>
  );
};
