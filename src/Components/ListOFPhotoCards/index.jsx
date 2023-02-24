import React from "react";
import { PhotoCard } from "../PhotoCard";
import data from "../../api/db.json";

export const ListOfPhotoCards = () => {
  return (
    <ul>
      {data.categories.map((category) => (
        <div key={category.id}>
          <PhotoCard {...category} />
        </div>
      ))}
    </ul>
  );
};
