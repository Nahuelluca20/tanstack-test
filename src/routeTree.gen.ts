import { Route as rootRoute } from "./routes/__root";
import { Route as CharactersRoute } from "./routes/characters.index";
import { Route as IndexRoute } from "./routes/index";
import { Route as CharactersSlugRoute } from "./routes/characters.$slug";
import { Route as SearchRoute } from "./routes/search.index";

declare module "@tanstack/react-router" {
  interface FileRoutesByPath {
    "/": {
      parentRoute: typeof rootRoute;
    };
    "/characters": {
      parentRoute: typeof rootRoute;
    };
    "/characters_/$id": {
      parentRoute: typeof rootRoute;
    };
    "/search": {
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
  path: "/characters/$id",
  getParentRoute: () => rootRoute,
});

Object.assign(SearchRoute.options, {
  path: "/search",
  getParentRoute: () => rootRoute,
});

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  CharactersRoute,
  CharactersSlugRoute,
  SearchRoute,
]);
