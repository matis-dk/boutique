import { Box, Button, Flex, Grid, Image, Text } from "@theme-ui/components";
import Head from "next/head";
import Link from "next/link";

import Header from "../src/layout/Header";

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
          <Image src="/logo-circle.png" width="100px" mb="8" />
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
