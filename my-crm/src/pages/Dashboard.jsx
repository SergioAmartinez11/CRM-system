import { Grid, Box, Typography, IconButton } from '@mui/material'
import React from 'react'
import styles from '../styles/LeftPanel.module.css'
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch } from 'react-redux';
import CustomAccordion from '../components/common/CustomAccordion'
import {
  employees,
  inventory,
  marketing,
  config,
} from '../utils/constants/accordion'
import theme from '../utils/theme'
import { logout } from '../redux/authSlice';
import { useNavigate } from 'react-router';

export const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () =>{
    dispatch(logout());
    navigate('/')
    
  }

  return (
    <>
      <Grid
        container
        sx={{
          backgroundColor: theme.palette.primary.contrast,
          minHeight: '100vh',
        }}
      >
        <Grid
          item
          md={3}
          sx={{
            backgroundColor: '#fff',
            display: 'flex',
            flexDirection: 'column',
            padding: '3rem',
            boxShadow: 3,
          }}
        >
          <div className={styles.title}>My-CRM</div>
          <CustomAccordion data={employees} />
          <CustomAccordion data={inventory} />
          <CustomAccordion data={marketing} />
          <CustomAccordion data={config} />
          <Box marginTop={'auto'} sx={{width:'100%', display:'flex', flexDirection:''}}>
            <IconButton disableRipple onClick={handleLogout}>
            <LogoutIcon />
            <Typography fontSize={'small'} sx={{paddingX:'5px', alignSelf:'center'}}>Cerrar sesión</Typography>
            </IconButton>
            </Box>
        </Grid>
      </Grid>
    </>
  )
}
