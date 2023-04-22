// src/pages/Shop.js
import React, { useState } from 'react';
import useSearch from '../hooks/useSearch';
import ProductCard from '../components/shared/ProductCard';
import Pagination from '../components/shared/Pagination';
import styles from './Shop.module.css';

const Shop = () => {
  const [search, setSearch] = useState('');
  const [submittedSearch, setSubmittedSearch] = useState('');
  const [page, setPage] = useState(1);
  const { cards, totalPages } = useSearch(submittedSearch, page);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setSubmittedSearch(search);
    setPage(1);
  };

  return (
    <div className={styles.shop}>
      <form onSubmit={handleSearchSubmit}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search Pokémon cards"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>

      <div className={styles.grid}>
        {cards.map((card) => (
          <ProductCard key={card.id} card={card} />
        ))}
      </div>

      {submittedSearch && (
        <>
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </>
      )}
    </div>
  );
};

export default Shop;
