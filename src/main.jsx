import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Login from './views/Login/Login.jsx';
import User from './views/User/User.jsx';
import Feed from './views/Feed/Feed.jsx';
import Register from './views/Register/Register.jsx';
import PostLIst from './views/Feed/PostLIst.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/user",
        element: <User />,
      },
      {
        path: "/feed/add",
        element: <Feed />,
      },
      {
        path: "/feed",
        element: <PostLIst />,
      },
      {
        path: "/register",
        element: <Register />,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
