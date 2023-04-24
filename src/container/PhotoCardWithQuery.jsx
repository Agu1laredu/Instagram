import React from 'react';
import { PhotoCard } from '../components/PhotoCards/index.jsx';

import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const query = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

export const PhotoCardWithQuery = ({ id }) => (
  // eslint-disable-next-line react/jsx-filename-extension
  <Query query={query} variables={{ id }}>
    {({ data }) => {
      const { photo = {} } = data;
      return <PhotoCard {...photo} />;
    }}
  </Query>
);
