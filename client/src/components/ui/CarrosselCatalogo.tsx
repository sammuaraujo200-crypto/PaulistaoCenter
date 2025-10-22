// src/components/ui/CarrosselCatalogo.tsx
import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function CarrosselCatalogo() {
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // até 70 imagens (pode aumentar depois)
  const imagens = Array.from({ length: 70 }, (_, i) => `/catalogo/${i + 1}.jpg`);
  const BULLETS = 5; // número fixo de bolinhas

  return (
    <div className="relative rounded-2xl overflow-hidden bg-white h-full">
      <Swiper
        modules={[Navigation, Autoplay]}
        onSwiper={(s) => (swiperRef.current = s)}
        onSlideChange={(s) => setActiveIndex(s.realIndex ?? s.activeIndex)}
        spaceBetween={10}
        slidesPerView={1}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        loop
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="w-full"
      >
        {imagens.map((src, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative aspect-[4/3] overflow-hidden bg-white">
              <img
                src={src}
                alt={`Produto ${idx + 1}`}
                className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                loading="lazy"
                onError={(e) => ((e.target as HTMLImageElement).style.display = "none")}
              />
              {/* Gradiente escuro somente sobre a imagem */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-whitez-10 " />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Botões de navegação */}
      <button className="prev-btn absolute top-1/2 left-2 z-30 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 rounded-full p-2 shadow-md">
        ❮
      </button>
      <button className="next-btn absolute top-1/2 right-2 z-30 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 rounded-full p-2 shadow-md">
        ❯
      </button>

      {/* Rodapé — igual ao “Ver produtos” */}
<div className="px-6 py-4 bg-white border-t border-white/100 rounded-b-2xl z-20 relative">
  <div className="flex items-center justify-between">
    <div>
      <h3 className="text-base font-semibold text-blue-800">Destaques do Catálogo</h3>
    </div>
    <div className="flex items-center gap-2">
      {Array.from({ length: BULLETS }).map((_, i) => {
        const isActive = activeIndex % BULLETS === i;
        return (
          <div
            key={i}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${
              isActive ? "bg-primary scale-110" : "bg-gray-300"
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
