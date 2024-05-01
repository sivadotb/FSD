import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppContextProvider } from "./AppContext";
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

function App() {
  return (
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  );
}

export default App;
