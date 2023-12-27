import { FileRoute } from "@tanstack/react-router";

import CharacterCard from "../components/character-card";

export const Route = new FileRoute("/characters").createRoute({
  component: CharactersRoute,
});

const characters = [
  {
    name: "Ditto",
    id: "132",
  },
  {
    name: "Bulbasaur",
    id: "1",
  },
  {
    name: "Butterfree",
    id: "12",
  },
  {
    name: "Oddish",
    id: "43",
  },
  {
    name: "Gloom",
    id: "44",
  },
];

export default function CharactersRoute() {
  return (
    <section className="w-full py-6 sm:py-12 md:py-24">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
        Explore Pokemons
      </h2>
      <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
        Meet the characters that make TanStack so special.
      </p>
      <div className="grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
        {characters.map((character) => (
          <CharacterCard
            id={character.id}
            name={character.name}
            key={`pokemon-${character.id}`}
          />
        ))}
      </div>
    </section>
  );
}
