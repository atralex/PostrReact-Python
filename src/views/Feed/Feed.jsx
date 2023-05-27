import { useState } from "react";
import { addPost } from "./services/feed.services";

const Feed = () => {
  const [userName, setUserName] = useState('atralex')
  const [content, setContent] = useState('1234')
  const post = {
    username: userName,
    content: content,
  }

  return (
    <div>
      <input type="text" placeholder="Introduce Usuario" onChange={(e) => setUserName(e.target.value)}/>
      <input type="text" placeholder="Introduce Contenido del Post" onChange={(e) => setContent(e.target.value)}/>
      <button onClick={() => addPost(post)}>Añadir Post</button>
    </div>
  )
}

export default Feed
