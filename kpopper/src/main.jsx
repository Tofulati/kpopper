import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./utils/layouts.jsx";
import Error from "./Pages/Error/Error.jsx";
import Home from "./Pages/Home/Home.jsx";
import Girl from "./Pages/Girl/Girl.jsx";
import Boy from "./Pages/Boy/Boy.jsx";
import Solo from "./Pages/Solo/Solo.jsx";
import Inquire from "./Pages/Inquire/Inquire.jsx";
import NMIXX from "./Pages/Girl/Groups/NMIXX.jsx";
import IU from "./Pages/Solo/Groups/IU.jsx";
import BTS from "./Pages/Boy/Groups/BTS.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: '/girl',
        element: <Girl />,
      },
      {
        path: '/boy',
        element: <Boy />,
      },
      {
        path: '/solo',
        element: <Solo />,
      },
      {
        path: '/inquire',
        element: <Inquire />,
      },
      {
        path: '/iu',
        element: <IU />,
      },
      {
        path: '/nmixx',
        element: <NMIXX />,
      },
      {
        path: '/bts',
        element: <BTS />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
