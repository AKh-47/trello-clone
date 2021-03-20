import React, { ReactElement } from "react";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: `http://localhost:8000/graphql`,
  cache: new InMemoryCache(),
});

export default ({ children }: { children: ReactElement }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);
