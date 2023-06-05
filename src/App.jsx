import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Outlet, useNavigate } from 'react-router-dom'
import { useUsernameStore } from './store/counterStore'
import { getCookie } from './config/cookie.session'
import { useEffect } from 'react'

function App() {
  const navigate = useNavigate()
  const {username, setUsername} = useUsernameStore()
  let cookie = getCookie()
  useEffect(() => {
    if(cookie !== null){
    if((cookie.username != '')){
      setUsername(cookie.username)
      console.log(cookie.username)
      navigate('/profile/'+cookie.username  )
    }}
  }, [])

  return (
    <>
      <header className=''>
        <Navbar username={username}/>
      </header>

      <Outlet />
    </>
  )
}

export default App
