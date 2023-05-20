import React, { useEffect, useState } from 'react'
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { toggleProductModal } from '../../redux/common'
import { deleteProduct, editProduct } from '../../utils/api/product'

export const EditProductModal = () => {
  const [openModal, setOpenModal] = useState(false)
  const { open } = useSelector((state) => state.common.productModal)
  const { data } = useSelector((state) => state.common.productModal)
  const dispatch = useDispatch()
  const [formValues, setFormValues] = useState({
    id: '',
    item_name: '',
    description: '',
    quantity: '',
    provider: '',
    price: '',
  })

  useEffect(() => {
    setOpenModal(open)

    if (data) {
      setFormValues({
        id: data[0],
        item_name: data[1],
        description: data[2],
        quantity: data[3],
        price: data[5],
        provider: data[4],
      })
    }
  }, [data, open])

  const handleClose = () => {
    dispatch(toggleProductModal({ open: false, data: null }))
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    editProduct(formValues)
    handleClose()
    // eslint-disable-next-line no-restricted-globals
    location.reload()
  }

  const handleDeleteProduct = () => {
    if (data) {
      deleteProduct(data[0])
      handleClose()
      // eslint-disable-next-line no-restricted-globals
      location.reload()
    }
  }

  return (
    <div>
      <Dialog open={openModal} onClose={handleClose}>
        <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography sx={{ fontWeight: 'bold' }}>
            Producto: {formValues.item_name}
          </Typography>
          <Typography sx={{ fontWeight: 'bold' }}>
            Id: {formValues.id}
          </Typography>
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField
              name="item_name"
              label="name"
              value={formValues.item_name}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="description"
              label="Description"
              value={formValues.description}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="quantity"
              label="Quantity"
              value={formValues.quantity}
              onChange={handleChange}
              fullWidth
              type="number"
              margin="normal"
            />
            <TextField
              name="price"
              label="Price"
              value={formValues.price}
              onChange={handleChange}
              fullWidth
              type="number"
              margin="normal"
            />
            <TextField
              name="provider"
              label="Provider"
              value={formValues.provider}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </form>
        </DialogContent>
        <DialogActions
          sx={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <Button
            variant={'contained'}
            sx={{ backgroundColor: '#ff0000' }}
            onClick={() => handleDeleteProduct()}
          >
            BORRAR
          </Button>
          <Box>
            <Button
              variant="contained"
              onClick={handleClose}
              sx={{ marginRight: '5px' }}
            >
              Cancelar
            </Button>
            <Button onClick={handleSubmit} variant="contained" color="primary">
              Guardar
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
    </div>
  )
}
