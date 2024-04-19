import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/app/pokemons";

const getPokemons = async (limit = 20, offset = 0):Promise<SimplePokemon[]> => {
  const URL = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
  const data: PokemonsResponse = await fetch(URL)
    .then( res => res.json());

  const pokemons = data.results.map( pokemon => ({
    id: pokemon.url.split('/').at(-2)!, // TODO: Review what is ! working for here
    name: pokemon.name,
  }));

  return pokemons;
}

export default async function PokemonsPage() {

  const pokemons = await getPokemons(151);

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2"><small>Static</small> Pokemon List</span>
      <PokemonGrid pokemons={pokemons} />
      <span>pokemon</span>
    </div>
  );
}
