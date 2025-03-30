import * as React from 'react';
import { Link } from 'react-router-dom';  
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';

export default function Navbar({ user }) { 
  return (
    <AppBar>
      <Container>
        <ol className='navbar'>
          <li className='navItems'><Link to='/'>Home</Link></li>
          <li className='navItems'><Link to={`/Login/${user}`}>Login</Link></li>
          <li className='navItems'><Link to='/Signup'>SignUp</Link></li>
          <li className='navItems'><Link to='/products'>Product</Link></li>
          <li className='navItems'><Link to='/todo'>TodoList</Link></li>
        </ol>
      </Container>
    </AppBar>
  );
}
