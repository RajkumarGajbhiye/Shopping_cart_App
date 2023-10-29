import Cart from "./pages/Cart";
import Dashboard from "./pages/Dashboard";

const routes = [
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
];

export default routes;
