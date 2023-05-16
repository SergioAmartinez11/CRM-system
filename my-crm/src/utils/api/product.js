import axios, { formToJSON } from 'axios'

const baseURL = 'http://localhost:3001'

export const createProduct = (data) => {
  return axios
    .post(`${baseURL}/product/new`, {
      sku: data.sku,
      item_name: data.item_name,
      description: data.description,
      price: data.price,
      quantity: data.quantity,
      created_by: data.created_by,
    })
    .then((response) => {
      return response.data
    })
}
