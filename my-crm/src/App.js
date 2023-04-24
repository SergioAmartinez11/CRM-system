import React from 'react';
import './App.css';
import { Grid } from '@mui/material';
import { LeftPanel } from './components/LeftPanel';
<<<<<<< Updated upstream
import { EmployeeForm } from './components/employees/EmployeeForm';
import Saludo from './components/Saludo';
=======
import { EmployeeForm } from './pages/EmployeeForm';
import { DeleteEmployee } from './pages/DeleteEmployee';
>>>>>>> Stashed changes


function App() {
  return (
    // <Login/> <EmployeeForm />
      <Grid container spacing={0} xs={12} minHeight={'100vh'}>
        <Grid item xs={3}>
        <LeftPanel/>
        </Grid>
<<<<<<< Updated upstream
        <Grid item xs={9} sx={{backgroundColor:'#F2EFFF'}} padding={'4rem'}>
        <Saludo />
=======
        <Grid item xs={9} sx={{backgroundColor:'#F2EFFF'}} padding={'4rem'} display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
          <EmployeeForm />

          <DeleteEmployee/>
          
>>>>>>> Stashed changes
        </Grid>
      </Grid>
    
  );
}

export default App;
