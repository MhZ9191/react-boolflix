import { createContext, useContext, useState } from "react";

const CardContext = createContext();

function CardProvider({ children }) {
  const averageStar = (averageInitial) => {
    const average = Math.floor(averageInitial / 2);
    return (
      <div className="star-average">
        {[...Array(5)].map((elem, ind) => (
          <span key={ind}>
            {ind < average ? (
              <i class="bi bi-star-fill"></i>
            ) : (
              <i className="bi bi-star"></i>
            )}
          </span>
        ))}
      </div>
    );
  };

  const cardValues = { averageStar };
  return (
    <CardContext.Provider value={cardValues}>{children}</CardContext.Provider>
  );
}

function useCard() {
  return useContext(CardContext);
}

export { CardProvider };
