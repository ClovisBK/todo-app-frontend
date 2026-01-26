import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { loginUser } from '../utils/HandleApi'

const Login = ({setToken}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
  return (
    <div className='todo-container'>
        <h2 className='todo-title'>Login</h2>
        <div className='todo-input-wrapper' style={{flexDirection: "column", gap: "10px"}}>
             <input
             className='todo-input'
             type="email"
             placeholder='Email'
             value={email}
             onChange={(e) => setEmail(e.target.value)} 
             />
             <input
             className='todo-input'
             type="password"
             placeholder='Password'
             value={password}
             onChange={(e) => setPassword(e.target.value)}
              />
              <button 
              className='btn-add'
              onClick={() => loginUser(email, password, setToken, navigate)}
              >
                Login
              </button>
              <p>New user? <Link to="/register">Register</Link></p>
        </div>
    </div>
  )
}

export default Login
