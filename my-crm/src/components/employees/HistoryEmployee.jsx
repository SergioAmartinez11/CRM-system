import React, { useEffect } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import { fetchAllEmployees } from '../../redux/employeeSlice'
import { useDispatch, useSelector } from 'react-redux'

export const RecentAddedEmployees = () => {
  const dispatch = useDispatch()
  const { employees } = useSelector((state) => state.employee)
  let rows = []
  let count = 0;
  
  const columns = [
    'id',
    'first_name',
    'last name',
    'email',
    'Mobile phone',
    'address',
    'city',
    'state',
    'zip code',
    'country',
    'role',
    'birthday',
  ]

  employees?.forEach((e) => {
    if (count < 4) {
      count++;
      rows.push([
        e.id,
        e.first_name,
        e.last_name,
        e.email,
        e.phone_number,
        e.address,
        e.city,
        e.state,
        e.postal_code,
        e.country,
        e.role,
        e.birthday,
      ])
    }
  })

  useEffect(() => {
    dispatch(fetchAllEmployees())
  }, [dispatch])

  return (
    <TableContainer
      style={{
        overflowX: 'scroll',
        backgroundColor: '#fff',
        borderRadius: '5px',
        padding: '1rem',
        //width: '1000px',
        boxShadow: 3,
      }}
    >
      <Table>
        <TableHead style={{ minWidth: '120px', backgroundColor: '#eaeaea' }}>
          <TableRow>
            {columns.map((column, index) => (
              <TableCell
                key={index}
                sx={{ fontWeight: 'bold', minWidth: '100px' }}
              >
                {column}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              {row.map((cell, cellIndex) => (
                <TableCell key={cellIndex}>{cell}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
