const getPokemons = async (limit = 20, offset = 0) => {
  const URL = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
  const data = await fetch(URL)
                      .then( res => res.json());
  return data;
}

export default async function PokemonsPage() {

  const pokemons = await getPokemons();

  return (
    <div>
      { JSON.stringify(pokemons) }
    </div>
  );
}
