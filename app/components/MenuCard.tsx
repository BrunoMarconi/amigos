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
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="group cursor-pointer"
    >
      {/* Contenedor Imagen: Premium */}
      <div className="relative aspect-[4/5] mb-8 bg-[#0a0a0a] overflow-hidden border border-[#c5a35d]/10 group-hover:border-[#c5a35d]/30 transition-all duration-700">
        {/* Efecto de luz en hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#c5a35d]/0 via-transparent to-[#c5a35d]/0 group-hover:from-[#c5a35d]/5 group-hover:to-[#c5a35d]/5 transition-all duration-700 z-10 pointer-events-none" />
        
        <Image 
          src={imagen} 
          alt={nombre} 
          fill 
          className="object-contain p-8 grayscale-[30%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out"
        />
        
        {/* Overlay sutil al hacer hover */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-5" />
      </div>

      {/* Información: Tipografía refinada */}
      <div className="space-y-4 text-center">
        {/* Nombre del producto */}
        <div className="flex flex-col items-center gap-3">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl font-serif font-light uppercase tracking-wider text-white/95 group-hover:text-[#c5a35d] transition-colors duration-500"
          >
            {nombre}
          </motion.h3>
          
          {/* Línea decorativa */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="h-[1px] w-8 bg-gradient-to-r from-transparent via-[#c5a35d] to-transparent"
          />
          
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-sm font-serif italic text-[#c5a35d] font-light"
          >
            {precio}
          </motion.span>
        </div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-[10px] text-neutral-400 leading-relaxed max-w-[280px] mx-auto font-light tracking-[0.15em] uppercase"
        >
          {descripcion}
        </motion.p>

        {/* Acción: Link elegante */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="pt-4 overflow-hidden"
        >
          <motion.span 
            className="text-[8px] tracking-[0.5em] uppercase text-neutral-500 inline-block border-b border-neutral-700 pb-2 group-hover:border-[#c5a35d] group-hover:text-[#c5a35d] transition-all duration-500"
          >
            Ver detalles
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  )
}
    
  
