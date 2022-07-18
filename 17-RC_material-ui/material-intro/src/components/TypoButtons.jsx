import {Button, Typography} from '@mui/material'
import { Box, Container } from '@mui/system';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

//? inline ise margin top veremezdik hatırla
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

        <Typography variant='body2' align='justify' marginTop={4}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, praesentium debitis iusto ad animi, dolore eligendi corrupti beatae ipsam odit ab veniam natus, sit expedita cupiditate voluptatum laudantium omnis blanditiis?
        </Typography>

        <Typography variant='button' align='justify' color='secondary'
        sx={{display:'inline-block', mt:4}}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto iste dolor magni repudiandae laboriosam ab, itaque magnam praesentium. Repellendus voluptates architecto vitae veritatis nihil saepe!
        </Typography>
      </Container>

      <Container>
        <Box 
        sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        mt: 4,
        }}
        >
          <Button variant='contained' color='secondary'>
            Click
          </Button>
          <Button variant='outlined' color='success' startIcon={<SendIcon/>}>
            Send
          </Button>
          <Button variant='contained' color='error' endIcon={<DeleteIcon/>}>
            Delete
          </Button>
        </Box>
      </Container>
    </div>
  ) 
};

export default TypoButtons;
