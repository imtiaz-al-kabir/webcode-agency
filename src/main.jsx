import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import App from "./App.jsx";
import Login from "./components/Login/Login.jsx";
import PageNotFound from "./components/PageNotFound.jsx";
import Register from "./components/Register/Register.jsx";
import "./index.css";
import Blogs from "./pages/Blogs/Blogs.jsx";
import Home from "./pages/Home/Home.jsx";
import Pricing from "./pages/Home/Pricing.jsx";
import Services from "./pages/Services/Services.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: "service", Component: Services },
      { path: "blogs", Component: Blogs },
      { path: "pricing", Component: Pricing },
    ],
  },

  { path: "*", Component: PageNotFound },
  { path: "/login", Component: Login },
  { path: "/register", Component: Register },

  // <Route path="*" element=<PageNotFound /> />,
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
