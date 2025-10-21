import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function CarrosselCatalogo() {
  // Array com 70 imagens
  const imagens = Array.from({ length: 70 }, (_, i) => `/assets/Catalogo/${i + 1}.jpg`);

  return (
    <div className="bg-white dark:bg-card border rounded-xl shadow-md overflow-hidden flex flex-col h-full">
      {/* Cabeçalho */}
      <div className="p-4 border-b">
        <h2 className="text-lg md:text-xl font-semibold text-secondary text-center">
          Destaques do Catálogo
        </h2>
      </div>

      {/* Carrossel */}
      <div className="flex-1">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              // mostra apenas 5 bolinhas fixas
              const visibleDots = 5;
              const total = imagens.length;
              const ratio = total / visibleDots;
              const bulletIndex = Math.floor(index / ratio);
              return bulletIndex < visibleDots
                ? `<span class="${className}"></span>`
                : "";
            },
          }}
          className="h-72"
        >
          {imagens.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`Produto ${index + 1}`}
                className="w-full h-72 object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
