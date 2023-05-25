import { useState } from "react"
import { getUsers } from "./services/user.services"

const User = () => {
  const [users, setUsers] = useState([])
  return (
    <div>
      <button type="button" onClick={()=> getUsers(setUsers)}>Fetch</button>
      {users.map((user) => {
        return <li key={user.id}>{user.username} {user.pdw}</li>
      })}
    </div>
  )
}

export default User
