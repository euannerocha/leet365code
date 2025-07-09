import React, { useState } from 'react';

interface Item {
  name: string;
  quantity: number;
  price: number;
}

export default function Stock() {
  const [items, setItems] = useState<Item[]>([]);
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');

  const addItem = () => {
    if (!name || !quantity || !price) return;

    const newItem: Item = {
      name,
      quantity: parseInt(quantity),
      price: parseFloat(price),
    };

    setItems([...items, newItem]);
    setName('');
    setQuantity('');
    setPrice('');
  };

  const totalValue = items.reduce((acc, item) => acc + item.quantity * item.price, 0);

  return (
    <div style={{ padding: 20 }}>
      <h2>📦 Controle de Estoque</h2>

      <input
        type="text"
        placeholder="Produto"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginRight: 10 }}
      />

      <input
        type="number"
        placeholder="Quantidade"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        style={{ marginRight: 10 }}
      />

      <input
        type="number"
        placeholder="Preço unitário"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        style={{ marginRight: 10 }}
      />

      <button onClick={addItem}>Adicionar ao Estoque</button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - {item.quantity} x R$ {item.price.toFixed(2)} = R$ {(item.quantity * item.price).toFixed(2)}
          </li>
        ))}
      </ul>

      <h3>💰 Valor Total: R$ {totalValue.toFixed(2)}</h3>
    </div>
  );
}