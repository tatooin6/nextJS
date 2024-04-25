interface PageProps {
  params: { id: string; };
}

export default function PokemonPage({ params }:PageProps) {

  console.log('%cProps', 'color:red');
  console.log(params.id);

  return (
    <div>
      <h1>Pokemon {params.id}</h1>
    </div>
  );
}
