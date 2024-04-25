import { Pokemon } from "@/pokemons";

interface PageProps {
  params: { id: string; };
}

const getPokemon = async (id:string): Promise<Pokemon> => {

  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`,
    {cache: 'force-cache'} //TODO: check later
  ).then( res => res.json());

  console.log('Se cargo a ', pokemon.name)

  return pokemon;
}

export default async function PokemonPage({ params }:PageProps) {

  const pokemon = await getPokemon(params.id);
  // console.log(pokemon);

  return (
    <div>
      <h1>Pokemon {params.id}</h1>
      <div>
        { JSON.stringify(pokemon) }
      </div>
    </div>
  );
}
