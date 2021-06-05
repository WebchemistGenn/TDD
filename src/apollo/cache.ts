import { InMemoryCache, makeVar } from "@apollo/client";

export const meVar = makeVar<{ name?: string }>({});

export const cache = new InMemoryCache({ addTypename: false });
