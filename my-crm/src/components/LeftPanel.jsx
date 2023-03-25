import { Button } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import { mainPanelButtons } from '../constants/buttons';
import styles from '../styles/LeftPanel.module.css';

export const LeftPanel = () => {
  return (
    <>
      <Container
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingY: '3rem',
        }}
      >
        <div className={styles.title}>My-CRM</div>
        {mainPanelButtons.map((index) => {
          return <Button className={styles.button}>{index.label}</Button>;
        })}
      </Container>
    </>
  );
};
