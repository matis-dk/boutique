import { Box, Grid, Text, Image as ImageThemeUi } from "@theme-ui/components";
import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Container from "../src/layout/Container";
import { fetchAPI } from "../src/lib/api";
import { WIDTH_CONTAINER } from "../src/theme/theme";
import { ProductList } from "../types/types";
import ImageFade from "../src/ui/ImageFade";

type ProductsProps = {
  allProducts: ProductList[];
};

export default function Products(props: ProductsProps) {
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
            const img = p.productImage[0].responsiveImage;
            return (
              <Link prefetch={false} href={`/product/${p.id}`} key={p.id}>
                <Box
                  sx={{
                    cursor: "pointer",
                  }}
                >
                  <ImageFade
                    img={p.productImage[0]}
                    sizes="(min-width: 600px) 220px, 600px"
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
              </Link>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (_) => {
  const productList = await fetchAPI<{
    allProducts: ProductList[];
  }>(`{
    allProducts {
      id
      title
      price
      categories
      productImage {
        alt
        id
        responsiveImage {
          src
          srcSet
          sizes
          webpSrcSet
          width
          height
          bgColor
        }
      }
    }
  }`).then((products) => products.data.data);

  return {
    props: productList,
    revalidate: 60,
  };
};
