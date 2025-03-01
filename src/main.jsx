import React from 'react'
import ReactDOM from 'react-dom/client'
import { createContext } from 'react'
import {createBrowserRouter, redirect, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import NotFoundPage from './NotFoundPage.jsx'

const dataContext = createContext([])
export default dataContext

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />
      //loader: () => redirect("/sign-up")
    },
    {
      path: '*',
      element: <NotFoundPage />
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <dataContext.Provider value={[]}>
    <RouterProvider router={router} />
  </dataContext.Provider>
)