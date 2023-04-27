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
import { useDispatch, useSelector } from 'react-redux'
import { deleteEmployeeById, getAllEmployees } from '../utils/api/employee'
import { SimpleTable } from '../components/common/SimpleTable'

// componente para desplegar un form para agregar empleado
export const DeleteEmployee = () => {
  const [options, setOptions] = useState([]);
  const [employee, setEmployee] = useState([]);
  const employeeRedux = useSelector((state) => state.employees);
  

  useEffect(() => {
    //setEmployee(lista);
    let string = [];
    let response = getAllEmployees()
    response.then((data) => {
      data.map((index) => {
        return string.push(index.name)
      })
      setOptions(string)
    })
  }, [])


  const handleOptionChange = (event) => {
    setEmployee(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(employee);
    deleteEmployeeById(employee);
  }

  return (
    <>
      {/* <Grid
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
    <SimpleTable texto={'data'}></SimpleTable>
    <SimpleTable texto={'data'}></SimpleTable>
      </Grid> */}

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
                //input={<Input />}
                
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
              {'Eliminar empleado'}
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  )
}
