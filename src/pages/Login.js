import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
    const[name, setname] = useState('');

    const navigate = useNavigate();

    function handlesubmit(e){
        e.preventDefault(); // input event page reload karu nahi manun preventdefault

        console.log(e)
        console.log(name);

        if(name === 'Komal'){
            navigate(`/user/${name}`)
        }
        else{
            navigate('/about')
        }
    }

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input type='text' onChange={(e) => setname(e.target.value)}/>
      </form>
    </div>
  )
}

export default Login
