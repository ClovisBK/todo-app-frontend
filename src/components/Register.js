import React, { useState } from 'react'
import {Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../utils/HandleApi';

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
  return (
    <div className="todo-container">
            <h2 className="todo-title">Register</h2>
            <div className="todo-input-wrapper" style={{ flexDirection: "column", gap: "10px" }}>
                <input className="todo-input" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input className="todo-input" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input className="todo-input" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className="btn-add" onClick={() => registerUser(username, email, password, navigate)}>Register</button>
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </div>
        </div>
  )
}

export default Register
