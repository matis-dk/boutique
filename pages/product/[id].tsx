import Head from "next/head";
import { fetchAPI } from "../../src/lib/api";
import { GetStaticProps, GetStaticPaths } from "next";

import {
  Box,
  Button,
  Flex,
  Grid,
  Input,
  Label,
  Text,
} from "@theme-ui/components";
import { PADDING_CONTAINER, WIDTH_CONTAINER_PX } from "../../src/theme/theme";
import { AllProducts, Product, ProductId } from "../../types/types";
import ImageFade, { ImageWithBg } from "../../src/ui/ImageFade";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { useSpring, animated, config } from "react-spring";
import sdk from "../../src/graphql/sdk-client";
import axios from "axios";

type DetailProps = {
  product?: Product;
  relatedProducts?: Product[];
};

function getTransformation(bStart: DOMRect, bEnd: DOMRect): string {
  const deltaX = bStart.left + bStart.width / 2 - (bEnd.left + bEnd.width / 2);
  const deltaY = bStart.top + bStart.height / 2 - (bEnd.top + bEnd.height / 2);
  const scale = (bStart.width + bStart.height) / (bEnd.width + bEnd.height);

  const r = (n: number): number => Math.round(n);

  return `translate(${r(deltaX)}px, ${r(deltaY)}px) scale(${scale.toFixed(2)})`;
}

export default function Detail({ product, relatedProducts }: DetailProps) {
  const router = useRouter();
  const [formPrice, setFormPrice] = useState("");
  const elemRef = useRef<HTMLDivElement>(null);
  const [styles, api] = useSpring(() => ({
    opacity: 0,
    transform: "translate(0, 0) scale(1)",
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

    api.set({
      opacity: 1,
      transform: getTransformation(bStart, bEnd),
    });

    api.start({
      transform: "translate(0, 0) scale(1)",
      config: config.gentle,
    });
  }, []);

  const handlePriceSubmit = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    try {
      await axios.request({
        url: `/api/post/${product.id}`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        data: JSON.stringify({
          price: formPrice,
        }),
      });
      throw new Error("This api error");
    } catch (err) {
      console.error("Opdatering fejlede");
      console.error(err);
    }

    console.log("DONE");
    setFormPrice("");
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormPrice(e.target.value);
  };

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
              <Box
                style={{
                  height: "100%",
                  width: "100%",
                  backgroundColor: `${productImage[0].responsiveImage.bgColor}33`,
                  boxShadow: "0 100px 80px rgba(0, 0, 0, 0.05)",
                  position: "absolute",
                }}
              />
              <animated.div style={styles} ref={elemRef}>
                <ImageWithBg
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

              <Box mt="4" as="form" onSubmit={handlePriceSubmit}>
                <Label htmlFor="price-specified">
                  <Text variant="label">Angiv din pris</Text>
                </Label>
                <Input
                  name="username"
                  type="number"
                  id="price-specified"
                  mb={3}
                  placeholder="F.eks. 400kr"
                  value={formPrice}
                  onChange={handlePriceChange}
                />
              </Box>

              <Flex mt="40px">
                <Button>Tilføj til kurv</Button>
              </Flex>
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
  const productIds = await sdk
    .getAllProductIds()
    .then(({ data }) => data.allProducts.map((p) => ({ params: p })));

  return {
    paths: productIds,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<{}, ProductId> = async (
  context
) => {
  const productId = context.params.id;
  const product = await sdk
    .getProduct({ productId })
    .then(({ data }) => data.product);
  const relatedProducts = await sdk
    .relatedProducts({ categoryId: product.categories })
    .then(({ data }) => data.relatedProducts);

  return {
    props: {
      product,
      relatedProducts,
    },
    revalidate: 60,
  };
};
