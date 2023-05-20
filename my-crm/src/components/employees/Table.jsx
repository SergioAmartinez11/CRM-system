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
import SettingsIcon from '@mui/icons-material/Settings'
import { toggleEmployeeModal } from '../../redux/common'
import { EditEmployeesModal } from './Modal'

export const EmployeesTable = () => {
  const dispatch = useDispatch()
  const { employees } = useSelector((state) => state.employee)
  let rows = []

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
  })

  useEffect(() => {
    dispatch(fetchAllEmployees())
  }, [dispatch])

  const handleEditClick = (index) => {
    dispatch(toggleEmployeeModal({ open: true, data: rows[index] }))
  }

  return (
    <>
      <TableContainer
        style={{
          overflowX: 'scroll',
          backgroundColor: '#fff',
          borderRadius: '5px',
          padding: '1rem',
          width: '70vw',
          boxShadow: 3,
        }}
      >
        <Table style={{ tableLayout: 'auto', minHeight: '50vh' }}>
          <TableHead style={{ minWidth: '120px', backgroundColor: '#eaeaea' }}>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>{'Edit'}</TableCell>
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
                <TableCell onClick={() => handleEditClick(index)}>
                  <SettingsIcon />
                </TableCell>
                {row.map((cell, cellIndex) => (
                  <TableCell key={cellIndex}>{cell}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <EditEmployeesModal />
    </>
  )
}
