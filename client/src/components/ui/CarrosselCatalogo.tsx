// src/components/ui/CarrosselCatalogo.tsx
import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function CarrosselCatalogo() {
  // Quantidade total de imagens (ajuste conforme necessário)
  const IMAGES_COUNT = 70;

  // Pasta onde as imagens estão: /catalogo/1.jpg ... /catalogo/70.jpg
  const imagens = Array.from({ length: IMAGES_COUNT }, (_, i) => `/catalogo/${i + 1}.jpg`);

  // Quantas bolinhas visíveis (ex.: 5)
  const BULLETS = 5;
  const imagesPerGroup = Math.ceil(IMAGES_COUNT / BULLETS);
  const groupForIndex = (index: number) => Math.floor(index / imagesPerGroup);

  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden h-full">
      {/* SWIPER */}
      <Swiper
        modules={[Navigation, Autoplay]}
        onSwiper={(s) => (swiperRef.current = s)}
        onSlideChange={(s) => setActiveIndex(s.realIndex ?? s.activeIndex)}
        spaceBetween={12}
        slidesPerView={1}
        navigation // usa botões nativos do Swiper
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="w-full"
      >
        {imagens.map((src, idx) => (
          <SwiperSlide key={idx}>
            {/* Área do slide (proporção igual aos cards: 4/3) */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl bg-white">
              <img
                src={src}
                alt={`Produto ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
                onError={(e) => {
                  // Em caso de falha, oculta a imagem (evita ícone quebrado)
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />

              {/* gradient overlay: fica APENAS sobre a imagem (não invade o rodapé) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent pointer-events-none z-10" />

              {/* título/legenda (z acima do overlay) */}
              <div className="absolute left-4 bottom-4 text-white z-20">
                <h3 className="text-xl md:text-2xl font-bold leading-tight">Destaques do Catálogo</h3>
                <p className="text-xs md:text-sm opacity-90">Produtos em destaque selecionados</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* RODAPÉ (sem borda preta). Mantive bg-white e sem border-top para evitar a linha escura */}
      <div className="px-4 py-3 bg-white rounded-b-2xl">
        <div className="flex items-center justify-between">
          <div className="text-sm font-medium text-secondary">Destaques do Catálogo</div>

          {/* Bullets: cálculo ao vivo com activeIndex (síncrono com o slide) */}
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
                  aria-label={`Ir para grupo ${bIndex + 1}`}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    isActive ? "bg-primary scale-110" : "bg-slate-300"
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
