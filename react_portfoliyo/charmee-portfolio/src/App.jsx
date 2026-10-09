
import { lazy, Suspense } from 'react';
import {createBrowserRouter,RouterProvider} from "react-router-dom";

import MainLayout from "./routes/MainLayout";
import Loading from "./components/Loading";
import ErrorPage from "./components/Error";

const Home = lazy(()=>import("./pages/Home"));
const About = lazy(()=>import("./pages/About"));
const Skills = lazy(()=>import("./pages/Skills"));
const Projects = lazy(()=>import("./pages/Projects"));
const Experience = lazy(()=>import("./pages/Experience"));
const Testimonials = lazy(()=>import("./pages/Testimonials"));
const Contact = lazy(()=>import("./pages/Contact"));


const ProjectDetails = lazy(()=>import("./pages/ProjectDetails.jsx"))

const App = () => {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<MainLayout/>,
      errorElement:<ErrorPage/>,

      children:[
        {
          index:true,
          element:<Home/>
        },
        {
          path:"about",
          element:<About/>
        },
        {
          path:"skills",
          element:<Skills/>
        },
        {
          path:"projects",
          element:<Projects/>
        },
        {
          path:"projects/:id",
          element:<ProjectDetails/>
        },
        {
          path:"experience",
          element:<Experience/>
        },
        {
          path:"testimonials",
          element:<Testimonials/>
        },
        {
          path:"contact",
          element:<Contact/>
        },
        {
          path:"*",
          element:<ErrorPage/>
        }
      ]
    }
  ])
  return (
    <Suspense fallback={<Loading/>}>  
      <RouterProvider router={router}/>
    </Suspense>
  )
}

export default App
