import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './pages/Layouts/MainLayout/App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import PhoneList from './pages/Phone'
import Home from './pages/Home/Home.tsx'
import AuthLayout from './pages/Layouts/AuthLayout/index.tsx'
import RegisterScreen from './pages/dashboard/user/auth/login/register/index.tsx'


const router = createBrowserRouter([
  {
    path: '/auth',
    element: <AuthLayout/>,
    children:[
      {
        path: '/auth/login',
        element: <AuthLayout/>,
        children:[
          {
            path:'/auth/login/register',
            element: <RegisterScreen />
          }
        ]
      }
    ]
  },
  {
    path: '/',
    element: <Layout />,
    children:[
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/d',
        element: <div>Hi</div>
      },
      {
        path:'/phone',
        element: <PhoneList />
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)