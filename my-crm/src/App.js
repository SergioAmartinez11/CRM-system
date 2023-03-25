import React from 'react';
import './App.css';
import { Grid } from '@mui/material';
import { LeftPanel } from './components/LeftPanel';
import { RightPanel } from './components/RightPanel';

function App() {
  return (
      <Grid container spacing={0} xs={12} minHeight={'100vh'}>
        <Grid item xs={3}>
          <LeftPanel/>
        </Grid>
        <Grid item xs={9} sx={{backgroundColor:'#F9FBFF'}}>
          <RightPanel/>
        </Grid>
      </Grid>
    
  );
}

export default App;
