// src/api/pokemonTCG.js
import axios from 'axios';

const API_BASE_URL = 'https://api.pokemontcg.io/v2/cards';

export const getPokemonCards = async (search, page, pageSize) => {
  try {
    const response = await axios.get(API_BASE_URL, {
      params: {
        q: search,
        page,
        pageSize,
      },
    });

    return {
      data: response.data.data,
      total: response.data.total,
    };
  } catch (error) {
    console.error('Failed to fetch Pokémon cards:', error);
    return {
      data: [],
      total: 0,
    };
  }
};
