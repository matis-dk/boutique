import Head from "next/head";
import { fetchAPI } from "../../src/lib/api";
import { GetStaticProps, GetStaticPaths } from "next";

import { Box, Flex, Grid, Text, Image } from "@theme-ui/components";
import { WIDTH_CONTAINER_PX } from "../../src/theme/theme";
import { AllProducts, Product, ProductId } from "../../types/types";

type DetailProps = {
  product: Product;
};
export default function Detail(props: DetailProps) {
  console.log("Detail ", props);
  const { categories, title, price, description, productImage } = props.product;
  const imgSrc = productImage[0].responsiveImage.webpSrcSet;
  console.log();

  return (
    <div>
      <Head>
        <title>Product - Boutique</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex sx={{ justifyContent: "center" }}>
        <Grid
          gap="7"
          py="6"
          sx={{
            gridTemplateColumns: "1fr 0.75fr",
            width: WIDTH_CONTAINER_PX,
            border: "1px solid red",
          }}
        >
          <Image srcSet={imgSrc} alt="Picture of the author" width={700} />
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
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await fetchAPI<AllProducts>(`{
    allProducts {
        id
    }
  }`).then((products) => products.data.data.allProducts);

  // console.log("getStaticPaths -----------");
  // console.log(products);

  return {
    paths: products.map((p) => ({ params: p })),
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
          base64
        }
      }
    }
  }`).then((products) => products.data.data);

  // console.log("getStaticProps -----------");
  // console.log(product);

  return {
    props: product,
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
