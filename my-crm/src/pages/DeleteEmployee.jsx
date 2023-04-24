import React, { useEffect, useState } from 'react'
import {
  MenuItem,
  Button,
  Input,
  Select,
  Grid,
  Typography,
  FormControl,
  InputLabel,
} from '@mui/material'
import { useDispatch } from 'react-redux'
import { getListOfEmployees } from '../redux/actions/employeesList'
import {getAllemployees} from '../utils/api/employee';

const options = ['Administrador', 'Cajero', 'Marketing', 'Soporte']

// componente para desplegar un form para agregar empleado
export const DeleteEmployee = () => {
const dispatch = useDispatch();
let list = getAllemployees();

// useEffect(() =>{

//     let list = getAllEmployees();
//     console.log(list);
//     dispatch(getListOfEmployees(list));
// },[]);

  const [employee, setEmployee] = useState([])

  const handleOptionChange = (event) => {
    setEmployee(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // Realizar una petición POST
  }
  return (
    <>
      <form onSubmit={handleSubmit} id="sign-up-form">
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
              {'Baja de Empleados'}
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            justifyContent={'center'}
            display={'flex'}
            marginY={'1rem'}
          >
            <FormControl sx={{ width: '500px', marginY: '1rem' }}>
              <InputLabel id="select-multiple-label">
                {'Lista de empleados'}
              </InputLabel>
              <Select
                labelId="select-multiple-label"
                id="select-multiple"
                value={employee}
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
              {'Dar de baja'}
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  )
}
