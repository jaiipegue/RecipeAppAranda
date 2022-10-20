import React from "react";
import "./styles.scss";
import "./script";

import { Header } from "./recipe/components/Header";
import { Hero } from "./recipe/components/Hero";
import { NewRecipes } from "./recipe/components/NewRecipes";
import { Footer } from "./recipe/components/Footer";
import { MenuMobile } from "./recipe/components/MenuMobile";

// const data2 = [
//   {
//     idnormal: "tarhead1",
//     imgMenu: "./assets/icons/ic_vegetarian.svg",
//     food: "Vegetarianos",
//   },
//   {
//     idnormal: "tarhead1",
//     imgMenu: "./assets/icons/ic_vegetarian.svg",
//     food: "Vegetarianos",
//   },
//   {
//     idnormal: "tarhead1",
//     imgMenu: "./assets/icons/ic_vegetarian.svg",
//     food: "Vegetarianos",
//   },
//   {
//     idnormal: "tarhead1",
//     imgMenu: "./assets/icons/ic_vegetarian.svg",
//     food: "Vegetarianos",
//   },
// ];

export const RecipeApp = () => {
  return (
    <>
      <Header />
      <Hero />
      <MenuMobile />
      <NewRecipes />
      <Footer />
    </>
  );
};
