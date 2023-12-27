import { FileRoute, Link } from "@tanstack/react-router";

export const Route = new FileRoute("/characters").createRoute({
  component: CharactersRoute,
});

const characters = [
  {
    name: "Rick Sanchez",
    id: "1",
  },
  {
    name: "Morty Smith",
    id: "2",
  },
  {
    name: "Ants in my Eyes Johnson",
    id: "20",
  },
  {
    name: "Big Morty",
    id: "43",
  },
  {
    name: "Body Guard Morty",
    id: "44",
  },
];

export default function CharactersRoute() {
  return (
    <div>
      <h1 className="text-2xl md:text-6xl font-bold mb-10">Characters</h1>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            <Link
              to="/characters/$id"
              params={{
                id: character.id,
              }}
            >
              {character.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
