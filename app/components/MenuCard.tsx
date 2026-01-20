// components/CardMenu.tsx
"use client"
import { motion } from "framer-motion"
import Image from "next/image"
type Props = {
  nombre: string;   
  precio: string;
  descripcion: string;
  imagen: string;
}

export default function CardMenu({ nombre, precio, descripcion, imagen }: Props) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group cursor-pointer"
    >
      {/* Contenedor Imagen: Minimalista y Amplio */}
      <div className="relative aspect-[4/5] mb-8 bg-[#0a0a0a] overflow-hidden border border-white/[0.03]">
        <Image 
          src={imagen} 
          alt={nombre} 
          fill 
          className="object-contain p-8 grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
        />
        
        {/* Overlay sutil al hacer hover */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Información: Tipografía refinada */}
      <div className="space-y-4 text-center">
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-xl font-light uppercase tracking-widest text-white/90">
            {nombre}
          </h3>
          <span className="text-sm font-serif italic text-zinc-500">{precio}</span>
        </div>
        
        <p className="text-[11px] text-zinc-600 leading-relaxed max-w-[250px] mx-auto font-light tracking-wide uppercase">
          {descripcion}
        </p>

        {/* Acción: Un link elegante en lugar de un botón tosco */}
        <div className="pt-2 overflow-hidden">
          <span className="text-[9px] tracking-[0.4em] uppercase text-zinc-400 inline-block border-b border-zinc-800 pb-1 group-hover:border-white transition-colors duration-500">
            Details — Order
          </span>
        </div>
      </div>
    </motion.div>
  )
}