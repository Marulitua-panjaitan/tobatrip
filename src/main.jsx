// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Cukup panggil App saja, jangan bungkus Router di sini */}
    <App />
  </React.StrictMode>,
)