import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "@tanstack/router";

import { router } from "./routes";

import "./globals.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
