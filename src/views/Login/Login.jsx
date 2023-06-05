import { useState } from "react"
import { loginUser } from "./services/login.services"
import { useUsernameStore } from "../../store/counterStore"
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate()
  const {username, setUsername} = useUsernameStore()
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const user = {
    username: userName,
    pdw: password,
  }
  async function handleLogin() {
    const response = await loginUser(user)
    if(response.status === 200){
      setUsername(userName)
      console.log(username)
      navigate('/profile/'+userName)
    } else {
      alert('Usuario o Contraseña Incorrectos')
    }
  }
  return (
    <div className="">
      <input type="text" placeholder="Introduce Usuario" onChange={(e) => setUserName(e.target.value)}/>
      <input type="password" placeholder="Introduce Contraseña" onChange={(e) => setPassword(e.target.value)}/>
      <button onClick={() => handleLogin()}>Login</button>
    </div>
  )
}

export default Login
