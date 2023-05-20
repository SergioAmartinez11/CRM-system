import React, { useEffect } from 'react'
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts } from '../../redux/productsSlice'
import { toggleProductModal } from '../../redux/common'
import SettingsIcon from '@mui/icons-material/Settings'
import { EditProductModal } from './Modal'

export const TableProducts = () => {
  const dispatch = useDispatch()
  const { productList } = useSelector((state) => state.product)
  let rows = []

  const columns = [
    'id:',
    'item_name',
    'description',
    'quantity',
    'provider',
    'price',
  ]

  productList?.forEach((e) => {
    rows.push([
      e.id,
      e.item_name,
      e.description,
      e.quantity,
      e.provider,
      e.price,
    ])
  })

  const handleEditClick = (index) => {
    dispatch(toggleProductModal({ open: true, data: rows[index] }))
  }

  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [dispatch])

  return (
    <>
      <Box boxShadow={3} borderRadius={'5px'}>
        <TableContainer
          style={{
            overflowX: 'scroll',
            backgroundColor: '#fff',
            borderRadius: '5px',
            padding: '1rem',
            width: '70vw',
            minHeight: '30vh',
          }}
        >
          <Table>
            <TableHead style={{ backgroundColor: '#eaeaea' }}>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>{'Edit'}</TableCell>
                {columns.map((column, index) => (
                  <TableCell
                    key={index}
                    sx={{ fontWeight: 'bold', minWidth: '60px' }}
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
      </Box>
      <EditProductModal />
    </>
  )
}
