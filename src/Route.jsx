import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout";
import Home from "./Component/Home";
import MeetingRooms from "./Component/MeetingRooms";
import AboutUs from "./Component/AboutUs";
import ContactUs from "./Component/ContactUs";
import Login from "./Component/Login";

const Root = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/meeting-rooms",
        element: <MeetingRooms />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default Root;
