import { FileRoute, Link } from "@tanstack/react-router";

export const Route = new FileRoute("/characters").createRoute({
  component: CharactersRoute,
});

export default function CharactersRoute() {
  return (
    <div>
      <h1>Characters</h1>
      <Link
        to="/characters/$slug"
        params={{
          slug: "dsqadsa",
        }}
      >
        Post 123
      </Link>
    </div>
  );
}
