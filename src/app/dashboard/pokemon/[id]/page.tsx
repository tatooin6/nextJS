import { Pokemon } from "@/pokemons";
import { Metadata } from "next";

interface PageProps {
  params: { id: string; };
}

// This function is not going to be called again
// only if a brand new page is created
export async function generateMetadata({ params }: PageProps):Promise<Metadata> {

  const { id, name } = await getPokemon(params.id);

  return {
    title: `# ${id} - ${name}`,
    description: `This is the ${ name } page.` 
  }
}

const getPokemon = async (id:string): Promise<Pokemon> => {

  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`,
    {cache: 'force-cache'}, //TODO: check later
    // The next code revalidates the page each 6 months
    // next: {
    //   revalidate: 60 * 60 * 30 * 6
    // }
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
        { pokemon.name }
      </div>
    </div>
  );
}
