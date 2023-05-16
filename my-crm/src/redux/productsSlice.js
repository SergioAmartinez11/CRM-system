import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sku:'',
  item_name: '',
  description:'',
  quantity:'',
  price:'',
  created_by:'',
  
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const { sku, item_name, description, quantity, price, created_by } = action.payload
      
      
    },
    
  },
})

export const { addProduct } = productSlice.actions

export default productSlice.reducer
