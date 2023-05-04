import React, { useState } from 'react'
import {
  TextField,
  MenuItem,
  Button,
  Input,
  Select,
  Grid,
  Typography,
  FormControl,
  InputLabel,
} from '@mui/material'
import { createEmploye } from '../utils/api/employee';

const options = ['Administrador', 'Cajero', 'Marketing', 'Soporte']

// componente para desplegar un form para agregar empleado
export const EmployeeForm = () => {
  const [name, setName] = useState('')
  const [lastname, setlastname] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setphone] = useState('')
  const [position, setposition] = useState([])

  const clearForm = () =>{
    setEmail('');
    setName('');
    setlastname('');
    setphone('');
    setposition([]);
  }

  const handleOptionChange = (event) => {
    setposition(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();    
    // Realizar una petición POST
    let data = { name, email, phone, lastname, position };
    createEmploye(data);
    clearForm();
    
  }
  return (
    <>
      <form onSubmit={handleSubmit} id='sign-up-form'>
        <Grid
          container
          sx={{
            backgroundColor: '#ffff',
            borderRadius: '15px',
            paddingX: '2rem',
            paddingY: '2rem',
          }}
        >
          <Grid item xs={12} textAlign={'center'} marginBottom={'1rem'}>
            <Typography
              fontSize={'16px'}
              fontWeight={'bold'}
              letterSpacing={'2px'}
            >
              {'Agregar Empleado'}
            </Typography>
          </Grid>
          <Grid
            item
            xs={6}
            justifyContent={'center'}
            display={'flex'}
            marginY={'1rem'}
          >
            <TextField
              id="name-input"
              label="Nombre"
              sx={{ width: '70%' }}
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </Grid>
          <Grid
            item
            xs={6}
            justifyContent={'center'}
            display={'flex'}
            marginY={'1rem'}
          >
            <TextField
              id="lastname-input"
              label="Apellido"
              value={lastname}
              sx={{ width: '70%' }}
              onChange={(event) => setlastname(event.target.value)}
            />
          </Grid>
          <Grid
            item
            xs={6}
            justifyContent={'center'}
            display={'flex'}
            marginY={'1rem'}
          >
            <TextField
              id="email-input"
              label="Email"
              sx={{ width: '70%' }}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </Grid>
          <Grid
            item
            xs={6}
            justifyContent={'center'}
            display={'flex'}
            marginY={'1rem'}
          >
            <TextField
              id="phone-input"
              label="Numero de telefono"
              value={phone}
              sx={{ width: '70%' }}
              onChange={(event) => setphone(event.target.value)}
            />
          </Grid>
          <Grid
            item
            xs={12}
            justifyContent={'center'}
            display={'flex'}
            marginY={'1rem'}
          >
            <FormControl sx={{ width: '200px', marginY: '1rem' }}>
              <InputLabel id="select-multiple-label">{'Rol'}</InputLabel>
              <Select
                labelId="select-multiple-label"
                id="select-multiple"
                value={position}
                onChange={handleOptionChange}
                input={<Input />}
              >
                {options.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid
            item
            xs={12}
            justifyContent={'center'}
            display={'flex'}
            marginY={'1rem'}
          >
            <Button
              type="submit"
              variant="contained"
              sx={{ borderRadius: '10px', textTransform: 'none' }}
            >
              {'Crear usuario'}
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  )
}
