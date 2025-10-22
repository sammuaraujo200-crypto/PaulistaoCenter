// src/components/ui/CarrosselCatalogo.tsx
import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function CarrosselCatalogo() {
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // ---------- CONFIG ----------
  const TOTAL_IMAGES = 70; // você pode aumentar para 100/200/300 sem alterar lógica
  const BULLETS = 5; // sempre mostrará 5 bolinhas
  const imagens = Array.from({ length: TOTAL_IMAGES }, (_, i) => `/catalogo/${i + 1}.jpg`);
  // ----------------------------

  // Agrupamento para mapear o índice do slide para a bolinha (0..BULLETS-1)
  const imagesPerGroup = Math.ceil(imagens.length / BULLETS);
  const groupForIndex = (index: number) => Math.min(Math.floor(index / imagesPerGroup), BULLETS - 1);

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-lg bg-white h-full">
      <Swiper
        modules={[Navigation, Autoplay]}
        onSwiper={(s) => (swiperRef.current = s)}
        onSlideChange={(s) => setActiveIndex(s.realIndex ?? s.activeIndex)}
        spaceBetween={12}
        slidesPerView={1}
        navigation={{
          nextEl: ".carrossel-next",
          prevEl: ".carrossel-prev",
        }}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="w-full"
      >
        {imagens.map((src, idx) => (
          <SwiperSlide key={idx}>
            {/* área da imagem — o gradiente escuro ficará *só dentro* desta área */}
            <div className="relative aspect-[4/3] overflow-hidden bg-white">
              <img
                src={src}
                alt={`Produto ${idx + 1}`}
                className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                loading="lazy"
                onError={(e) => ((e.target as HTMLImageElement).style.display = "none")}
              />

              {/* Gradiente apenas sobre a imagem (z-10) */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10 pointer-events-none" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Botões de navegação — acima do conteúdo (z-30) */}
      <button
        aria-label="Anterior"
        className="carrossel-prev absolute top-1/2 left-3 z-30 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-md"
      >
        ❮
      </button>

      <button
        aria-label="Próximo"
        className="carrossel-next absolute top-1/2 right-3 z-30 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-md"
      >
        ❯
      </button>

      {/* RODAPÉ: branco como o card 'Ver produtos' */}
      <div className="px-6 py-4 bg-white border-t border-white/20 rounded-b-2xl z-20 relative">
        <div className="flex items-center justify-between">
          {/* Texto à esquerda idêntico ao estilo "Ver produtos" (azul) */}
          <button
            className="text-base font-semibold text-primary hover:underline"
            onClick={() => {
              /* aqui você pode abrir /catalogo completo ou scrollTo se quiser */
              // exemplo: window.location.href = "/catalogo";
            }}
          >
            Destaques do Catálogo
          </button>

          {/* bolinhas fixas (BULLETS) — representando a progressão dos slides */}
          <div className="flex items-center gap-3">
            {Array.from({ length: BULLETS }).map((_, i) => {
              const isActive = groupForIndex(activeIndex) === i;
              return (
                <span
                  key={i}
                  className={`w-3 h-3 rounded-full transition-transform duration-300 ${
                    isActive ? "bg-primary scale-110" : "bg-slate-300"
                  }`}
                  aria-hidden
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
