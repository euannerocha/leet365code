import React, { useState } from 'react';

const veggieWisdom = [
  'A cenoura vê longe porque cresceu no escuro. Confie na jornada!',
  'O brócolis diz: abrace seus galhos internos.',
  'A abobrinha sussurra: nem tudo que é mole é fraco.',
  'A cebola ensina: às vezes é preciso chorar para saborear a vida.',
  'O pimentão lembra: nem todo mundo gosta de você, e tudo bem!',
  'A batata-doce grita: seja doce, mas saiba se esconder no forno!',
];

const randomWisdom = () =>
  veggieWisdom[Math.floor(Math.random() * veggieWisdom.length)];

const SpiritualVeggie = () => {
  const [message, setMessage] = useState<string | null>(null);

  const summonVeggie = () => {
    setMessage(randomWisdom());
  };

  return (
    <>
    <div style={{ textAlign: 'center', padding: '2rem', fontFamily: 'cursive' }}>
      <h1>Consultor Espiritual dos Legumes</h1>
      <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🧘‍♂️🥦</div>
      <p style={{ fontSize: '1.3rem', minHeight: '3rem' }}>{message || 'Convoque um legume sábio para obter conselhos!'}</p>
      <button
        onClick={summonVeggie}
        style={{
          marginTop: '1.5rem',
          padding: '0.7rem 1.5rem',
          fontSize: '1.1rem',
          borderRadius: '12px',
          backgroundColor: '#2ecc71',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Invocar Legume
      </button>
    </div>
    </>
  );
};

export default SpiritualVeggie;