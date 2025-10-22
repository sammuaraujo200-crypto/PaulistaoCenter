// src/components/ui/CarrosselCatalogo.tsx
import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function CarrosselCatalogo() {
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Defina o número e extensão correta das imagens do seu /public/catalogo/
  const imagens = Array.from({ length: 10 }, (_, i) => `/catalogo/${i + 1}.jpg`);

  const BULLETS = 4;
  const imagesPerGroup = Math.ceil(imagens.length / BULLETS);

  const groupForIndex = (index: number) => Math.floor(index / imagesPerGroup);

  return (
    <div className="relative bg-white border rounded-2xl shadow-lg overflow-hidden h-full">
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
                className="w-full h-full object-contain bg-white transition-transform duration-300 hover:scale-105"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
              {/* Gradiente discreto apenas para texto */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-10" />
              <div className="absolute left-4 bottom-3 text-white z-20">
                <h3 className="text-lg font-bold"></h3>
                <p className="text-xs opacity-80"></p>
              </div>
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

      {/* Paginação personalizada */}
      <div className="px-4 py-3 bg-white relative z-20 border-t shadow-inner">
        <div className="flex items-center justify-between">
          <div className="text-sm font-medium text-secondary">Destaques do Catálogo</div>
          <div className="flex items-center gap-2">
            {Array.from({ length: BULLETS }).map((_, bIndex) => {
              const isActive = groupForIndex(activeIndex) === bIndex;
              return (
                <button
                  key={bIndex}
                  onClick={() => {
                    const target = Math.min(
                      bIndex * imagesPerGroup,
                      imagens.length - 1
                    );
                    swiperRef.current?.slideToLoop(target, 400);
                    setActiveIndex(target);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    isActive ? "bg-primary scale-110" : "bg-gray-300"
                  }`}
                  aria-label={`Ir para grupo ${bIndex + 1}`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
