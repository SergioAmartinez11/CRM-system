import { Container } from '@mui/system';
import React from 'react';
import Dashboard from './Dashboard';
import Forms from './Forms';

export const RightPanel = () => {
  return (
    <>
      <Container
        sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}
      >

      <Dashboard></Dashboard>
      <Forms/>
      </Container>
    </>
  );
};
