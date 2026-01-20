"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LuxuryHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevenir scroll cuando el menú está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const menuItems = [
    { name: 'Menú', label: '01' },
    { name: 'Horario', label: '02' },
    { name: 'Ubicación', label: '03' }
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-[100] transition-all duration-1000 ease-in-out px-10
        ${scrolled 
          ? "bg-[#050505]/80 backdrop-blur-xl py-4 border-b border-white/[0.03]" 
          : "bg-transparent py-8"
        }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo de Alta Gama */}
        <motion.div className="flex flex-col relative z-[150]">
          <h1 className="text-2xl tracking-[0.7em] font-serif italic text-white leading-none">
            AMIGOS
          </h1>
          <span className="text-[8px] tracking-[1em] text-[#c5a35d] uppercase mt-2 font-light">
            Gourmet Experience
          </span>
        </motion.div>

        {/* Botón Hamburguesa Estilo Galería */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-[150] group p-2 focus:outline-none"
        >
          <div className="flex flex-col gap-2 items-end">
            <motion.div 
              animate={isOpen ? { rotate: 45, y: 4.5, backgroundColor: "#fff" } : { rotate: 0, y: 0 }}
              className="w-8 h-[1px] bg-white/80 group-hover:w-10 transition-all duration-500"
            />
            <motion.div 
              animate={isOpen ? { rotate: -45, y: -4.5, width: 32, backgroundColor: "#fff" } : { rotate: 0, y: 0 }}
              className="w-5 h-[1px] bg-[#c5a35d] group-hover:w-10 transition-all duration-500"
            />
          </div>
        </button>

        {/* Overlay de Máxima Distinción */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop: El "Velo" que neutraliza cualquier sección trasera */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 top-0 left-0 bg-[#050505]/95 backdrop-blur-2xl z-[130] md:hidden"
                onClick={() => setIsOpen(false)}
              />
              
              {/* Contenido del Menú: Estructura de Boutique */}
              <motion.div
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="fixed inset-0 top-0 left-0 w-screen h-screen z-[140] flex flex-col items-center justify-center md:hidden"
              >
                {/* Marco decorativo sutil */}
                <div className="absolute inset-10 border border-white/[0.03] pointer-events-none" />

                <nav className="flex flex-col items-center gap-12 relative z-10">
                  {menuItems.map((item, i) => (
                    <motion.a
                      key={item.name}
                      href={`#${item.name.toLowerCase()}`}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + i * 0.1, duration: 0.8 }}
                      onClick={() => setIsOpen(false)}
                      className="group relative flex flex-col items-center"
                    >
                      <span className="text-[10px] tracking-[0.5em] text-[#c5a35d] mb-2 font-light">
                        {item.label}
                      </span>
                      <span className="text-4xl md:text-6xl font-serif italic text-white tracking-widest transition-all duration-700 group-hover:text-[#c5a35d] group-hover:tracking-[0.2em]">
                        {item.name}
                      </span>
                      <div className="w-0 h-[1px] bg-[#c5a35d]/30 mt-4 group-hover:w-full transition-all duration-700" />
                    </motion.a>
                  ))}
                </nav>

                {/* Footer del Menú: Datos de Ubicación Legibles */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="absolute bottom-20 flex flex-col items-center gap-6"
                >
                  <div className="h-12 w-[1px] bg-gradient-to-b from-[#c5a35d] to-transparent" />
                  <p className="text-[9px] tracking-[0.6em] text-white/40 uppercase">
                    Marbella &bull; Puerto Banús
                  </p>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}