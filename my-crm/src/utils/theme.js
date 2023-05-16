import { createTheme } from '@mui/material'

const theme = createTheme({
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
    values: { xs: 0, sm: 600, md: 900, lg: 1440, xl: 1536, xxl: 1600 },
  },
  typography: {
    gradientText: {
      background: 'linear-gradient(to right, #8ED1FC, #F78DA7)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
  },
  palette: {
    primary: {
      pink: '#F78DA7',
      blue: '#8ED1FC',
      contrast: '#F2EFFF',
      main: '#5932EA',
      light: '#fffff',
    },
    secondary: {
      main: '#ffff',
      black: '#000',
    },
  },
})

export default theme
