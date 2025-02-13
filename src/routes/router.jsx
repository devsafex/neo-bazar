import { createBrowserRouter, Navigate } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
<<<<<<< HEAD
import BecomeSeller from "../Pages/BecomeSeller/BecomeSeller";
import Dashboard from "../Layouts/Dashboard";
import DashboardHome from "../Pages/Dashboard/DashboardHome/DashboardHome";
=======
import Dashboard from "../Layouts/Dashboard";
import BecomeSeller from "../Pages/BecomeSeller/BecomeSeller";
>>>>>>> c170e7303305d536823953f48c45d0c099c50ff2
import DashboardProducts from "../Pages/Dashboard/DashboardProducts/DashboardProducts";
import DashboardHome from "../Pages/Dashboard/DashboardHome/DashboardHome";

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
      
    ],
  },

  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
<<<<<<< HEAD
            path:'/dashboard',
            element: <Dashboard />,
            children:[
                  {
                        path:'/dashboard',
                        element : <Navigate to="/dashboard/dashboard-home" replace/>
                  },
                  {
                        path:'/dashboard/dashboard-home',
                        element:<DashboardHome />
                  },
                  {
                        path:'/dashboard/products',
                        element: <DashboardProducts />
                  }
            ]
      }
])
=======
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
>>>>>>> c170e7303305d536823953f48c45d0c099c50ff2

export default router;
