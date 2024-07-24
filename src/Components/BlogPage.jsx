import { Link, Outlet } from "react-router-dom";

function BlogPage() {
  return(
    <>
      <h2>Blog Post</h2>

      <Outlet/>

      <ul className="post">
        {blogdata.map(post=>(
          <BlogLink key={post.slug} post={post}/>
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
  title: "What?",
  slug: "what",
  author: "redhd01",
  msg: 101,
  content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem possimus reiciendis esse quo placeat natus iste illum laboriosam expedita explicabo."
})
blogdata.push({
  title: "Where?",
  slug: "where",
  author: "charlie",
  msg: 102,
  content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem possimus reiciendis esse quo placeat natus iste illum laboriosam expedita explicabo ipisicing elit. Dolorem possimus reiciendis esse quo placeat natus iste illum laboriosam expedita explica."
})
blogdata.push({
  title: "How?",
  slug: "how",
  author: "ccrhd",
  msg: 103,
  content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam recusandae quisquam dignissimos, error corporis necessitatibus. Et porro quos harum quisquam consectetur voluptatem, unde nesciunt quia ducimus expedita dolorem possimus molestiae."
})

export { BlogPage, blogdata};
