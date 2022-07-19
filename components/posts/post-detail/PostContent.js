import PostHeader from "./PostHeader";
import classes from "./post-content.module.css";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

const PostContent = ({post: {title, slug, image, content}}) => {
 
    const imagePath = `/images/posts/${slug}/${image}`;
    console.log(imagePath)
    const reactMarkdownComponents = {
        // image(imageData) {
        //     return <Image src={`/images/posts/${slug}/${imageData.src}`} alt={imageData.alt} width={600} height={300} />
        // },

        p: (paragraph) => {
            const { node, ...props } = paragraph
            
            if ("tagName" in node.children[0]) {
                const image = node.children[0]

                return (
                  <div className={classes.iamge}>
                    <Image
                      src={`/images/posts/${slug}/${image.properties.src}`}
                      alt={image.properties.alt}
                      width={600}
                      height={300}
                    />
                  </div>
                );

            }

            return <p>{paragraph.children}</p>
        },
        code: ({node, inline, className, children, ...props}) => {
        const match = /language-(\w+)/.exec(className || '')
        return !inline && match ? (
          <SyntaxHighlighter
            children={String(children).replace(/\n$/, '')}
            style={atomDark}
            language={match[1]}
            PreTag="div"
            {...props}
          />
        ) : (
          <code className={className} {...props}>
            {children}
          </code>
        )
      }
    }

  return (
    <article className={classes.content}>
      <PostHeader title={title} image={imagePath} />
          <ReactMarkdown components={reactMarkdownComponents} >{content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
