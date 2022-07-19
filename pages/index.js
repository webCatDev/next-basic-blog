import Head from "next/head";
import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featured-posts/FeaturedPosts";
import Hero from "../components/home-page/hero/Hero";
import { getFeaturedPosts } from "../lib/post-utils";

export default function HomePage({posts}) {
  return (
    <Fragment>
      <Head>
        <title>Neslihan'ın Alanına Hoş Geldin</title>
        <meta name='description' content='Psikoloji ve rehberlik ile alakalı yazılar paylaşıyorum.' />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </Fragment>
  );
}

export const getStaticProps = async (ctx) => {


  return {
    props:{
      posts:getFeaturedPosts()
    }
  }
}