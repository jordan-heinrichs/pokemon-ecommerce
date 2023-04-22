import axios from 'axios';

const API_BASE_URL = 'https://api.pokemontcg.io/v2/cards';

export const getPokemonCards = async (searchQuery, page = 1) => {
  try {
    const response = await axios.get(API_BASE_URL, {
      params: {
        q: `name:${searchQuery}*`,
        page: page,
        pageSize: 10,
      },
      headers: {
        'X-Api-Key': process.env.REACT_APP_POKEMON_TCG_API_KEY,
      },
    });

    const { data } = response;
    const totalPages = Math.ceil(data.totalCount / 10);

    return {
      cards: data.data,
      totalPages: totalPages,
    };
  } catch (error) {
    console.error('Error fetching Pokémon cards:', error);
    return {
      cards: [],
      totalPages: 1,
    };
  }
};
