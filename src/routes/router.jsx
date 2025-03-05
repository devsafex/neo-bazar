import { createBrowserRouter, Navigate } from "react-router-dom";
import Dashboard from "../Layouts/Dashboard";
import Main from "../Layouts/Main";
import BecomeSeller from "../Pages/BecomeSeller/BecomeSeller";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import Products from "../Pages/Products/Products";
import SignUp from "../Pages/SignUp/SignUp";

import DashboardHome from "../Pages/Dashboard/DashboardHome/DashboardHome";
import DashboardProducts from "../Pages/Dashboard/DashboardProducts/DashboardProducts";
import Help from "../Pages/Help/Help";
import MyOrder from "../Pages/MyOrder/MyOrder";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/my-order",
        element: <MyOrder />,
      },
      {
        path: "become-seller",
        element: <BecomeSeller />,
      },
      {
        path: "help",
        element: <Help />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <Navigate to="/dashboard/dashboard-home" replace />,
      },
      {
        path: "/dashboard/dashboard-home",
        element: <DashboardHome />,
      },
      {
        path: "/dashboard/products",
        element: <DashboardProducts />,
      },
    ],
  },
]);

export default router;
