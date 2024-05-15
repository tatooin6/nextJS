import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";

export const metadata = {
  title: 'Favorites',
  description: 'Favorites pages',
};


export default async function PokemonsPage() {

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        <small className="text-blue-500">Global State </small> 
        Favorite Pokemons
      </span>
      <PokemonGrid pokemons={[]} />
      <span>pokemon</span>
    </div>
  );
}
