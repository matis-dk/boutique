import { Box, Button, Flex, Grid, Text } from "@theme-ui/components";
import Head from "next/head";
import Link from "next/link";

import { GetStaticProps } from "next";
import { Product, ProductId } from "../types/types";

import { fetchAPI } from "../src/lib/api";
import { request, gql, GraphQLClient } from "graphql-request";
import { getSdk } from "../src/graphql/generated/graphql-types"; // THIS FILE IS THE GENERATED FILE

export default function Index() {
  return (
    <div>
      <Head>
        <title>Home - Boutique</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid
        sx={{
          height: "80vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Flex
          sx={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Flex
            sx={{
              width: "100px",
            }}
            mb="8"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 256 256"
            >
              <circle
                cx="127.92"
                cy="127.92"
                r="127.92"
                fill="#3A6B45"
              ></circle>
              <path
                fill="#fff"
                d="M124.52 166.094c0 2 .45 3.65 1.35 4.95 1 1.3 2.15 2.35 3.45 3.15 1.4.8 2.85 1.4 4.35 1.8 1.6.3 3 .45 4.2.45v6.3c-1.2 0-2.7-.05-4.5-.15-1.8-.2-3.65-.4-5.55-.6-1.9-.2-3.75-.35-5.55-.45-1.8-.2-3.3-.3-4.5-.3-1.2 0-2.7.1-4.5.3-1.8.1-3.65.25-5.55.45s-3.75.4-5.55.6c-1.8.1-3.3.15-4.5.15v-6.3c1.3 0 2.75-.15 4.35-.45 1.6-.4 3.05-1 4.35-1.8 1.3-.8 2.4-1.85 3.3-3.15.9-1.3 1.35-2.95 1.35-4.95v-59.4c0-3.7-.1-6.75-.3-9.15-.1-2.5-.5-4.4-1.2-5.7-.7-1.4-1.7-2.35-3-2.85-1.3-.6-3.1-.9-5.4-.9v-5.25c2.5 0 4.65-.15 6.45-.45 1.9-.3 3.6-.75 5.1-1.35 1.5-.6 2.85-1.3 4.05-2.1 1.3-.8 2.65-1.65 4.05-2.55h3.75v89.7zm1.95-106.35c2.1 0 4.6.1 7.5.3 2.9.2 5.9.7 9 1.5 3.1.7 6.15 1.8 9.15 3.3 3 1.4 5.7 3.3 8.1 5.7 2.4 2.4 4.3 5.4 5.7 9 1.5 3.5 2.25 7.75 2.25 12.75 0 4.8-.7 8.9-2.1 12.3-1.3 3.4-3 6.25-5.1 8.55-2.1 2.2-4.4 3.9-6.9 5.1-2.5 1.1-4.95 1.75-7.35 1.95v.6c3.9 0 7.9.8 12 2.4 4.2 1.6 7.95 4.1 11.25 7.5 3.4 3.3 6.2 7.55 8.4 12.75 2.2 5.1 3.3 11.25 3.3 18.45 0 8.1-1.75 14.9-5.25 20.4-3.5 5.5-8.05 9.95-13.65 13.35-5.6 3.4-12 5.8-19.2 7.2-7.1 1.5-14.3 2.25-21.6 2.25-5.8 0-11.45-.45-16.95-1.35-5.5-.9-10.4-2.25-14.7-4.05-4.2-1.8-7.6-4.05-10.2-6.75-2.6-2.6-3.9-5.6-3.9-9 0-2.4.75-3.85 2.25-4.35-.5-.3-1.05-.95-1.65-1.95-.6-1-1.15-2.2-1.65-3.6-.5-1.5-.95-3.15-1.35-4.95-.4-1.9-.6-3.8-.6-5.7 0-1.5.15-3.2.45-5.1.4-2 1.1-3.9 2.1-5.7 1.1-1.9 2.6-3.6 4.5-5.1 2-1.5 4.6-2.55 7.8-3.15l.9.75c-1.1 2.5-1.85 5.2-2.25 8.1-.3 2.8-.45 5.5-.45 8.1 0 8.4 1.35 15.05 4.05 19.95 2.8 4.8 6.15 8.45 10.05 10.95 3.9 2.5 7.9 4.05 12 4.65 4.2.7 7.75 1.05 10.65 1.05 5.3 0 10.5-.6 15.6-1.8 5.1-1.2 9.65-3.2 13.65-6 4.1-2.7 7.4-6.2 9.9-10.5 2.5-4.4 3.75-9.75 3.75-16.05 0-6.7-1.1-12.4-3.3-17.1-2.2-4.8-5-8.7-8.4-11.7-3.4-3.1-7.15-5.35-11.25-6.75-4.1-1.4-8.05-2.1-11.85-2.1v-6c3.3 0 6.3-.75 9-2.25 2.8-1.5 5.15-3.5 7.05-6 1.9-2.6 3.35-5.55 4.35-8.85 1.1-3.3 1.65-6.75 1.65-10.35 0-3.6-.6-6.95-1.8-10.05-1.1-3.1-2.85-5.75-5.25-7.95-2.4-2.3-5.5-4.05-9.3-5.25-3.7-1.3-8.15-1.95-13.35-1.95-7.1 0-12.9 1.15-17.4 3.45-4.4 2.3-7.9 5.35-10.5 9.15-2.5 3.7-4.25 7.9-5.25 12.6-.9 4.6-1.35 9.3-1.35 14.1-4.7 0-8.05-.9-10.05-2.7-2-1.8-3-4.25-3-7.35 0-2.9.7-5.25 2.1-7.05 1.5-1.8 3.2-2.7 5.1-2.7-.8-.8-1.3-1.85-1.5-3.15-.2-1.4-.3-2.5-.3-3.3 0-3.4 1.35-6.35 4.05-8.85 2.8-2.6 6.35-4.75 10.65-6.45 4.3-1.8 9.1-3.1 14.4-3.9 5.4-.9 10.75-1.35 16.05-1.35z"
              ></path>
            </svg>
          </Flex>
          <Text variant="headline1">Unicorns in fantasyland</Text>
          <Text variant="manchet" mt="2">
            Check vores fantastiske udvalg af ligegyldige produkter
          </Text>
          <Box mt="5">
            <Link prefetch={false} href={`/products`}>
              <Button>Se produkter</Button>
            </Link>
          </Box>
        </Flex>
      </Grid>
    </div>
  );
}

const client = new GraphQLClient("https://graphql.datocms.com", {
  headers: {
    Authorization: "Bearer f349cbbbde228e7860be9f38d5d982",
  },
});

export const getStaticProps: GetStaticProps<{}, ProductId> = async () => {
  const sdk = getSdk(client);
  const payload = await sdk.getProduct();
  const res = payload.data.product;
  console.log(res);
  return {
    props: {},
  };
};
