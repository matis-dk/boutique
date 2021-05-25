import Head from "next/head";
import { fetchAPI } from "../../src/lib/api";
import { GetStaticProps, GetStaticPaths } from "next";

import { Box, Flex, Grid, Text, Image } from "@theme-ui/components";
import { PADDING_CONTAINER, WIDTH_CONTAINER_PX } from "../../src/theme/theme";
import { AllProducts, Product, ProductId } from "../../types/types";

type DetailProps = {
  product?: Product;
};
export default function Detail(props: DetailProps) {
  if (!props.product) {
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

  const { categories, title, price, description, productImage } = props.product;
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
        <Flex sx={{ width: WIDTH_CONTAINER_PX }}>
          <Grid
            gap="7"
            py="6"
            sx={{
              gridTemplateColumns: "1fr 0.75fr",
              // border: "1px solid red",
            }}
          >
            <Image
              srcSet={imgSrc}
              alt="Picture of the author"
              width={"700px"}
              height={"700px"}
              sx={{
                backgroundColor: `${imgBg}33`,
                maxWidth: imgSize,
                width: "100%",
              }}
            />
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
        </Flex>
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
          webpSrcSet
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
