import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Blog from "../Blog/Blog";
import ErrorPage from "../Error/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        }
      ]
    },
    {
      path:'/blog',
      element:<Blog></Blog>
    },
  ]);

  export default router;