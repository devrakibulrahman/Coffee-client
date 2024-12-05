import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router/Router'
import './index.css'
import { CardProvider } from './contexts/CardProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CardProvider>
      <RouterProvider router={router}></RouterProvider>
    </CardProvider>
  </StrictMode>
);