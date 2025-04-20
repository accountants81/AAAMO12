import React from 'react';

export const UsefulLinks: React.FC = () => {
  return (
    <div className="links-section mt-12 p-8 bg-[#222] rounded-lg shadow-md" id="links">
      <h2 className="text-2xl md:text-3xl font-bold text-[#3CB371] mb-6 relative inline-block">
        روابط إسلامية مفيدة
      </h2>
      
      <div className="flex flex-col gap-4">
        <a 
          href="https://t.me/AAAMO2_bot?start=33989d3de6fcecfeed109956ffdf83d4" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block py-4 px-6 bg-[#2E8B57] text-white rounded-md transition-all hover:bg-[#3CB371] hover:-translate-x-2 font-medium"
        >
          القرآن الكريم (تطبيق)
        </a>
        
        <a 
          href="https://youtube.com/playlist?list=PLSSxr3Rf2_X2oKwiy4UhzIdj4ACzB6dee&si=IjvcVXmiuOHa4Hep" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block py-4 px-6 bg-[#2E8B57] text-white rounded-md transition-all hover:bg-[#3CB371] hover:-translate-x-2 font-medium"
        >
          السيرة النبوية (يوتيوب)
        </a>
        
        <a 
          href="https://youtube.com/@eh_el_moshkla?si=KSDeIg_Q32waEcFi" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block py-4 px-6 bg-[#2E8B57] text-white rounded-md transition-all hover:bg-[#3CB371] hover:-translate-x-2 font-medium"
        >
          مجموعة من البودكاست الدينية (إيه المشكلة)
        </a>
        
        <a 
          href="https://play.google.com/store/apps/details?id=my.smartech.mp3quran" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block py-4 px-6 bg-[#2E8B57] text-white rounded-md transition-all hover:bg-[#3CB371] hover:-translate-x-2 font-medium"
        >
          برنامج في جميع الأصوات وجميع السور
        </a>
        
        <a 
          href="https://play.google.com/store/apps/details?id=com.ibrahim.hijricalendar" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block py-4 px-6 bg-[#2E8B57] text-white rounded-md transition-all hover:bg-[#3CB371] hover:-translate-x-2 font-medium"
        >
          برنامج التقويم الهجري
        </a>
        
        <a 
          href="https://play.google.com/store/apps/details?id=com.arabiait.belal" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block py-4 px-6 bg-[#2E8B57] text-white rounded-md transition-all hover:bg-[#3CB371] hover:-translate-x-2 font-medium"
        >
          برنامج مواقيت الصلاة
        </a>
      </div>
    </div>
  );
};