import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <header className=''>
        <Navbar />
      </header>

      <Outlet />
    </>
  )
}

export default App
