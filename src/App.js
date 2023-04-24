import React, { Fragment } from 'react';
import { ListOfCategories } from './Components/ListOfCategories';
import { ListOfPhotoCards } from './container/ListOfPhotoCards';
import { Logo } from './Components/Logo';
import { GlobalStyle } from './styles/GlobalStyles';

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get('detail');
  return (
    <div>
      <GlobalStyle />
      <Logo />
      {detailId ? (
        <div>
          <h1 style={{ margin: 'auto', textAlign: 'center' }}>
            te falta practica bro
          </h1>
          <h2 style={{ margin: 'auto', textAlign: 'center' }}>
            sigue asi , lo lograras!
          </h2>
        </div>
      ) : (
        <Fragment>
          <ListOfCategories />
          <ListOfPhotoCards categoryId={1} />
        </Fragment>
      )}
    </div>
  );
};
