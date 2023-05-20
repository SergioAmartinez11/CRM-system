import axios from 'axios'


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

export const editEmployees = (data) => {
  console.log('editando', data);
  return axios
    .put(`${baseURL}/employee/update/${data.id}`, {
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
    .then((response) => {})
}

export const deleteEmployees = (id) => {
  console.log('eliminando',id);
  return axios
    .delete(`${baseURL}/employee/delete/${id}`)
    .then((response) => {
      console.log(`Employees ${id} eliminado con éxito`)
      // Realiza alguna acción adicional si es necesario
      return response.data // Puedes devolver los datos de la respuesta si es necesario
    })
    .catch((error) => {
      console.error('Error al eliminar Employees:', error)
      throw error // Puedes lanzar el error si quieres manejarlo en el código que llama a esta función
    })
}
