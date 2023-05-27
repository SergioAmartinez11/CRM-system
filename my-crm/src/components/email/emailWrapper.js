import { Grid } from '@mui/material'
import React from 'react'
import { Email } from './email'

export const EmailForm = () => {
  return (
    <Grid
      container
      sx={{
        //backgroundColor: '#fff',
        minHeight:'80vh',
        display: 'flex',
        justifyContent: 'center',
        alignContent:'center',
        borderRadius: '5px',
        //boxShadow: 3,
      }}
    >
      <Grid item xs={10}>
        <Email />
      </Grid>
    </Grid>
  )
}
