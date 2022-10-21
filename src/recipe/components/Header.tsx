import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "./styles/Header.scss";

import { selectTypeFoodReducer } from "../../store/recipe/recipeSlice";
import { ItemNavbar } from "./constants";
import { ItemsNavbar } from "./types";

export const Header = () => {
  const dispatch = useDispatch();

  const { queryParams } = useSelector((state: any) => state.recipe);
  const handleNewRecipes = (item: any) => dispatch(selectTypeFoodReducer(item));

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
              {ItemNavbar.map((item: ItemsNavbar, id: number) => (
                <li
                  key={id}
                  onClick={() => handleNewRecipes(item)}
                  className={`menuHead__itemSelect ${
                    queryParams === item.queryParams ? "selected" : ""
                  }`}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
          <div
            onClick={() => handleNewRecipes("Home")}
            className="icoHome"
          ></div>
        </div>
      </div>
    </>
  );
};
