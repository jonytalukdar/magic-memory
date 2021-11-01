import { useState } from 'react';
import './App.css';
import SingleCard from './components/SingleCard';

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
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  //suffle cards function
  const suffleCards = () => {
    const suffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(suffledCards);
    setTurns(0);
  };

  const handleCardChoice = (card) => {
    console.log(card);
  };

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={() => suffleCards()}>New Game</button>

      <div className="card-grid">
        {cards.map((card) => {
          return (
            <SingleCard
              key={card.id}
              card={card}
              handleCardChoice={handleCardChoice}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
