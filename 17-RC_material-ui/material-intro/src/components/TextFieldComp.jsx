import { Typography,TextField, Button } from "@mui/material"
import { Box, Container } from "@mui/system"

const TextFieldComp = () => {
    let error=false;
  return (
    <div>
        <Container>
        <Typography variant="h4" align="center" mt={4} color="error">
          Texfield
        </Typography>
        <Box sx={{m:4, textAlign:'center'}}>

        <TextField
         margin='normal'
         id="email"
         label='Email'
         type='email'
         placeholder="Enter your Email"
         fullWidth
         error={error}
         helperText={error && 'Incorrect Email Format'}
        
        />
        <TextField
          margin="normal"
          id="password"
          label="Password"
          type="password"
          placeholder="Enter Your Password"
          fullWidth
          error={error}
          helperText={error && 'Incorrect Password Format'}
        />
        <Button type="submit" variant="contained" sx={{m:3}}>
            Submit
        </Button>
        </Box>
        </Container>
    </div>
  )
}

export default TextFieldComp