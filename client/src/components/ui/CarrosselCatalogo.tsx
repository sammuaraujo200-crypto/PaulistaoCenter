// src/components/ui/CarrosselCatalogo.tsx
import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function CarrosselCatalogo() {
  const IMAGES_COUNT = 70; // Pode ser 100, 200 etc.
  const EXTENSIONS = ["jpg", "jpeg", "png"];

  // Cria os caminhos possíveis
  const imagens = Array.from({ length: IMAGES_COUNT }, (_, i) =>
    EXTENSIONS.map((ext) => `/catalogo/${i + 1}.${ext}`)
  );

  const BULLETS = 5;
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const imagesPerGroup = Math.ceil(IMAGES_COUNT / BULLETS);
  const groupForIndex = (index: number) => Math.floor(index / imagesPerGroup);

  // Detecta imagem válida
  const getValidImage = (paths: string[]) => {
    for (const path of paths) {
      const img = new Image();
      img.src = path;
      if (img.complete) return path;
    }
    return paths[0];
  };

  // Faz as bolinhas atualizarem automaticamente no loop
  useEffect(() => {
    const swiper = swiperRef.current;
    if (!swiper) return;

    const interval = setInterval(() => {
      if (!swiper?.realIndex) return;
      setActiveIndex(swiper.realIndex);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-white dark:bg-card border rounded-2xl shadow-lg overflow-hidden h-full">
      {/* Carrossel */}
      <Swiper
        modules={[Navigation, Autoplay]}
        onSwiper={(s) => (swiperRef.current = s)}
        onSlideChange={(s) => setActiveIndex(s.realIndex ?? s.activeIndex)}
        spaceBetween={12}
        slidesPerView={1}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="w-full"
      >
        {imagens.map((srcArray, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl bg-white">
              <img
                src={getValidImage(srcArray)}
                alt={`Produto ${idx + 1}`}
                className="w-full h-full object-contain bg-white transition-transform duration-300 hover:scale-105"
                loading="lazy"
                onError={(e) =>
                  ((e.target as HTMLImageElement).style.display = "none")
                }
              />

              {/* Overlay escuro */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />

              {/* Texto acima do overlay */}
              <div className="absolute left-4 bottom-4 text-white z-20">
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

      {/* Botões de navegação */}
      <button className="prev-btn absolute top-1/2 left-2 z-30 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 rounded-full p-2 shadow-md">
        ❮
      </button>
      <button className="next-btn absolute top-1/2 right-2 z-30 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 rounded-full p-2 shadow-md">
        ❯
      </button>

      {/* Paginação personalizada */}
      <div className="px-4 py-4 bg-white relative z-20 border-t-0 shadow-inner">
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
                    const target = Math.min(
                      bIndex * imagesPerGroup,
                      IMAGES_COUNT - 1
                    );
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
  );
}
