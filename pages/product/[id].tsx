import Head from "next/head";
import { fetchAPI } from "../../src/lib/api";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import { Box } from "@theme-ui/components";

export default function Detail(props: any) {
  console.log("Detail ", props);
  return (
    <div>
      <Head>
        <title>Product - Boutique</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box>
        <h1>a</h1>
      </Box>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await fetchAPI<DataWrapper<AllProducts>>(`{
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
  const product = await fetchAPI<DataWrapper<Product>>(`{
    product(filter: {id: {eq: "${productId}"}}) {
      id
      price
      title
      categories
      createdAt
      description
      isLegalDrinkingAgeRequired
    }
  }`).then((products) => products.data.data);

  // console.log("getStaticProps -----------");
  // console.log(product);

  return {
    props: product,
  };
};

export type AllProducts = {
  allProducts: ProductId[];
};

type ProductId = {
  id: string;
};

type ProductCategories = "øl" | "slik" | "package" | "chokolade";

export type Product = {
  id: string;
  price: number;
  title: string;
  categories: ProductCategories;
  createdAt: string;
  description: string;
  isLegalDrinkingAgeRequired: boolean;
};

type DataWrapper<T> = {
  data: T;
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
