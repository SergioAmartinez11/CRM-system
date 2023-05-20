import React, { useState } from 'react'
import { TextField, Button, Grid, Typography } from '@mui/material'
import theme from '../../utils/theme'
import { createProduct } from '../../utils/api/product'


export const Product = () => {
  const [formData, setFormData] = useState({
    id: '',
    item_name: '',
    description: '',
    quantity: '',
    provider: '',
    price: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const reload = () =>{
    // eslint-disable-next-line no-restricted-globals
    location.reload(true)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    createProduct(formData)
    setFormData({
      id: '',
      item_name: '',
      description: '',
      quantity: '',
      provider: '',
      price: '',
    })
    reload();
  }

  return (
    <form>
      <Grid
        container
        columnSpacing={1}
        sx={{
          backgroundColor: '#fff',
          borderRadius: '5px',
          boxShadow: 3,
          padding: '2rem',
          maxWidth: theme.breakpoints.values.md,
        }}
      >
        <Grid item xs={12} textAlign={'center'}>
          <Typography fontWeight={'bold'} fontSize={'20px'}>
            AGREGAR PRODUCTO
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <TextField
            autoFocus
            autoComplete="sku"
            margin="dense"
            label="sku"
            type="number"
            fullWidth
            variant="outlined"
            name="id"
            onChange={handleChange}
            value={formData.id}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            autoFocus
            autoComplete="quantity"
            margin="dense"
            label="quantity"
            type="number"
            fullWidth
            variant="outlined"
            name="quantity"
            onChange={handleChange}
            value={formData.quantity}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            autoFocus
            label="Price"
            name="price"
            value={formData.price}
            variant="outlined"
            onChange={handleChange}
            margin="dense"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            autoFocus
            autoComplete="Name"
            margin="dense"
            label="Name"
            name="item_name"
            value={formData.item_name}
            type="text"
            fullWidth
            variant="outlined"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            autoFocus
            autoComplete="Description"
            margin="dense"
            label="Description"
            name="description"
            value={formData.description}
            type="text"
            fullWidth
            variant="outlined"
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={4}>
          <TextField
            autoFocus
            label="Provider"
            name="provider"
            value={formData.provider}
            variant="outlined"
            onChange={handleChange}
            type="text"
            margin="dense"
            fullWidth
          />
        </Grid>

        <Grid item xs={12} display={'flex'} justifyContent={'center'}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ marginTop: '2rem' }}
            onClick={handleSubmit}
          >
            Agregar Producto
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}
