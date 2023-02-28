import React from "react";
import { ListOfCategories } from "./Components/ListOfCategories";
import { ListOfPhotoCards } from "./Components/ListOFPhotoCards";
import { Logo } from './Components/Logo';
import { Mensajeria } from './Components/Mensajeria';
import { GlobalStyle } from "./styles/GlobalStyles";

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Logo />
      <Mensajeria />
      <ListOfCategories />
      <ListOfPhotoCards />
    </div>
  );
};
