import React, { useState } from 'react';

const catTranslations = [
  'Meow = I demand tribute. Where is my tuna?',
  'Meeeeowww = The void stares back. I stared first.',
  'Mrrrp = I knocked over your cup on purpose.',
  'Hiss = I’m not angry. I’m dramatic.',
  'Purrrr = The belly is a trap. Proceed at your own risk.',
  'Nyah = I control this household now. You’re welcome.',
];

const getRandomTranslation = () =>
  catTranslations[Math.floor(Math.random() * catTranslations.length)];

const CatTranslator3000 = () => {
  const [translation, setTranslation] = useState<string | null>(null);

  const translateMeow = () => {
    setTranslation(getRandomTranslation());
  };

  return (
    <div style={{ textAlign: 'center', padding: '2rem', fontFamily: 'monospace' }}>
      <h1>Cat Translator 3000</h1>
      <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>😺</div>
      <p style={{ fontSize: '1.3rem', minHeight: '3rem' }}>
        {translation || 'Press the button to understand the mysterious feline language...'}
      </p>
      <button
        onClick={translateMeow}
        style={{
          marginTop: '1.5rem',
          padding: '0.7rem 1.5rem',
          fontSize: '1.1rem',
          borderRadius: '10px',
          backgroundColor: '#9b59b6',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Translate Meow
      </button>
    </div>
  );
};

export default CatTranslator3000;