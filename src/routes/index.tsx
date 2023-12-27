import { FileRoute } from "@tanstack/react-router";

export const Route = new FileRoute("/").createRoute({
  component: Index,
});

export default function Index() {
  return (
    <div>
      <h1>index</h1>
    </div>
  );
}
