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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="group cursor-pointer"
    >
      {/* Contenedor Imagen: Premium */}
      <div className="relative aspect-[3/4] mb-10 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] overflow-hidden border border-[#d4af37]/15 group-hover:border-[#d4af37]/40 transition-all duration-1000 shadow-lg">
        {/* Efecto de luz premium en hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/0 via-transparent to-[#d4af37]/0 group-hover:from-[#d4af37]/10 group-hover:via-transparent group-hover:to-[#d4af37]/5 transition-all duration-1000 z-10 pointer-events-none" />
        
        <Image 
          src={imagen} 
          alt={nombre} 
          fill 
          className="object-contain p-10 grayscale-[40%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1200 ease-out"
        />
        
        {/* Overlay elegante al hacer hover */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-5" />
        
        {/* Línea dorada decorativa en el borde inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>

      {/* Información: Tipografía refinada */}
      <div className="space-y-6 text-center">
        {/* Nombre del producto */}
        <div className="flex flex-col items-center gap-4">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-2xl md:text-3xl font-serif font-light uppercase tracking-[0.08em] text-white/95 group-hover:text-[#d4af37] transition-colors duration-700"
          >
            {nombre}
          </motion.h3>
          
          {/* Línea decorativa mejorada */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-[1.5px] w-12 bg-gradient-to-r from-transparent via-[#d4af37]/70 to-transparent group-hover:w-16 transition-all duration-700"
          />
          
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="text-lg font-serif italic text-[#d4af37]/85 font-light tracking-wide"
          >
            {precio}
          </motion.span>
        </div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-[11px] text-neutral-300 leading-relaxed max-w-[290px] mx-auto font-light tracking-[0.08em] uppercase"
        >
          {descripcion}
        </motion.p>

        {/* Acción: Link elegante */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="pt-6 overflow-hidden"
        >
          <motion.button
            whileHover={{ letterSpacing: "0.1em" }}
            className="text-[9px] tracking-[0.6em] uppercase text-neutral-400 inline-block border-b-2 border-neutral-600 pb-2 group-hover:border-[#d4af37] group-hover:text-[#d4af37] transition-all duration-700 font-light hover:shadow-[0_4px_12px_rgba(212,175,55,0.15)]"
          >
            ✦ Explorar Detalles ✦
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  )
}
    
  
