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
import ToyUpdate from "../Update/ToyUpdate";

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
      loader:()=>fetch('https://assignment-11-server-leviathans11.vercel.app/toys')
    },
    {
      path:'/details/:id',
      element:<PrivateRoutes><ToyDetails></ToyDetails></PrivateRoutes>,
      loader:({params})=>fetch(`https://assignment-11-server-leviathans11.vercel.app/toys/${params.id}`)
    },
    {
      path:'/addToys',
      element:<PrivateRoutes><AddToys></AddToys></PrivateRoutes>
    },
    {
      path:'/myToy',
      element:<PrivateRoutes><MyToy></MyToy></PrivateRoutes>
    },
    {
      path:'/update/:id',
      element:<ToyUpdate></ToyUpdate>,
      loader:({params})=>fetch(`https://assignment-11-server-leviathans11.vercel.app/toys/${params.id}`)
    }
  ]);

  export default router;