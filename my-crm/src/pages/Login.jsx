import { Grid, Typography } from '@mui/material'
import LoginForm from '../components/login/LoginForm'
import SvgBanner from '../components/svg/SvgBanner'
import React from 'react'

export const Login = () => {
  return (
    <>
      <SvgBanner width="100%" height="40vh" />
      <Grid
        container
        width={'100%'}
        position={'fixed'}
        top={'40vh'}
        display={'flex'}
        justifyContent={'center'}
        flexDirection={'column'}
      >
        <Grid item xs={12}>
          <Typography
            sx={{
              background: 'linear-gradient(to right, #8ED1FC, #F78DA7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: '26px',
              fontWeight: 'bold',
              textAlign: 'center',
              letterSpacing: '2px',
              marginBottom: '3rem',
            }}
          >
            {'MY-CRM'}
          </Typography>
          <LoginForm />
        </Grid>
      </Grid>
    </>
  )
}
