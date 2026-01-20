// components/Menu.tsx
"use client"
import { motion, AnimatePresence } from "framer-motion"
import CardMenu from "./components/MenuCard"
import { MENU_DATA } from "./data/menu"
import { useState } from "react"

export default function Menu() {
  const [categoriaActiva, setCategoriaActiva] = useState('entrantes');
  const productosFiltrados = MENU_DATA.filter(item => item.categoria === categoriaActiva);

  const categorias = [
    { id: 'entrantes', label: 'Entrantes' },
    { id: 'burgers', label: 'Burgers' },
    { id: 'ensaladas', label: 'Ensaladas' },
    { id: 'bebidas', label: 'Bebidas' }
  ];

  return (
    <section className="relative min-h-screen bg-[#050505] text-[#f4f4f4] py-32 overflow-hidden">
      {/* Fondo decorativo sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#c5a35d]/2 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Encabezado de Lujo */}
        <header className="mb-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="text-[9px] uppercase tracking-[0.8em] text-[#c5a35d] block mb-4">
              ✦ Since 2024 ✦
            </span>
          </motion.div>

          {/* Línea decorativa superior */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#c5a35d] to-transparent mx-auto mb-8"
          />

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-extralight tracking-tighter mb-4"
          >
            Nuestra <span className="italic text-[#c5a35d]">Selección</span>
          </motion.h2>

          {/* Línea decorativa inferior */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#c5a35d] to-transparent mx-auto mt-8"
          />

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-[10px] tracking-[0.4em] text-neutral-400 uppercase mt-8"
          >
            Exclusiva selección de platillos refinados
          </motion.p>
        </header>

        {/* Navegación Refinada */}
        <nav className="flex justify-center gap-8 md:gap-16 pb-20 overflow-x-auto no-scrollbar">
          {categorias.map((cat, idx) => (
            <motion.button 
              key={cat.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              onClick={() => setCategoriaActiva(cat.id)}
              className={`relative py-3 text-[10px] uppercase tracking-[0.4em] transition-all duration-500 whitespace-nowrap ${
                categoriaActiva === cat.id 
                  ? "text-[#c5a35d]" 
                  : "text-neutral-500 hover:text-neutral-300"
              }`}
            >
              {cat.label}
              {categoriaActiva === cat.id && (
                <motion.div 
                  layoutId="underline" 
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-[2px] bg-gradient-to-r from-transparent via-[#c5a35d] to-transparent"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </nav>

        {/* Grid de productos con espaciado lujo */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
        >
          <AnimatePresence mode="popLayout">
            {productosFiltrados.map((producto, idx) => (
              <motion.div
                key={producto.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <CardMenu {...producto} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}