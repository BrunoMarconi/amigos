"use client";

import { motion } from "framer-motion";
import Image from "next/image"; // <--- Esta es la línea que falta

export default function LuxuryRestaurantHero() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#f5f5f5] selection:bg-[#c5a35d] selection:text-black font-light">
      

      {/* Contenido Principal */}
      <section className="relative flex flex-col items-center justify-center pt-40 px-6 z-10">
        {/* ... (resto de tu contenido de texto) */}
        <div className="overflow-hidden mb-4">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-[10px] tracking-[0.6em] uppercase opacity-40"
          >
            Sinfonía de sabores
          </motion.span>
        </div>

        <div className="overflow-hidden">
          <motion.h2 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-7xl md:text-9xl font-serif font-light text-center tracking-tighter leading-[0.85]"
          >
            El arte de <br />
            <span className="italic font-extralight opacity-90 text-[#c5a35d]">lo sublime.</span>
          </motion.h2>
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1.5 }}
          className="mt-14 max-w-lg text-center text-[11px] font-extralight tracking-[0.25em] text-neutral-500 uppercase leading-loose"
        >
          Donde la materia prima se rinde ante la técnica. <br />
          Una invitación a detener el tiempo.
        </motion.p>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 2 }}
          className="mt-24 group cursor-pointer flex flex-col items-center"
        >
          <div className="relative h-32 w-[1px] bg-white/10 overflow-hidden">
            <motion.div 
              animate={{ y: ["-100%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-1/2 bg-gradient-to-b from-transparent via-[#c5a35d] to-transparent"
            />
          </div>
          <span className="mt-6 text-[8px] tracking-[0.5em] uppercase text-zinc-600 group-hover:text-white transition-colors duration-500">
            Descubrir la carta
          </span>
        </motion.div>
      </section>

      {/* Imagen de Fondo Corregida */}
      <motion.div 
  initial={{ scale: 1.1, opacity: 0 }}
  animate={{ scale: 1, opacity: 0.25 }} // Opacidad baja para un look más solemne y elegante
  transition={{ duration: 3, ease: [0.16, 1, 0.3, 1] }}
  className="fixed inset-0 -z-10"
>
  <Image 
    src="https://instagram.fagp1-1.fna.fbcdn.net/v/t39.30808-6/611165391_122192549540758462_1432081643085936019_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=109&oh=00_Afp-Vl98jMjN2OTxSVT3X0CjiHoS89Roa7tPv8SOp5alLA&oe=69753585" 
    alt="AETHER Gastronomy"
    fill
    priority
    className="object-cover grayscale-[40%] brightness-[0.6]"
  />
</motion.div>

      {/* Viñeta para dar profundidad */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] pointer-events-none" />
    </main>
  );
}