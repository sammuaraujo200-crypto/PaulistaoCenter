import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function CarrosselCatalogo() {
  // Caminhos das imagens — agora apenas 1 a 10
  const imagens = Array.from({ length: 10 }, (_, i) => `/assets/Catálogo/${i + 1}.jpg`);

  return (
    <div className="relative bg-white dark:bg-card border rounded-2xl shadow-md overflow-hidden flex flex-col h-full">
      {/* Imagem / Carrossel */}
      <div className="relative w-full h-64">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={15}
          slidesPerView={1}
          navigation
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
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Texto sobreposto na parte inferior */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
        <h3 className="text-lg md:text-xl font-bold text-white">
          Destaques do Catálogo
        </h3>
        <p className="text-sm text-gray-200">
          Produtos em destaque selecionados
        </p>
      </div>

      {/* Rodapé igual aos outros cards */}
      <div className="p-4 border-t text-center bg-white dark:bg-card">
        <p className="text-sm text-muted-foreground">
          Ver produtos
        </p>
      </div>
    </div>
  );
}
