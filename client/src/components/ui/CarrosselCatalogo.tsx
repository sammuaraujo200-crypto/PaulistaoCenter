// src/components/ui/CarrosselCatalogo.tsx
import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function CarrosselCatalogo() {
  const IMAGES_COUNT = 25; // ajusta conforme a pasta
  const EXTENSIONS = ["jpg", "jpeg", "png"];

  const imagens = Array.from({ length: IMAGES_COUNT }, (_, i) =>
    EXTENSIONS.map((ext) => `/assets/catalogo/${i + 1}.${ext}`)
  );

  const BULLETS = 5;
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const imagesPerGroup = Math.ceil(IMAGES_COUNT / BULLETS);
  const groupForIndex = (index: number) => Math.floor(index / imagesPerGroup);

  const getValidImage = (paths: string[]) => paths[0];

  return (
    <div className="bg-white dark:bg-card border rounded-2xl shadow-lg overflow-hidden h-full relative">
      <Swiper
        modules={[Navigation, Autoplay]}
        onSwiper={(s) => (swiperRef.current = s)}
        onSlideChange={(s) => setActiveIndex(s.realIndex ?? s.activeIndex)}
        spaceBetween={12}
        slidesPerView={1}
        navigation
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="w-full h-full"
      >
        {imagens.map((srcArray, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl">
              <img
                src={getValidImage(srcArray)}
                alt={`Produto ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
                onError={(e) => ((e.target as HTMLImageElement).style.opacity = "0.02")}
              />

              {/* Overlay escuro */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              {/* Texto sobreposto */}
              <div className="absolute left-4 bottom-4 text-white z-20">
                <h3 className="text-lg md:text-xl font-bold leading-tight drop-shadow-lg">
                  Destaques do Catálogo
                </h3>
                <p className="text-xs md:text-sm opacity-90 drop-shadow-md">
                  Produtos em destaque selecionados
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Corrige fundo branco sobre texto */}
      <div className="relative z-30 px-4 py-3 border-t bg-white">
        <div className="flex items-center justify-between">
          <div className="text-sm font-medium text-secondary">
            Destaques do Catálogo
          </div>

          {/* Bolinhas de navegação */}
          <div className="flex items-center gap-2">
            {Array.from({ length: BULLETS }).map((_, bIndex) => {
              const isActive = groupForIndex(activeIndex) === bIndex;
              return (
                <button
                  key={bIndex}
                  onClick={() => {
                    const target = Math.min(bIndex * imagesPerGroup, IMAGES_COUNT - 1);
                    swiperRef.current?.slideToLoop(target, 400);
                    setActiveIndex(target);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    isActive ? "bg-primary scale-110" : "bg-slate-300"
                  }`}
                />
              );
            })}
          </div>

          <div style={{ width: 32 }} />
        </div>
      </div>

      {/* Ajuste de z-index dos botões do Swiper */}
      <style>{`
        .swiper-button-next, .swiper-button-prev {
          color: white !important;
          z-index: 40;
          text-shadow: 0 0 6px rgba(0,0,0,0.7);
        }
      `}</style>
    </div>
  );
}
