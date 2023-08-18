import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom';

function Pricing() {

    const location = useLocation();

    console.log(location);

  return (
    <div>
      show Pricing
      <Outlet/> 
      {/* parent la sangel ki free and premium pricing kute load hovayla pahige manun outlet used  */}
    </div>
  );
}

export default Pricing
