import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./routes/MainLayout";
import Blog from "./components/Blog";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddBlog from "./components/AddBlog";
import UpdateBlog from "./components/UpdateBlog";
import User from "./components/User";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Blog />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "add-blog",
        element: <AddBlog />,
      },
      {
        path: "/update/:id",
        element: <UpdateBlog />,
      },
      {
        path:"/users",
        element:<User/>
      }
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
