import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./routes/MainLayout";
import Error from "./ui/Error";




import Loading from "./ui/Loading";
import { getAllStudents} from "./api/studentFetch"

import StudentForm from "./components/StudentForm";

const Student = lazy(()=>import("./components/Student"))

// const BASURL = import.meta.env.VITE_BASE_URL;

// console.log("baseurl", BASURL); 

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
         {
          path: "add",
          element: <StudentForm />
        },
        {
          path:"/edit/:id",
          element:<StudentForm />
        }
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
