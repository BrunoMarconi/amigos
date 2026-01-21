"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface CardMenuProps {
  nombre: string;
  precio: string;
  descripcion: string;
  imagen: string;
}

export default function CardMenu({ nombre, precio, descripcion, imagen }: CardMenuProps) {
  return (
    <div className="group flex flex-col items-center">
      {/* Frame de la Imagen */}
      <div className="relative w-full aspect-[4/5] mb-10 overflow-hidden bg-[#0a0a0a] ring-[0.5px] ring-white/10 group-hover:ring-[#d4af37]/40 transition-all duration-[1.5s]">
        
        {/* Efecto de Profundidad Cinemático */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
        
        <Image
          src={imagen}
          alt={nombre}
          fill
          className="object-cover scale-[1.01] group-hover:scale-110 transition-transform duration-[3s] cubic-bezier(0.16, 1, 0.3, 1)"
        />

        {/* Brillo de Cristal al Hover */}
        <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[2s]" />
        </div>
      </div>

      {/* Contenido Editorial */}
      <div className="w-full text-center px-2">
        <div className="flex flex-col items-center gap-3">
          <h3 className="text-xl font-serif font-light tracking-[0.1em] text-white/90 uppercase transition-colors duration-700 group-hover:text-[#d4af37]">
            {nombre}
          </h3>
          
          <div className="w-8 h-[1px] bg-white/10 group-hover:w-12 group-hover:bg-[#d4af37]/50 transition-all duration-700" />
          
          <p className="text-[11px] text-zinc-500 font-light tracking-[0.2em] leading-relaxed italic max-w-[280px]">
            {descripcion}
          </p>

          <span className="mt-4 text-[14px] font-serif text-[#d4af37] tracking-widest">
            {precio}
          </span >
        </div>
      </div>
    </div>
  );
}