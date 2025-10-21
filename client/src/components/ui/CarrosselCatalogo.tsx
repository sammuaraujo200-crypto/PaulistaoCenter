import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function CarrosselCatalogo() {
  const imagens = Array.from({ length: 70 }, (_, i) => `/assets/Catálogo/${i + 1}.jpg`);

  return (
    <div className="w-full bg-white dark:bg-card rounded-xl border shadow-md overflow-hidden flex flex-col">
      <div className="p-4 flex-1">
        <h2 className="text-lg font-semibold text-secondary mb-3 text-center">
          Destaques do Catálogo
        </h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          autoplay={{ delay: 2500 }}
          pagination={{ clickable: true }}
          loop={true}
        >
          {imagens.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`Produto ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg"
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
