import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4qhyrfu3sgm01xxad0yc16g/master",
  cache: new InMemoryCache()
});