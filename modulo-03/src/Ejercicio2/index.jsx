import { useState, useEffect } from "react";

function ListadoPost() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  return (
    <div>
      <h1>Listado de posts</h1>

      {posts.map((post, index)=>{
        return(
          <div key={index}>
            <h4>Posteado por user: {post.id}</h4>
            <h5>Titulo del post: {post.title}</h5>
            <p>{post.body}</p>
          </div>
        )
      })}

    </div>
  );
}

export default ListadoPost;
