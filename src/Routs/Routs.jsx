import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import MainLayout from "../Layouts/MainLayout";
import Favorite from "../Pages/Favorite";
import About from "../Pages/About";
import PhoneDetails from "../Pages/PhoneDetails";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
    {
      path: '/',
      Component: MainLayout,
      errorElement: <ErrorPage/>,
      children: [
        {
            path: '/',
            element: <Home></Home> ,
            hydrateFallbackElement: <p>Loading.......</p>,
            loader:() => fetch('../phones.json')
        },
        {
          path: '/favorite',
          element: <Favorite></Favorite> ,
        },
        {
          path: '/about',
          element: <About/>
        },
        {
          path : '/phone-details/:id',
          element: <PhoneDetails/>,
          loader:() => fetch('../phones.json')
        }
      ]
    },
  ])

export default router ;