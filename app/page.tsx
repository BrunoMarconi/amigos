"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function LuxuryRestaurantHero() {
  return (
    <main 
      className="min-h-screen text-[#f5f5f5] selection:bg-[#c5a35d] selection:text-black font-light relative overflow-hidden"
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

      {/* Overlay oscuro con gradiente lujo */}
      <div className="absolute inset-0 z-5 bg-gradient-to-b from-black/40 via-black/60 to-black/70"></div>

      {/* Efecto de luz superior sutil */}
      <div className="absolute top-0 left-0 right-0 h-96 z-0 bg-gradient-to-b from-[#c5a35d]/5 via-transparent to-transparent pointer-events-none"></div>

      {/* Contenido Principal */}
      <section className="relative flex flex-col items-center justify-center pt-40 px-6 z-10 min-h-screen">
        {/* Etiqueta superior */}
        <div className="overflow-hidden mb-6">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-[9px] tracking-[0.8em] uppercase opacity-50 font-extralight"
          >
            ✦ Excelencia Gastronómica ✦
          </motion.span>
        </div>

        {/* Línea decorativa */}
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="h-[1px] w-12 bg-gradient-to-r from-transparent via-[#c5a35d] to-transparent mb-8"
        ></motion.div>

        {/* Título Principal */}
        <div className="overflow-hidden mb-2">
          <motion.h2 
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-9xl font-serif font-extralight text-center tracking-tighter leading-[0.9]"
          >
            El arte de
          </motion.h2>
        </div>

        {/* Palabra destacada */}
        <div className="overflow-hidden mb-6">
          <motion.span 
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl italic font-extralight text-[#c5a35d] font-serif tracking-tight block"
          >
            lo sublime
          </motion.span>
        </div>

        {/* Línea decorativa */}
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="h-[1px] w-12 bg-gradient-to-r from-transparent via-[#c5a35d] to-transparent my-8"
        ></motion.div>

        {/* Descripción elegante */}
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="max-w-2xl text-center text-[10px] font-extralight tracking-[0.3em] text-neutral-400 uppercase leading-loose"
        >
          Donde la materia prima se rinde ante la técnica. <br />
          <span className="text-[#c5a35d] text-opacity-80">Una experiencia sensorial sin igual.</span>
        </motion.p>

        {/* Scroll Indicator - Mejorado */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-32 group cursor-pointer flex flex-col items-center"
        >
          <span className="text-[7px] tracking-[0.6em] uppercase text-neutral-500 group-hover:text-[#c5a35d] transition-colors duration-500 mb-6">
            Descubrir
          </span>
          <div className="relative h-24 w-[1px] bg-gradient-to-b from-[#c5a35d]/0 via-[#c5a35d]/50 to-[#c5a35d]/0 overflow-hidden">
            <motion.div 
              animate={{ y: ["-100%", "100%"] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-1/3 bg-gradient-to-b from-transparent via-[#c5a35d] to-transparent"
            />
          </div>
        </motion.div>
      </section>

      {/* Viñeta para profundidad */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none" />
    </main>
  );
}