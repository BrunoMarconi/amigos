"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function LuxuryRestaurantHero() {
  return (
    <main 
      className="min-h-screen text-[#f5f5f5] selection:bg-[#d4af37] selection:text-[#0f0f0f] font-light relative overflow-hidden"
      style={{
        backgroundImage: "url('/image.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Imagen de fondo para pantallas grandes */}
      <div 
        className="hidden md:block absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/image2.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      ></div>

      {/* Overlay oscuro con gradiente lujo mejorado */}
      <div className="absolute inset-0 z-5 bg-gradient-to-b from-black/35 via-black/55 to-black/75"></div>

      {/* Efecto de luz superior premium */}
      <div className="absolute top-0 left-0 right-0 h-[500px] z-0 bg-gradient-to-b from-[#d4af37]/8 via-[#d4af37]/2 to-transparent pointer-events-none"></div>

      {/* Contenido Principal */}
      <section className="relative flex flex-col items-center justify-center pt-48 px-6 z-10 min-h-screen">
        {/* Etiqueta superior */}
        <div className="overflow-hidden mb-8">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.9 }}
            className="text-[10px] tracking-[1em] uppercase opacity-60 font-light"
          >
            ✦ Excelencia Gastronómica ✦
          </motion.span>
        </div>

        {/* Línea decorativa */}
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 1.2 }}
          className="h-[1.5px] w-16 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mb-10"
        ></motion.div>

        {/* Título Principal */}
        <div className="overflow-hidden mb-3">
          <motion.h2 
            initial={{ y: "120%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-9xl font-serif font-light text-center tracking-tight leading-[0.85]"
          >
            El Arte de
          </motion.h2>
        </div>

        {/* Palabra destacada */}
        <div className="overflow-hidden mb-8">
          <motion.span 
            initial={{ y: "120%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl italic font-light text-[#d4af37] font-serif tracking-wide block"
          >
            lo Sublime
          </motion.span>
        </div>

        {/* Línea decorativa */}
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 1.2 }}
          className="h-[1.5px] w-16 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent my-10"
        ></motion.div>

        {/* Descripción elegante */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 1 }}
          className="max-w-2xl text-center text-[11px] font-light tracking-[0.4em] text-neutral-300 uppercase leading-relaxed"
        >
          Donde la materia prima se rinde ante la técnica.<br />
          <span className="text-[#d4af37]/85">Una experiencia sensorial sin igual.</span>
        </motion.p>

        {/* Scroll Indicator - Premium */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="mt-40 group cursor-pointer flex flex-col items-center"
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
      </section>

      {/* Viñeta para profundidad */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none" />
    </main>
  );
}