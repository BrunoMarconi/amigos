"use client";

import { motion } from "framer-motion";

export default function LuxuryMapSection() {
  return (
    <section className="relative bg-gradient-to-b from-[#050505] to-[#0f0f0f] py-16 md:py-32 px-4 md:px-6 overflow-hidden border-t border-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        
        {/* Encabezado de Sección */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6 md:gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:max-w-2xl"
          >
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.8em] md:tracking-[1em] text-[#d4af37] mb-3 md:mb-4 block font-light">
              ✦ Localización ✦
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif font-light tracking-tight leading-none text-white mb-2">
              Privacidad
            </h2>
            <p className="text-lg sm:text-xl md:text-3xl font-serif font-light italic text-[#d4af37]/70 tracking-wide">
              & Distinción
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-left md:text-right w-full md:w-auto"
          >
            <p className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] md:tracking-[0.5em] text-zinc-400 leading-relaxed font-light">
              Calle de la Exclusividad, 42<br />
              <span className="text-[#d4af37]/70">Salamanca District, Madrid</span>
            </p>
          </motion.div>
        </div>

        {/* Mapa Simplificado */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative h-64 sm:h-80 md:h-[450px] w-full rounded-sm overflow-hidden border border-[#d4af37]/20 bg-zinc-950"
        >
          {/* Mapa sin filtros pesados */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.1994276106684!2d-3.6847!3d40.426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422899dc90366b%3A0xa190e3860538f71b!2sC.%20de%20Jorge%20Juan%2C%20Madrid!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses"
            className="w-full h-full border-0"
            style={{ filter: "grayscale(1) brightness(0.7)" }}
            loading="lazy"
          />

          {/* Overlay sutilmente oscuro */}
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />

          

          {/* Etiqueta simple */}
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8">
            <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[#d4af37] font-light">
              ✦ AETHER ATELIER ✦
            </p>
          </div>
        </motion.div>

        {/* CTA Button */}
        <div className="mt-8 md:mt-12 flex justify-center">
          <motion.a 
            whileHover={{ letterSpacing: "0.6em" }}
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[9px] sm:text-[10px] uppercase tracking-[0.4em] sm:tracking-[0.5em] text-zinc-400 hover:text-[#d4af37] transition-colors duration-300 border-b border-zinc-700 hover:border-[#d4af37] pb-2 font-light"
          >
            ✦ Ver Ubicación ✦
          </motion.a>
        </div>

      </div>
    </section>
  );
}