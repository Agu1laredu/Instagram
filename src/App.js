import React from "react";
import { ListOfCategories } from "./Components/ListOfCategories";
import { ListOfPhotoCards } from "./Components/ListOFPhotoCards";
import { Logo } from './Components/Logo';
import { GlobalStyle } from "./styles/GlobalStyles";

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Logo />
      <ListOfCategories />
      <ListOfPhotoCards />
    </div>
  );
};
