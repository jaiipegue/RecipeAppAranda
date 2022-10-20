import React from "react";

import onigeoImage from "../../assets/Ojingeo-muchim-5.png";
import { FoodCard } from "./FoodCard";
import "./styles/NewRecipes.scss";

const data = [
  {
    idnormal: "normal1",
    idhover: "hover1",
    imgPlate: "./assets/Ojingeo-muchim-5.png",
    food: "Ojingeo",
    foodDesc: "Muchim",
    calification: "5.0",
  },
  {
    idnormal: "normal1",
    idhover: "hover1",
    imgPlate: "./assets/Ojingeo-muchim-5.png",
    food: "Ojingeo",
    foodDesc: "Muchim",
    calification: "5.0",
  },
  {
    idnormal: "normal1",
    idhover: "hover1",
    imgPlate: "./assets/Ojingeo-muchim-5.png",
    food: "Ojingeo",
    foodDesc: "Muchim",
    calification: "5.0",
  },
  {
    idnormal: "normal1",
    idhover: "hover1",
    imgPlate: "./assets/Ojingeo-muchim-5.png",
    food: "Ojingeo",
    foodDesc: "Muchim",
    calification: "5.0",
  },
];

export const NewRecipes = () => {
  return (
    <>
      <div className="middle">
        <div className="middleTitle">Nuevas Recetas</div>
        <div className="contCarrusel">
          <ul id="carruselini" className="carrusel">
            {data.map((plate) => (
              <FoodCard
                key={plate.idhover + Math.random()}
                idHover={plate.idhover}
                onigeoImage={onigeoImage}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
