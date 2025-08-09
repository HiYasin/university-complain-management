import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from './components/theme-provider'
import { RouterProvider } from 'react-router'
import router from './routes/routes'
import AuthProvider from './providers/AuthProvider'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AuthProvider>
        <Provider store={store}>
          <RouterProvider router={router} />
          <ToastContainer />
        </Provider>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
)
