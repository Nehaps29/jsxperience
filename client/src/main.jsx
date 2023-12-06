import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'

import App from './App.jsx';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Signup from './pages/Signup';
import Login from './pages/Login';
import SingleThought from './pages/SingleThought';
import Profile from './pages/Profile';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/login',
        element: <Login />
      }, {
        path: '/signup',
        element: <Signup />
      }, {
        path: '/profiles/:username',
        element: <Profile />
      }, {
        path: '/me',
        element: <Profile />
      }, {
        path: '/thoughts/:thoughtId',
        element: <SingleThought />
      }, {
        path: '/blog',
        element: <Blog />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
  <RouterProvider router={router} />
  </ChakraProvider>
)
