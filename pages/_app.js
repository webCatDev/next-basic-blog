import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import Head from "next/head";
import { Fragment } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  );
}

export default MyApp;
