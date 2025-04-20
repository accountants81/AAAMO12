import React, { useState } from 'react';

interface AthkarCounterProps {
  targetCount: number;
  athkarText: string;
}

export const AthkarCounter: React.FC<AthkarCounterProps> = ({ targetCount, athkarText }) => {
  const [count, setCount] = useState(0);
  const [showNotification, setShowNotification] = useState(false);

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    
    if (newCount >= targetCount && !showNotification) {
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="my-6">
      <p className="prayer-text" dangerouslySetInnerHTML={{ __html: athkarText }} />
      
      <div className="counter">
        <button 
          onClick={decrement}
          className="hover:bg-[#3CB371] active:scale-95 transition-all"
        >
          -
        </button>
        <span>{count}</span>
        <button 
          onClick={increment}
          className="hover:bg-[#3CB371] active:scale-95 transition-all"
        >
          +
        </button>
      </div>
      
      {showNotification && (
        <div className="completion-notification">
          تم إكمال التكرار بنجاح! 🌟
        </div>
      )}
    </div>
  );
};