import Head from "next/head";
import { fetchAPI } from "../../src/lib/api";
import { GetStaticProps, GetStaticPaths } from "next";

import { Box, Flex, Grid, Text } from "@theme-ui/components";
import { PADDING_CONTAINER, WIDTH_CONTAINER_PX } from "../../src/theme/theme";
import { AllProducts, Product, ProductId } from "../../types/types";
import ImageFade, { ImageWithBg } from "../../src/ui/ImageFade";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { useSpring, animated, config } from "react-spring";

type DetailProps = {
  product?: Product;
  relatedProducts?: Product[];
};

const AnimatedBox = animated(Box);

function getTransformation(bStart: DOMRect, bEnd: DOMRect): string {
  const deltaX = bStart.left + bStart.width / 2 - (bEnd.left + bEnd.width / 2);
  const deltaY = bStart.top + bStart.height / 2 - (bEnd.top + bEnd.height / 2);
  const scale = (bStart.width + bStart.height) / (bEnd.width + bEnd.height);

  const r = (n: number): number => Math.round(n);

  return `translate(${r(deltaX)}px, ${r(deltaY)}px) scale(${scale.toFixed(2)})`;
}

export default function Detail({ product, relatedProducts }: DetailProps) {
  const router = useRouter();
  const elemRef = useRef<HTMLDivElement>(null);
  const [styles, api] = useSpring(() => ({
    opacity: 0,
    transform: "translate(0, 0) scale(1)",
    b1: 2,
  }));

  if (!product) {
    return (
      <div>
        <Head>
          <title>Product - Boutique</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Flex sx={{ justifyContent: "center" }}>As FALLBACK Ya!</Flex>
      </div>
    );
  }

  const { categories, title, price, description, productImage } = product;

  useEffect(() => {
    api.start({
      b1: 1,
      config: config.slow,
    });

    const urlParams = new URLSearchParams(router.asPath.split("?")[1]);
    const bbox = urlParams.get("bbox");

    if (!bbox) {
      api.set({ opacity: 1 });
      return;
    }

    const bStart = JSON.parse(atob(bbox)) as DOMRect;
    const bEnd = elemRef.current?.getBoundingClientRect();

    if (!bEnd) {
      api.set({ opacity: 1 });
      return;
    }

    api.set({ opacity: 1 });
    api.set({
      transform: getTransformation(bStart, bEnd),
    });
    api.start({
      transform: "translate(0, 0) scale(1)",
      config: config.gentle,
    });
  }, []);

  return (
    <div>
      <Head>
        <title>Product - Boutique</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        px={PADDING_CONTAINER}
        sx={{
          justifyContent: "center",
        }}
      >
        <Grid
          sx={{
            maxWidth: WIDTH_CONTAINER_PX,
            width: "100%",
          }}
        >
          <Grid
            gap="7"
            py="6"
            sx={{
              gridTemplateColumns: "1fr 0.75fr",
            }}
          >
            <Box sx={{ position: "relative" }}>
              <AnimatedBox
                style={{
                  height: "100%",
                  width: "100%",
                  backgroundColor: `${productImage[0].responsiveImage.bgColor}33`,
                  boxShadow: "0 100px 80px rgba(0, 0, 0, 0.05)",
                  position: "absolute",
                  transform: styles.b1.to((v) => `scaleX(${v})`),
                  transformOrigin: "100% 50%",
                }}
              />
              <animated.div style={styles}>
                <ImageWithBg
                  forwardRef={elemRef}
                  img={productImage[0]}
                  width={"700px"}
                  height={"700px"}
                />
              </animated.div>
            </Box>
            <Box sx={{ maxWidth: "600px" }}>
              <Box>
                <Text variant="label" sx={{ textTransform: "uppercase" }}>
                  {categories}
                </Text>
              </Box>
              <Box>
                <Text variant="headline1">{title}</Text>
              </Box>
              <Box>
                <Text variant="headline3">{price}kr</Text>
              </Box>
              <Box mt="4">
                <Text variant="body">{description}</Text>
              </Box>
            </Box>
          </Grid>
          <Box pb="6">
            <Text variant="headline2">
              Lignende {product.categories} produkter
            </Text>
            <Grid
              mt="4"
              gap="6"
              sx={{
                gridTemplateColumns: `repeat(auto-fill, 186px)`,
              }}
            >
              {relatedProducts.map((related) => (
                <Link
                  href={`/product/${related.id}`}
                  key={related.id}
                  scroll={false}
                >
                  <Flex
                    sx={{
                      width: "200px",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      cursor: "pointer",
                    }}
                  >
                    <Box>
                      <ImageFade
                        img={related.productImage[0]}
                        sizes="(min-width: 600px) 100px, 400px"
                      />
                      <Text mt="2" variant="headline5">
                        {related.title}
                      </Text>
                    </Box>
                    <Text mt="1" variant="label">
                      {related.price} kr.
                    </Text>
                  </Flex>
                </Link>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Flex>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await fetchAPI<AllProducts>(`{
    allProducts {
        id
    }
  }`).then((products) => products.data.data.allProducts);

  const productIds = products.map((p) => ({ params: p }));

  return {
    paths: productIds,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<{}, ProductId> = async (
  context
) => {
  const productId = context.params.id;
  const product = await fetchAPI<Product>(`{
    relatedProducts: allProducts(filter: {categories: {eq: "slik"}}) {
      id
      price
      title
      categories
      createdAt
      description
      isLegalDrinkingAgeRequired
      productImage {
        alt
        id
        responsiveImage {
          src
          srcSet
          sizes
          webpSrcSet
          bgColor
        }
      }
    }
    product(filter: {id: {eq: "${productId}"}}) {
      id
      price
      title
      categories
      createdAt
      description
      isLegalDrinkingAgeRequired
      productImage {
        alt
        id
        responsiveImage {
          src
          srcSet
          sizes
          webpSrcSet
          bgColor
        }
      }
    }
  }`)
    .then((product) => product.data.data)
    .catch((p) => {
      throw new Error("We need to fix this");
    });

  // const chain = Chain({
  //   url: "https://graphql.datocms.com",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // } as any);

  // const c = await chain.query({
  //   allProducts: [
  //     {
  //       filter: {
  //         categories: {
  //           eq: "asdas",
  //         },
  //       },
  //     },
  //     {
  //       id: true,
  //       price: true,
  //       title: true,
  //       categories: true,
  //       createdAt: true,
  //       description: [{ markdown: true }, true],
  //       isLegalDrinkingAgeRequired: true,
  //       productImage: {
  //         alt: [{ locale: SiteLocale.en }, true],
  //         id: true,
  //         responsiveImage: [
  //           {},
  //           {
  //             src: true,
  //             webpSrcSet: true,
  //             sizes: true,
  //             bgColor: true,
  //           },
  //         ],
  //       },
  //     },
  //   ],
  // });

  // console.log(c);

  // try {
  //   const g = await Gql.query({
  //     allProducts: [
  //       {
  //         filter: {
  //           categories: {
  //             eq: "asdas",
  //           },
  //         },
  //       },
  //       {
  //         id: true,
  //         price: true,
  //         title: true,
  //         categories: true,
  //         createdAt: true,
  //         description: [{ markdown: true }, true],
  //         isLegalDrinkingAgeRequired: true,
  //         productImage: {
  //           alt: [{ locale: SiteLocale.en }, true],
  //           id: true,
  //           responsiveImage: [
  //             {},
  //             {
  //               src: true,
  //               webpSrcSet: true,
  //               sizes: true,
  //               bgColor: true,
  //             },
  //           ],
  //         },
  //       },
  //     ],
  //   });
  // } catch (err) {
  //   console.log("---------------");
  //   console.log(err);
  // }

  return {
    props: product,
    revalidate: 60,
  };
};

// { id: '26340397' },
// { id: '26340333' },
// { id: '26340335' },
// { id: '26340332' },
// { id: '26340339' },
// { id: '26340341' },
// { id: '26340353' },
// { id: '26340351' },
// { id: '26340350' },
// { id: '26340324' }
