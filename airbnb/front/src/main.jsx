import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Accommodation from './accommodation'
import App from './App'
import './style/style.css'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/:id/accommodation",
    element: <Accommodation />
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
