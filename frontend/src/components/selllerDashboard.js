import React, { useState, useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';

const SellerDashboard = () => {
  const { products, addProduct } = useContext(ProductContext);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', description: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleAddProduct = () => {
    addProduct(newProduct);
    setNewProduct({ name: '', price: '', description: '' });
  };

  return (
    <div>
      <h1>Seller Dashboard</h1>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="price"
          placeholder="Product Price"
          value={newProduct.price}
          onChange={handleInputChange}
        />
        <textarea
          name="description"
          placeholder="Product Description"
          value={newProduct.description}
          onChange={handleInputChange}
        ></textarea>
        <button type="button" onClick={handleAddProduct}>Add Product</button>
      </form>
      <h2>Your Products</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product.name} - ${product.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default SellerDashboard;
