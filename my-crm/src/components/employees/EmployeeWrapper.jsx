import React from 'react'
import { RecentAddedEmployees } from './HistoryEmployee'
import { EmployeeForm } from './EmployeeForm'
import { Grid } from '@mui/material'
import theme from '../../utils/theme'

export const EmployeeWrapper = () => {
  return (
    <Grid
      container
      sx={{
        borderRadius: '5px',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'left',
        alignContent: 'left',
      }}
    >
      <Grid item xs={12}>
        <EmployeeForm />
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          marginTop: '1rem',
          
          borderRadius: '5px',
          boxShadow: 3,
          backgroundColor: '#ffff',
          width: theme.breakpoints.values.lg,
          minHeight: '40vh',
        }}
      >
        <RecentAddedEmployees />
      </Grid>
    </Grid>
  )
}
