import React, { useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/shared/ProductCard';
import productCardStyles from '../components/shared/ProductCard.module.css';
import shopStyles from './Shop.module.css';

const Shop = () => {
    const [searchText, setSearchText] = useState('');
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [searched, setSearched] = useState(false);

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };
  
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      handleSubmit(currentPage - 1);
    }
  };
  
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handleSubmit(currentPage + 1);
    }
  };

  const handleSubmit = async (page = 1) => {
    try {
      const response = await axios.get(
        `https://api.pokemontcg.io/v2/cards?q=name:${searchText}&page=${page}&pageSize=10`
      );
      setProducts(response.data.data);
      setCurrentPage(page);
      setTotalPages(Math.ceil(response.data.totalCount / 10));
      setSearched(true); // Add this line
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key == 'Enter') {
      searchPokemonCards();
    }
  }

  return (
    <div>
      <h2>Shop</h2>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for Pokémon"
          value={searchText}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
        <button onClick={searchPokemonCards}>Search</button>
      </div>
      {searched && (
        <>
          <div className={shopStyles.pagination}>
            <button onClick={handlePreviousPage}>&lt; Previous</button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button onClick={handleNextPage}>Next &gt;</button>
          </div>
          <div className={productCardStyles['product-grid']}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className={shopStyles.pagination}>
            <button onClick={handlePreviousPage}>&lt; Previous</button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button onClick={handleNextPage}>Next &gt;</button>
          </div>
        </>
      )}
    </div>
  );
};
export default Shop;