import React from 'react'
import Box from '@mui/material/Box';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

 const user ="";


const Navbar = () => {
  const navigate =useNavigate()
 
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
            <Button color='inherit'>
              Logout
            </Button>
          ) :(
            <Button color="inherit">
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar