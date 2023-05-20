import React, { useEffect } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts } from '../../redux/productsSlice'

export const RecentAddedProducts = () => {
  const dispatch = useDispatch()
  const { productList } = useSelector((state) => state.product)
  let rows = []
  let count = 0

  const columns = [
    'id:',
    'item_name',
    'description',
    'quantity',
    'provider',
    'price',
  ]

  productList?.forEach((e) => {
    if (count < 4) {
      count++
      rows.push([
        e.id,
        e.item_name,
        e.description,
        e.quantity,
        e.provider,
        e.price,
      ])
    }
  })

  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [dispatch])

  return (
    <TableContainer
      style={{
        overflowX: 'scroll',
        //backgroundColor: '#fff',
        //borderRadius: '5px',
        padding: '1rem',
        width: 'auto',
        minHeight: '30vh',
      }}
    >
      <Table>
        <TableHead style={{ backgroundColor: '#eaeaea' }}>
          <TableRow>
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
