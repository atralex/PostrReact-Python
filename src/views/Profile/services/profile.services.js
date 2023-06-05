import { serverConfig, serverType } from "../../../config/server.config"

async function listPostByUserId(username){
  const posts = await fetch(serverConfig[serverType].host+serverConfig[serverType].port+serverConfig[serverType].api.listPostByUsername+username, 
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