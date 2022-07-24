import React from 'react'
import Box from '@mui/material/Box';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearUser } from '../features/authSlice';




const Navbar = () => {
  const dispatch = useDispatch();
  const navigate =useNavigate();
  const { user } = useSelector((state) => state.auth);
  console.log(user);

const handleLogout = () => {
  dispatch(clearUser());
  navigate("login")
}

 
  return (
    <Box>
      <AppBar>
        <Toolbar>
          <Typography
          variant='h6'
          component="div"
          sx={{ flexGrow: 1, cursor:"pointer" }}
          onClick={() => navigate("/")}
          > 
          Erhan News
          </Typography>
          {user ? (
            <Button color='inherit' onClick={handleLogout}>
              Logout
            </Button>
          ) :(
            <Button color="inherit" onClick={() => navigate('/')}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar