export default function Home() {
  const data = {
    gold18: 7245000,
    gold24: 9634000,
    goldUsed: 6800000,
    goldMelted: 7100000,
    mesghal: 9634000,
    mazane: 9500000,
    coinEmami: 78500000,
    coinBahar: 74500000,
    halfCoin: 39000000,
    quarterCoin: 21000000,
    dollar: 85900,
    euro: 92000,
    lira: 2600,
    dirham: 23400,
    yuan: 11800,
    ounce: 2350,
  };

  const cards = [
    { title: "طلای ۱۸ عیار", price: data.gold18, unit: "تومان / گرم", icon: "🥇" },
    { title: "طلای ۲۴ عیار", price: data.gold24, unit: "تومان / گرم", icon: "🧈" },
    { title: "طلای دست دوم", price: data.goldUsed, unit: "تومان / گرم", icon: "💍" },
    { title: "طلای آبشده", price: data.goldMelted, unit: "تومان / گرم", icon: "💧" },
    { title: "مثقال طلا", price: data.mesghal, unit: "تومان", icon: "⚖️" },
    { title: "مظنه بازار", price: data.mazane, unit: "تومان", icon: "📊" },
    { title: "سکه امامی", price: data.coinEmami, unit: "تومان", icon: "🪙" },
    { title: "سکه بهار آزادی", price: data.coinBahar, unit: "تومان", icon: "🪙" },
    { title: "نیم سکه", price: data.halfCoin, unit: "تومان", icon: "🪙" },
    { title: "ربع سکه", price: data.quarterCoin, unit: "تومان", icon: "🪙" },
    { title: "دلار آمریکا", price: data.dollar, unit: "تومان", icon: "💵" },
    { title: "یورو", price: data.euro, unit: "تومان", icon: "💶" },
    { title: "لیر ترکیه", price: data.lira, unit: "تومان", icon: "🇹🇷" },
    { title: "درهم امارات", price: data.dirham, unit: "تومان", icon: "🇦🇪" },
    { title: "یوان چین", price: data.yuan, unit: "تومان", icon: "🇨🇳" },
    { title: "انس جهانی", price: data.ounce, unit: "دلار", icon: "🌍" },
  ];

  return (
    <main className="min-h-screen bg-black bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black p-4 flex flex-col justify-between">
      
      {/* هدر بالا */}
      <header className="flex flex-col md:flex-row justify-between items-center border-b border-yellow-500/30 pb-3 mb-4">
        <div className="flex items-center gap-3">
          <span className="text-3xl text-yellow-500">💎</span>
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-yellow-500 tracking-wider">PARSIAN JEWELRY</h1>
            <p className="text-zinc-400 text-xs tracking-widest">LIVE GOLD PRICE</p>
          </div>
        </div>
        
        <h2 className="text-2xl md:text-3xl font-bold text-yellow-500 my-2 md:my-0 drop-shadow-[0_0_10px_rgba(234,179,8,0.5)]">
          قیمت آنلاین طلا
        </h2>

        <div className="flex flex-col text-left font-mono text-yellow-500/80 text-xs md:text-sm" dir="ltr">
          <span>🕒 21:00:32</span>
          <span>📅 شنبه ۲۷ اردیبهشت ۱۴۰۴</span>
        </div>
      </header>

      {/* شبکه کارت‌ها */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 flex-grow content-center">
        
        {cards.map((card, index) => (
          <div key={index} className="relative bg-gradient-to-br from-zinc-900 to-black border-2 border-yellow-600/50 rounded-xl p-4 flex flex-col justify-center items-center shadow-[0_0_15px_rgba(234,179,8,0.15)] overflow-hidden">
            
            <div className="absolute top-2 left-2 flex items-center gap-1 text-green-500 text-[10px] md:text-xs">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> زنده
            </div>
            
            {/* اسم (بالاتر رفت) */}
            <span className="text-yellow-500 text-sm md:text-lg font-bold mb-3 md:mb-4">{card.title}</span>
            
            {/* عدد و آیکون (بالاتر رفت) */}
            <div className="flex items-center gap-2 mb-2 md:mb-3">
              <span className="text-2xl md:text-3xl">{card.icon}</span>
              <span className="text-2xl md:text-4xl font-bold text-white tracking-wider font-mono drop-shadow-md" dir="ltr">
                {card.price.toLocaleString()}
              </span>
            </div>
            
            {/* واحد (بزرگتر و خواناتر شد) */}
            <span className="text-yellow-500 text-xs md:text-base font-medium">{card.unit}</span>
          </div>
        ))}

      </div>

      {/* نوار پایین */}
      <footer className="mt-4 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-400 border-t border-zinc-800 pt-3">
        <div className="flex items-center gap-2 mb-2 md:mb-0">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          <span>آخرین بروزرسانی: <strong className="text-yellow-500 font-mono text-sm">14:35</strong></span>
        </div>
        
        <div className="flex-grow text-center px-4 overflow-hidden">
          <p className="text-yellow-600/70 animate-pulse font-medium truncate">
            ✨ خرید و فروش انواع طلا و سکه با بهترین قیمت - شعبه مرکزی ✨
          </p>
        </div>

        <div className="text-yellow-600/50 tracking-[0.2em] text-[10px]">
          PERSIAN JEWELRY
        </div>
      </footer>
    </main>
  );
}