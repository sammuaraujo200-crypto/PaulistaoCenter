import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function CarrosselCatalogo() {
  // Cria um array com as imagens de 1 a 70
  const imagens = Array.from({ length: 70 }, (_, i) => `/assets/Catalogo/${i + 1}.jpg`);

  return (
    <section className="w-full py-12 bg-white">
      <h2 className="text-3xl font-bold text-center text-primary mb-6">
        Destaques do Catálogo!
      </h2>
      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={15}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {imagens.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`Produto ${index + 1}`}
                className="w-full h-64 object-cover rounded-xl shadow-md hover:scale-105 transition-transform cursor-pointer"
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
