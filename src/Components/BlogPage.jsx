import { Link } from "react-router-dom";

function BlogPage() {
  return(
    <>
      <h2>Blog Post</h2>
      <ul>
        {blogdata.map(post=>(
          <BlogLink post={post}/>
        ))}
      </ul>
    </>
  );
}

const BlogLink = ({post}) => {
  return (
    <li>
      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
    </li>
  )
}
const blogdata = []
blogdata.push({
  title: "what",
  slug: "aeo",
  content: "lorem ipusp ame dolor"
})
blogdata.push({
  title: "whataoe",
  slug: "aeoaoe",
  content: "lorem ipusp ame dolor 2"
})

export { BlogPage, blogdata};
