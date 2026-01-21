import { Metadata } from "next";
import Image from "next/image"; // Importante para la optimización automática
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
    <main className="min-h-screen text-[#f5f5f5] selection:bg-[#d4af37] selection:text-[#0f0f0f] font-light relative overflow-hidden bg-black">
      
      {/* Imagen de fondo optimizada con Next.js Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/image.webp" // Usa la imagen de mejor calidad aquí
          alt="Restaurante de lujo"
          fill // Ocupa todo el contenedor absolute
          priority // Fuerza la carga inmediata (Clave para el 95+)
          quality={85} // Balance perfecto entre lujo y peso
          className="object-cover"
          sizes="100vw"
          // fetchpriority="high" // Solo si tu versión de Next lo soporta directamente en el tag
        />
      </div>

      {/* Overlay oscuro con gradiente lujo mejorado */}
      <div className="absolute inset-0 z-[5] bg-gradient-to-b from-black/35 via-black/55 to-black/75"></div>

      {/* Efecto de luz superior premium */}
      <div className="absolute top-0 left-0 right-0 h-[500px] z-[6] bg-gradient-to-b from-[#d4af37]/8 via-[#d4af37]/2 to-transparent pointer-events-none"></div>

      {/* Contenido Principal */}
      <section className="relative flex flex-col items-center justify-center pt-48 px-6 z-10 min-h-screen">
        <HeroClient />
      </section>

      {/* Viñeta para profundidad */}
      <div className="fixed inset-0 z-[1] bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none" />
    </main>
  );
}