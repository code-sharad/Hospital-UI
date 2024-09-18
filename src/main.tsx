import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginForm from "./views/Login/Login.tsx";
import { SignUpForm } from "./views/Signup/Signup.tsx";
import Inventory from "./views/inventory-dashboard/inventory-dashboard.tsx";
import OPDDashboard from "./views/opd-dashboard/opd-dashboard.tsx";
import AdminPage from "./views/admin/admin-page.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/inventory",
    element: <Inventory />,
  },
  {
    path: "/opd",
    element: <OPDDashboard />,
  },
  {
    path: "/admin",
    element: <AdminPage />,
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/signup",
    element: <SignUpForm />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
