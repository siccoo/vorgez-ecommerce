import { FC, FormEvent } from 'react'
import { Box, Button, Divider, Grid, InputLabel, TextField, Typography } from '@mui/material'
import { Link } from 'react-router-dom';

const RegisterFormComponent: FC = () => {

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Clicked");

  }

  return (
    <Box sx={{ padding: 2, border: 1, borderColor: "#CCCCCC", width: "350px", marginTop: 2 }}>
      <form onSubmit={onSubmitHandler}>
        <Grid container direction="column" justifyContent="flex-start">
          <Typography variant="h4" component="h1">Create account</Typography>
          <InputLabel sx={{ fontWeight: 500, marginTop: 1, color: "#000000" }} htmlFor="name">Your name</InputLabel>
          <TextField type="text" name="name" id="name" variant="outlined" size="small" />

          <InputLabel sx={{ fontWeight: 500, marginTop: 1, color: "#000000" }} htmlFor="email">Email</InputLabel>
          <TextField type="text" name="email" id="email" variant="outlined" size="small" />

          <InputLabel sx={{ fontWeight: 500, marginTop: 1, color: "#000000" }} htmlFor="password">Password</InputLabel>
          <TextField type="text" name="password" id="password" variant="outlined" size="small" placeholder='Minimum 6 characters' />

          <InputLabel sx={{ fontWeight: 500, marginTop: 1, color: "#000000" }} htmlFor="confirmPassword">Re-enter password</InputLabel>
          <TextField type="text" name="confirmPassword" id="confirmPassword" variant="outlined" size="small" />

          <Button variant='contained' style={{ marginTop: '16px', height: '31px', borderColor: "#a88734 #9c7e31 #846a29", backgroundColor: '#f0c14b', color: '#000000', textTransform: 'none' }} type='submit'>Register</Button>
        </Grid>
      </form>

      <div style={{ marginTop: '30px' }}>
        <small>
          <span>By creating an account, you agree to Amazon's</span>
        </small>
      </div>

      <div>
        <small>
          <a href="#" style={{ textDecoration: 'none' }}>{' '}Conditions of use</a>{' '}
          and {' '}
          <a href="#" style={{ textDecoration: 'none' }}>Privacy policy</a>.
        </small>
      </div>

      <Divider sx={{marginTop: "36px", marginBottom: "36px"}}/>

      <div style={{ marginTop: '30px' }}>
        <small>
          Already have an account?{" "}
          <Link to="/signin" style={{textDecoration: "none", color: "#0000ee"}}>Sign-in</Link>
        </small>
      </div>
    </Box>
  )
}

export default RegisterFormComponent