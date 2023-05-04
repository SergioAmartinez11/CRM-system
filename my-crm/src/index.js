import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@emotion/react'
import { BrowserRouter } from 'react-router-dom'
import theme from './utils/theme'
import { PersistGate } from 'redux-persist/integration/react'
import {store, persistor} from './redux/middleware/config';



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}> 
        <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </ThemeProvider>
)
