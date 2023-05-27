import { useState } from "react"
import { listPostByUserId } from "./services/feed.services"

const PostLIst = () => {
  let contador = 0
  const [username, setUserName] = useState('')
  const [permanentUsername, setPermanentUsername] = useState('')
  const [posts, setPosts] = useState([])
  async function getPosts(username){
    const response = await listPostByUserId(username)
    return response
  }
  return (
    <div>
      <div>
        <label htmlFor="user">Introduce Nombre de Usuario</label> <br />
        <input type="text" name="user" id="user" onChange={(e)=> setUserName(e.target.value)} /> <br />
        <button onClick={async()=>{
          const posts = await getPosts(username);
          setPosts(posts)
          setPermanentUsername(username)
        }}>Buscar Posts</button>
      </div>
      <div>
        <ul>
          {posts.map((post)=> {
            contador += 1
            return <li key={contador} >
              <h2>{permanentUsername  }</h2>
              <p>{post.content}</p>
            </li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default PostLIst
