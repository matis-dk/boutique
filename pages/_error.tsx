import { Box, Button, Flex, Grid, Text } from "@theme-ui/components";
import * as Sentry from "@sentry/nextjs";
import Error from "next/error";

export async function getServerSideProps() {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");

  return {
    props: { errorCode: false, stars: Math.random() },
  };
}

export default function Page({ errorCode, stars }) {
  if (errorCode) {
    return <Error statusCode={errorCode} />;
  }

  return <div>Next stars: {stars}</div>;
}
