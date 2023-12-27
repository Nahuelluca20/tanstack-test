import { Outlet, RootRoute } from "@tanstack/react-router";
import Header from "../components/header";

export const Route = new RootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <main className="w-screen">
      <Header />
      <hr />
      <div className="container px-4 md:px-6">
        <Outlet />
      </div>
    </main>
  );
}
