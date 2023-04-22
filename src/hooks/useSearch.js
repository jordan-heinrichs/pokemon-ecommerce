import { useState, useEffect } from 'react';
import { getPokemonCards } from '../api/pokemonTCG';

const useSearch = (searchQuery, page) => {
  const [data, setData] = useState({ cards: [], totalPages: 1 });

  useEffect(() => {
    const fetchCards = async () => {
      if (searchQuery) {
        const response = await getPokemonCards(searchQuery, page);
        setData(response);
      } else {
        setData({ cards: [], totalPages: 1 });
      }
    };

    fetchCards();
  }, [searchQuery, page]);

  const { cards = [], totalPages } = data;

  return { cards, totalPages };
};

export default useSearch;