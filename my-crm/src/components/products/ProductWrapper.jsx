import React from 'react'
import { RecentAddedProducts } from './HistoryProducts'
import { Product } from './Product'
import { Grid } from '@mui/material'
import theme from '../../utils/theme'

export const ProductWrapper = () => {
  return (
    <Grid
      container
      sx={{
        borderRadius: '5px',
      }}
    >
      <Grid item xs={12}>
        <Product />
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          marginTop: '1rem',
          borderRadius: '5px',
          boxShadow: 3,
          backgroundColor: '#ffff',
          width: theme.breakpoints.values.lg,
          minHeight: '40vh',
        }}
      >
        <RecentAddedProducts />
      </Grid>
    </Grid>
  )
}
