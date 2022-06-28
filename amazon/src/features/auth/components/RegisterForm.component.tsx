import { FC, FormEvent } from 'react'
import { Box, Button, Grid, InputLabel, TextField, Typography } from '@mui/material'

const RegisterFormComponent: FC = () => {

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
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

          <Button type='submit'>Register</Button>
        </Grid>
      </form>
    </Box>
  )
}

export default RegisterFormComponent