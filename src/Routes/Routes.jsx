import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Blog from "../Blog/Blog";
import ErrorPage from "../Error/ErrorPage";
import Login from "../Login/Login";
import Register from "../Register/Register";
import AllToys from "../AllToys/AllToys";
import AddToys from "../AddToys/AddToys";
import ToyDetails from "../AllToys/ToyDetails";
import MyToy from "../MyToy/MyToy";
import PrivateRoutes from "./PrivateRoutes";

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
    {
      path:'/login',
      element:<Login></Login>
    },
    {
      path:'/register',
      element:<Register></Register>
    },
    {
      path:'/allToys',
      element:<AllToys></AllToys>,
      loader:()=>fetch('http://localhost:5000/toys')
    },
    {
      path:'/details/:id',
      element:<ToyDetails></ToyDetails>,
      loader:({params})=>fetch(`http://localhost:5000/toys/${params.id}`)
    },
    {
      path:'/addToys',
      element:<AddToys></AddToys>
    },
    {
      path:'/myToy',
      element:<PrivateRoutes><MyToy></MyToy></PrivateRoutes>
    }
  ]);

  export default router;