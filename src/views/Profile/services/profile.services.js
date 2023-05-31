import { serverConfig, serverType } from "../../../config/server.config"

async function listPostByUserId(userId){
  const posts = await fetch(serverConfig[serverType].host+serverConfig[serverType].port+serverConfig[serverType].api.listPostByUsername+userId, 
      {
        method: 'GET',
        headers: {
          'Allow-CORS': 'true',
        }
      }
    ).then(res => res.json()).then(data => {return data})
  return posts
}

export {
  listPostByUserId
}