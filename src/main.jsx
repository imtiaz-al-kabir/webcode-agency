import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import App from "./App.jsx";
import "./index.css";
import Home from "./pages/Home/Home.jsx";
import Services from "./pages/Services/Services.jsx";
import Blogs from "./pages/Blogs/Blogs.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      
      { index: true, Component: Home },
      { path:"service", Component: Services },
      { path:"blogs", Component: Blogs },


    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
