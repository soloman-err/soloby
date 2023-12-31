import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Layout/Root";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import AddAToy from "../Pages/AddAToy/AddAToy";
import Blog from "../Pages/Blog/Blog";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Error from "../Layout/Error";
import PrivateRoute from "./PrivateRoute";
import ToyDetails from "../Pages/AllToys/ToyDetails";
import UpdateToy from "../Pages/MyToys/UpdateToy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://soloby.vercel.app/cars"),
      },
      {
        path: "allToys",
        element: <AllToys></AllToys>,
      },
      {
        path: "/toyDetails/:id",
        element: (
          <PrivateRoute>
            <ToyDetails></ToyDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://soloby.vercel.app/toyDetails/${params.id}`),
      },
      {
        path: "myToys",
        element: <MyToys></MyToys>,
        // loader: () => fetch(`https://soloby.vercel.app/myToys?email=${user.email}`),
      },
      {
        path: "updateToy/:id",
        element: <UpdateToy></UpdateToy>,
        loader: ({ params }) =>
          fetch(`https://soloby.vercel.app/toyDetails/${params.id}`),
      },
      {
        path: "addAToy",
        element: <AddAToy></AddAToy>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
    children: [
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);

export default router;
