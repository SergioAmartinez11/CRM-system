import React, { useEffect, useState } from 'react'
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Grid,
  Typography,
  MenuItem,
  Select,
} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import InputMask from 'react-input-mask'
import { toggleEmployeeModal } from '../../redux/common'

import { deleteEmployees, editEmployees } from '../../utils/api/employee'

export const EditEmployeesModal = () => {
  const [openModal, setOpenModal] = useState(false)
  const { open } = useSelector((state) => state.common.employeeModal)
  const { data } = useSelector((state) => state.common.employeeModal)
  const dispatch = useDispatch()
  const [formValues, setFormValues] = useState({
    id: '',
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    address: '',
    city: '',
    state: '',
    postal_code: '',
    birthday: '',
    country: '',
    role: '',
  })

  useEffect(() => {
    setOpenModal(open)
    if (data) {
      setFormValues({
        id: data[0],
        first_name: data[1],
        last_name: data[2],
        email: data[3],
        phone_number: data[4],
        address: data[5],
        city: data[6],
        state: data[7],
        postal_code: data[8],
        birthday: data[9],
        country: data[10],
        role: data[11],
      })
    }
  }, [data, open])

  const handleClose = () => {
    dispatch(toggleEmployeeModal({ open: false, data: null }))
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
    editEmployees(formValues)
    handleClose()
    // eslint-disable-next-line no-restricted-globals
    location.reload()
  }

  const handleDeleteProduct = () => {
    if (data) {
      deleteEmployees(data[0])
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
            Empleado: {formValues.first_name}
          </Typography>
          <Typography sx={{ fontWeight: 'bold' }}>
            Id: {formValues.id}
          </Typography>{' '}
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <Grid container columnSpacing={1}>
              <Grid item xs={6}>
                <TextField
                  autoFocus
                  autoComplete="Nombre"
                  margin="dense"
                  label="First Name"
                  name="first_name"
                  value={formValues.first_name}
                  type="text"
                  fullWidth
                  variant="outlined"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  autoFocus
                  autoComplete="Apellido"
                  margin="dense"
                  label="Last Name"
                  name="last_name"
                  value={formValues.last_name}
                  type="text"
                  fullWidth
                  variant="outlined"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  autoFocus
                  autoComplete="email"
                  margin="dense"
                  label="Email"
                  type="email"
                  fullWidth
                  variant="outlined"
                  name="email"
                  onChange={handleChange}
                  value={formValues.email}
                />
              </Grid>
              <Grid item xs={6} paddingTop={'8px'}>
                <Select
                  autoFocus
                  label="Rol"
                  name="role"
                  value={formValues.role}
                  variant="outlined"
                  onChange={handleChange}
                  margin="dense"
                  fullWidth
                >
                  <MenuItem value="Admin">Administrador</MenuItem>
                  <MenuItem value="Manager">Gerente</MenuItem>
                  <MenuItem value="Employee">Empleado general</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  autoFocus
                  autoComplete="id"
                  margin="dense"
                  type="text"
                  fullWidth
                  variant="outlined"
                  onChange={handleChange}
                  label="ID"
                  name="id"
                  disabled
                  value={formValues.id}
                />
              </Grid>

              <Grid item xs={8}>
                <TextField
                  autoFocus
                  autoComplete="Direccion"
                  label="Address"
                  name="address"
                  value={formValues.address}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  margin="dense"
                />
              </Grid>

              <Grid item xs={4}>
                <TextField
                  autoFocus
                  autoComplete="Ciudad"
                  label="City"
                  name="city"
                  value={formValues.city}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  margin="dense"
                />
              </Grid>
              <Grid item xs={4}>
                <InputMask
                  mask="(999) 999 9999"
                  disabled={false}
                  maskChar=" "
                  value={formValues.phone_number ?? ''}
                  onChange={handleChange}
                >
                  {() => (
                    <TextField
                      autoComplete="661 999 999"
                      margin="dense"
                      label="Phone Number"
                      name="phone_number"
                      type="text"
                      fullWidth
                      variant="outlined"
                    />
                  )}
                </InputMask>
              </Grid>

              <Grid item xs={4}>
                <TextField
                  autoFocus
                  autoComplete="Pais"
                  label="Country"
                  name="country"
                  value={formValues.country}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  margin="dense"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  autoComplete="fecha de nacimiento"
                  margin="dense"
                  type="date"
                  fullWidth
                  variant="outlined"
                  name="birthday"
                  defaultValue="1998-09-11"
                  value={formValues.birthday}
                  onChange={handleChange}
                  inputProps={{ min: '1950-01-24', max: '2023-05-31' }}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  autoFocus
                  autoComplete="22710"
                  label="zip code"
                  name="postal_code"
                  value={formValues.postal_code}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  margin="dense"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  autoFocus
                  autoComplete="Estado"
                  label="state"
                  name="state"
                  value={formValues.state}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  margin="dense"
                />
              </Grid>
            </Grid>
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
