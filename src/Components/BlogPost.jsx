import { useNavigate, useParams } from "react-router-dom";
import { blogdata } from "./BlogPage";

const BlogPost = () => {
  const navigate = useNavigate();
  const { slug } = useParams();

  const post = blogdata.find((post) => post.slug === slug);
  const returnToBlog = () => {
    navigate("/blog");
  };
  return (
    <>
      <h2 className="blog-post-h2">{post.title}</h2>
      <button className="blog-post-btn" onClick={returnToBlog}>
        Return to blog
      </button>
      <p className="blog-post-">{post.content}</p>
    </>
  );
};
export { BlogPost };
