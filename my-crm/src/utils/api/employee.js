import axios, { formToJSON } from 'axios'
import { useDispatch } from 'react-redux';
import { updateEmployees } from '../../redux/employeeSlice';

const baseURL = 'http://localhost:3001'


export const createEmploye = (data) => {
  return axios
    .post(`${baseURL}/employee/sign-up`, {
      name: data.name,
      lastname: data.lastname,
      phone: data.phone,
      email: data.email,
      position: data.position,
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
  const id = formToJSON(name);
  return axios.delete(`${baseURL}/employee/${name}`, {}).then((response) => {
    return response.data
  })
}
