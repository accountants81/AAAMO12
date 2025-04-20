import React from 'react';
import { AthkarCounter } from './AthkarCounter';
import { eveningAthkarData } from '../data/EveningAthkarData';

export const EveningAthkar: React.FC = () => {
  return (
    <div className="category" id="evening">
      <h2 className="text-2xl md:text-3xl font-bold">أذكار المساء</h2>
      
      {eveningAthkarData.map((athkar, index) => (
        <AthkarCounter 
          key={`evening-${index}`}
          targetCount={athkar.count}
          athkarText={athkar.text}
        />
      ))}
    </div>
  );
};