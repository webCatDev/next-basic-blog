import classes from './all-posts.module.css'
import PostsGrid from './PostsGrid';

const AllPosts = ({posts}) => {
    return (
        <section className={classes.posts}>
            <h1>Tüm Yazılar</h1>
            <PostsGrid posts={posts} />
        </section>
    );
}

export default AllPosts;