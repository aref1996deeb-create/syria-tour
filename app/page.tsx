"use client";
import { useState } from 'react';
import { citiesData } from '@/data/cities';
import CityCard from '@/components/CityCard';

export default function Home() {
  const [lang, setLang] = useState<'ar' | 'en'>('ar');

  return (
    <main className="p-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          {/* --- كود العنوان بألوان العلم السوري --- */}
<h1 className="text-6xl font-black mb-6 drop-shadow-lg tracking-tight flex items-center justify-center gap-4">
  {/* كلمة "اكتشف" باللون الأحمر (أعلى العلم) */}
  <span className="text-red-600">اكتشف</span>
  
  {/* النجمتان الخضراوان */}
  <span className="flex gap-1 text-emerald-600 text-5xl">★ ★</span>
  
  {/* كلمة "سحر" باللون الأبيض/الرمادي الفاتح (منتصف العلم) */}
  {/* استخدمنا رمادي فاتح جداً لضمان الوضوح فوق الخلفية الواضحة */}
  <span className="text-gray-100 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">سحر</span>
  
  {/* كلمة "سوريا" باللون الأسود (أسفل العلم) */}
  <span className="text-black">سوريا</span>
</h1>
{/* ----------------------------------------- */}
          <button 
            onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
            className="bg-emerald-700 text-white px-10 py-3 rounded-full hover:bg-emerald-800 transition-all shadow-lg font-bold"
          >
            {lang === 'ar' ? 'Switch to English' : 'تحويل للعربية'}
          </button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {citiesData.map((city) => (
            <div key={city.slug} className="flex justify-center">
              <CityCard city={city} lang={lang} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}