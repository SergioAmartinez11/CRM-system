import axios, { formToJSON } from 'axios'
import { useDispatch } from 'react-redux'
import { updateEmployees } from '../../redux/employeeSlice'

const baseURL = 'http://localhost:3001'

export const createEmploye = (data) => {
  return axios
    .post(`${baseURL}/employee/sign-up`, {
      id: data.id,
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      phone_number: data.phone_number,
      address: data.address,
      city: data.city,
      state: data.state,
      postal_code: data.postal_code,
      country: data.country,
      role: data.role,
      birthday: data.birthday,
    })
    .then((response) => {
      return response.data
    })
}

export const getAllEmployees = () => {
  return axios.get(`${baseURL}/employee`, {}).then((response) => {
    return response.data
  })
}

export const deleteEmployeeById = (name) => {
  const id = formToJSON(name)
  return axios.delete(`${baseURL}/employee/${name}`, {}).then((response) => {
    return response.data
  })
}
