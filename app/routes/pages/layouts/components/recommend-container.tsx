import { useState } from 'react';

export interface Props {
  reservations: {
    position: string;
    explanation: string;
    price: string;
  }[];
}

const RecommendContainer = ({ reservations }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <section className="recommendations container">
      <h2>🔥 인기 여행지</h2>
      <div className="card-container">
        {reservations.map((reservation, index) => (
          <div
            key={index}
            className={`card ${selectedIndex === index ? 'selected' : ''}`}
            onClick={() => handleCardClick(index)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') handleCardClick(index);
            }}
          >
            <h3>{reservation.position}</h3>
            <p>{reservation.explanation}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecommendContainer;
