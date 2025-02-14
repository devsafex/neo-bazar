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

>>>>>>> d081070fbad16be023e6b53f0cc86d47be002ff3
import DashboardProducts from "../Pages/Dashboard/DashboardProducts/DashboardProducts";

const router = createBrowserRouter([
      {
            path: '/' ,
            element: <Main></Main> ,
            children : [
                  {
                        path:'/' ,
                        element: <Home/>
                  },
                  {
                        path:'/products' ,
                        element: <Products/>
                  },
                  {
                        path:'/become-seller' ,
                        element: <BecomeSeller />
                  },
                  {
                     path:'/product/:id' ,
                     element: <ProductDetails/>    
                  },
                  {
                        path: '/login',
                        element: <Login />
                  },
                  {
                        path: '/signup',
                        element: <SignUp />
                  },
                 
            ]
      },
      {
<<<<<<< HEAD
            path:'/dashboard',
            element: <Dashboard/>,
            children:[
                  {
                        path:'/dashboard',
                        element : <Navigate to="/dashboard/dashboard-home" replace/>
                  },
                  {
                        path:'/dashboard/dashboard-home',
                        element:<DashboardHome/>
                  },
                  {
                        path:'/dashboard/products',
                        element: <DashboardProducts/>
                  }
            ]
      }
])
=======
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
      
      }
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
>>>>>>> d081070fbad16be023e6b53f0cc86d47be002ff3

export default router;