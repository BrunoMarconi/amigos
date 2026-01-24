"use client";

import { motion } from "framer-motion";

export default function HeroClient() {
  // Eliminamos el useEffect y useState para evitar el retraso del LCP.
  // Usaremos clases de Tailwind para el comportamiento responsive.

  const desktopVariants = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9 },
  };

  return (
    <>
      {/* Etiqueta superior - Visible casi instantáneamente */}
      <div className="overflow-hidden mb-8">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-[10px] tracking-[1em] uppercase opacity-60 font-light block"
        >
          ✦ Excelencia Gastronómica ✦
        </motion.span>
      </div>

      {/* Título Principal - CRÍTICO PARA EL LCP */}
      <div className="overflow-hidden mb-3">
        <motion.h2 
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            duration: 1.1, 
            ease: [0.16, 1, 0.3, 1], 
            delay: 0.1 
          }}
          // Importante: El texto debe existir en el HTML desde el segundo 0
          className="text-5xl md:text-8xl lg:text-9xl font-serif font-light text-center tracking-tight leading-[0.85] will-change-transform"
        >
          El Arte de
        </motion.h2>
      </div>

      {/* Palabra destacada */}
      <div className="overflow-hidden mb-8">
        <motion.span 
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            duration: 1.1, 
            ease: [0.16, 1, 0.3, 1], 
            delay: 0.3 
          }}
          className="text-4xl md:text-7xl lg:text-8xl italic font-light text-[#d4af37] font-serif tracking-wide block will-change-transform"
        >
          lo Sublime
        </motion.span>
      </div>

      {/* Descripción elegante - Optimizada para no bloquear */}
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}

        className="max-w-2xl text-center text-[10px] md:text-[11px] font-light tracking-[0.3em] md:tracking-[0.4em] text-neutral-300 uppercase leading-relaxed"
      >
        Donde la materia prima se rinde ante la técnica.<br />
        <span className="text-[#d4af37]/85">Una experiencia sensorial sin igual.</span>
      </motion.p>

      {/* Indicador de Scroll - Usamos clases de Tailwind 'hidden md:flex' en lugar de isMobile */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="mt-40 group cursor-pointer hidden md:flex flex-col items-center"
      >
        <span className="text-[8px] tracking-[0.8em] uppercase text-neutral-400 group-hover:text-[#d4af37] transition-colors duration-700 mb-8 font-light">
          DESCUBRIR
        </span>
        <div className="relative h-28 w-[1.5px] bg-gradient-to-b from-[#d4af37]/0 via-[#d4af37]/60 to-[#d4af37]/0 overflow-hidden">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-1/4 bg-gradient-to-b from-transparent via-[#d4af37] to-transparent"
          />
        </div>
      </motion.div>
    </>
  );
}