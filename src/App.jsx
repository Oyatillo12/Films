import './App.css'
import Navbar from './components/Navbar'
import SiteFooter from './components/SiteFooter'
import CustomRoutes from './routes'
import { useLocation } from 'react-router-dom'




function App() {
  const { pathname } = useLocation()
  const path = pathname.includes('login') || pathname.includes('register') || pathname.includes('profile')
  return (
    <>
      {path? "" : <Navbar />}
      <CustomRoutes />
      {pathname.includes('movie') || path ? "" : <SiteFooter />}
    </>
  )
}

export default App
