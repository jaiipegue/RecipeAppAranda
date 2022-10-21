import React from "react";
import "./styles/MenuMobile.scss";

import { SectionButton } from "./";
import { itemsMenuMobile } from "./constants";
import { itemsMenuMobileTypes } from "./types";

export const MenuMobile = () => {
  return (
    <>
      <div className="menuHeads">
        {itemsMenuMobile.map((tarjet: itemsMenuMobileTypes, i: number) => (
          <SectionButton key={i} {...tarjet} />
        ))}
      </div>
    </>
  );
};
