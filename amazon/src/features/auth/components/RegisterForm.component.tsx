import { FC, FormEvent } from 'react'
import { Box, Grid, InputLabel, TextField, Typography } from '@mui/material'

const RegisterFormComponent = () => {
  return (
    <Box sx={{ padding: 2, border: 1, borderColor: "#CCCCCC", width: "350px", marginTop: 2 }}>
      <form>
        <Grid container direction="column" justifyContent="flex-start">
          <Typography variant="h4" component="h1">Create account</Typography>
          <InputLabel sx={{ fontWeight: 500, marginTop: 1, color: "#000000" }} htmlFor="name">Your name</InputLabel>
          <TextField type="text" name="name" id="name" variant="outlined" size="small" />
        </Grid>
      </form>
    </Box>
  )
}

export default RegisterFormComponent