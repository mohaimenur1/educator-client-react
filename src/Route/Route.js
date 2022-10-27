import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Blog from "../page/Blog/Blog";
import CheckOut from "../page/CheckOut/CheckOut";
import Error from "../page/Error/Error";
import Faq from "../page/Faq/Faq";
import Home from "../page/Home/Home";
import Login from "../page/Login/Login";
import ProgramDetails from "../page/ProgramDetails/ProgramDetails";
import Programs from "../page/Programs/Programs";
import Register from "../page/Register/Register";
import PrivetRoute from "./PrivetRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => {
          return fetch("http://localhost:5000/programs");
        },
      },
      {
        path: "/programs",
        loader: async () => {
          return fetch("http://localhost:5000/programs");
        },
        element: <Programs />,
      },
      {
        path: "/programs/:pId",
        loader: async ({ params }) => {
          console.log(params);
          return fetch(`http://localhost:5000/programs/${params.pId}`);
        },
        element: <ProgramDetails />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/checkout/:cId",
        loader: async ({ params }) => {
          console.log(params);
          return fetch(`http://localhost:5000/programs/${params.cId}`);
        },
        element: (
          <PrivetRoute>
            <CheckOut />
          </PrivetRoute>
        ),
      },
      {
        path: "/blogs",
        element: <Blog />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);
