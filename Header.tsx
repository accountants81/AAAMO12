import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-b from-[#111] to-black text-white py-12 shadow-lg relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2E8B57] to-[#3CB371]"></div>
      <h1 className="text-5xl md:text-6xl font-bold text-[#3CB371] m-0 relative">
        موقع الأذكار الإسلامية
        <span className="block text-lg md:text-xl text-gray-400 mt-4 font-normal">
          اذكروا الله ذكراً كثيراً
        </span>
      </h1>
    </header>
  );
};