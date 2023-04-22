import { useState, useEffect } from 'react';
import { getPokemonCards } from '../api/pokemonTCG';

const useSearch = (resultsPerPage) => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchPokemonCards = async () => {
      try {
        const response = await getPokemonCards(search, page, resultsPerPage);
        setResults(response.data);
        setTotalPages(Math.ceil(response.total / resultsPerPage));
      } catch (error) {
        console.error('Failed to fetch Pokémon cards:', error);
      }
    };

    fetchPokemonCards();
  }, [search, page, resultsPerPage]);

  return { search, setSearch, results, totalPages, setPage };
};

export default useSearch;
