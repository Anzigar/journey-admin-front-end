// import logo from './logo.svg';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

//pages
import Admin from './pages/Admin/Admin';
import AppMain from './AppMain';
import Home from './pages/home/Home'
import Logs from './pages/log/Logs'

const router = createBrowserRouter([
  {
    path : '/',
    element: <AppMain />,

    children: [
      {
        path: '/',
        element:<Logs />
      },
      {
        path: '/admin',
        element:<Admin />
      },
      {
        path:'/home',
        element:<Home />
      },

    ],
  },
])

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
