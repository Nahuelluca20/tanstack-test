import { FileRoute } from "@tanstack/react-router";
import SearchCard from "../components/search-card";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { searchPokemonByName } from "../api/api";
import SinglePokemonCard from "../components/slngle-pokemon-card";

export const Route = new FileRoute("/search").createRoute({
  component: SearchRoute,
});

export default function SearchRoute() {
  const [filter, setFilter] = useState("");

  const { isPending, data } = useQuery({
    queryKey: ["search-pokemon", filter],
    queryFn: () => searchPokemonByName(filter),
  });

  return (
    <section className="w-full text-center py-6 sm:py-12 md:py-24">
      <div className="flex justify-center">
        <SearchCard setPokemonSearch={setFilter} />
      </div>
      {isPending && <div className="mt-10">Loading...</div>}
      <div className="mt-10">
        {data?.length === 0 || (data === undefined && !isPending) ? (
          <h4 className="font-bold text-2xl">Pokemon no found</h4>
        ) : (
          <SinglePokemonCard
            name={data?.name ?? ""}
            type={data?.types[0].type.name ?? ""}
            species={data?.species.name ?? ""}
            weight={data?.weight ?? ""}
            image={data?.sprites.front_default ?? ""}
          />
        )}
      </div>
    </section>
  );
}
