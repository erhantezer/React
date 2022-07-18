import {Typography} from '@mui/material'
import { Container } from '@mui/system';
const TypoButtons = () => {
  return(
    <div>
      <Container maxWidth='md'>
        <Typography
        variant='h4'
        component='h6'
        align='center'
        color='error'
        sx={{
          background:'lightgrey',
          mt:4,
          border: '2px solid blue'
        }}
        >
            Typography, Buttons, Container, Box
        </Typography>

      </Container>
    </div>
  ) 
};

export default TypoButtons;
