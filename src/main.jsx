import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import ErrorPage from "./Components/Errorpage/ErrorPage.jsx";
import Login from "./Components/Login/Login.jsx";
import Register from "./Components/Register/Register.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import AddNewCampaign from "./Components/AddNewCampaign/AddNewCampaign.jsx";
import AllCampaigns from "./Components/AllCampaigns/AllCampaigns.jsx";
import Details from "./Components/Details/Details.jsx";
import MyCampaigns from "./Components/MyCampaigns/MyCampaigns.jsx";
import UpdateCampaign from "./Components/UpdateCampaign/UpdateCampaign.jsx";
import MyDonations from "./Components/MyDonations/MyDonations.jsx";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addNewCampaign",
        element: (
          <PrivateRoute>
            <AddNewCampaign></AddNewCampaign>
          </PrivateRoute>
        ),
      },
      {
        path: "/allCampaigns",
        element: <AllCampaigns></AllCampaigns>,
        loader: () => fetch("https://b10-a10-server-side-96mdjanealam.vercel.app/allCampaigns"),
      },
      {
        path: "/allCampaigns/campaignDetails/:id",
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: () => fetch("https://b10-a10-server-side-96mdjanealam.vercel.app/allCampaigns"),
      },
      {
        path: "/myCampaigns",
        element: (
          <PrivateRoute>
            <MyCampaigns></MyCampaigns>
          </PrivateRoute>
        ),
        loader: () => fetch("https://b10-a10-server-side-96mdjanealam.vercel.app/allCampaigns"),
      },
      {
        path: "/updateCampaign/:id",
        element: <PrivateRoute><UpdateCampaign></UpdateCampaign></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`https://b10-a10-server-side-96mdjanealam.vercel.app/campaign/${params.id}`),
      },
      {
        path: "/myDonations",
        element: (
          <PrivateRoute>
            <MyDonations></MyDonations>
          </PrivateRoute>
        ),
        loader: () => fetch("https://b10-a10-server-side-96mdjanealam.vercel.app/allCampaigns"),
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
