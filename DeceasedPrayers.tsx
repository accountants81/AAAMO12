import React from 'react';
import { AthkarCounter } from './AthkarCounter';
import { deceasedPrayerData } from '../data/DeceasedPrayerData';

export const DeceasedPrayers: React.FC = () => {
  return (
    <div className="category" id="deceased">
      <h2 className="text-2xl md:text-3xl font-bold">دعاء للميت</h2>
      
      {deceasedPrayerData.map((prayer, index) => (
        <AthkarCounter 
          key={`deceased-${index}`}
          targetCount={prayer.count}
          athkarText={prayer.text}
        />
      ))}
    </div>
  );
};