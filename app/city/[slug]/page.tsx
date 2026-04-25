"use client";
import { citiesData } from '@/data/cities';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function CityPage() {
  const params = useParams();
  // البحث عن المدينة بناءً على الرابط
  const city = citiesData.find((c) => c.slug === params.slug);

  // حماية الكود: إذا لم يجد المدينة لا يحاول قراءة البيانات فيحدث الخطأ
  if (!city) return <div className="p-20 text-center font-bold text-2xl">المدينة غير موجودة</div>;

  return (
    <div className="min-h-screen pb-20" dir="rtl">
      {/* الهيدر */}
      <div className="relative h-[55vh] w-full shadow-2xl">
        <img 
          src={`/images/cities/${city.slug}/1.jpg`} 
          alt={city.name.ar} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center p-4">
          <h1 className="text-6xl md:text-8xl font-black mb-6 drop-shadow-2xl">{city.name.ar}</h1>
          {/* تم استبدال famousFor بـ location هنا لحل مشكلة الـ undefined */}
          <div className="bg-emerald-600/90 px-8 py-3 rounded-full text-xl md:text-2xl font-bold shadow-xl border border-emerald-400">
             {city.location.ar}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto -mt-20 relative z-20 px-4">
        <div className="bg-white/95 backdrop-blur-xl rounded-[3rem] shadow-2xl border border-white overflow-hidden">
          
          {/* معلومات سريعة */}
          <div className="grid grid-cols-1 md:grid-cols-2 bg-emerald-950 text-white p-8 gap-8 border-b-4 border-emerald-500">
            <div className="flex items-center gap-5">
              <span className="text-5xl">📍</span>
              <div>
                <p className="text-emerald-400 text-sm font-bold mb-1">الموقع الجغرافي</p>
                <p className="text-xl font-bold">{city.location.ar}</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <span className="text-5xl">📏</span>
              <div>
                <p className="text-emerald-400 text-sm font-bold mb-1">المساحة</p>
                <p className="text-xl font-bold">{city.area}</p>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-16 space-y-16">
            
            {/* وصف المدينة */}
            <section>
              <h2 className="text-4xl font-black text-emerald-900 mb-8 flex items-center gap-4">
                <span className="w-3 h-12 bg-emerald-600 rounded-full"></span>
                حول مدينة {city.name.ar}
              </h2>
              <p className="text-2xl text-gray-800 leading-[1.8] text-justify font-medium">
                {city.fullDescription.ar}
              </p>
            </section>

            {/* التاريخ */}
            <section className="bg-emerald-50 p-10 rounded-[2.5rem] border-2 border-emerald-100 relative">
              <h2 className="text-3xl font-black text-emerald-900 mb-6">التاريخ وسبب التسمية</h2>
              <p className="text-2xl text-gray-800 leading-relaxed text-justify font-medium italic">
                {city.history.ar}
              </p>
            </section>

            {/* المعالم */}
            <section>
              <h2 className="text-3xl font-black text-emerald-900 mb-10 flex items-center gap-4">
                <span className="w-3 h-12 bg-blue-500 rounded-full"></span>
                أهم المعالم السياحية والأثرية
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {city.landmarks.ar.map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border-b-4 border-emerald-600 shadow-lg flex items-center gap-4">
                    <span className="w-8 h-8 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-black text-sm">
                      {i + 1}
                    </span>
                    <span className="text-xl font-bold text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <div className="text-center pt-10">
              <Link href="/" className="bg-emerald-800 hover:bg-emerald-950 text-white px-16 py-5 rounded-2xl transition-all text-2xl font-black shadow-2xl inline-block">
                 ← العودة للرئيسية
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}