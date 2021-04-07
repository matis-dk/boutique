import Head from "next/head";

import Header from "../src/layout/Header";

export default function Index() {
  return (
    <div>
      <Head>
        <title>Home - Boutique</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>home</h1>
    </div>
  );
}
