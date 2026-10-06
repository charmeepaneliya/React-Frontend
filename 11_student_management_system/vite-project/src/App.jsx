import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./routes/MainLayout";

import Loading from "./ui/Loading";

const Student = lazy(()=>import("./components/Student"))

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement:<Error/>,
      children: [
        {
          index: true,
          element: <Student />,
        },
      ],
    },
  ]);
  return (
    <>
      
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router}></RouterProvider>
      </Suspense>
    </>
  );
};

export default App;
