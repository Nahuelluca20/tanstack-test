import { useQuery } from "@tanstack/react-query";
import { FileRoute, useParams } from "@tanstack/react-router";
import { fetchPokemon } from "../api/api";
import SinglePokemonCard from "../components/slngle-pokemon-card";

export const Route = new FileRoute("/characters_/$id").createRoute({
  component: SingleCharacter,
});

export default function SingleCharacter() {
  const { id } = useParams({ strict: false });
  const { isPending, data } = useQuery({
    queryKey: ["pokemon"],
    queryFn: () => fetchPokemon(id),
  });

  if (isPending) {
    return <div>Loading...</div>;
  }

  return (
    <section className="w-full py-6 sm:py-12 md:py-24">
      <SinglePokemonCard
        name={data?.name ?? ""}
        type={data?.types[0].type.name ?? ""}
        species={data?.species.name ?? ""}
        weight={data?.weight ?? ""}
        image={data?.sprites.front_default ?? ""}
      />
    </section>
  );
}
