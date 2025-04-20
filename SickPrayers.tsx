import React from 'react';
import { AthkarCounter } from './AthkarCounter';
import { sickPrayerData } from '../data/SickPrayerData';

export const SickPrayers: React.FC = () => {
  return (
    <div className="category" id="sick">
      <h2 className="text-2xl md:text-3xl font-bold">دعاء للمريض</h2>
      
      {sickPrayerData.map((prayer, index) => (
        <AthkarCounter 
          key={`sick-${index}`}
          targetCount={prayer.count}
          athkarText={prayer.text}
        />
      ))}
    </div>
  );
};