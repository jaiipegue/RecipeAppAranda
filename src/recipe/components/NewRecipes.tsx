import React from "react";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";

import "./styles/NewRecipes.scss";

import { getRecipes } from "../../services";
import { getCalificationRandom, getDiffcultyRandom } from "../../helpers";

import { FoodCard, Spinner, ErrorMessage } from "./";

export const NewRecipes = () => {
  const selectFoodType = useSelector((state: any) => state.recipe);

  const {
    data: recipes,
    isLoading,
    isFetching,
    error,
  } = useQuery([selectFoodType], () => getRecipes(selectFoodType.queryParams), {
    refetchOnWindowFocus: false,
  });

  if (isLoading || isFetching) {
    return (
      <>
        <Spinner />;
      </>
    );
  }

  if (error) {
    return <ErrorMessage />;
  }

  return (
    <>
      <div className="middle">
        <div className="middleTitle">
          {selectFoodType.name === "Home"
            ? `Nuevas Recetas`
            : `${selectFoodType.name}`}
        </div>
        <div className="contCarrusel">
          <ul id="carruselini" className="carrusel">
            {recipes.map((food: any) => (
              <FoodCard
                key={food.id}
                {...food}
                score={getCalificationRandom(1, 5)}
                difficulty={getDiffcultyRandom()}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
