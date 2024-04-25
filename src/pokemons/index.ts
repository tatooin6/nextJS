export { PokemonGrid } from './components/PokemonGrid';

// exporting type because:
// Re-exporting a type when 'isolatedModules' is enabled requires using 'export type'. [1205]
export type { SimplePokemon } from './interfaces/simple-pokemon';
export type { PokemonsResponse  } from './interfaces/pokemons-response';
