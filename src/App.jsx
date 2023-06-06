import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Outlet, useNavigate } from 'react-router-dom'
import { useUsernameStore } from './store/counterStore'
import { getCookie } from './config/cookie.session'
import { useEffect } from 'react'
import Footer from './components/Footer'

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
      <Navbar username={username}/>
      <div className='flex-1 mt-3 pb-36'>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default App
