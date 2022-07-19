import Head from "next/head";
import { Fragment } from "react";
import AllPosts from "../../components/posts/AllPosts";
import { getAllPosts } from "../../lib/post-utils";



const AllPostsPage = ({posts}) => {
    return (
      <Fragment>
        <Head>
          <title>Tüm Yazılar</title>
          <meta
            name="description"
            content="Psikoloji ve rehberlik alanında paylaştığım tüm yazılar"
          />
        </Head>
        <AllPosts posts={posts} />
      </Fragment>
    );
}

export default AllPostsPage;

export const getStaticProps = async () => {
    return {
        props:{
            posts: getAllPosts()
        }
    }
}