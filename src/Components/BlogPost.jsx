import { useNavigate, useParams } from "react-router-dom";
import { blogdata } from "./BlogPage";
import { useAuth } from "./auth/auth";
import { Comments } from "./comments/comments";

const BlogPost = () => {
  const navigate = useNavigate();
  const { slug } = useParams();

  const auth = useAuth();

  const post = blogdata.find((post) => post.slug === slug);
  const returnToBlog = () => {
    navigate("/blog");
  };

  const canDelete = auth.user?.isAdmin || post.author === auth.user?.username;

  return (
    <>
      <h2 className="blog-post-h2">{post.title}</h2>
      <h3>{post.author}</h3>
      <button className="blog-post-btn" onClick={returnToBlog}>
        Return to blog
      </button>
      <p className="blog-post-">{post.content}</p>
      <br />
      {canDelete && <button className="canDelete">Eliminar blogpost</button>}

      <Comments postId={post.msg}/>
    </>
  );
};

export { BlogPost };
