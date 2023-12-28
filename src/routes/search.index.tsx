import { FileRoute } from "@tanstack/react-router";
import SearchCard from "../components/search-card";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { searchPokemonByName } from "../api/api";

export const Route = new FileRoute("/search").createRoute({
  component: SearchRoute,
});

export default function SearchRoute() {
  const [filter, setFilter] = useState("");
  // const debouncedFilter = useDebounce(filter, 500);
  // const { data } = useQuery(
  //   queryKey: ["searchPokemon"],
  //   () => searchPokemonByName(filter)
  //   // { enabled: Boolean(debouncedFilter) }
  // );

  console.log(filter);
  const { isPending, data } = useQuery({
    queryKey: ["search-pokemon", filter],
    queryFn: () => searchPokemonByName(filter),
    // { enabled: Boolean(debouncedFilter) }
  });
  console.log(data);

  return (
    <section className="flex flex-col mx-auto justify-center w-full py-6 sm:py-12 md:py-24">
      <SearchCard setPokemonSearch={setFilter} />

      {isPending && <div>Loading...</div>}
    </section>
  );
}
