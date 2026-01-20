"use client";

import { motion } from "framer-motion";

export default function LuxuryMapSection() {
  return (
    <section className="relative bg-gradient-to-b from-[#050505] to-[#0f0f0f] py-40 px-6 overflow-hidden border-t border-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        
        {/* Encabezado de Sección */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-[11px] uppercase tracking-[1em] text-[#d4af37] mb-6 block font-light">
              ✦ Localización ✦
            </span>
            <h2 className="text-6xl md:text-8xl font-serif font-light tracking-tight leading-none text-white mb-2">
              Privacidad
            </h2>
            <p className="text-3xl md:text-4xl font-serif font-extralight italic text-[#d4af37]/80 tracking-wide">
              & Distinción Absoluta
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-right hidden md:block"
          >
            <p className="text-[11px] uppercase tracking-[0.5em] text-zinc-400 leading-relaxed font-light">
              Calle de la Exclusividad, 42<br />
              <span className="text-[#d4af37]/70">Salamanca District, Madrid</span>
            </p>
          </motion.div>
        </div>

        {/* El Mapa "Lujoso" */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="relative h-[650px] w-full rounded-sm overflow-hidden border border-[#d4af37]/15 group shadow-2xl bg-zinc-900"
        >
          {/* Capa 1: El Mapa con Filtros de Arte */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.1994276106684!2d-3.6847!3d40.426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422899dc90366b%3A0xa190e3860538f71b!2sC.%20de%20Jorge%20Juan%2C%20Madrid!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses"
            className="w-full h-full border-0 transition-all duration-[2000ms] group-hover:scale-105"
            style={{ filter: "grayscale(1) invert(1) contrast(1.2) brightness(0.45)" }}
            loading="lazy"
          />

          {/* Capa 2: Textura de Grano de Película */}
          <div className="absolute inset-0 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />

          {/* Capa 3: Overlay de Gradiente Radial (Enfoque central) */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#050505_85%)]" />

          {/* Capa 4: Pin de Lujo Personalizado */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div 
              animate={{ 
                scale: [1, 1.15, 1],
                opacity: [0.6, 1, 0.6] 
              }}
              transition={{ duration: 5, repeat: Infinity }}
              className="relative flex items-center justify-center"
            >
              <div className="w-16 h-16 rounded-full border border-[#d4af37]/40 bg-[#d4af37]/5 backdrop-blur-md" />
              <motion.div 
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute w-3 h-3 bg-gradient-to-br from-[#d4af37] to-[#c9a961] rounded-full shadow-[0_0_30px_#d4af37]" 
              />
            </motion.div>
          </div>

          {/* Capa 5: Etiqueta Flotante */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="absolute bottom-12 left-12 backdrop-blur-xl bg-black/60 border border-[#d4af37]/20 p-8 max-w-[280px] hidden md:block"
          >
            <h4 className="text-[11px] uppercase tracking-[0.6em] text-[#d4af37] mb-3 font-light">
              ✦ AETHER ATELIER
            </h4>
            <p className="text-[12px] text-zinc-300 font-light tracking-[0.2em] leading-relaxed">
              Un refugio gastronómico donde el tiempo se detiene. Acceso bajo reserva previa.
            </p>
          </motion.div>
        </motion.div>

        {/* Footer de sección: Botón de acción */}
        <div className="mt-16 flex justify-center">
           <motion.a 
            whileHover={{ scale: 1.05, letterSpacing: "0.7em" }}
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] uppercase tracking-[0.6em] text-zinc-500 hover:text-[#d4af37] transition-all duration-500 border-b border-zinc-800 hover:border-[#d4af37] pb-2 font-light"
          >
            ✦ Obtener Indicaciones — VIP Transfer ✦
          </motion.a>
        </div>

      </div>
    </section>
  );
}