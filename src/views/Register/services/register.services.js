import { serverConfig, serverType } from "../../../config/server.config"

async function registerUser(usuario){
  await fetch(serverConfig[serverType].host+serverConfig[serverType].port+serverConfig[serverType].api.register, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:5173'
    },
    body: JSON.stringify(usuario)
  }).then(res => res.json())
  .then(data => {console.log(data)})
}

export {
  registerUser,
}