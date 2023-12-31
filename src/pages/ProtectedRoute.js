import React from 'react'
import {Navigate  } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

function ProtectedRoute() {

    

    const isLoggedIn = false;

  return (
    <div>
        {isLoggedIn ? <Outlet/> : <Navigate to="/login" />}
    </div>
    
  )
}

export default ProtectedRoute
