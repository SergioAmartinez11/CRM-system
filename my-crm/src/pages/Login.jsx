import React from 'react';
import { Box, Grid } from '@mui/material';
import LoginForm from '../components/LoginForm';

export const Login = () => {
  return (
    <>
      <Grid
        container
        maxWidth={'100%'}
        display={'flex'}
        justifyContent={'center'}
        sx={{ backgroundColor: '#fff' }}
      >
        <Grid item xs={12} justifyContent={'center'} display={'flex'} padding={'3rem'}>
          <img
            src="/uabc_logo.png"
            alt="uabc logo"
            width={'150px'}
            height={'220px'}
          />
        </Grid>
        <Grid item xs={12}>
          <LoginForm />
        </Grid>
      </Grid>
    </>
  );
};
