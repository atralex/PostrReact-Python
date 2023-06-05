import { Link } from "react-router-dom"
import { serverType } from "../../config/server.config"
import flaskLogo from '../../assets/flaskLogo.svg'
import railsLogo from '../../assets/railsLogo.png'
import nodeLogo from '../../assets/nodeLogo.png'
import { useUsernameStore } from "../../store/counterStore"
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate()
  const {username, setUsername} = useUsernameStore()
  let logo = ''
  if(serverType === 'python'){
    logo = flaskLogo
  } else if(serverType === 'ruby'){
    logo = railsLogo
  } else if(serverType === 'node'){
    logo = nodeLogo
  }
  const handleLogout = () => {
    setUsername('')
    navigate('/')
  }
  if(username !== ''){
  return (
<nav className="bg-white border-gray-200 dark:bg-gray-600 w-full">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <Link to="/" >
        <img src={logo} className="h-8 mr-3" alt="Flowbite Logo" />
    </Link>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-600 md:dark:bg-gray-600 dark:border-gray-600">
      <li className="block py-2 pl-3 pr-4 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
        <Link to={`/profile/${username}`} className="block py-2 pl-3 pr-4 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">@{username}</Link>
        </li>
        <li>
          <Link to="/addPost" className="block py-2 pl-3 pr-4 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Registrar Post</Link>
        </li>
        <li>
          <Link to="/feed" className="block py-2 pl-3 pr-4 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Listar Post</Link>
        </li>
        <li className="block py-2 pl-3 pr-4 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
          <button onClick={
            () => {handleLogout()}
          }>Logout</button>
        </li>
      </ul>
    </div>
  </div>
</nav>

)}else{
  return (
  <nav className="bg-white border-gray-200 dark:bg-gray-600 w-full">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <Link to="/" >
        <img src={logo} className="h-8 mr-3" alt="Flowbite Logo" />
    </Link>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-600 md:dark:bg-gray-600 dark:border-gray-600">
        <li>
          <Link to="/" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white md:hover:text-blue-700" aria-current="page">Home</Link>
        </li>
        <li>
          <Link to="/register" className="block py-2 pl-3 pr-4 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Registrar Usuario</Link>
        </li>
        <li>
          <Link to="/feed" className="block py-2 pl-3 pr-4 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Listar Post</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

)
  }

}

export default Navbar
