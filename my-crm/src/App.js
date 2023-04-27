import React from 'react'
import './App.css'
import { Grid, Box } from '@mui/material'
import { LeftPanel } from './components/LeftPanel'
import { EmployeeForm } from './pages/EmployeeForm'
import { DeleteEmployee } from './pages/DeleteEmployee'

function App() {
  return (
    // <Login/> <EmployeeForm />
    <Grid container spacing={0} xs={12} minHeight={'100vh'}>
      <Grid item xs={3}>
        <LeftPanel />
      </Grid>
      <Grid
        item
        xs={9}
        sx={{ backgroundColor: '#F2EFFF' }}
        padding={'4rem'}
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'space-between'}
      >
        <Box sx={{marginBottom:'1rem'}}>
        <EmployeeForm />
        </Box>
        <DeleteEmployee />
      </Grid>
    </Grid>
  )
}

export default App
