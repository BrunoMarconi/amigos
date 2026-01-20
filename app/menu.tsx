// components/Menu.tsx
"use client"
import { motion, AnimatePresence } from "framer-motion"
import CardMenu from "./components/MenuCard"
import { MENU_DATA } from "./data/menu"
import { useState } from "react"

export default function Menu() {
  const [categoriaActiva, setCategoriaActiva] = useState('burgers');
  const productosFiltrados = MENU_DATA.filter(item => item.categoria === categoriaActiva);

  return (
    <section className="relative min-h-screen bg-[#050505] text-[#f4f4f4] py-24">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Encabezado Minimalista de Lujo */}
        <header className="mb-24 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] uppercase tracking-[0.5em] text-zinc-500 mb-4 block"
          >
            Since 2024 — Exclusive Selection
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-light tracking-widest uppercase font-serif">
            The <span className="italic font-normal">Menu</span>
          </h2>
          <div className="w-12 h-[1px] bg-zinc-700 mx-auto mt-8" />
        </header>

        {/* Navegación Refinada */}
        <nav className="flex justify-center gap-12 overflow-x-auto pb-16 no-scrollbar">
          {['entrantes', 'burgers', 'ensaladas', 'bebidas'].map((cat) => (
            <button 
              key={cat}
              onClick={() => setCategoriaActiva(cat)}
              className={`relative py-2 text-[11px] uppercase tracking-[0.3em] transition-colors duration-500 ${
                categoriaActiva === cat ? "text-white" : "text-zinc-600 hover:text-zinc-400"
              }`}
            >
              {cat}
              {categoriaActiva === cat && (
                <motion.div 
                  layoutId="underline" 
                  className="absolute bottom-0 left-0 w-full h-[1px] bg-white"
                />
              )}
            </button>
          ))}
        </nav>

        {/* Grid con espaciado amplio */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          <AnimatePresence mode="popLayout">
            {productosFiltrados.map((producto) => (
              <CardMenu key={producto.id} {...producto} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}