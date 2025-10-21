import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function CarrosselCatalogo() {
  // Agora usa apenas as 10 imagens
  const imagens = Array.from({ length: 10 }, (_, i) => `/assets/Catálogo/${i + 1}.jpg`);

  return (
    <div className="relative bg-white dark:bg-card border rounded-2xl shadow-md overflow-hidden h-[300px] md:h-[320px] flex flex-col">
      {/* Carrossel */}
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop
        className="w-full h-full"
      >
        {imagens.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Produto ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Gradiente e texto igual aos outros cards */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
        <h3 className="text-lg md:text-xl font-bold text-white">Destaques do Catálogo</h3>
        <p className="text-sm text-gray-200">Produtos em destaque selecionados</p>
      </div>
    </div>
  );
}
