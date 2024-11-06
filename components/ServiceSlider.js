// Импорт компонентов Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
// Импорт стилей Swiper
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// Импорт иконок
import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from 'react-icons/rx';

// Импорт компонента Image и модулей Swiper
import Image from 'next/image';
import { FreeMode, Pagination } from 'swiper';

// Данные для сервиса
export const serviceData = [
  {
    image: '/photo1.jpg', // Путь к изображению в папке public
    title: 'Witold Bednarski (dz. Bezpieczeństwa)',
  },
  {
    image: '/photo2.jpg', // Путь к изображению в папке public
    title: 'Witold Nowak (Radca prawny)',
  },
  {
    image: '/photo3.jpg', // Путь к изображению в папке public
    title: 'Damian Grabowski (Radca prawny)',
  },
  {
    image: '/photo5.jpg', // Путь к изображению в папке public
    title: 'Marek Bednarski (ekspert ds. systemów informatycznych)',
  },
  {
    image: '/photo6.jpg', // Путь к изображению в папке public
    title: 'Kazimierz Szymaniec (Radca prawny)',
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
            {/* Проверка и вывод фото или иконки */}
            <div className="text-4xl text-accent mb-4">
              {item.image ? (
                <Image src={item.image} alt={item.title} width={140} height={160} className="rounded-full object-cover" />
              ) : (
                item.icon
              )}
            </div>
            {/* Заголовок */}
            <div className="text-lg mb-8">{item.title}</div>
            {/* Стрелка */}
            <div className="text-3xl">
              <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
