import React from 'react'
import { Route,Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Login from './Login'
import Signup from './Signup'
import SignupLogin from './SignupLogin'
import DashBoard from '../pages/DashBoard'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signuplogin" element={<SignupLogin/>}/>
        <Route path="/dashboard" element={<DashBoard/>}/>
        <Route path="*" element={<h1>404,Page not found</h1>}/>
    </Routes>
  )
}

export default AllRoutes
