import { Link, Outlet, RootRoute } from "@tanstack/react-router";

export const Route = new RootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <main className="w-screen">
      <div className="p-2 flex gap-2 text-lg">
        <Link
          to="/"
          activeProps={{
            className: "font-bold",
          }}
          activeOptions={{ exact: true }}
        >
          Home
        </Link>{" "}
        <Link
          to={"/characters"}
          activeProps={{
            className: "font-bold",
          }}
        >
          characters
        </Link>
      </div>
      <hr />
      <div className="px-5 py-5 md:mx-20 md:py-20">
        <Outlet />
      </div>
    </main>
  );
}
