import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { useNavigate } from 'react-router'

const baseURL = 'http://localhost:3003'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    token: null,
    error: null,
  },
  reducers: {
    loginSuccess(state, action) {
      state.isAuthenticated = true
      state.token = action.payload.token
      state.error = null
    },
    loginFailure(state, action) {
      state.isAuthenticated = false
      state.token = null
      state.error = action.payload
    },
    logout(state) {
      state.isAuthenticated = false
      state.token = null
      state.error = null
    },
  },
})

export const { loginSuccess, loginFailure, logout } = authSlice.actions

// Función asincrónica para enviar las credenciales al servidor y autenticar al usuario
export const login = (username, password) => async (dispatch) => {
  try {
    const response = await axios.post(`${baseURL}/auth/login`, {
      username,
      password,
    })
    const { token } = response.data
    dispatch(loginSuccess({ token }))
  } catch (error) {
    dispatch(loginFailure(error.message))
  }
}

export default authSlice.reducer
