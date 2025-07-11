import React, { useState } from 'react';

interface Product {
  name: string;
  quantity: number;
}

export default function SimpleStock() {
  const [products, setProducts] = useState<Product[]>([]);
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');

  const addProduct = () => {
    if (!name || !quantity || isNaN(Number(quantity))) return;

    const newProduct: Product = {
      name,
      quantity: parseInt(quantity),
    };

    setProducts([...products, newProduct]);
    setName('');
    setQuantity('');
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Product Stock</h2>

      <input
        type="text"
        placeholder="Product name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginRight: 10 }}
      />

      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        style={{ marginRight: 10 }}
      />

      <button onClick={addProduct}>Add Product</button>

      <ul>
        {products.map((p, index) => (
          <li key={index}>
            {p.name} - {p.quantity} units
          </li>
        ))}
      </ul>
    </div>
  );
}