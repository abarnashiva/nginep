import { Outlet, createBrowserRouter } from "react-router-dom";
import HomePage from "./menu/home/page";
import UnderDevelopment from "./menu/UnderDevelopment";

export const router = createBrowserRouter([
  {
    path: "/",
    handle: { title: "Home Page" },
    element: <Outlet />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        handle: { title: "home" },
      },
      {
        path: "/about",
        element: <UnderDevelopment />,
        handle: { title: "about" },
      },
      {
        path: "/service",
        element: <UnderDevelopment />,
        handle: { title: "service" },
      },
      {
        path: "/destination",
        element: <UnderDevelopment />,
        handle: { title: "destination" },
      },
      {
        path: "/customer",
        element: <UnderDevelopment />,
        handle: { title: "customer" },
      },
      {
        path: "/booking",
        element: <UnderDevelopment />,
        handle: { title: "booking" },
      },
    ],
  },
]);