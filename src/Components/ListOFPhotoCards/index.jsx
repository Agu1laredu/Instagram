/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { PhotoCard } from '../PhotoCard/index.jsx';

export const ListOfPhotoCardsComponent = ({ data: { photos = [] } } = {}) => {
  return (
    <div>
      <ul>
        {photos.map((photo) => (
          <PhotoCard key={photo.id} {...photo} />
        ))}
      </ul>
    </div>
  );
};
