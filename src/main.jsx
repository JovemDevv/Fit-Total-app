import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@emotion/react'
import Theme from './theme/index.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
