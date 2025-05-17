import React, { useState } from 'react';

const potatoMoods = {
  happy: '🥔 está feliz! Viva as batatas sorridentes!',
  sad: '🥔 está triste... talvez precise de mais ketchup.',
  angry: '🥔 está furiosa! Quem mexeu nas fritas dela?',
  confused: '🥔 está confusa... onde estão as cebolas?',
};

const PotatoMoodDetector = () => {
  const [mood, setMood] = useState<string | null>(null);

  const handleMoodChange = (newMood: keyof typeof potatoMoods) => {
    setMood(potatoMoods[newMood]);
  };

  return (
    <div style={{ textAlign: 'center', padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Detector de Humor da Batata</h1>
      <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🥔</div>
      <p style={{ fontSize: '1.5rem' }}>{mood || 'Como a batata está se sentindo hoje?'}</p>
      <div style={{ marginTop: '2rem' }}>
        {Object.keys(potatoMoods).map((moodKey) => (
          <button
            key={moodKey}
            onClick={() => handleMoodChange(moodKey as keyof typeof potatoMoods)}
            style={{
              margin: '0.5rem',
              padding: '0.8rem 1.2rem',
              fontSize: '1rem',
              borderRadius: '10px',
              border: 'none',
              backgroundColor: '#f1c40f',
              cursor: 'pointer',
            }}
          >
            {moodKey.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PotatoMoodDetector;