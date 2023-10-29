import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";
import { store } from "./store/cartStore";
import { Provider } from "react-redux";

const router = createBrowserRouter(routes);
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
    <App />
  </Provider>
);
