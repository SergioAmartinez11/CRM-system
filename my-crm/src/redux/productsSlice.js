import { createSlice } from '@reduxjs/toolkit'
import { getProducts } from '../utils/api/product'

const initialState = {
  productList: [],
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    storeProductList: (state, action) => {
      const {newList} = action.payload;
      state.productList = newList
    },
  },
})

export const { addProduct, storeProductList } = productSlice.actions

export const fetchAllProducts = () => async (dispatch) => {
  try {
    const list = await getProducts()
    let newList = list.reverse()
    dispatch(storeProductList({ newList }))
  } catch (error) {
    //dispatch(loginFailure(error.code))
    console.log(error)
  }
}

export default productSlice.reducer
