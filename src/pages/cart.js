import Head from "next/head";
import React from "react";
import Cart from "../components/Cart/Cart";
import Layout from "../components/Layout";

const cart = () => {
  return (
    <div>
      <Head>
        <title>Cart | E - Commerce</title>
      </Head>

      <Layout>
        <Cart />
      </Layout>
    </div>
  );
};

export default cart;
