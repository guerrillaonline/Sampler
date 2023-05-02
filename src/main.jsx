import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App/App'
import './tailwind.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from '@material-tailwind/react'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);
