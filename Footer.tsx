import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-16 py-8 bg-gradient-to-t from-[#111] to-black text-white text-base relative">
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#2E8B57] to-[#3CB371]"></div>
      <div className="max-w-4xl mx-auto px-4">
        <p className="text-lg mb-4">
          "وَلَذِكْرُ اللَّهِ أَكْبَرُ ۗ وَاللَّهُ يَعْلَمُ مَا تَصْنَعُونَ"
        </p>
        <p className="text-gray-400">
          جميع الحقوق محفوظة &copy; موقع الأذكار الإسلامية AAAMO {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};