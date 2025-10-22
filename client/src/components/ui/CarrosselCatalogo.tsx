// src/components/ui/CarrosselCatalogo.tsx
import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function CarrosselCatalogo() {
  // Quantidade total de imagens
  const IMAGES_COUNT = 70;

  // Extensões possíveis
  const EXTENSIONS = ["jpg", "jpeg", "png"];

  // Gera caminhos válidos com base na pasta /public/catalogo/
  const imagens = Array.from({ length: IMAGES_COUNT }, (_, i) =>
    EXTENSIONS.map((ext) => `/catalogo/${i + 1}.${ext}`)
  );

  // Quantidade de "bolinhas" de navegação
  const BULLETS = 5;

  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const imagesPerGroup = Math.ceil(IMAGES_COUNT / BULLETS);
  const groupForIndex = (index: number) => Math.floor(index / imagesPerGroup);

  // Função para retornar o primeiro caminho de imagem válido
  const getValidImage = (paths: string[]) => {
    for (const path of paths) {
      const img = new Image();
      img.src = path;
      if (img.complete) return path;
    }
    return paths[0];
  };

  return (
    <div className="bg-white dark:bg-card border rounded-2xl shadow-lg overflow-hidden h-full">
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
          {imagens.map((srcArray, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl">
                <img
                  src={getValidImage(srcArray)}
                  alt={`Produto ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    // Se a imagem não carregar, oculta o elemento
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />

                {/* overlay escuro como nos outros cards */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                {/* título sobreposto */}
                <div className="absolute left-4 bottom-4 text-white">
                  <h3 className="text-lg md:text-xl font-bold leading-tight">
                    Destaques do Catálogo
                  </h3>
                  <p className="text-xs md:text-sm opacity-90">
                    Produtos em destaque selecionados
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Paginação personalizada */}
        <div className="px-4 py-4 border-t bg-white">
          <div className="flex items-center justify-between">
            <div className="hidden sm:block text-sm font-medium text-secondary">
              Destaques do Catálogo
            </div>

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
                    aria-label={`Ir para grupo ${bIndex + 1}`}
                  />
                );
              })}
            </div>

            <div style={{ width: 32 }} />
          </div>
        </div>
      </div>
    </div>
  );
}
