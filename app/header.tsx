"use client";

import { motion } from "framer-motion";

export default function LuxuryHeader() {
  return (
    <header className="fixed top-0 w-full z-[100] bg-[#050505]/60 backdrop-blur-xl border-b border-white/[0.05] px-10 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo Refinado */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col"
        >
          <h1 className="text-xl tracking-[0.6em] font-serif italic text-white leading-none">
            AMIGOS
          </h1>
          <span className="text-[7px] tracking-[0.8em] text-[#c5a35d] uppercase mt-1">Gourmet Experience</span>
        </motion.div>

        {/* Navegación Minimalista */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-12">
            {['Menú', 'Horario', 'Ubicación'].map((item, index) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className="relative text-[10px] uppercase tracking-[0.4em] text-zinc-400 hover:text-white transition-colors duration-500 group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#c5a35d] transition-all duration-500 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Botón de Acción Estilo Boutique */}
        <div className="hidden md:block">
          <a 
            href="https://booksy.com/..." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="relative inline-block border border-white/10 px-8 py-3 text-[9px] uppercase tracking-[0.3em] text-white hover:bg-white hover:text-black transition-all duration-700 ease-in-out"
          >
            Reservar Mesa
          </a>
        </div>

        {/* Menú móvil refinado */}
        <div className="md:hidden flex flex-col gap-1.5 cursor-pointer group">
          <div className="w-6 h-[1px] bg-white group-hover:w-4 transition-all"></div>
          <div className="w-4 h-[1px] bg-[#c5a35d]"></div>
          <div className="w-6 h-[1px] bg-white group-hover:w-8 transition-all"></div>
        </div>

      </div>
    </header>
  );
}