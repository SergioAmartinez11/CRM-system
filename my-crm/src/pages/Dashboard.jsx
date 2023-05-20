import { Grid, Box, Typography, IconButton } from '@mui/material'
import React from 'react'
import LogoutIcon from '@mui/icons-material/Logout'
import { useDispatch } from 'react-redux'
import CustomAccordion from '../components/common/CustomAccordion'
import {
  employees,
  inventory,
  marketing,
  config,
} from '../utils/constants/accordion'
import { logout } from '../redux/authSlice'
import { useNavigate } from 'react-router'
import { SvgFooter } from '../components/svg/SvgFooter'
import { Wrapper } from '../components/dashboard/Wrapper'
import theme from '../utils/theme'

export const Dashboard = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogout = () => {
    dispatch(logout())
    navigate('/')
  }

  return (
    <>
      <Box width={'100%'} sx={{ position: 'fixed', bottom: 0, left: 0 }}>
        <SvgFooter />
      </Box>
      <Grid
        container
        sx={{
          minHeight: '100vh',
          position: 'fixed',
          top: 0,
        }}
      >
        <Grid
          item
          md={2}
          sx={{
            backgroundColor: '#fff',
            display: 'flex',
            flexDirection: 'column',
            paddingY: '3rem',
            paddingX: '1rem',
            boxShadow: 3,
          }}
        >
          <Typography
            sx={{
              fontSize: '26px',
              fontWeight: 'bold',
              textAlign: 'center',
              letterSpacing: '2px',
              marginBottom: '3rem',
              color: theme.palette.primary.main,
            }}
          >
            {'My-CRM'}
          </Typography>
          <CustomAccordion data={employees} />
          <CustomAccordion data={inventory} />
          <CustomAccordion data={marketing} />
          <CustomAccordion data={config} />
          <Box
            marginTop={'auto'}
            sx={{ width: '100%', display: 'flex', flexDirection: '' }}
          >
            <IconButton disableRipple onClick={handleLogout}>
              <LogoutIcon />
              <Typography
                fontSize={'small'}
                sx={{ paddingX: '5px', alignSelf: 'center' }}
              >
                Cerrar sesión
              </Typography>
            </IconButton>
          </Box>
        </Grid>
        <Grid
          item
          md={10}
          display={'flex'}
          justifyContent={'center'}
          padding={'3rem'}
          height={'100vh'}
          overflow={'auto'}
        >
          <Wrapper />
        </Grid>
      </Grid>
    </>
  )
}
