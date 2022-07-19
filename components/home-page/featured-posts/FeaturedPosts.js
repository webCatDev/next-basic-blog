import PostsGrid from '../../posts/PostsGrid';
import classes from './featured-posts.module.css'

const FeaturedPosts = ({posts}) => {
    return (
        <section className={classes.latest}>
            <h2>Son Yazılar</h2>
            <PostsGrid posts={posts} />
        </section>
    );
}

export default FeaturedPosts;