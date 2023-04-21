import React from 'react';
import './App.css';
import { Grid } from '@mui/material';
import { LeftPanel } from './components/LeftPanel';
import { EmployeeForm } from './components/employees/EmployeeForm';


function App() {
  return (
    // <Login/>
      <Grid container spacing={0} xs={12} minHeight={'100vh'}>
        <Grid item xs={3}>
          <LeftPanel/>
        </Grid>
        <Grid item xs={9} sx={{backgroundColor:'#F2EFFF'}} padding={'4rem'}>
          <EmployeeForm />
        </Grid>
      </Grid>
    
  );
}

export default App;
