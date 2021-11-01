import { useState } from 'react';
import './App.css';

const cardImages = [
  { src: '/img/helmet-1.png' },
  { src: '/img/potion-1.png' },
  { src: '/img/ring-1.png' },
  { src: '/img/scroll-1.png' },
  { src: '/img/shield-1.png' },
  { src: '/img/sword-1.png' },
];

function App() {
  //states
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  //suffle cards function
  const suffleCards = () => {
    const suffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(suffledCards);
    setTurns(0);
  };

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={() => suffleCards()}>New Game</button>

      <div className="card-grid">
        {cards.map((card) => {
          return (
            <div className="card" key={card.id}>
              <div>
                <img src={card.src} alt="card" className="front" />
                <img src="/img/cover.png" alt="card back" className="back" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
