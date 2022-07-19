import Head from "next/head";
import { Fragment } from "react";
import PostContent from "../../components/posts/post-detail/PostContent";
import { getPostData, getPostFiles } from "../../lib/post-utils";

const PostDetailPage = ({post}) => {
  return (
    <Fragment>
      <Head>
        <title>{post.title}</title>
        <meta
          name="description"
          content={post.title}
        />
      </Head>
      <PostContent post={post} />
    </Fragment>
  );
};

export default PostDetailPage;

export const getStaticPaths = () => {
    const fileNames = getPostFiles();
    const postSlugs = fileNames.map(fileName => fileName.replace(/\.md$/, ""))

  return {
    paths: postSlugs.map((slug) => ({
      params: { slug },
    })),
    fallback: false,
  };
};

export const getStaticProps = async (ctx) => {
  const { params } = ctx;

  return {
    props: {
      post: getPostData(params.slug),
    },
    revalidate: 600,
  };
};
