"use client";
import { useState } from 'react';
import { citiesData } from '@/data/cities';
import CityCard from '@/components/CityCard';

export default function Home() {
  const [lang, setLang] = useState<'ar' | 'en'>('ar');

  return (
    // تم تعديل الـ padding ليكون أقل في الجوال (p-4) وأكبر في الكمبيوتر (md:p-8)
    <main className="p-4 md:p-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-10 md:mb-16">
          
          {/* --- تعديل العنوان ليكون مرناً --- */}
          {/* تم تغيير text-6xl إلى text-3xl في الجوال لتفادي خروج النص عن الشاشة */}
          <h1 className="text-3xl md:text-6xl font-black mb-6 drop-shadow-lg tracking-tight flex flex-wrap items-center justify-center gap-2 md:gap-4">
            <span className="text-red-600">اكتشف</span>
            
            {/* تقليل حجم النجوم في الجوال */}
            <span className="flex gap-1 text-emerald-600 text-2xl md:text-5xl">★ ★</span>
            
            <span className="text-gray-100 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">سحر</span>
            
            <span className="text-black">سوريا</span>
          </h1>

          <button 
            onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
            // جعل الزر بعرض كامل في الجوال لسهولة الضغط
            className="w-full sm:w-auto bg-emerald-700 text-white px-10 py-3 rounded-full hover:bg-emerald-800 transition-all shadow-lg font-bold"
          >
            {lang === 'ar' ? 'Switch to English' : 'تحويل للعربية'}
          </button>
        </header>

        {/* تعديل الـ gap ليكون أنسب للجوال */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {citiesData.map((city) => (
            <div key={city.slug} className="w-full flex justify-center">
              <CityCard city={city} lang={lang} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}