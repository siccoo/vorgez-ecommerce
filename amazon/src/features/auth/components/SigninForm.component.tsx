import { FC, FormEvent } from 'react'
import { Box, Button, Divider, Grid, InputLabel, TextField, Typography } from '@mui/material'
import { Link } from 'react-router-dom';

const SigninFormComponent: FC = () => {

    const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log("Clicked");

    }

    return (
        <>
            <Box sx={{ padding: 2, border: 1, borderColor: "#CCCCCC", width: "350px", marginTop: 2 }}>
                <form onSubmit={onSubmitHandler}>
                    <Grid container direction="column" justifyContent="flex-start">
                        <Typography variant="h4" component="h1">Sign-In</Typography>

                        <InputLabel sx={{ fontWeight: 500, marginTop: 1, color: "#000000" }} htmlFor="email">Email</InputLabel>
                        <TextField type="text" name="email" id="email" variant="outlined" size="small" />

                        <InputLabel sx={{ fontWeight: 500, marginTop: 1, color: "#000000" }} htmlFor="password">Password</InputLabel>
                        <TextField type="text" name="password" id="password" variant="outlined" size="small" placeholder='Minimum 6 characters' />

                        <Button variant='contained' style={{ marginTop: '16px', height: '31px', borderColor: "#a88734 #9c7e31 #846a29", backgroundColor: '#f0c14b', color: '#000000', textTransform: 'none' }} type='submit'>Sign In</Button>
                    </Grid>
                </form>

                <div style={{ marginTop: '30px' }}>
                    <small>
                        <span>By continuing you agree to Amazon's</span>
                        <a href="#" style={{ textDecoration: 'none' }}>{' '}Conditions of use</a>{' '}
                        and {' '}
                        <a href="#" style={{ textDecoration: 'none' }}>Privacy policy</a>.
                    </small>
                </div>
            </Box>
            <div style={{ marginTop: "16px" }}>
                <Divider>
                    <small style={{ color: '#767676' }}>New to Amazon?</small>
                </Divider>

                <Link to="/register" style={{ textDecoration: "none", color: "#0000ee" }}>
                    <Button variant='contained' style={{ width: "100%", marginTop: '12px', height: '31px', backgroundColor: '#f1f1f1', color: '#000000', textTransform: 'none' }}>Register</Button>
                </Link>
            </div>
        </>
    )
}

export default SigninFormComponent;