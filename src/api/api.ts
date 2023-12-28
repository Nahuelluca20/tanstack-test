export async function fetchPokemon(id: string) {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((res) => res.json())
    .then((data) => data);

  return data;
}
