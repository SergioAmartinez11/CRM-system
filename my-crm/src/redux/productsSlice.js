import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: '',
  description: '',
  category: '',
  price: '',
  provider: '',
  address: '',
  email: '',
  phone: '',
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const { name, description, category, price } = action.payload
      state.name = name
      state.description = description
      state.category = category
      state.price = price
    },
    addProvider: (state, action) => {
      const { provider, address, email, phone } = action.payload
      state.provider = provider;
      state.address = address;
      state.email = email;
      state.phone = phone;
    },
  },
})

export const { addProduct } = productSlice.actions
export const {addProvider} = productSlice.actions
export default productSlice.reducer
