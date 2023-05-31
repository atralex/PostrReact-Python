import { serverConfig, serverType } from "../../../config/server.config"

async function getUsers(setUsers) {
  fetch(serverConfig[serverType].host+serverConfig[serverType].port+serverConfig[serverType].api.getAllUsers)
  .then(response => response.json())
  .then((data) => {setUsers(data)
  console.log(data)})
  }

  export {
    getUsers
  }