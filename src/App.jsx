import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import { useUsernameStore } from './store/counterStore'

function App() {
  const {username} = useUsernameStore()
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
