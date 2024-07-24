import { useAuth } from "../auth/auth";
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
  const men = document.querySelector(`.msg${i}`);
  men.remove();
};

const Comments = ({ postId }) => {
  const auth = useAuth();

  const canDeleteMsg = (author) => {
    return author === auth.user?.username;
  };

  return (
    <aside className="comments">
      {comments[postId].map((e) => (
        <article className={"msg" + e.id} key={e.id}>
          <h6>{e.content}</h6>
          <h5>{e.author}</h5>
          <button>like</button>
          {canDeleteMsg(e.author) && (
            <button onClick={() => deleteMsg(e.id)}>Delete</button>
          )}
        </article>
      ))}
    </aside>
  );
};

export { Comments };
