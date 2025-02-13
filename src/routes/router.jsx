import { createBrowserRouter, Navigate } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import Dashboard from "../Layouts/Dashboard";
import BecomeSeller from "../Pages/BecomeSeller/BecomeSeller";
import DashboardProducts from "../Pages/Dashboard/DashboardProducts/DashboardProducts";
import DashboardHome from "../Pages/Dashboard/DashboardHome/DashboardHome";


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

export default router;