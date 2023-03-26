import {
  BrowserRouter,
  createBrowserRouter,
  HashRouter,
  RouterProvider,
} from "react-router-dom";

import { ToastContainer } from "react-toastify";
import { Cart, Home, ProductDetails } from "./modules";
import Navbar from "./modules/Navbar/Navbar";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const baseUrl = process.env.REACT_APP_BASE_URL || "/";
  console.log(baseUrl);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/product/:id",
      element: <ProductDetails />,
    },
  ]);
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <Navbar />
      </BrowserRouter>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
