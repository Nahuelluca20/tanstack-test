import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Router, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

const router = new Router({
  routeTree,
  defaultPreload: "intent",
});

// Register things for typesafety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
