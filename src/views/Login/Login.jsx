import { useState } from "react"
import { loginUser } from "./services/login.services"

const Login = () => {
  const [userName, setUserName] = useState('atralex')
  const [password, setPassword] = useState('1234')
  const user = {
    username: userName,
    pdw: password,
  }
  async function handleLogin() {
    const response = await loginUser(user)
    if(response.status === 200){
      window.location.href = '/main/' + userName;
    } else {
      alert('Usuario o Contraseña Incorrectos')
    }
  }
  return (
    <div>
      <input type="text" placeholder="Introduce Usuario" onChange={(e) => setUserName(e.target.value)}/>
      <input type="password" placeholder="Introduce Contraseña" onChange={(e) => setPassword(e.target.value)}/>
      <button onClick={() => handleLogin()}>Login</button>
    </div>
  )
}

export default Login
