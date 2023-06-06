import { useEffect, useState } from "react"
import { listPostByUserId } from "./services/profile.services"
import Posts from "./Posts/Posts"

const Profile = () => {
  const username = window.location.href.split('/').pop()
  const [posts, setPosts] = useState(['promise'])
  async function getPosts(username){
    await listPostByUserId(username).then((response) => {
      setPosts(response)})
  }
  useEffect(() => {
    getPosts(username)
    console.log(posts)
  },[])
  return (
    <div className="w-1/2 bg-emerald-400 m-auto">
      mi feed {username}
          <Posts posts={posts} username={username}/>
    </div>
  )
}

export default Profile
