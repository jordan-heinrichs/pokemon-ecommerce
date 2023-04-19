import React, { useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

const Shop = () => {
  const [searchText, setSearchText] = useState('');
  const [products, setProducts] = useState([]);

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchText.toLowerCase()}`);
      const pokemonData = response.data;
      setProducts([{
        id: pokemonData.id,
        name: pokemonData.name,
        image: pokemonData.sprites.front_default,
        price: (Math.random() * 50 + 10).toFixed(2),
      }]);
    } catch (error) {
      console.error('Error fetching Pokémon data:', error);
    }
  };
  return (
    <div>
      <h2>Shop</h2>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for Pokémon"
          value={searchText}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      <div className={styles['product-grid']}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
export default Shop;