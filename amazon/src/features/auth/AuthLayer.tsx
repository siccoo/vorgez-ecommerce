import { FC, ReactNode } from 'react';
import { Grid } from '@mui/material';

const AuthLayer = ({ children }: { children: ReactNode }) => {
    return (
        <Grid >
            <img src="amazon-logo.png" alt="amazon-logo" height="40px"/>
            <main>{children}</main>
        </Grid>
    )
}

export default AuthLayer