import { useParams } from "react-router-dom";
import { blogdata } from "./BlogPage";

const BlogPost = () => {
  const {slug} = useParams()
  
  const post = blogdata.find(post=>post.slug === slug)

  return (
    <>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </>
  )
};
export { BlogPost };
