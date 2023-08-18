import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <nav>
      <ul>
        {/* for avoid holl app so we use link  */}
        <li> <Link to="/pricing">Pricing</Link> </li>
        <li> <Link to="/about" state={{mykey: 'important data', luckyNumber: 12}}>About</Link> </li>
        <li> <Link to="/login"><button>Login Btn</button></Link> </li>
        {/* <li> <Link to="/user/userId/projectId"><button>Profile Btn</button></Link> </li>
        <li> <Link to="/user/:userId/:projectId"><button>Profile Btn</button></Link> </li> */}
      </ul>
    </nav>
  )
}

export default Navigation
