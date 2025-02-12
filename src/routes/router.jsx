import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
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
                        path:'product/:id',
                        element: <ProductDetails/>
                  }
            ]
      }
])

export default router;