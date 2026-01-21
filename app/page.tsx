import { Metadata } from "next";
import Image from "next/image";
import HeroClient from "./hero-client";

export const metadata: Metadata = {
  title: "El Arte de lo Sublime - Restaurante de Lujo",
  description: "Donde la materia prima se rinde ante la técnica. Una experiencia sensorial sin igual.",
  openGraph: {
    title: "El Arte de lo Sublime",
    description: "Restaurante de lujo - experiencia gastronómica premium",
    images: [{ url: "/image.webp" }],
  },
};

export default function LuxuryRestaurantHero() {
  return (
    <main className="min-h-[100dvh] text-[#f5f5f5] selection:bg-[#d4af37] selection:text-[#0f0f0f] font-light relative overflow-hidden bg-[#050505]">
      
      {/* Fondo optimizado */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/image.webp"
          alt="Experiencia Gastronómica"
          fill
          priority
          quality={95}
          className="object-cover object-center" 
          sizes="100vw"
        />
      </div>

      {/* Capas de atmósfera */}
      <div className="absolute inset-0 z-[5] bg-gradient-to-b from-black/50 via-black/30 to-black/80"></div>
      
      {/* Resplandor superior sutil */}
      <div className="absolute top-0 left-0 right-0 h-[60vh] z-[6] bg-[radial-gradient(50%_50%_at_50%_0%,_rgba(212,175,55,0.08)_0%,_transparent_100%)] pointer-events-none"></div>

      {/* Contenido: Elevación balanceada */}
      <section className="relative z-10 flex flex-col items-center px-6 
        /* Elevación sutil: ni muy arriba, ni centrado */
        justify-start pt-[25vh] md:pt-[28vh] 
        min-h-[100dvh] text-center">
        
        <div className="w-full max-w-4xl mx-auto">
          <HeroClient />
        </div>
        
      </section>

      {/* Indicador de continuidad minimalista */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center opacity-40">
        <div className="w-[1px] h-10 bg-gradient-to-b from-[#d4af37] to-transparent"></div>
      </div>

      {/* Profundidad de campo */}
      <div className="fixed inset-0 z-[1] bg-gradient-to-tr from-black/40 via-transparent to-black/20 pointer-events-none" />
    </main>
  );
}