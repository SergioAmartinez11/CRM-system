import axios from 'axios'

const baseURL = 'http://localhost:3001'

export const createProduct = (data) => {
  return axios
    .post(`${baseURL}/product/new`, {
      id: data.id,
      item_name: data.item_name,
      description: data.description,
      price: data.price,
      quantity: data.quantity,
      provider: data.provider,
    })
    .then((response) => {
      return response.data
    })
}

export const getProducts = () => {
  return axios.get(`${baseURL}/product`, {}).then((response) => {
    return response.data
  })
}

export const editProduct = (data) => {
  return axios
    .put(`${baseURL}/product/update/${data.id}`, {
      id: data.id,
      item_name: data.item_name,
      description: data.description,
      price: data.price,
      quantity: data.quantity,
      provider: data.provider,
    })
    .then((response) => {})
}

export const deleteProduct = (id) => {
  return axios
    .delete(`${baseURL}/product/delete/${id}`)
    .then((response) => {
      console.log(`Producto ${id} eliminado con éxito`)
      // Realiza alguna acción adicional si es necesario
      return response.data // Puedes devolver los datos de la respuesta si es necesario
    })
    .catch((error) => {
      console.error('Error al eliminar producto:', error)
      throw error // Puedes lanzar el error si quieres manejarlo en el código que llama a esta función
    })
}
