import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { RxArrowTopRight } from 'react-icons/rx';
import Image from 'next/image';
import { FreeMode, Pagination } from 'swiper';

export const serviceData = [
  {
    image: '/photo1.jpg',
    title: 'Witold Bednarski (dz. Bezpieczeństwa)',
  },
  {
    image: '/photo2.jpg',
    title: 'Witold Nowak (Radca prawny)',
  },
  {
    image: '/photo3.jpg',
    title: 'Damian Grabowski (Radca prawny)',
  },
  {
    image: '/photo5.jpg',
    title: 'Marek Bednarski (ekspert ds. systemów informatycznych)',
  },
  {
    image: '/photo6.jpg',
    title: 'Kazimierz Szymaniec (Radca prawny)',
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 10,  // Меньше пространства между слайдами на мобильных
        },
        640: {
          slidesPerView: 2,  // 2 слайда для устройств с шириной больше 640px
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 3,  // 3 слайда для устройств с шириной больше 768px
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,  // 4 слайда для больших экранов
          spaceBetween: 20,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[280px] sm:h-[340px] xl:h-[380px]"  // Можно уменьшить высоту для маленьких экранов
    >
      {serviceData.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-4 py-6 sm:px-6 sm:py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
            <div className="text-4xl text-accent mb-4 flex justify-center sm:justify-start">
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.title}
                  width={140}
                  height={160}
                  className="rounded-full object-cover"
                />
              ) : (
                item.icon
              )}
            </div>
            <div className="text-lg mb-8 text-center sm:text-left">{item.title}</div>
            <div className="text-3xl text-center sm:text-left">
              <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
