import React from 'react';

export const Navbar: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-[#2E8B57] p-2 md:p-4 sticky top-0 z-50 shadow-md flex justify-around items-center flex-wrap">
      <a 
        onClick={() => scrollToSection('morning')} 
        className="text-white font-medium py-2 px-3 md:px-4 rounded-md transition-all cursor-pointer hover:bg-white/20"
      >
        أذكار الصباح
      </a>
      <a 
        onClick={() => scrollToSection('evening')} 
        className="text-white font-medium py-2 px-3 md:px-4 rounded-md transition-all cursor-pointer hover:bg-white/20"
      >
        أذكار المساء
      </a>
      <a 
        onClick={() => scrollToSection('deceased')} 
        className="text-white font-medium py-2 px-3 md:px-4 rounded-md transition-all cursor-pointer hover:bg-white/20"
      >
        دعاء للميت
      </a>
      <a 
        onClick={() => scrollToSection('sick')} 
        className="text-white font-medium py-2 px-3 md:px-4 rounded-md transition-all cursor-pointer hover:bg-white/20"
      >
        دعاء للمريض
      </a>
      <a 
        onClick={() => scrollToSection('tasbeeh')} 
        className="text-white font-medium py-2 px-3 md:px-4 rounded-md transition-all cursor-pointer hover:bg-white/20"
      >
        السبحة الإلكترونية
      </a>
      <a 
        onClick={() => scrollToSection('links')} 
        className="text-white font-medium py-2 px-3 md:px-4 rounded-md transition-all cursor-pointer hover:bg-white/20"
      >
        روابط مفيدة
      </a>
    </div>
  );
};