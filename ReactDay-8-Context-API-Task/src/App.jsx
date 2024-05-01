import { createContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import ProductsList from "./components/ProductsList";
import ProductView from "./components/ProductView";
import MyCart from "./components/MyCart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "your-cart",
    element: <MyCart />,
  },
  {
    path: "products-list",
    element: <ProductsList />,
    children: [
      {
        path: "product-view",
        element: <ProductView />,
      },
    ],
  },
]);

export const AppContext = createContext();

function getAppData() {
  return { storeName: "Tamil - Digital Store" };
}

function App() {
  return (
    <AppContext.provider value={{ getAppData }}>
      <RouterProvider router={router} />
    </AppContext.provider>
  );
}

export default App;
