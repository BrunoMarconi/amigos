"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export default function LuxuryMapSection() {
  const [showMap, setShowMap] = useState(false);

  return (
    <section className="relative bg-[#050505] py-24 md:py-40 px-6 overflow-hidden border-t border-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        
        {/* Encabezado */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-[11px] uppercase tracking-[1em] text-[#d4af37] mb-6 block font-light">
              ✦ Localización ✦
            </span>
            <h2 className="text-5xl md:text-7xl font-serif font-light tracking-tight text-white mb-2">
              Privacidad <span className="italic font-extralight text-[#d4af37]/70 italic">& Distinción</span>
            </h2>
          </motion.div>

          <div className="text-left md:text-right">
            <p className="text-[10px] uppercase tracking-[0.5em] text-zinc-500 leading-relaxed font-light">
              Calle de la Exclusividad, 42<br />
              <span className="text-[#d4af37]/50 italic">Salamanca District, Madrid</span>
            </p>
          </div>
        </div>

        {/* CONTENEDOR DE MAPA */}
        <div 
          onClick={() => setShowMap(true)} // AHORA SÍ CAMBIA EL ESTADO
          className="relative h-[400px] md:h-[550px] w-full rounded-sm overflow-hidden border border-[#d4af37]/10 bg-zinc-950 group cursor-pointer"
        >
          {!showMap ? (
            <>
              {/* Fondo Refinado mientras no hay imagen/mapa */}
              <div className="absolute inset-0 bg-[#0a0a0a] flex items-center justify-center">
                 {/* Aquí puedes poner una imagen local o de un host configurado */}
                 <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_#d4af37_0%,_transparent_70%)]" />
              </div>
              
              {/* Botón de activación */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 backdrop-blur-[2px] transition-all group-hover:backdrop-blur-none z-20">
                <motion.div 
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="w-16 h-16 rounded-full border border-[#d4af37]/30 flex items-center justify-center mb-6"
                >
                  <div className="w-2 h-2 bg-[#d4af37] rounded-full shadow-[0_0_15px_#d4af37]" />
                </motion.div>
                <span className="text-[10px] uppercase tracking-[0.8em] text-white opacity-60 group-hover:opacity-100 transition-opacity">
                  Revelar Mapa Interactivo
                </span>
              </div>
            </>
          ) : (
            /* EL MAPA REAL: Asegúrate de usar una URL de Embed válida de Google Maps */
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.3075622782007!2d-4.414415!3d36.715174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72f7ebd78daba9%3A0xf83e10e0ff2963d1!2sAmigos%20Muelle%20Uno!5e0!3m2!1ses!2ses!4v1769013089641!5m2!1ses!2ses"
              className="w-full h-full border-0 animate-in fade-in duration-1000"
              style={{ filter: "grayscale(1) invert(0.9) brightness(0.8) contrast(1.2)" }}
              allowFullScreen
              loading="lazy"
            />
          )}

          {/* Gradiente de profundidad */}
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.8)] z-10" />
        </div>

        {/* Footer */}
        <div className="mt-12 flex justify-center">
          <a 
            href="https://maps.app.goo.gl/Zw1Mtrygaje8RkY29" // USA HTTPS SIEMPRE
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[10px] uppercase tracking-[0.5em] text-zinc-500 hover:text-[#d4af37] border-b border-zinc-800 hover:border-[#d4af37] transition-all pb-2"
          >
            Abrir en Google Maps ✦
          </a>
        </div>
      </div>
    </section>
  );
}