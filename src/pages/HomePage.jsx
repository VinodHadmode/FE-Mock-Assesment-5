import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"

const HomePage = () => {
  return (
    <DIV>
      <h2>Homepage</h2>
      <div className='all-links'>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
          <Link to="/dashboard">Dashboard</Link>
      </div>
    </DIV>
  )
}

export default HomePage

const DIV=styled.div`
    /* background-color: gray; */
   .all-links{
      display: flex;
      flex-direction: column;
      gap: 30px;
   }
`