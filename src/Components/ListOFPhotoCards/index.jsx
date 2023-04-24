import React from 'react';
import { PhotoCard } from '../PhotoCard/index.jsx';

export const ListOfPhotoCardsComponent = ({ data: { photos = [] } } = {}) => {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div>
      <ul>
        {photos.map((photo) => (
          <PhotoCard key={photo.id} {...photo} />
        ))}
      </ul>
    </div>
  );
};
