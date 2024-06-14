import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';

const Products = () => {
  const { products } = useContext(ProductContext);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product.name} - ${product.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
