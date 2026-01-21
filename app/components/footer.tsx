"use client";

import { motion } from "framer-motion";

export default function LuxuryFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] text-[#f5f5f5] pt-24 pb-12 px-6 border-t border-white/[0.03]">
      <div className="max-w-7xl mx-auto">
        
        {/* Grid Principal: Estructura Editorial */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8 mb-24">
          
          {/* Columna 1: El Sello */}
          <div className="col-span-1 md:col-span-1 space-y-8">
            <h2 className="text-xl font-serif tracking-[0.2em] uppercase text-white">
              El Arte <br /> 
              <span className="text-[#d4af37]">de lo Sublime</span>
            </h2>
            <div className="h-[1px] w-12 bg-[#d4af37]/40" />
            <p className="text-[11px] leading-relaxed tracking-widest uppercase text-zinc-500 max-w-[200px]">
              Donde la materia prima se rinde ante la técnica.
            </p>
          </div>

          {/* Columna 2: Experiencia */}
          <div className="space-y-6">
            <h4 className="text-[10px] tracking-[0.4em] uppercase text-[#d4af37]">Menú</h4>
            <ul className="space-y-4">
              {['La Carta', 'Bodega Privada', 'Experiencia Tasting'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[11px] uppercase tracking-widest text-zinc-400 hover:text-white transition-colors duration-500">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: El Club */}
          <div className="space-y-6">
            <h4 className="text-[10px] tracking-[0.4em] uppercase text-[#d4af37]">Reserva</h4>
            <ul className="space-y-4">
              {['Mesa Privada', 'Eventos Exclusivos', 'Membresía'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[11px] uppercase tracking-widest text-zinc-400 hover:text-white transition-colors duration-500">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4: Newsletter Estilo 'Concierge' */}
          <div className="space-y-6">
            <h4 className="text-[10px] tracking-[0.4em] uppercase text-[#d4af37]">Novedades</h4>
            <p className="text-[11px] text-zinc-500 uppercase tracking-widest leading-loose">
              Reciba invitaciones a nuestras cenas clandestinas.
            </p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="EMAIL" 
                className="bg-transparent border-b border-zinc-800 w-full py-2 text-[10px] tracking-[0.3em] focus:outline-none focus:border-[#d4af37] transition-all duration-700 placeholder:text-zinc-700 uppercase"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 text-[10px] tracking-widest text-[#d4af37] opacity-0 group-hover:opacity-100 transition-all duration-700">
                UNIRSE ✦
              </button>
            </div>
          </div>
        </div>

        {/* Línea Divisoria Cinematográfica */}
        <div className="relative w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent mb-12">
          <div className="absolute left-1/2 -translate-x-1/2 -top-[3px] w-1.5 h-1.5 rotate-45 border border-[#d4af37]/30 bg-[#050505]" />
        </div>

        {/* Bottom Footer: Legal & Social */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex gap-8 order-2 md:order-1">
            {['Instagram', 'Vimeo', 'LinkedIn'].map((social) => (
              <a 
                key={social} 
                href="#" 
                className="text-[9px] uppercase tracking-[0.5em] text-zinc-600 hover:text-[#d4af37] transition-all duration-500"
              >
                {social}
              </a>
            ))}
          </div>

          <div className="text-[9px] uppercase tracking-[0.4em] text-zinc-700 order-1 md:order-2">
            © {currentYear} — <span className="text-zinc-500">El Arte de lo Sublime.</span> Todos los derechos reservados.
          </div>
        </div>

      </div>
    </footer>
  );
}