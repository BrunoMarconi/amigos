"use client";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import CardMenu from "./components/MenuCard";
import { MENU_DATA } from "./data/menu";
import { useState, useMemo } from "react";

export default function Menu() {
  const [categoriaActiva, setCategoriaActiva] = useState('entrantes');
  
  const productosFiltrados = useMemo(() => 
    MENU_DATA.filter(item => item.categoria === categoriaActiva),
    [categoriaActiva]
  );

  const categorias = [
    { id: 'entrantes', label: 'Entrantes', desc: 'El inicio del viaje' },
    { id: 'burgers', label: 'Burgers', desc: 'Materia prima noble' },
    { id: 'ensaladas', label: 'Huerta', desc: 'Frescura orgánica' },
    { id: 'bebidas', label: 'Bodega', desc: 'Elíxires seleccionados' }
  ];

  return (
    <section id="menu" className="relative min-h-screen bg-[#050505] text-[#f4f4f4] py-32 lg:py-48 overflow-hidden">
      {/* Luces de ambiente sutiles */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#c5a35d]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#c5a35d]/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <header className="mb-24 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] uppercase tracking-[1em] text-[#c5a35d] block mb-8 font-medium"
          >
            ✦ Menú Degustación ✦
          </motion.span>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl font-serif font-extralight tracking-tight text-white/90"
          >
            La <span className="italic text-[#c5a35d]">Colección</span>
          </motion.h2>
          
          <div className="mt-10 flex flex-col items-center">
            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-[#c5a35d]/50 to-transparent" />
            <p className="mt-8 text-[11px] tracking-[0.5em] text-zinc-500 uppercase max-w-xs leading-relaxed font-light">
              Donde cada ingrediente cuenta una historia de excelencia.
            </p>
          </div>
        </header>

        {/* Navegación Estilo Concierge */}
        <nav className="flex flex-wrap justify-center gap-x-12 gap-y-6 pb-24 border-b border-white/5">
          <LayoutGroup id="nav">
            {categorias.map((cat) => (
              <button 
                key={cat.id}
                onClick={() => setCategoriaActiva(cat.id)}
                className="group relative flex flex-col items-center"
              >
                <span className={`text-[10px] uppercase tracking-[0.4em] transition-all duration-700 ${
                  categoriaActiva === cat.id ? "text-[#c5a35d]" : "text-zinc-500 group-hover:text-zinc-300"
                }`}>
                  {cat.label}
                </span>
                
                {categoriaActiva === cat.id && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute -bottom-4 w-1 h-1 bg-[#c5a35d] rotate-45"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </LayoutGroup>
        </nav>

        {/* Grid de Productos Refinado */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20 pt-24"
        >
          <AnimatePresence mode="popLayout">
            {productosFiltrados.map((producto) => (
              <motion.div
                key={producto.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
              >
                <CardMenu {...producto} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}