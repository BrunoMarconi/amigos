import { Metadata } from "next";
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
    <main 
      className="min-h-screen text-[#f5f5f5] selection:bg-[#d4af37] selection:text-[#0f0f0f] font-light relative overflow-hidden bg-black"
    >
      {/* Imagen de fondo optimizada */}
      <picture>
        <source media="(min-width: 768px)" srcSet="/image2.webp" type="image/webp" />
        <img
          src="/image.webp"
          alt="Restaurante de lujo"
          className="absolute inset-0 w-full h-full object-cover z-0"
          loading="eager"
          decoding="async"
        />
      </picture>

      {/* Overlay oscuro con gradiente lujo mejorado */}
      <div className="absolute inset-0 z-5 bg-gradient-to-b from-black/35 via-black/55 to-black/75"></div>

      {/* Efecto de luz superior premium */}
      <div className="absolute top-0 left-0 right-0 h-[500px] z-0 bg-gradient-to-b from-[#d4af37]/8 via-[#d4af37]/2 to-transparent pointer-events-none"></div>

      {/* Contenido Principal */}
      <section className="relative flex flex-col items-center justify-center pt-48 px-6 z-10 min-h-screen">
        <HeroClient />
      </section>

      {/* Viñeta para profundidad */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none" />
    </main>
  );
}