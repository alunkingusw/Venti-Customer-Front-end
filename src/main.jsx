import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AuthProvider from './providers/AuthProvider.jsx'
import ScrollToTop from 'react-scroll-to-top';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ScrollToTop smooth />
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
)
