import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@emotion/react';
import theme from './utils/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
    
  </Provider>
);
