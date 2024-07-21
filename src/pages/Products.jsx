import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Products({ selectedCategory, searchTerm, addToCart, removefromCart }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    let url = 'https://dummyjson.com/products';
    if (selectedCategory && selectedCategory !== 'all') {
      url = `https://dummyjson.com/products/category/${selectedCategory}`;
    }

    axios.get(url)
      .then(response => {
        setProducts(response.data.products);
        setFilteredProducts(response.data.products);
      })
      .catch(error => {
        console.error('There was an error fetching the products!', error);
      });
  }, [selectedCategory]);

  useEffect(() => {
    if (searchTerm) {
      const url = `https://dummyjson.com/products/search?q=${searchTerm}`;
      axios.get(url)
        .then(response => {
          setFilteredProducts(response.data.products);
        })
        .catch(error => {
          console.error('There was an error fetching the products!', error);
        });
    } else {
      setFilteredProducts(products);
    }
  }, [searchTerm, products]);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const handleRemoveFromCart = (product) => {
    removefromCart(product);
  };

  return (
    <div className="products-container p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            // let cost = product.price*83;
            <div key={product.id} className="product-card border p-4 rounded-md">
              <img src={product.thumbnail} alt={product.title} className="w-full h-64 object-cover mb-2" />
              <h2 className="text-lg font-bold">{product.title}</h2>
              <p className="text-gray-600 text-2xl flex items-center justify-center p-4">₹{(product.price*83).toFixed(2)}</p>
              <p className="text-sm">{product.description}</p>
              <button
                type="button"
                className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
              <button
                type="button"
                className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                onClick={() => handleRemoveFromCart(product)}
              >
                Remove from Cart
              </button>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}

export default Products;
