import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Button from "@mui/material/Button";

const Login = () => {

let {newUser} = useParams()
console.log(newUser)

// let nav = useNavigate();
// let handlenavigation = ()=>{
// nav('/')
// }

  return (
    <div>
      <h2>Login</h2>
      <Button variant="contained">Login</Button>
      <h2>Welcome - {newUser}</h2>
      <button><Link to = "/">Go back Home</Link></button>
    </div>
  )
}

export default Login
