import React from "react";

import { useAppDispatch } from "../../store";
import { selectTypeFoodReducer } from "../../store/recipe/recipeSlice";
import { itemsMenuMobileTypes } from "./types";

export const SectionButton = ({
  imgMenu,
  food,
  queryParams,
}: itemsMenuMobileTypes) => {
  const dispatch = useAppDispatch();

  const handleNewRecipes = (item: any) => dispatch(selectTypeFoodReducer(item));

  const item = {
    name: food,
    queryParams: queryParams,
  };

  return (
    <>
      <div onClick={() => handleNewRecipes(item)} className="tarjetMenu">
        <img
          className="tarjetMenu__imgMenu"
          src={imgMenu}
          alt={"vegetarian icon"}
        />
        <span className="tarjetMenu__foodMenu">{food}</span>
      </div>
    </>
  );
};
