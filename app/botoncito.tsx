"use client";
export function StickyConcierge() {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-[100] hidden lg:flex flex-col gap-8 items-center">
      <div className="h-20 w-[1px] bg-gradient-to-b from-transparent via-[#d4af37]/40 to-transparent" />
      
      <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="rotate-90 text-[9px] tracking-[0.4em] text-zinc-500 hover:text-[#d4af37] transition-all">
        INICIO
      </button>
      
      <button onClick={() => document.getElementById('menu')?.scrollIntoView({behavior: 'smooth'})} className="rotate-90 text-[9px] tracking-[0.4em] text-zinc-500 hover:text-[#d4af37] transition-all">
        CARTA
      </button>
      
      <button onClick={() => document.getElementById('ubicacion')?.scrollIntoView({behavior: 'smooth'})} className="rotate-90 text-[9px] tracking-[0.4em] text-zinc-500 hover:text-[#d4af37] transition-all">
        UBICACIÓN
      </button>
      
      <div className="h-20 w-[1px] bg-gradient-to-b from-transparent via-[#d4af37]/40 to-transparent" />
    </div>
  );
}