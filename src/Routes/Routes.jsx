import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Layout/Root";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import AddAToy from "../Pages/AddAToy/AddAToy";
import Blog from "../Pages/Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "allToys",
        element: <AllToys></AllToys>,
        loader: () => fetch("http://localhost:2000/cars"),
      },
      {
        path: "myToys",
        element: <MyToys></MyToys>,
      },
      {
        path: "addAToy",
        element: <AddAToy></AddAToy>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

export default router;
