import PostItem from "./PostItem";
import classes from "./posts-grid.module.css";

const PostsGrid = ({ posts }) => {
  return (
    <ul className={classes.grid} >
      {posts.length && posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
};

export default PostsGrid;
