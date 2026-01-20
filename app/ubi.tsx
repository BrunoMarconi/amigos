"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export default function LuxuryMapSection() {
  const [showMap, setShowMap] = useState(false);

  return (
    <section className="relative bg-[#050505] py-24 md:py-40 px-6 overflow-hidden border-t border-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        
        {/* Encabezado con carga diferida */}
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

        {/* CONTENEDOR DE MAPA OPTIMIZADO */}
        <div className="relative h-[400px] md:h-[550px] w-full rounded-sm overflow-hidden border border-[#d4af37]/10 bg-zinc-950 group">
          
          {!showMap ? (
            /* VISTA PREVIA: Una imagen estática (puedes usar una captura elegante de tu mapa) */
            <div className="relative w-full h-full cursor-pointer overflow-hidden" onClick={() => setShowMap(true)}>
              <Image 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?q=80&w=2000" // Sustituye por una captura de tu mapa en B/N
                alt="Ubicación AETHER"
                fill
                className="object-cover grayscale brightness-[0.4] transition-transform duration-[3s] group-hover:scale-105"
              />
              
              {/* Botón de activación refinado */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 backdrop-blur-[2px] transition-all group-hover:backdrop-blur-none">
                <div className="w-12 h-12 rounded-full border border-[#d4af37]/30 flex items-center justify-center mb-4">
                  <div className="w-2 h-2 bg-[#d4af37] rounded-full animate-pulse" />
                </div>
                <span className="text-[9px] uppercase tracking-[0.6em] text-white opacity-60 group-hover:opacity-100 transition-opacity">
                  Activar Mapa Interactivo
                </span>
              </div>
            </div>
          ) : (
            /* EL MAPA REAL: Solo se carga tras hacer clic */
            <iframe 
              src="https://www.google.com/maps/embed?pb=..." // TU URL DE EMBED AQUÍ
              className="w-full h-full border-0"
              style={{ filter: "grayscale(1) invert(0.9) brightness(0.8)" }}
              allowFullScreen
            />
          )}

          {/* Gradiente de profundidad fijo */}
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.6)]" />
        </div>

        {/* Footer */}
        <div className="mt-12 flex justify-center">
          <a 
            href="https://maps.google.com" 
            target="_blank" 
            className="text-[10px] uppercase tracking-[0.5em] text-zinc-500 hover:text-[#d4af37] border-b border-zinc-800 transition-all pb-2"
          >
            Abrir en Google Maps ✦
          </a>
        </div>
      </div>
    </section>
  );
}