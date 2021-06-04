import { GraphQLClient } from "graphql-request";
import { getSdk } from "./generated/graphql-types"; // THIS FILE IS THE GENERATED FILE

const client = new GraphQLClient("https://graphql.datocms.com", {
  headers: {
    Authorization: "Bearer f349cbbbde228e7860be9f38d5d982",
  },
});

const sdk = getSdk(client);

export default sdk;
