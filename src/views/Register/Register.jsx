import { useState } from "react"
import { registerUser } from "./services/register.services"

const Register = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const user = {
    username: userName,
    pdw: password
  }
  return (
    <div>
      <input type="text" placeholder="Introduce Usuario" onChange={(e) => setUserName(e.target.value)}/>
      <input type="text" placeholder="Introduce Contraseña" onChange={(e) => setPassword(e.target.value)}/>
      <button onClick={() => registerUser(user)}>Register</button>
    </div>
  )
}

export default Register
