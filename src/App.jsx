import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './Pages/LandingPage'
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import AuthPage from './Pages/AuthPage'
import View from './Pages/View'

function App() {
  return (
   
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/auth' element={<AuthPage />} />
      <Route path='/home' element={<Home />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/view/:id' element={<View/>}/>
    </Routes>
  
  )
}

export default App