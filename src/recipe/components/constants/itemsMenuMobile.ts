import vegetarianIcon from "../../../assets/icons/ic_vegetarian.svg"
import principalIcon from "../../../assets/icons/ic_main.svg";
import cakeIcon from "../../../assets/icons/ic_cake.svg";
import fastfoodIcon from "../../../assets/icons/ic_fast-food.svg";
import kidsfoodIcon from "../../../assets/icons/ic_kids.svg";
import soupIcon from "../../../assets/icons/ic_soup.svg";
import { itemsMenuMobileTypes } from "../types";

export const itemsMenuMobile: itemsMenuMobileTypes[] = [
  {
    idnormal: "tarhead1",
    imgMenu: vegetarianIcon,
    food: "Vegetarianos",
    queryParams: "vegetarian",
  },
  {
    idnormal: "tarhead2",
    imgMenu: principalIcon,
    food: "Principales",
    queryParams: "fingerfood",
  },
  {
    idnormal: "tarhead3",
    imgMenu: cakeIcon,
    food: "Tortas",
    queryParams: "cakes",
  },
  {
    idnormal: "tarhead4",
    imgMenu: fastfoodIcon,
    food: "Rápida",
    queryParams: "quick",
  },
  {
    idnormal: "tarhead5",
    imgMenu: kidsfoodIcon,
    food: "Menú Niños",
    queryParams: "",
  },
  {
    idnormal: "tarhead6",
    imgMenu: soupIcon,
    food: "Sopas",
    queryParams: "soups",
  },
];
