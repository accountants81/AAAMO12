import React, { useState } from 'react';
import { athkarContentList } from '../data/RandomAthkarData';

export const RandomContent: React.FC = () => {
  const [content, setContent] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  const showRandomContent = () => {
    setIsAnimating(true);
    
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * athkarContentList.length);
      setContent(athkarContentList[randomIndex]);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="my-8">
      <button 
        onClick={showRandomContent}
        className="bg-[#2E8B57] text-white border-none py-3 px-6 text-lg rounded-md transition-all hover:bg-[#3CB371] my-6"
      >
        عرض محتوى عشوائي
      </button>
      
      <p 
        className={`mt-6 text-xl text-[#3CB371] font-bold p-4 bg-[rgba(46,139,87,0.1)] rounded-md border-r-[3px] border-r-[#2E8B57] transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
      >
        {content}
      </p>
    </div>
  );
};