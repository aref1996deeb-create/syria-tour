"use client";
import Link from 'next/link';

interface CityCardProps {
  city: any;
  lang: 'ar' | 'en';
}

export default function CityCard({ city, lang }: CityCardProps) {
  return (
    <Link href={`/city/${city.slug}`} className="group w-full max-w-sm">
      <div className="bg-white/80 backdrop-blur-md rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/50">
        
        {/* الجزء العلوي: الصورة واسم المدينة */}
        <div className="relative h-56 w-full overflow-hidden">
          <img 
            src={`/images/cities/${city.slug}/1.jpg`} 
            alt={city.name[lang]} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-4 right-4 text-white">
            <h3 className="text-2xl font-bold">{city.name[lang]}</h3>
          </div>
        </div>
        
        {/* الجزء السفلي: الموقع الجغرافي وزر التفاصيل */}
        <div className="p-5">
          <p className="text-gray-700 line-clamp-2 font-medium">
            {/* تم تغيير city.famousFor إلى city.location لأن الحقل القديم لم يعد موجوداً */}
            {city.location[lang]}
          </p>
          
          <div className="mt-4 text-emerald-700 font-bold flex items-center gap-2">
            {lang === 'ar' ? 'استكشف المدينة' : 'Explore City'} 
            <span className="transition-transform group-hover:translate-x-[-5px]">←</span>
          </div>
        </div>
      </div>
    </Link>
  );
}