import React, { lazy, Suspense } from "react";
import { createBrowserRouter, Form, RouterProvider } from "react-router-dom";
import MainLayout from "./routes/MainLayout";
import Error from "./components/Error";
import Service from "./components/Service";
import Product from "./components/Product";
import Form from "./components/Form";
import Loading from "./components/Loading";

const App = () => {
  const Home = lazy(() => import("./components/Home"));

  const About = lazy(() => import("./components/About"));

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "service",
          element: <Service />,
        },
        {
          path: "product",
          element: <Product />,
        },
        {
          path: "auth",
          element: <Form />,
        },
      ],
    },
  ]);
  return (
    <>
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
};

export default App;
