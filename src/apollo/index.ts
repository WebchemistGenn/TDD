import { ApolloClient } from "@apollo/client";
import { cache } from "./cache";

export const client = new ApolloClient({
  version: "1.0",
  cache,
  connectToDevTools: true,
  defaultOptions: {},
});
