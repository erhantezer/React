import React from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logOut } from '../auth/firebase';
import { AuthContext } from '../context/AuthContext';


const Navbar = () => {
  const navigate = useNavigate()
  const { currentUser } = useContext(AuthContext);
  // const currentUser = "erhan";
  // const currentUser = false;
  return (
    <nav className="navbar navbar-expand-lg bg-info">
    <div className="container-fluid">
     <Link to='/' className='navbar-brand text-white ms-5' >
     <h4>React Movie App</h4>
    </Link>
    {currentUser ? (
      <div className='d-flex p-2 text-center align-items-center justify-content-center'>
      <h4 className='m-2'>{currentUser}</h4>
      <button className='btn btn-warning' onClick={() =>logOut()}>Logout</button>
      </div>
    ) : (
      <div className='d-flex p-2 text-center align-items-center justify-content-center'>
      <button className='btn btn-warning m-2' onClick={() => navigate('/login')}>Login</button>
      <button className='btn btn-warning' onClick={() => navigate('/register')}>Register</button>
      </div>
    )}
    </div>
   </nav>
  )
}

export default Navbar