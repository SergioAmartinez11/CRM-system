import { Grid } from '@mui/material'
import LoginForm from '../components/login/LoginForm'


export const Login = () => {
  return (
    <>
    
      <Grid
        container
        maxWidth={'100%'}
        display={'flex'}
        justifyContent={'center'}
        sx={{ backgroundColor: '#fff' }}
      >
        <Grid
          item
          xs={12}
          justifyContent={'center'}
          display={'flex'}
          padding={'3rem'}
        >
          <img
            src="/crm.png"
            alt="crm"
            width={'250px'}
            height={'250px'}
          />
        </Grid>
        <Grid item xs={12}>
          <LoginForm />
        </Grid>
      </Grid>
    </>
  )
}
