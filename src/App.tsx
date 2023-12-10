import { Login } from './pages/Login'
import { createBrowserRouter, RouterProvider, redirect } from 'react-router-dom'
import { User } from './pages/User'
import { Layout } from './components/Layout'
import { useAuthStore } from './store/useAuthStore'

const protectedLoader = () => {
  const isAuthenticated = useAuthStore.getState().isAuthenticated

  if (!isAuthenticated) {
    return redirect('/')
  }

  return null
}

const logout = () => {
  const setLogout = useAuthStore.getState().setLogout
  setLogout()
  return redirect('/')
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: 'user',
    element: <Layout />,
    children: [
      {
        path: '',
        loader: protectedLoader,
        element: <User />,
      },
    ],
  },
  {
    path: '/logout',
    loader: logout,
  },
])

export const App = () => {
  return (
    <RouterProvider
      router={router}
      fallbackElement={<img src="assets/logo.svg" alt="logo" />}
    />
  )
}
