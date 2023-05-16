import React, { useEffect, useState } from 'react'
import Provider from '../products/Provider'
import Product from '../products/Product'
import { DeleteEmployee } from '../employees/DeleteEmployee'
import { EmployeeForm } from '../employees/EmployeeForm'
import { useSelector } from 'react-redux'
import { fetchAllEmployees } from '../../redux/employeeSlice'

export const Wrapper = () => {
  const [selectedOption, setselectedOption] = useState('')
  const option = useSelector((state) => state.common.dashboardSelect)

  useEffect(() => {
    setselectedOption(option)
    fetchAllEmployees()
  }, [option, dispatchEvent])

  let component
  switch (selectedOption) {
    case 'Agregar producto':
      component = <Product />
      break
    case 'Tabla de empleados':
      component = <Provider />
      break
    case 'Agregar empleado':
      component = <EmployeeForm />
      break
    case 'Inventario':
      component = <h1>esto es inventario</h1>
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
