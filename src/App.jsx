import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./Pages/Home.jsx";
import Products from "./Pages/Products.jsx";
import Login from "./Pages/Login.jsx";
import ProductDetails from "./Pages/ProductDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "products",
        element: <Products />
      }, {
        path: "login",
        element: <Login />
      }, {
        path: "/details",
        element: <ProductDetails />
      }
    ]
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;