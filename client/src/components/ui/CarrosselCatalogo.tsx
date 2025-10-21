// src/components/ui/CarrosselCatalogo.tsx
import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function CarrosselCatalogo() {
  // Ajuste aqui se precisar: 10 ou 70 (ou outro)
  const IMAGES_COUNT = 70;

  // Caminho: public/assets/Catalogo/1.jpg ... 70.jpg
  const imagens = Array.from({ length: IMAGES_COUNT }, (_, i) => `/assets/catalogo/${i + 1}.jpg`);

  // Quantidade de "bolinhas" que irão aparecer (fixas, ex.: 5)
  const BULLETS = 5;

  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const imagesPerGroup = Math.ceil(IMAGES_COUNT / BULLETS); // quantas imagens correspondem a cada "bolinha"
  const groupForIndex = (index: number) => Math.floor(index / imagesPerGroup);

  return (
    <div className="bg-white dark:bg-card border rounded-2xl shadow-lg overflow-hidden h-full">
      {/* O card inteiro para casar com o estilo dos outros */}
      <div className="p-0">
        <Swiper
          modules={[Navigation, Autoplay]}
          onSwiper={(s) => (swiperRef.current = s)}
          onSlideChange={(s) => setActiveIndex(s.realIndex ?? s.activeIndex)}
          spaceBetween={12}
          slidesPerView={1}
          navigation
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="w-full"
        >
          {imagens.map((src, idx) => (
            <SwiperSlide key={idx}>
              {/* mesma proporção dos cards: aspect 4/3 */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl">
                <img
                  src={src}
                  alt={`Produto ${idx + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    // Se a imagem não carregar, reduz a opacidade (evita mostrar o ícone quebrado)
                    (e.target as HTMLImageElement).style.opacity = "0.02";
                  }}
                />

                {/* overlay escuro como nos outros cards */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                {/* título no canto inferior esquerdo (igual aos cards) */}
                <div className="absolute left-4 bottom-4 text-white">
                  <h3 className="text-lg md:text-xl font-bold leading-tight">Destaques do Catálogo</h3>
                  <p className="text-xs md:text-sm opacity-90">Produtos em destaque selecionados</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Paginação personalizada (apenas BULLETS pontos) */}
        <div className="px-4 py-4 border-t bg-white">
          <div className="flex items-center justify-between">
            {/* título pequeno à esquerda (opcional) */}
            <div className="hidden sm:block text-sm font-medium text-secondary">Destaques do Catálogo</div>

            {/* bolinhas centralizadas */}
            <div className="flex items-center gap-2">
              {Array.from({ length: BULLETS }).map((_, bIndex) => {
                const isActive = groupForIndex(activeIndex) === bIndex;
                return (
                  <button
                    key={bIndex}
                    onClick={() => {
                      // calcula índice alvo para o grupo (vai pro início do grupo)
                      const target = Math.min(bIndex * imagesPerGroup, IMAGES_COUNT - 1);
                      swiperRef.current?.slideToLoop(target, 400);
                      setActiveIndex(target);
                    }}
                    className={`w-3 h-3 rounded-full transition-all ${isActive ? "bg-primary" : "bg-slate-300"}`}
                    aria-label={`Ir para grupo ${bIndex + 1}`}
                  />
                );
              })}
            </div>

            {/* botão vazio à direita para manter espaçamento como no layout (pode remover) */}
            <div style={{ width: 32 }} />
          </div>
        </div>
      </div>
    </div>
  );
}
