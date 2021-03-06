import { transformToPokemonDetails } from './transformations';

export const fetchPokemons = async () => {
  const response = await fetch(
    `${process.env.REACT_APP_POKEMON_API_BASE_URL}pokemon/?offset=0&limit=10/`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  return await response.json();
};

export const fetchPokemonDetails = async (id) => {
  const response = await fetch(
    `${process.env.REACT_APP_POKEMON_API_BASE_URL}pokemon/${id}/`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  const data = await response.json();
  return transformToPokemonDetails(data);
};
