import Home from './pages/home/Home'
import Products from './pages/products/Products'
import Users from './pages/users/Users'
import Navbar from './pages/components/navbar/Navbar'
import Footer from './pages/components/footer/Footer'
import Menu from './pages/components/menu/Menu'
import Login from './pages/login/Login'
import './styles/global.scss'

import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";

function App() {

  const Layout = () => {
    return (
      <div className='main'>
          <Navbar/>
          <div className="container">
            <div className="menuContainer">
              <Menu/>
            </div>
            <div className="contentContainer">
              <Outlet/>
            </div>
          </div>
          <Footer/>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout/>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/products",
          element: <Products />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login/>,
    }
  ]);
  
  createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
  );
}

export default App
