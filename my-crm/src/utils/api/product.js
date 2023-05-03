import axios, { formToJSON } from 'axios'


const baseURL = 'http://localhost:3001'


export const createProduct = (data) => {
  return axios
    .post(`${baseURL}/product/new`, {
      name: data.name,
      description: data.description,
      price: data.price,
      category: data.category,
      provider: data.provider,
      address: data.address,
      email: data.email,
      phone: data.phone,
    })
    .then((response) => {
      return response.data
    })
}