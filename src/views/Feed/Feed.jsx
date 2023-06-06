import { useState } from "react";
import { addPost } from "./services/feed.services";
import { useUsernameStore } from "../../store/counterStore";

const Feed = () => {
  const {username} = useUsernameStore()
  const [content, setContent] = useState('1234')
  const post = {
    username: username,
    content: content,
  }

  return (
    <div>
      <input type="text" placeholder="Introduce Contenido del Post" onChange={(e) => setContent(e.target.value)}/>
      <button onClick={() => addPost(post)}>Añadir Post</button>
    </div>
  )
}

export default Feed
