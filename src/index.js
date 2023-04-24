import React from 'react';
import { createRoot } from 'react-dom/client';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import { App } from './App';
import './index.css';

const client = new ApolloClient({
  uri: 'https://petgram-server-anthony-3vrjckvsb.vercel.app/graphql',
});
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
