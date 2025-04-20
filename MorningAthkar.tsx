import React from 'react';
import { AthkarCounter } from './AthkarCounter';
import { morningAthkarData } from '../data/MorningAthkarData';

export const MorningAthkar: React.FC = () => {
  return (
    <div className="category" id="morning">
      <h2 className="text-2xl md:text-3xl font-bold">أذكار الصباح</h2>
      
      {morningAthkarData.map((athkar, index) => (
        <AthkarCounter 
          key={`morning-${index}`}
          targetCount={athkar.count}
          athkarText={athkar.text}
        />
      ))}
    </div>
  );
};