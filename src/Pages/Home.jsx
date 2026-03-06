import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'

function Home() {
  return (
    <div>
      <Header/>
      home

      <p>profile</p>
      <Link to={'/profile'}> <button>go to profile</button> </Link>
    </div>
  )
}

export default Home
