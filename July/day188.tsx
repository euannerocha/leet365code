import React, { useState } from 'react';

interface Product {
  name: string;
  price: number;
}

export default function ShoppingCart() {
  const [products, setProducts] = useState<Product[]>([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const addProduct = () => {
    if (!name || !price || isNaN(Number(price))) return;

    const newProduct: Product = {
      name,
      price: parseFloat(price),
    };

    setProducts([...products, newProduct]);
    setName('');
    setPrice('');
  };

  const total = products.reduce((acc, item) => acc + item.price, 0);

  return (
    <div style={{ padding: 20 }}>
      <h2>Carrinho de Compras</h2>

      <input
        type="text"
        placeholder="Nome do produto"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginRight: 10 }}
      />

      <input
        type="number"
        placeholder="Preço"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        style={{ marginRight: 10 }}
      />

      <button onClick={addProduct}>Adicionar</button>

      <ul>
        {products.map((p, index) => (
          <li key={index}>
            {p.name} - R$ {p.price.toFixed(2)}
          </li>
        ))}
      </ul>

      <h3>Total: R$ {total.toFixed(2)}</h3>
    </div>
  );
}