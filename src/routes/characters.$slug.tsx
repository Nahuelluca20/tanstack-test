import { FileRoute, useParams } from "@tanstack/react-router";

export const Route = new FileRoute("/characters_/$id").createRoute({
  component: SingleCharacter,
});

export default function SingleCharacter() {
  const { id } = useParams({ strict: false });
  return (
    <div>
      <h1>Post dasd {id}</h1>
    </div>
  );
}
