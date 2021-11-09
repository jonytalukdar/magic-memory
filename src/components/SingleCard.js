import React from 'react';
import './SingleCard.css';

const SingleCard = ({ card, handleCardChoice, flipped }) => {
  const handleCardClick = () => {
    handleCardChoice(card);
  };

  return (
    <div className="card">
      <div className={flipped ? 'flipped' : ''}>
        <img src={card.src} alt="card" className="front" />
        <img
          src="/img/cover.png"
          alt="card back"
          className="back"
          onClick={handleCardClick}
        />
      </div>
    </div>
  );
};

export default SingleCard;
