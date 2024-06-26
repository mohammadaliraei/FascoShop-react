import React from "react";
import Home from "./componenets/pages/home";
import Shop from "./componenets/pages/Shop";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Product from "./componenets/pages/product";
import About from "./componenets/pages/About";
import SignIn from "./componenets/pages/SignIn";
import Dashboard from "./componenets/pages/Dashboard";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/shop", element: <Shop /> },
  { path: "/product", element: <Product /> },
  { path: "/about", element: <About /> },
  { path: "/signin", element: <SignIn /> },
  { path: "/dashboard", element: <Dashboard /> },
]);

const App: React.FC = () => {
  return (
    <div className="flex w-full justify-center items-center px-20 py-14 ">
      <div className="flex max-w-7xl">
        <RouterProvider router={router} />
      </div>
    </div>
  );
};

export default App;
