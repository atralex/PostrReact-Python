import { serverConfig, serverType } from "../../../config/server.config"

async function addPost(post){
  await fetch(serverConfig[serverType].host+serverConfig[serverType].port+serverConfig[serverType].api.addPost, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:5173'
    },
    body: JSON.stringify(post)
  }).then(res => res.json())
  .then(data => {console.log(data)})
}
async function listPostByUserId(userId){
  const data = await fetch(serverConfig[serverType].host+serverConfig[serverType].port+serverConfig[serverType].api.listPostByUsername+userId, 
      {
        method: 'GET',
        headers: {
          'Allow-CORS': 'true',
        }
      }
    ).then(res => res.json()).then(data => {return data})
  return data
}

export {
  addPost,
  listPostByUserId
}