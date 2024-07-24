import { useNavigate, useParams } from "react-router-dom";
import { blogdata } from "./BlogPage";
import { useAuth } from "./auth/auth";
const comments = {
  101: [
    {
      author: "Juan",
      content: "Este es un comentario muy interesante.",
      id: 1011,
    },
    { author: "Ana", content: "Estoy de acuerdo con Juan.", id: 1012 },
  ],
  102: [
    { author: "Carlos", content: "Me gusta mucho este artículo.", id: 1021 },
    {
      author: "Lucía",
      content: "Gracias por compartir esta información.",
      id: 1022,
    },
  ],
  103: [
    { author: "Miguel", content: "Tengo una duda sobre el tema.", id: 1031 },
    { author: "Sofía", content: "¿Alguien puede aclarar esto?", id: 1032 },
  ],
  104: [
    { author: "Pedro", content: "Muy buen análisis.", id: 1041 },
    { author: "Elena", content: "Aprendí mucho con este artículo.", id: 1042 },
  ],
};
const deleteMsg = (i) => {
  debugger;
  const men = document.querySelector(`.msg${i}`);
  men.remove();
  console.log(`.msg${i}`);
};
const BlogPost = () => {
  const navigate = useNavigate();
  const { slug } = useParams();

  const auth = useAuth();

  const post = blogdata.find((post) => post.slug === slug);
  const returnToBlog = () => {
    navigate("/blog");
  };

  const canDelete = auth.user?.isAdmin || post.author === auth.user?.username;

  const canDeleteMsg = (i) => {
    return i === auth.user?.username;
  };
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

      <aside className="comments">
        {comments[post.msg].map((e) => {
          return (
            <article className={"msg" + e.id} key={e.id}>
              <h6>{e.content}</h6>
              <h5>{e.author}</h5>
              <button>like</button>
              {canDeleteMsg(e.author) && (
                <button onClick={() => deleteMsg(e.id)}>Delete</button>
              )}
            </article>
          );
        })}
      </aside>
    </>
  );
};

export { BlogPost };
