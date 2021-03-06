import { Box, Grid, Text } from "@theme-ui/components";
import { GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import Container from "../src/layout/Container";
import { fetchAPI } from "../src/lib/api";
import { ProductList } from "../types/types";
import ImageFade from "../src/ui/ImageFade";
import { MouseEvent, useEffect, useState } from "react";
import sdk from "../src/graphql/sdk-client";
import * as Sentry from "@sentry/nextjs";

type ProductsProps = {
  allProducts: ProductList[];
};

export default function Products(props: ProductsProps) {
  const router = useRouter();
  const [showBomb, setBomb] = useState(false);
  useEffect(() => {
    props.allProducts.forEach((p) => router.prefetch(`/product/${p.id}`));
  }, []);

  function throwReferenceError() {
    // @ts-ignore
    if (router.random.field) {
    }
  }

  function throwSantaxError() {
    // @ts-ignore
    eval("hoo bar");
  }

  function throwTypeError() {
    // @ts-ignore
    null.f();
  }

  return (
    <div>
      <Head>
        <title>Products - Boutique</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container py="7">
        <Text mb="6" variant="headline2">
          Produkter
        </Text>
        <Box>
          <button onClick={throwReferenceError}>Throw reference error</button>
          <button onClick={throwSantaxError}>Throw syntax error</button>
          <button onClick={throwTypeError}>Throw type error</button>
          <button
            onClick={() => {
              setBomb(true);
            }}
          >
            Mount bomb
          </button>

          {showBomb && <ErrorBomb />}
        </Box>
        <Grid
          gap="6"
          sx={{
            gridTemplateColumns: [
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
              "repeat(3, 1fr)",
              "repeat(4, 1fr)",
            ],
          }}
        >
          {props.allProducts.map((p) => {
            return (
              <Box key={p.id}>
                <ImageFade
                  img={p.productImage[0]}
                  sizes="(max-width: 600px) 300px, 300px"
                  sx={{
                    cursor: "pointer",
                  }}
                  onClick={(e: MouseEvent<HTMLDivElement>) => {
                    const bbox = JSON.stringify(
                      e.currentTarget.getBoundingClientRect()
                    );
                    router.push(
                      `/product/[id]`,
                      `/product/${p.id}?bbox=${btoa(bbox)}`
                    );
                  }}
                />
                <Box>
                  <Text
                    mt="2"
                    mb="1"
                    variant="label"
                    as="p"
                    sx={{ textTransform: "uppercase" }}
                  >
                    {p.categories}
                  </Text>
                  <Text variant="headline4" as="p">
                    {p.title}
                  </Text>
                  <Text variant="body" as="p">
                    {p.price} kr
                  </Text>
                </Box>
              </Box>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}

function ErrorBomb(e: any) {
  return (
    <Box>
      <Box>
        <h1>Header {e.doesnt.exist ? 1 : 0}</h1>
      </Box>
    </Box>
  );
}

export const getStaticProps: GetStaticProps = async (_) => {
  const allProducts = await sdk.getAllProducts().then((res) => res.data);

  return {
    props: allProducts,
    revalidate: 60,
  };
};
