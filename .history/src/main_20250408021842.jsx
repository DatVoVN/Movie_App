import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
const router = createBrowserRouter([
  {
    path: "",
    element: <HomePage/>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
