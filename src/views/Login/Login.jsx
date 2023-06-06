import { useState } from "react"
import { loginUser } from "./services/login.services"
import { useUsernameStore } from "../../store/counterStore"
import { useNavigate } from 'react-router-dom';
import { setCookie } from "../../config/cookie.session";

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
      setCookie(userName, password)
      navigate('/profile/'+userName)
    } else {
      alert('Usuario o Contraseña Incorrectos')
    }
  }
  return (
    <div className="flex">
      <div className="my-5 p-10 py-48 bg-slate-400 w-1/3 mt-20 ml-auto rounded-lg">
        <div className="m-auto">
          <div className="m-5">
            <label htmlFor="username" className="text-xl mr-5">Nombre de Usuario</label>
            <input type="text" className="p-2 text-lg text-center rounded" placeholder="Introduce Usuario" name="username" onChange={(e) => setUserName(e.target.value)}/>
          </div>
          <div className="m-5">
            <label htmlFor="password" className="text-xl mr-5">Contraseña</label>
            <input type="password" className="p-2 text-lg text-center rounded" name="password" placeholder="Introduce Contraseña" onChange={(e) => setPassword(e.target.value)}/>
          </div>
        </div>
        <button onClick={() => handleLogin()}>Login</button>
      </div>
      <div className="mt-5 mt-20 p-10 bg-slate-600 w-1/3 m-auto rounded-lg">
        <div className="m-auto">
          <h3 className="text-3xl text-center">Bienvenido a Postr</h3>
          <h4 className="text-xl text-center">La red social de los programadores</h4>
          <h5 className="text-xl text-center">Crea tus Posts y comparte tus ideas</h5>
        </div>
      </div>
    </div>

  )
}

export default Login
