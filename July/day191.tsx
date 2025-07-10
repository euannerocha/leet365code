import React, { useState } from 'react';

export default function ShippingSimulator() {
  const [purchaseValue, setPurchaseValue] = useState('');
  const SHIPPING_FEE = 20;
  const FREE_SHIPPING_LIMIT = 150;

  const value = parseFloat(purchaseValue);
  const hasFreeShipping = value >= FREE_SHIPPING_LIMIT;
  const remaining = FREE_SHIPPING_LIMIT - value;

  return (
    <div style={{ padding: 20 }}>
      <h2>Shipping Simulator</h2>

      <input
        type="number"
        placeholder="Purchase amount"
        value={purchaseValue}
        onChange={(e) => setPurchaseValue(e.target.value)}
        style={{ marginBottom: 10 }}
      />

      {purchaseValue && (
        <div>
          {hasFreeShipping ? (
            <p style={{ color: 'green' }}>Free shipping available!</p>
          ) : (
            <p style={{ color: 'red' }}>
              R$ {remaining.toFixed(2)} left for free shipping.<br />
              Shipping cost: R$ {SHIPPING_FEE.toFixed(2)}
            </p>
          )}
        </div>
      )}
    </div>
  );
}