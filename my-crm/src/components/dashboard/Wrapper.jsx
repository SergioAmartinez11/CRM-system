import React, { useEffect, useState } from 'react'
import { ProductWrapper } from '../products/ProductWrapper'
import { useSelector } from 'react-redux'
import { EmployeeWrapper } from '../employees/EmployeeWrapper'
import { EmployeesTable } from '../employees/Table'
import { TableProducts } from '../products/Table'

export const Wrapper = () => {
  const [selectedOption, setselectedOption] = useState('')
  const option = useSelector((state) => state.common.dashboardSelect)

  useEffect(() => {
    setselectedOption(option)
  }, [option])

  let component
  switch (selectedOption) {
    case 'Agregar producto':
      component = <ProductWrapper />
      break
    case 'Tabla de empleados':
      component = <EmployeesTable />
      break
    case 'Agregar empleado':
      component = <EmployeeWrapper />
      break
    case 'Tabla de inventario':
      component = <TableProducts />
      break
    case 'Agregar cliente':
      component = <h1>Agregar cliente</h1>
      break
    case 'Tabla de clientes':
      component = <h1>esto es tabla de clientes</h1>
      break
    default:
      component = null
  }

  return <div>{component}</div>
}
