import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client' // ASÍ
import { App } from './App'

const client = new ApolloClient({
  uri: 'https://petgram-server-anthony-3vrjckvsb.vercel.app/graphql',
  cache: new InMemoryCache()
})
// import ApolloClient from 'apollo-boost';
// import { ApolloProvider } from 'react-apollo';
// import { App } from "./App";

// const client = new ApolloClient({
//   uri: "https://petgram-server.midudev.now.sh/graphql",
// });

//https://petgram-server-leidy-daza-leidydaza.vercel.app/categories
// https://petgram-server.midudev.now.sh/graphql

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);


