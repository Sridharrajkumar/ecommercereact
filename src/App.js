import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import React from 'react';


import About from './Pages/About';
import RootLayout from './Pages/Root';
import Store from './Pages/Store';
import Home from './Pages/Home';



const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/',
        element: <Store />
      },
      {
        path: '/home',
        element: <Home />
      }
      
    ]
  },
])




function App() {
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  );
}

export default App;
