import { useState } from "react"

const User = () => {
  const [users, setUsers] = useState([])
  async function getUsers() {
  fetch('http://localhost:5000/api/entities')
  .then(response => response.json())
  .then((data) => {setUsers(data)
  console.log(data)})
  }
  return (
    <div>
      <button type="button" onClick={()=> getUsers()}>Fetch</button>
      {users.map((user) => {
        return <li key={user.id}>{user.username} {user.pdw}</li>
      })}
    </div>
  )
}

export default User
