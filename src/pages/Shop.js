import React from 'react';
import useSearch from '../hooks/useSearch';
import ProductCard from './ProductCard';
import Pagination from './Pagination';
import styles from './Shop.module.css';
const Shop = () => {
  const { search, setSearch, results, totalPages, setPage } = useSearch(10);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      setPage(1);
    }
  };

  return (
    <div>
      <h1>Shop</h1>
      <div className={styles['search-container']}>
        <input
          type="text"
          placeholder="Search for Pokémon cards"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={() => setPage(1)}>Search</button>
      </div>
      <div className={styles.grid}>
        {results.map((card) => (
          <ProductCard key={card.id} product={card} />
        ))}
      </div>
      <Pagination totalPages={totalPages} currentPageSetter={setPage} />
    </div>
  );
};

export default Shop;
