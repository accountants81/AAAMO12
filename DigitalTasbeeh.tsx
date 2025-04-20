import React, { useState } from 'react';

export const DigitalTasbeeh: React.FC = () => {
  const [tasbeehCount, setTasbeehCount] = useState(0);
  const [isPressed, setIsPressed] = useState(false);

  const incrementTasbeeh = () => {
    setTasbeehCount(prev => prev + 1);
    
    // Button press effect
    setIsPressed(true);
    setTimeout(() => setIsPressed(false), 200);
  };

  const resetTasbeeh = () => {
    setTasbeehCount(0);
  };

  return (
    <div className="category" id="tasbeeh">
      <h2 className="text-2xl md:text-3xl font-bold">السبحة الإلكترونية</h2>
      
      <div className="flex items-center justify-center my-8 gap-6">
        <button 
          onClick={incrementTasbeeh}
          className={`bg-[#2E8B57] ${isPressed ? 'bg-[#45a049]' : ''} text-white border-none p-4 text-2xl cursor-pointer rounded-full w-[70px] h-[70px] transition-all duration-300 flex items-center justify-center hover:bg-[#3CB371] hover:scale-105 active:scale-95`}
        >
          +
        </button>
        <span className="text-3xl font-bold text-[#3CB371] min-w-[80px]">
          {tasbeehCount}
        </span>
      </div>
      
      <button 
        onClick={resetTasbeeh}
        className="bg-[#ff4444] text-white border-none py-3 px-6 text-lg rounded-md transition-all hover:bg-[#cc0000] my-4"
      >
        إعادة الضبط
      </button>
    </div>
  );
};