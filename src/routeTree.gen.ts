import { Route as rootRoute } from "./routes/__root";
import { Route as CharactersRoute } from "./routes/characters.index";
import { Route as IndexRoute } from "./routes/index";
import { Route as CharactersSlugRoute } from "./routes/characters.$slug";

declare module "@tanstack/react-router" {
  interface FileRoutesByPath {
    "/": {
      parentRoute: typeof rootRoute;
    };
    "/characters": {
      parentRoute: typeof rootRoute;
    };
    "/characters_/$slug": {
      parentRoute: typeof rootRoute;
    };
  }
}

Object.assign(IndexRoute.options, {
  path: "/",
  getParentRoute: () => rootRoute,
});

Object.assign(CharactersRoute.options, {
  path: "/characters",
  getParentRoute: () => rootRoute,
});

Object.assign(CharactersSlugRoute.options, {
  path: "/characters/$slug",
  getParentRoute: () => rootRoute,
});

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  CharactersRoute,
  CharactersSlugRoute,
]);
