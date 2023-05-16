import React, { useState } from 'react'
import { TextField, Button, Select, MenuItem, Grid } from '@mui/material'
import InputMask from 'react-input-mask'
import theme from '../../utils/theme'
import { createEmploye } from '../../utils/api/employee'
import { fetchAllEmployees } from '../../redux/employeeSlice'

export const EmployeeForm = () => {
  const [formData, setFormData] = useState({
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

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    createEmploye(formData);
    fetchAllEmployees()
  }

  return (
    <form>
      <Grid
        container
        columnSpacing={1}
        sx={{
          backgroundColor: '#fff',
          borderRadius: '15px',
          boxShadow: 3,
          padding: '2rem',
          maxWidth: theme.breakpoints.values.sm,
        }}
      >
        <Grid item xs={12}>
          {/* <DragAndDrop /> */}
        </Grid>
        <Grid item xs={6}>
          <TextField
            autoFocus
            autoComplete="Nombre"
            margin="dense"
            label="First Name"
            name="first_name"
            value={formData.first_name}
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
            value={formData.last_name}
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
            value={formData.email}
          />
        </Grid>
        <Grid item xs={6} paddingTop={'8px'}>
          <Select
            autoFocus
            label="Rol"
            name="role"
            value={formData.role}
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
            value={formData.id}
          />
        </Grid>

        <Grid item xs={8}>
          <TextField
            autoFocus
            autoComplete="Direccion"
            label="Address"
            name="address"
            value={formData.address}
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
            value={formData.city}
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
            value={formData.phone_number ?? ''}
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
            value={formData.country}
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
            value={formData.birthday}
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
            value={formData.postal_code}
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
            value={formData.state}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            margin="dense"
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
            Agregar empleado
          </Button>
        </Grid>
      </Grid>
    </form>
    // <form onSubmit={handleSubmit}>
    //   <Grid
    //     container
    //     sx={{
    //       backgroundColor: '#fff',
    //       padding: '3rem',
    //       boxShadow: 3,
    //       borderRadius: '10px',
    //     }}
    //   >
    //     {/* <Grid item xs={6}> */}
    //       <TextField
    //         sx={{marginX:'10px'}}
    //         label="ID"
    //         name="id"
    //         value={formData.id}
    //         onChange={handleChange}
    //         margin="normal"
    //       />
    //       <TextField
    //       sx={{marginX:'10px'}}
    //         label="First Name"
    //         name="first_name"
    //         value={formData.first_name}
    //         onChange={handleChange}
    //         margin="normal"
    //       />
    //       <TextField
    //       sx={{marginX:'10px'}}
    //         label="Last Name"
    //         name="last_name"
    //         value={formData.last_name}
    //         onChange={handleChange}
    //         margin="normal"
    //       />
    //       <TextField
    //       sx={{marginX:'10px'}}
    //         label="Email"
    //         name="email"
    //         value={formData.email}
    //         onChange={handleChange}
    //         margin="normal"
    //       />
    //       <TextField
    //       sx={{marginX:'10px'}}
    //         label="Phone Number"
    //         name="phone_number"
    //         value={formData.phone_number}
    //         onChange={handleChange}
    //         margin="normal"
    //       />
    //     {/* </Grid>
    //     <Grid item xs={6}> */}
    //       <TextField
    //       sx={{marginX:'10px'}}
    //         label="Address"
    //         name="address"
    //         value={formData.address}
    //         onChange={handleChange}
    //         margin="normal"
    //       />
    //       <TextField
    //       sx={{marginX:'10px'}}
    //         label="City"
    //         name="city"
    //         value={formData.city}
    //         onChange={handleChange}
    //         margin="normal"
    //       />
    //       <TextField
    //       sx={{marginX:'10px'}}
    //         label="Postal Code"
    //         name="postal_code"
    //         value={formData.postal_code}
    //         onChange={handleChange}
    //         margin="normal"
    //       />
    //       <Select
    //       sx={{marginX:'10px'}}
    //         label="Country"
    //         name="country"
    //         value={formData.country}
    //         onChange={handleChange}
    //         margin="normal"
    //       >
    //         <MenuItem value="USA">USA</MenuItem>
    //         <MenuItem value="Canada">Canada</MenuItem>
    //         <MenuItem value="Mexico">Mexico</MenuItem>
    //       </Select>

    //       <Select
    //       sx={{marginX:'10px'}}
    //         label="State"
    //         name="state"
    //         value={formData.state}
    //         onChange={handleChange}
    //         margin="normal"
    //       >
    //         <MenuItem value="California">California</MenuItem>
    //         <MenuItem value="Texas">Texas</MenuItem>
    //         <MenuItem value="New York">New York</MenuItem>
    //       </Select>
    //       <Select
    //       sx={{marginX:'10px'}}
    //         label="Role"
    //         name="role"
    //         value={formData.role}
    //         onChange={handleChange}
    //         margin="normal"
    //       >
    //         <MenuItem value="Admin">Admin</MenuItem>
    //         <MenuItem value="User">User</MenuItem>
    //       </Select>
    //     {/* </Grid> */}
    //     <Button type="submit" variant="contained" color="primary">
    //       Submit
    //     </Button>
    //   </Grid>
    // </form>
  )
}
