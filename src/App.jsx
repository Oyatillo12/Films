import './App.css'
import Navbar from './components/Navbar'
import SiteFooter from './components/SiteFooter'
import CustomRoutes from './routes'
import { useLocation } from 'react-router-dom'




function App() {
  const {pathname} = useLocation()
  return (
    <>
    <Navbar />
      
      <CustomRoutes />
      {pathname?.includes('movie') ? "" : <SiteFooter />}
    </>
  )
}

export default App
