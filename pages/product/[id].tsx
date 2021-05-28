import Head from "next/head";
import { fetchAPI } from "../../src/lib/api";
import { GetStaticProps, GetStaticPaths } from "next";

import { Box, Flex, Grid, Text, Image } from "@theme-ui/components";
import { PADDING_CONTAINER, WIDTH_CONTAINER_PX } from "../../src/theme/theme";
import { AllProducts, Product, ProductId } from "../../types/types";
import ImageFade from "../../src/ui/ImageFade";
import Link from "next/link";

type DetailProps = {
  product?: Product;
  relatedProducts?: Product[];
};
export default function Detail({ product, relatedProducts }: DetailProps) {
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
  const imgSrc = productImage[0].responsiveImage.webpSrcSet;
  const imgBg = productImage[0].responsiveImage.bgColor;
  const imgSize = "700px";

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
            <ImageFade
              img={productImage[0]}
              width={"700px"}
              height={"700px"}
              sx={{
                width: "100%",
              }}
            />
            {/* <Image
              srcSet={imgSrc}
              width={"700px"}
              height={"700px"}
              sx={{
                maxWidth: imgSize,
                width: "100%",
              }}
            /> */}
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
