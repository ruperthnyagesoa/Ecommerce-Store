import Head from "next/head";
import React from "react";
import Layout from "../components/Layout";
import LogIn from "../components/LogIn";

const login = () => {
  return (
    <div>
      <Head>
        <title>Log In | E - Commerce </title>
      </Head>

      <Layout>
        <LogIn />
      </Layout>
    </div>
  );
};

export default login;
