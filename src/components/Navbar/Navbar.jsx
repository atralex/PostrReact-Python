import { Link } from "react-router-dom"
import { serverType } from "../../config/server.config"
import flaskLogo from '../../assets/flaskLogo.svg'
import railsLogo from '../../assets/railsLogo.png'
import nodeLogo from '../../assets/nodeLogo.png'
import { useUsernameStore } from "../../store/counterStore"
import { useNavigate } from 'react-router-dom';
import { logout } from "../../config/cookie.session"

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
    logout()
    setUsername('')
    navigate('/')
  }
  if(username !== ''){
  return (
<div className='top-0 sticky'>
<nav className=" bg-white border-b border-gray-200 ">
  <div className="flex flex-wrap items-center justify-between mx-auto p-4">
    <Link to={`/profile/${username}`} className="flex items-center ">
      <img src={logo} className="md:h-8 h-20" alt="Logo" />
    </Link>
    <div className="items-center justify-between md:flex md:order-1">
      <ul className="flex flex-col p-4 md:p-0 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
        <li>
          <Link
            to={`/profile/${username}`}
            className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-400 focus:text-yellow-400 md:p-0">
            @{username}
          </Link>
        </li>
        <li>
          <Link
            to="/addPost"
            className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-400 focus:text-yellow-400 md:p-0">
            Registrar Post
          </Link>
        </li>
        <li>
          <Link
            to="/feed"
            className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text--400 focus:text-yellow-400 md:p-0">
            Ver Posts
          </Link>
        </li>
        <li className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-400 focus:text-yellow-400 md:p-0">
          <button onClick={
            () => {handleLogout()}
          }>Logout</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>

)}else{
  return (
    <div className='top-0 sticky'>
      <nav className=" bg-white border-b border-gray-200 ">
        <div className="flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center ">
            <img src={logo} className="md:h-8 h-20" alt="Logo" />
          </Link>
          <div className="items-center justify-between md:flex md:order-1">
            <ul className="flex flex-col p-4 md:p-0 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
              <li>
                <Link
                  to="/"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-400 focus:text-yellow-400 md:p-0">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-400 focus:text-yellow-400 md:p-0">
                  Registrar Usuario
                </Link>
              </li>
              <li>
                <Link
                  to="/feed"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-400 focus:text-yellow-400 md:p-0">
                  Ver Posts
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
)}

}

export default Navbar
