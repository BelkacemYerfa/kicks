import { createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import Products from "./routes/products";
import ProductDetails from "./routes/details-product";
import Layout from "./components/layouts/index";
import { products, product } from "./lib/fetch";
import Login from "./routes/login";

const getProducts = () => {
  return products();
};

const getProduct = ({ params }) => {
  const token = document.cookie.split("=")[1];
  if (!token) {
    window.location.href = "/login";
  }
  return product(params.id);
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/",
        loader: getProducts,
        element: <Home />,
      },
      {
        path: "products",
        loader: getProducts,
        element: <Products />,
      },
      {
        path: "products/:id",
        loader: getProduct,
        element: <ProductDetails />,
      },
    ],
  },
]);

export { router };
