import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.pokemontcg.io/v2/',
});

export const getPokemonCards = async (searchQuery, pageSize, page) => {
  try {
    const response = await apiClient.get('cards', {
      params: {
        q: searchQuery,
        pageSize,
        page,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};