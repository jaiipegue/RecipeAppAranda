import React from "react";
import "./styles.scss";

import {
  Footer,
  Header,
  Hero,
  MenuMobile,
  NewRecipes,
} from "./recipe/components";

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
