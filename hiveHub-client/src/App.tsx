import { useState } from 'react'
import {Routes,Route,Navigate, useNavigate} from 'react-router-dom'
import './App.css'
import Signup from './pages/auth/signup/Signup'
import Layout from './pages/layout/Layout'
import Home from './pages/user/home/Home'
import Login from './pages/auth/login/Login'
import Verification from './pages/auth/verification/Verification'

function App() {
  
  const [auth,setAuth]=useState<boolean>(false)
  

  return (
    <>
    <Routes>
      <Route path='/signup' element={!auth?<Signup/>:<Navigate to={'/'}/>} />
      <Route path='/login' element={!auth?<Login/>:<Navigate to={'/'}/>}/>
      <Route path='/verification' element={!auth?<Verification/>:<Navigate to={'/'} />} />
    </Routes>

      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
