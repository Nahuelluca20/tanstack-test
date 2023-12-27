import { FileRoute, useParams } from "@tanstack/react-router";

export const Route = new FileRoute("/characters_/$slug").createRoute({
  component: SingleCharacter,
});

export default function SingleCharacter() {
  const { slug } = useParams({ strict: false });
  return (
    <div>
      <h1>Post dasd {slug}</h1>
    </div>
  );
}
