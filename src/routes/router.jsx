import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";

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
                     path:'/product/:id' ,
                     element: <ProductDetails/>    
                  },
                  {
                        path: '/login',
                        element: <Login></Login>
                  },
                  {
                        path: '/signup',
                        element: <SignUp></SignUp>
                  },
                 
            ]
      }
])

export default router;