import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="antialiased">
        {/* شريط بجملة واحدة فقط */}
        <div className="bg-emerald-950 text-white py-3 fixed top-0 w-full z-[100] shadow-2xl border-b border-emerald-500 overflow-hidden">
          <div className="whitespace-nowrap animate-marquee font-bold text-xl">
            <span className="mx-4">🚀 تصميم المهندس عارف ديب - ع أصلو للإبداع الرقمي</span>
          </div>
        </div>

        <div className="pt-20">
          {children}
        </div>
      </body>
    </html>
  );
}